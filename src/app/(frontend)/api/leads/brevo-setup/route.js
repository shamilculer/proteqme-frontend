import { NextResponse } from "next/server";

import {
  ensureBrevoAttributes,
  isBrevoConfigured,
  BREVO_CUSTOM_ATTRIBUTES,
} from "@/lib/brevo";

/**
 * One-shot setup: create all Proteq custom contact attributes in Brevo.
 * GET /api/leads/brevo-setup
 */
export async function GET() {
  if (!isBrevoConfigured()) {
    return NextResponse.json(
      {
        success: false,
        message: "BREVO_API_KEY is not configured in .env.local",
      },
      { status: 503 },
    );
  }

  try {
    const result = await ensureBrevoAttributes();

    return NextResponse.json({
      success: true,
      message:
        "Brevo attributes are ready. Submit a form with a new email, then open the contact and expand “More information”.",
      expectedAttributes: BREVO_CUSTOM_ATTRIBUTES.map((a) => a.name),
      ...result,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to set up Brevo attributes";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
