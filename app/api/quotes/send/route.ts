import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendQuoteRequestToClient, sendQuoteRequestToAdmin } from "@/lib/email/client";

const quoteItemSchema = z.object({
  _id: z.string(),
  slug: z.string(),
  name: z.string(),
  category: z.string(),
  quantity: z.number().min(1),
  dayRate: z.number().optional(),
  description: z.string().optional(),
});

const sendQuoteSchema = z.object({
  clientName: z.string().min(2, "Name must be at least 2 characters"),
  clientEmail: z.string().email("Invalid email address"),
  eventName: z.string().min(2, "Event name must be at least 2 characters"),
  eventDate: z.string().min(1, "Event date is required"),
  eventLocation: z.string().min(2, "Event location must be at least 2 characters"),
  additionalNotes: z.string().optional(),
  items: z.array(quoteItemSchema).min(1, "At least one item is required"),
  totalEstimate: z.number(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = sendQuoteSchema.parse(body);

    // Send email to client
    const clientEmailResult = await sendQuoteRequestToClient({
      clientName: validatedData.clientName,
      clientEmail: validatedData.clientEmail,
      eventName: validatedData.eventName,
      eventDate: validatedData.eventDate,
      eventLocation: validatedData.eventLocation,
      additionalNotes: validatedData.additionalNotes,
      items: validatedData.items,
      totalEstimate: validatedData.totalEstimate,
    });

    if (!clientEmailResult.success) {
      console.error("Failed to send client email:", clientEmailResult.error);
      return NextResponse.json(
        { error: "Failed to send confirmation email to client" },
        { status: 500 }
      );
    }

    // Send notification to admin
    const adminEmailResult = await sendQuoteRequestToAdmin({
      clientName: validatedData.clientName,
      clientEmail: validatedData.clientEmail,
      eventName: validatedData.eventName,
      eventDate: validatedData.eventDate,
      eventLocation: validatedData.eventLocation,
      additionalNotes: validatedData.additionalNotes,
      items: validatedData.items,
      totalEstimate: validatedData.totalEstimate,
    });

    if (!adminEmailResult.success) {
      console.error("Failed to send admin email:", adminEmailResult.error);
      // Don't fail the request if admin email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Quote request sent successfully" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote send error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Invalid request data", 
          details: error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
