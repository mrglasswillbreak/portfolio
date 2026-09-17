import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
} from "@react-email/components";
import { site } from "@/lib/site";
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
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#101210",
          fontFamily: "Arial, sans-serif",
          padding: "30px 15px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#1b2017",
            padding: "32px",
            color: "#eeefe7",
            maxWidth: "580px",
          }}
        >
          <Text style={{ color: "#d3ef93", fontSize: "13px" }}>
            MUHAMMED ABDULHADI
          </Text>
          <Text style={{ fontSize: "25px" }}>
            Thanks for reaching out, {userName}.
          </Text>
          <Text style={{ lineHeight: "1.8" }}>
            Your message has been received. I’ll get back to you as soon as I
            can.
          </Text>
          <Text>
            <strong>{contactReason}</strong>
          </Text>
          <Text
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
              color: "#bbc3b0",
            }}
          >
            {userMessage}
          </Text>
          <Text style={{ marginTop: "28px" }}>
            Muhammed Abdulhadi
            <br />
            <Link href={site.url} style={{ color: "#d3ef93" }}>
              View my portfolio
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
