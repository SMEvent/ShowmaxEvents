import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface InquiryEmailData {
  clientName: string;
  clientEmail: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  equipmentRequested: string;
  additionalNotes?: string;
}

export async function sendInquiryConfirmation(data: InquiryEmailData) {
  try {
    const { data: result, error } = await resend.emails.send({
      from: "ShowMax Events <noreply@showmaxevents.com>",
      to: [data.clientEmail],
      subject: "Inquiry Received - ShowMax Events",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Thank You for Your Inquiry</h1>
          <p>Hi ${data.clientName},</p>
          <p>We've received your equipment rental inquiry and will review it shortly. Here's a summary:</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Event Details</h2>
            <p><strong>Event Name:</strong> ${data.eventName}</p>
            <p><strong>Event Date:</strong> ${data.eventDate}</p>
            <p><strong>Location:</strong> ${data.eventLocation}</p>
            <p><strong>Equipment Requested:</strong><br>${data.equipmentRequested}</p>
            ${data.additionalNotes ? `<p><strong>Additional Notes:</strong><br>${data.additionalNotes}</p>` : ""}
          </div>
          
          <p>Our team will review your request and get back to you within 24 hours with a detailed quote and availability information.</p>
          
          <p>If you have any questions in the meantime, feel free to contact us at contact@showmaxevents.com or (604) 555-0123.</p>
          
          <p>Best regards,<br>
          The ShowMax Events Team</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            ShowMax Events - Professional AV Rental<br>
            Vancouver, BC<br>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}">www.showmaxevents.com</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send inquiry confirmation:", error);
      return { success: false, error };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send inquiry confirmation:", error);
    return { success: false, error };
  }
}

export async function sendInquiryNotificationToAdmin(data: InquiryEmailData) {
  const adminEmail = process.env.ADMIN_EMAIL;
  
  if (!adminEmail) {
    console.error("Admin email not configured");
    return { success: false, error: "Admin email not configured" };
  }

  try {
    const { data: result, error } = await resend.emails.send({
      from: "ShowMax Events <noreply@showmaxevents.com>",
      to: [adminEmail],
      subject: `New Inquiry: ${data.eventName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">New Equipment Rental Inquiry</h1>
          <p>A new inquiry has been submitted and requires your attention.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Client Information</h2>
            <p><strong>Name:</strong> ${data.clientName}</p>
            <p><strong>Email:</strong> ${data.clientEmail}</p>
            
            <h2>Event Details</h2>
            <p><strong>Event Name:</strong> ${data.eventName}</p>
            <p><strong>Event Date:</strong> ${data.eventDate}</p>
            <p><strong>Location:</strong> ${data.eventLocation}</p>
            <p><strong>Equipment Requested:</strong><br>${data.equipmentRequested}</p>
            ${data.additionalNotes ? `<p><strong>Additional Notes:</strong><br>${data.additionalNotes}</p>` : ""}
          </div>
          
          <p>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/inquiries" 
               style="display: inline-block; background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">
              View in Admin Dashboard
            </a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send admin notification:", error);
      return { success: false, error };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send admin notification:", error);
    return { success: false, error };
  }
}

export async function sendQuoteSavedNotification(
  clientEmail: string,
  quoteName: string
) {
  try {
    const { data: result, error } = await resend.emails.send({
      from: "ShowMax Events <noreply@showmaxevents.com>",
      to: [clientEmail],
      subject: "Quote Saved - ShowMax Events",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Quote Saved Successfully</h1>
          <p>Your equipment quote "${quoteName}" has been saved to your account.</p>
          
          <p>You can view and manage your saved quotes anytime from your dashboard.</p>
          
          <p>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/quotes" 
               style="display: inline-block; background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">
              View Saved Quotes
            </a>
          </p>
          
          <p>Ready to proceed? Create an inquiry to request availability and pricing for your saved equipment.</p>
          
          <p>Best regards,<br>
          The ShowMax Events Team</p>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send quote saved notification:", error);
      return { success: false, error };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send quote saved notification:", error);
    return { success: false, error };
  }
}

