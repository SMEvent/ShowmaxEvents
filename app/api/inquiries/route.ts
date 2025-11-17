import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const inquirySchema = z.object({
  eventName: z.string().min(2),
  eventDate: z.string(),
  eventLocation: z.string().min(2),
  equipmentRequested: z.string().min(10),
  additionalNotes: z.string().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user role
    const { data: userData } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single();

    let query = supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    // If not admin, only show own inquiries
    if (userData?.role !== "admin") {
      query = query.eq("user_id", user.id);
    }

    const { data: inquiries, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ inquiries });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = inquirySchema.parse(body);

    const { data: inquiry, error } = await supabase
      .from("inquiries")
      .insert({
        user_id: user.id,
        event_name: validatedData.eventName,
        event_date: validatedData.eventDate,
        event_location: validatedData.eventLocation,
        equipment_requested: validatedData.equipmentRequested,
        additional_notes: validatedData.additionalNotes || null,
        status: "pending",
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // TODO: Send email notification to admin
    // await sendInquiryNotification(inquiry);

    return NextResponse.json({ inquiry }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

