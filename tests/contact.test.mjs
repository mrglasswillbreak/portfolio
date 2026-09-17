import test from "node:test";
import assert from "node:assert/strict";
import { createContactHandler } from "../src/lib/contact.ts";
const valid = {
  senderName: "Alex Example",
  senderEmail: "alex@example.com",
  reasonToContact: "Project enquiry",
  senderMsg: "I would like to discuss a website project.",
};
const request = (body) =>
  new Request("http://localhost/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
test("valid message is trimmed, delivered once, and acknowledged", async () => {
  const deliveries = [];
  const handler = createContactHandler({
    configured: () => true,
    verifyEmail: async () => true,
    deliver: async (m) => deliveries.push(m),
  });
  const result = await handler(
    request({ ...valid, senderName: "  Alex Example  " }),
  );
  assert.equal(result.status, 200);
  assert.equal(deliveries.length, 1);
  assert.equal(deliveries[0].senderName, valid.senderName);
});
test("invalid bodies never reach verification or delivery", async () => {
  let called = false;
  const handler = createContactHandler({
    configured: () => true,
    verifyEmail: async () => {
      called = true;
      return true;
    },
    deliver: async () => {
      called = true;
    },
  });
  for (const body of [
    null,
    [],
    {},
    { ...valid, senderEmail: "not-an-email" },
    { ...valid, senderName: " " },
    { ...valid, senderMsg: "short" },
    { ...valid, senderMsg: "x".repeat(5001) },
    { ...valid, senderName: "Name\r\nBcc: other@example.com" },
  ]) {
    assert.equal((await handler(request(body))).status, 400);
  }
  assert.equal(
    (
      await handler(
        new Request("http://localhost/api/send", { method: "POST", body: "{" }),
      )
    ).status,
    400,
  );
  assert.equal(called, false);
});
test("missing email configuration returns an honest direct-email fallback", async () => {
  const handler = createContactHandler({
    configured: () => false,
    deliver: async () => {
      throw new Error("must not deliver");
    },
  });
  const result = await handler(request(valid));
  assert.equal(result.status, 503);
  assert.match((await result.json()).error, /mrglasswillbreak@gmail.com/);
});
test("verification failure and unavailable verification are distinct", async () => {
  for (const [verifyEmail, status] of [
    [async () => false, 400],
    [
      async () => {
        throw new Error("offline");
      },
      503,
    ],
  ]) {
    const handler = createContactHandler({
      configured: () => true,
      verifyEmail,
      deliver: async () => {
        throw new Error("must not deliver");
      },
    });
    assert.equal((await handler(request(valid))).status, status);
  }
});
test("delivery errors never report success or leak provider details", async () => {
  const handler = createContactHandler({
    configured: () => true,
    deliver: async () => {
      throw new Error("private provider detail");
    },
  });
  const result = await handler(request(valid));
  assert.equal(result.status, 502);
  assert.doesNotMatch(
    JSON.stringify(await result.json()),
    /private provider detail/,
  );
});
