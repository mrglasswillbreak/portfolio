import validator from "validator";

export interface ContactMessage {
  senderName: string;
  senderEmail: string;
  reasonToContact: string;
  senderMsg: string;
}
export interface ContactDependencies {
  configured: () => boolean;
  verifyEmail?: (email: string) => Promise<boolean>;
  deliver: (message: ContactMessage) => Promise<void>;
}
const response = (body: object, status: number) =>
  Response.json(body, { status });

export function createContactHandler(deps: ContactDependencies) {
  return async (request: Request): Promise<Response> => {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return response({ error: "Please send a valid message." }, 400);
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return response({ error: "Please complete all the fields." }, 400);
    }
    const values = body as Record<string, unknown>;
    const fields = [
      "senderName",
      "senderEmail",
      "reasonToContact",
      "senderMsg",
    ] as const;
    if (
      fields.some(
        (field) =>
          typeof values[field] !== "string" ||
          !(values[field] as string).trim(),
      )
    ) {
      return response({ error: "Please complete all the fields." }, 400);
    }
    const message = Object.fromEntries(
      fields.map((field) => [field, (values[field] as string).trim()]),
    ) as unknown as ContactMessage;
    if (
      message.senderName.length > 100 ||
      message.senderEmail.length > 254 ||
      message.reasonToContact.length > 100 ||
      message.senderMsg.length < 10 ||
      message.senderMsg.length > 5000 ||
      /[\r\n]/.test(
        message.senderName + message.senderEmail + message.reasonToContact,
      )
    ) {
      return response(
        {
          error:
            "Please check your details and write a message between 10 and 5,000 characters.",
        },
        400,
      );
    }
    if (!validator.isEmail(message.senderEmail)) {
      return response({ error: "Please enter a valid email address." }, 400);
    }
    if (!deps.configured()) {
      return response(
        {
          error:
            "The contact form is temporarily unavailable. Please email mrglasswillbreak@gmail.com directly.",
        },
        503,
      );
    }
    if (deps.verifyEmail) {
      try {
        if (!(await deps.verifyEmail(message.senderEmail)))
          return response(
            {
              error:
                "That email address could not be verified. Please use another address or email me directly.",
            },
            400,
          );
      } catch {
        return response(
          {
            error:
              "Email verification is temporarily unavailable. Please try again or email me directly.",
          },
          503,
        );
      }
    }
    try {
      await deps.deliver(message);
      return response({ message: "Your message has been received." }, 200);
    } catch {
      return response(
        {
          error:
            "Your message couldn’t be sent. Please try again or email me directly.",
        },
        502,
      );
    }
  };
}
