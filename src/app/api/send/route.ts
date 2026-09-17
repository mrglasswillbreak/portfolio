import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { createContactHandler } from "@/lib/contact";
import { site } from "@/lib/site";
import { EmailTemplate } from "@/components/template/Email";
import { OwnerEmailTemplate } from "@/components/template/OwnerEmail";

export const runtime = "nodejs";
export const POST = createContactHandler({
  configured: () =>
    Boolean(process.env.email_from && process.env.email_password),
  verifyEmail: process.env.QEV_API_KEY
    ? async (email) => {
        const params = new URLSearchParams({
          email,
          apikey: process.env.QEV_API_KEY!,
        });
        const response = await fetch(
          "https://api.quickemailverification.com/v1/verify?" +
            params.toString(),
          { signal: AbortSignal.timeout(7000), cache: "no-store" },
        );
        if (!response.ok) throw new Error("Verification unavailable");
        return (await response.json()).result === "valid";
      }
    : undefined,
  deliver: async ({ senderName, senderEmail, reasonToContact, senderMsg }) => {
    const transport = nodemailer.createTransport({
      service: "gmail",
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 10000,
      auth: { user: process.env.email_from, pass: process.env.email_password },
    });
    const html = await render(
      OwnerEmailTemplate({
        senderName,
        senderEmail,
        contactReason: reasonToContact,
        userMessage: senderMsg,
      }),
    );
    await transport.sendMail({
      from: { name: "Portfolio contact", address: process.env.email_from! },
      to: site.email,
      replyTo: { name: senderName, address: senderEmail },
      subject: reasonToContact + " — " + senderName,
      html,
      text: [senderName, senderEmail, reasonToContact, senderMsg].join("\n\n"),
    });
    // The owner's accepted message is authoritative; a failed courtesy reply must not invite duplicate submissions.
    try {
      await transport.sendMail({
        from: { name: site.name, address: process.env.email_from! },
        to: senderEmail,
        replyTo: site.email,
        subject: "Thanks for reaching out, " + senderName,
        html: await render(
          EmailTemplate({
            userName: senderName,
            contactReason: reasonToContact,
            userMessage: senderMsg,
          }),
        ),
      });
    } catch {
      console.error("Contact acknowledgement could not be delivered.");
    } finally {
      transport.close();
    }
  },
});
