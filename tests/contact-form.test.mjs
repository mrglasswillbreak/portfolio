import test from "node:test";
import assert from "node:assert/strict";
import { Window } from "happy-dom";
import React, { act } from "react";
const window = new Window({ url: "http://localhost:3007" });
globalThis.window = window;
globalThis.document = window.document;
globalThis.FormData = window.FormData;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const { createRoot } = await import("react-dom/client");
const { ContactFormCard } =
  await import("../src/components/Cards/ContactFormCard.tsx");
const originalFetch = globalThis.fetch;
async function mount() {
  const host = document.createElement("div");
  document.body.append(host);
  const root = createRoot(host);
  await act(async () => root.render(React.createElement(ContactFormCard)));
  host.querySelector('[name="senderName"]').value = "Alex Example";
  host.querySelector('[name="senderEmail"]').value = "alex@example.com";
  host.querySelector('[name="senderMsg"]').value =
    "A website project I would like to discuss.";
  return {
    host,
    async cleanup() {
      await act(async () => root.unmount());
      host.remove();
      globalThis.fetch = originalFetch;
    },
  };
}
const submit = (host) =>
  host
    .querySelector("form")
    .dispatchEvent(
      new window.Event("submit", { bubbles: true, cancelable: true }),
    );
test("form exposes pending status, sends the existing field contract, and clears on success", async () => {
  const mounted = await mount();
  let finish, payload;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "/api/send");
    payload = JSON.parse(options.body);
    return await new Promise((resolve) => {
      finish = resolve;
    });
  };
  try {
    await act(async () => submit(mounted.host));
    assert.equal(
      mounted.host.querySelector('button[type="submit"]').disabled,
      true,
    );
    assert.equal(
      mounted.host.querySelector("form").getAttribute("aria-busy"),
      "true",
    );
    assert.match(mounted.host.textContent, /Sending/);
    assert.deepEqual(
      Object.keys(payload).sort(),
      ["reasonToContact", "senderEmail", "senderMsg", "senderName"].sort(),
    );
    await act(async () => finish(Response.json({ message: "received" })));
    assert.match(
      mounted.host.querySelector('[role="status"]').textContent,
      /Message received/,
    );
    assert.equal(mounted.host.querySelector('[name="senderName"]').value, "");
    assert.equal(
      mounted.host.querySelector('button[type="submit"]').disabled,
      false,
    );
  } finally {
    await mounted.cleanup();
  }
});
test("delivery failure keeps the message and offers an accessible direct-email fallback", async () => {
  const mounted = await mount();
  globalThis.fetch = async () =>
    Response.json({ error: "Please try again." }, { status: 503 });
  try {
    await act(async () => submit(mounted.host));
    assert.match(
      mounted.host.querySelector('[role="alert"]').textContent,
      /Please try again/,
    );
    assert.equal(
      mounted.host.querySelector('[name="senderName"]').value,
      "Alex Example",
    );
    assert.equal(
      mounted.host.querySelector("a").getAttribute("href"),
      "mailto:mrglasswillbreak@gmail.com",
    );
    assert.equal(
      mounted.host.querySelector('button[type="submit"]').disabled,
      false,
    );
    globalThis.fetch = async () => Response.json({ message: "received" });
    await act(async () => submit(mounted.host));
    assert.match(
      mounted.host.querySelector('[role="status"]').textContent,
      /Message received/,
    );
  } finally {
    await mounted.cleanup();
  }
});
test("a network failure leaves the form retryable", async () => {
  const mounted = await mount();
  globalThis.fetch = async () => {
    throw new TypeError("Network unavailable");
  };
  try {
    await act(async () => submit(mounted.host));
    assert.ok(mounted.host.querySelector('[role="alert"]'));
    assert.equal(
      mounted.host.querySelector('button[type="submit"]').disabled,
      false,
    );
    assert.match(
      mounted.host.querySelector('[name="senderMsg"]').value,
      /website project/,
    );
  } finally {
    await mounted.cleanup();
  }
});
