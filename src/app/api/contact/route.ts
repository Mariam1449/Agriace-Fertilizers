import { NextResponse } from "next/server";
import { z } from "zod";

import { sendContactEmail } from "@/lib/contact/contact-email";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().transform((value) => value.toLowerCase()),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const sent = await sendContactEmail(parsed.data);
    if (!sent) {
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Thanks for contacting us. We will get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact] submit.failed", { error });
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again." },
      { status: 500 }
    );
  }
}
