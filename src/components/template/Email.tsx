import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
  Row,
  Column,
  Link,
} from "@react-email/components";

import { selfData } from "@/constant";

interface EmailTemplateProps {
  userName: string;
  contactReason: string;
  userMessage: string;
}

export function EmailTemplate({
  userName,
  contactReason,
  userMessage,
}: EmailTemplateProps) {
  const socials = [
    {
      name: "GitHub",
      url: `https://github.com/${selfData.socials_username.github}`,
      icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
    {
      name: "LinkedIn",
      url: `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
    },
    {
      name: "LeetCode",
      url: `https://leetcode.com/${selfData.socials_username.leetcode}`,
      icon: "https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png",
    },
    {
      name: "Instagram",
      url: `https://instagram.com/${selfData.socials_username.instagram}`,
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    },
    {
      name: "X",
      url: `https://x.com/${selfData.socials_username.twitter}`,
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968830.png",
    },
  ];

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Row>
              <Column style={{ width: "40px" }}>
                <Img
                  src="https://raw.githubusercontent.com/mrglasswillbreak/Profile/refs/heads/master/public/images/logo.png"
                  alt="AN"
                  width="40"
                  height="40"
                />
              </Column>
              <Column>
                <Text style={brandText}>Muhammed Abdulhadi</Text>
              </Column>
            </Row>
          </Section>

          <Section>
            <Text style={heading}>Hey {userName}! 🚀</Text>
            <Text style={text}>
              Thanks a bunch for reaching out! 🎉 <br />
              Your message just landed safely in my inbox, and I&apos;ve already
              notified the caffeine team (aka me) to get on it ASAP.
            </Text>

            <Text style={text}>
              Here&apos;s a quick recap of what you sent, in case you forgot (or
              your cat walked across the keyboard):
            </Text>

            <Text style={label}>
              📌 Reason to Contact: <strong>{contactReason}</strong>
            </Text>

            <Text style={label}>💬 Message:</Text>
            <pre style={codeBlock}>{userMessage}</pre>

            <Text style={text}>
              I&apos;ll get back to you soon probably sooner than your food
              delivery app says &quot;just 10 more minutes.&quot; 🍕
            </Text>

            <Section style={socialSection}>
              <table style={socialTable}>
                <tbody>
                  <tr>
                    {socials.map((social) => (
                      <td key={social.name} style={socialIconCol}>
                        <Link href={social.url}>
                          <Img
                            src={social.icon}
                            alt={social.name}
                            width="28"
                            height="28"
                            style={socialIcon}
                          />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </Section>

            <Text style={signature}>— Muhammed Abdulhadi 👨🏽‍💻</Text>
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

const header = {
  marginBottom: "20px",
};

const brandText = {
  fontSize: "17px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 0 8px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "700",
  marginBottom: "14px",
  color: "#ffffff",
};

const text = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#e4e4e7",
  marginBottom: "12px",
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

const socialSection = {
  marginTop: "18px",
  marginBottom: "14px",
};

const socialTable = {
  margin: "0 auto",
};

const socialIconCol = {
  padding: "0 6px",
};

const socialIcon = {
  borderRadius: "8px",
  backgroundColor: "#27272a",
  padding: "4px",
};

const signature = {
  marginTop: "14px",
  fontSize: "14px",
  color: "#a1a1aa",
};
