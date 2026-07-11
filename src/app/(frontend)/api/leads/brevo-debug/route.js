import { NextResponse } from "next/server";

import {
  BREVO_CUSTOM_ATTRIBUTES,
  ensureBrevoAttributes,
  inspectBrevoContact,
  isBrevoConfigured,
  listBrevoAttributes,
} from "@/lib/brevo";

/**
 * Debug Brevo attribute setup + what is stored on a contact.
 *
 * Examples:
 *   /api/leads/brevo-debug
 *   /api/leads/brevo-debug?email=you@example.com
 */
export async function GET(request) {
  if (!isBrevoConfigured()) {
    return NextResponse.json(
      {
        success: false,
        message: "BREVO_API_KEY is not configured in .env.local",
      },
      { status: 503 },
    );
  }

  const email = request.nextUrl.searchParams.get("email")?.trim() || "";

  try {
    const ensure = await ensureBrevoAttributes();
    const listed = await listBrevoAttributes();
    const expected = BREVO_CUSTOM_ATTRIBUTES.map((a) => a.name);
    const present = new Set(listed.names || []);
    const missing = expected.filter((name) => !present.has(name));

    const contact = email ? await inspectBrevoContact(email) : null;

    return NextResponse.json({
      success: true,
      howToReadThis: {
        settingsPage:
          "Contacts → Settings → Normal Attributes only lists field definitions.",
        contactPage:
          "Open a contact → Information → More information to see values. Empty custom fields often stay hidden until they have a value.",
        nextStep: email
          ? "Check contact.attributeKeys below. You want LEAD_TYPE, LEAD_SOURCE, COMPANY, PHONE, LEAD_FORM_JSON, etc."
          : "Re-run with ?email=the-contact@email.com after submitting a form.",
      },
      expectedAttributes: expected,
      missingAttributesInBrevo: missing,
      ensure,
      brevoAttributeNames: listed.names || [],
      contact,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Brevo debug failed";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
