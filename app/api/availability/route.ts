import { NextRequest, NextResponse } from "next/server";
import { checkAvailability } from "@/lib/flex/client";
import { z } from "zod";

const availabilitySchema = z.object({
  itemId: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { itemId, startDate, endDate } = availabilitySchema.parse(body);

    const availability = await checkAvailability(itemId, {
      start: startDate,
      end: endDate,
    });

    return NextResponse.json({ availability });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to check availability" },
      { status: 500 }
    );
  }
}

