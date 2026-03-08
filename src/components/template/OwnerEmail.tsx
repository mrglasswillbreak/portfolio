import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
} from "@react-email/components";

interface OwnerEmailTemplateProps {
  senderName: string;
  senderEmail: string;
  contactReason: string;
  userMessage: string;
}

export function OwnerEmailTemplate({
  senderName,
  senderEmail,
  contactReason,
  userMessage,
}: OwnerEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={heading}>📬 New Contact Form Submission</Text>

            <Text style={label}>
              👤 Name: <strong>{senderName}</strong>
            </Text>
            <Text style={label}>
              📧 Email: <strong>{senderEmail}</strong>
            </Text>
            <Text style={label}>
              📌 Reason: <strong>{contactReason}</strong>
            </Text>

            <Text style={label}>💬 Message:</Text>
            <pre style={codeBlock}>{userMessage}</pre>

            <Text style={footer}>
              Reply directly to this email to respond to {senderName}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#0f0f11",
  margin: 0,
  padding: "20px 0",
  fontFamily: "Inter, Arial, sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#151518",
  border: "1px solid #2c2c31",
  borderRadius: "14px",
  padding: "24px",
  color: "#f4f4f5",
};

const heading = {
  fontSize: "22px",
  fontWeight: "700",
  marginBottom: "18px",
  color: "#ffffff",
};

const label = {
  fontSize: "14px",
  marginBottom: "8px",
  color: "#d4d4d8",
};

const codeBlock = {
  backgroundColor: "#1e1e22",
  borderRadius: "8px",
  padding: "12px",
  fontSize: "13px",
  color: "#f9fafb",
  whiteSpace: "pre-wrap" as const,
  wordBreak: "break-word" as const,
  border: "1px solid #3f3f46",
};

const footer = {
  marginTop: "18px",
  fontSize: "13px",
  color: "#71717a",
};
