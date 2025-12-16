import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendSimpleInquiryEmail, sendEventBookingEmail } from "@/lib/email/client";

const simpleInquirySchema = z.object({
  type: z.literal("simple"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please provide more details"),
});

const eventBookingSchema = z.object({
  type: z.literal("event-booking"),
  // Contact Info
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  
  // Production Schedule
  eventDate: z.string().min(1, "Event date is required"),
  venueName: z.string().min(2, "Venue name is required"),
  setupDateTime: z.string().optional(),
  rehearsalDateTime: z.string().optional(),
  showDateTime: z.string().optional(),
  strikeDateTime: z.string().optional(),
  
  // Floor Plan
  hasFloorPlan: z.enum(["yes", "no", "not-sure"]),
  floorPlanDescription: z.string().optional(),
  
  // Show Design
  themeCreativeElements: z.string().optional(),
  specialFeatures: z.string().optional(),
  
  // Technical Requirements
  audioNeeds: z.string().optional(),
  lightingNeeds: z.string().optional(),
  videoNeeds: z.string().optional(),
  ledWallNeeds: z.string().optional(),
  camerasNeeds: z.string().optional(),
  stagingNeeds: z.string().optional(),
  draperyNeeds: z.string().optional(),
  powerNeeds: z.string().optional(),
  riggingNeeds: z.string().optional(),
  additionalItems: z.string().optional(),
  
  // Budget
  budgetRange: z.string().optional(),
  budgetNotes: z.string().optional(),
  
  // Referrals
  needVenueReferral: z.boolean().optional(),
  needDecorReferral: z.boolean().optional(),
  needFurnitureReferral: z.boolean().optional(),
  needCateringReferral: z.boolean().optional(),
  needEventManagementReferral: z.boolean().optional(),
  needSecurityReferral: z.boolean().optional(),
});

const contactFormSchema = z.discriminatedUnion("type", [
  simpleInquirySchema,
  eventBookingSchema,
]);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    if (validatedData.type === "simple") {
      // Send simple inquiry emails
      const clientEmailResult = await sendSimpleInquiryEmail({
        clientName: validatedData.name,
        clientEmail: validatedData.email,
        clientPhone: validatedData.phone,
        company: validatedData.company,
        message: validatedData.message,
      });

      if (!clientEmailResult.success) {
        console.error("Failed to send simple inquiry emails:", clientEmailResult.error);
        return NextResponse.json(
          { error: "Failed to send inquiry. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { 
          success: true, 
          message: "Inquiry submitted successfully" 
        },
        { status: 200 }
      );
    } else {
      // Send event booking emails
      const clientEmailResult = await sendEventBookingEmail({
        clientName: validatedData.name,
        clientEmail: validatedData.email,
        clientPhone: validatedData.phone,
        company: validatedData.company,
        eventDate: validatedData.eventDate,
        venueName: validatedData.venueName,
        setupDateTime: validatedData.setupDateTime,
        rehearsalDateTime: validatedData.rehearsalDateTime,
        showDateTime: validatedData.showDateTime,
        strikeDateTime: validatedData.strikeDateTime,
        hasFloorPlan: validatedData.hasFloorPlan,
        floorPlanDescription: validatedData.floorPlanDescription,
        themeCreativeElements: validatedData.themeCreativeElements,
        specialFeatures: validatedData.specialFeatures,
        audioNeeds: validatedData.audioNeeds,
        lightingNeeds: validatedData.lightingNeeds,
        videoNeeds: validatedData.videoNeeds,
        ledWallNeeds: validatedData.ledWallNeeds,
        camerasNeeds: validatedData.camerasNeeds,
        stagingNeeds: validatedData.stagingNeeds,
        draperyNeeds: validatedData.draperyNeeds,
        powerNeeds: validatedData.powerNeeds,
        riggingNeeds: validatedData.riggingNeeds,
        additionalItems: validatedData.additionalItems,
        budgetRange: validatedData.budgetRange,
        budgetNotes: validatedData.budgetNotes,
        needVenueReferral: validatedData.needVenueReferral,
        needDecorReferral: validatedData.needDecorReferral,
        needFurnitureReferral: validatedData.needFurnitureReferral,
        needCateringReferral: validatedData.needCateringReferral,
        needEventManagementReferral: validatedData.needEventManagementReferral,
        needSecurityReferral: validatedData.needSecurityReferral,
      });

      if (!clientEmailResult.success) {
        console.error("Failed to send event booking emails:", clientEmailResult.error);
        return NextResponse.json(
          { error: "Failed to submit event booking. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { 
          success: true, 
          message: "Event booking request submitted successfully" 
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    
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
