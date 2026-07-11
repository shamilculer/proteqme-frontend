import { NextResponse } from "next/server";

import { processLeadSubmission } from "@/lib/leads/processLead";
import { partialLeadSchema } from "@/lib/leads/schemas";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = partialLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid submission", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const email =
      parsed.data.form?.email ||
      parsed.data.form?.Email ||
      null;

    if (!email) {
      return NextResponse.json({
        success: true,
        partial: true,
        brevoSynced: false,
        message: "Partial lead accepted (email not yet provided)",
      });
    }

    const lead = await processLeadSubmission(parsed.data);

    return NextResponse.json({
      success: true,
      partial: true,
      brevoSynced: Boolean(lead.brevoSync?.success),
      email: lead.brevo?.email,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to save lead";

    return NextResponse.json({ message }, { status: 500 });
  }
}
