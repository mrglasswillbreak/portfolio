"use client";
import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/lib/site";
export function ContactFormCard() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
        signal: AbortSignal.timeout(60000),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.error ||
            "Your message couldn’t be sent. Please try again or email me directly.",
        );
      setStatus("success");
      setMessage(
        "Message received. Thanks for reaching out — I’ll be in touch.",
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.name !== "TimeoutError"
          ? error.message
          : "The connection timed out. Please try again or email me directly.",
      );
    }
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      aria-busy={status === "sending"}
    >
      <div className="form-row">
        <label>
          Your name
          <input
            name="senderName"
            autoComplete="name"
            placeholder="Alex Morgan"
            required
            maxLength={100}
          />
        </label>
        <label>
          Email address
          <input
            name="senderEmail"
            type="email"
            autoComplete="email"
            placeholder="alex@company.com"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label>
        What brings you here?
        <select name="reasonToContact" defaultValue="Project enquiry">
          <option>Project enquiry</option>
          <option>Job opportunity</option>
          <option>Collaboration</option>
          <option>Just saying hello</option>
        </select>
      </label>
      <label>
        A little about it
        <textarea
          name="senderMsg"
          placeholder="The idea, the opportunity, or just a hello…"
          rows={4}
          required
          minLength={10}
          maxLength={5000}
        />
      </label>
      <div className="form-footer">
        <span>Good things start with a conversation.</span>
        <button
          type="submit"
          className="button button-primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <Arrow diagonal />
        </button>
      </div>
      <div
        className={"form-feedback " + status}
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {message}
        {status === "error" && (
          <>
            {" "}
            <a href={"mailto:" + site.email}>
              Email me directly <Arrow diagonal />
            </a>
          </>
        )}
      </div>
    </form>
  );
}
