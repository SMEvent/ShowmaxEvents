import { Resend } from "resend";

// Lazy initialization to avoid build-time errors
let resendInstance: Resend | null = null;

function getResendClient(): Resend {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

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
    const resend = getResendClient();
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
    const resend = getResendClient();
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
    const resend = getResendClient();
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

interface QuoteItem {
  _id: string;
  slug: string;
  name: string;
  category: string;
  quantity: number;
  dayRate?: number;
  description?: string;
}

interface QuoteRequestData {
  clientName: string;
  clientEmail: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  additionalNotes?: string;
  items: QuoteItem[];
  totalEstimate: number;
}

export async function sendQuoteRequestToClient(data: QuoteRequestData) {
  try {
    // Generate equipment list HTML
    const equipmentListHtml = data.items
      .map(
        (item) => `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eee;">
            <strong>${item.name}</strong><br>
            <span style="color: #666; font-size: 12px;">${item.category}</span>
            ${item.description ? `<br><span style="color: #999; font-size: 11px;">${item.description}</span>` : ''}
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center; font-weight: bold;">
            ${item.quantity}
          </td>
        </tr>
      `
      )
      .join("");

    const resend = getResendClient();
    const { data: result, error } = await resend.emails.send({
      from: "ShowMax Events <noreply@showmaxevents.com>",
      to: [data.clientEmail],
      subject: `Quote Request Received - ${data.eventName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #fff;">
          <div style="background: linear-gradient(135deg, #000 0%, #1a1a1a 100%); padding: 30px; text-align: center;">
            <h1 style="color: #facc15; margin: 0; font-size: 28px;">ShowMax Events</h1>
            <p style="color: #fff; margin: 10px 0 0 0; font-size: 14px;">Professional AV Equipment Rental</p>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #333; margin-top: 0;">Thank You for Your Quote Request!</h2>
            <p style="color: #666; line-height: 1.6;">Hi ${data.clientName},</p>
            <p style="color: #666; line-height: 1.6;">
              We've received your equipment rental quote request and our team is reviewing it now. 
              We'll get back to you within 24 hours with detailed pricing and availability information.
            </p>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #facc15;">
              <h3 style="margin-top: 0; color: #333;">Event Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Event Name:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.eventName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Event Date:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${new Date(data.eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Location:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.eventLocation}</td>
                </tr>
              </table>
            </div>
            
            <h3 style="color: #333;">Equipment Summary</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <thead>
                <tr style="background-color: #f5f5f5;">
                  <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Equipment</th>
                  <th style="padding: 12px; text-align: center; border-bottom: 2px solid #ddd; width: 100px;">Quantity</th>
                </tr>
              </thead>
              <tbody>
                ${equipmentListHtml}
              </tbody>
            </table>
            
            ${data.additionalNotes ? `
              <div style="margin: 25px 0;">
                <h3 style="color: #333;">Your Notes</h3>
                <p style="color: #666; line-height: 1.6; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
                  ${data.additionalNotes}
                </p>
              </div>
            ` : ''}
            
            <div style="background-color: #fff3cd; border: 1px solid #facc15; padding: 15px; border-radius: 5px; margin: 25px 0;">
              <p style="margin: 0; color: #856404; font-size: 14px;">
                <strong>📋 Note:</strong> Pricing will be provided in your custom quote based on your event requirements, rental duration, delivery, setup, and any additional services.
              </p>
            </div>
            
            <h3 style="color: #333;">What Happens Next?</h3>
            <ol style="color: #666; line-height: 1.8;">
              <li>Our team will review your equipment requirements</li>
              <li>We'll confirm availability for your event date</li>
              <li>You'll receive a detailed quote within 24 hours</li>
              <li>Once approved, we'll coordinate delivery and setup</li>
            </ol>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/contact" 
                 style="display: inline-block; background-color: #facc15; color: #000; padding: 14px 28px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Contact Us
              </a>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              If you have any questions in the meantime, feel free to reach out:
            </p>
            <p style="color: #666; margin: 5px 0;">
              📧 <a href="mailto:contact@showmaxevents.com" style="color: #facc15;">contact@showmaxevents.com</a><br>
              📞 <a href="tel:+16045550123" style="color: #facc15;">(604) 555-0123</a>
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-top: 30px;">
              Best regards,<br>
              <strong>The ShowMax Events Team</strong>
            </p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #ddd;">
            <p style="font-size: 12px; color: #999; margin: 5px 0;">
              ShowMax Events - Professional AV Rental & Event Production<br>
              Vancouver, BC | <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #facc15;">www.showmaxevents.com</a>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send quote request to client:", error);
      return { success: false, error };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send quote request to client:", error);
    return { success: false, error };
  }
}

export async function sendQuoteRequestToAdmin(data: QuoteRequestData) {
  const adminEmail = process.env.ADMIN_EMAIL || "info@showmaxevents.com";

  try {
    // Generate equipment list HTML
    const equipmentListHtml = data.items
      .map(
        (item) => `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eee;">
            <strong>${item.name}</strong><br>
            <span style="color: #666; font-size: 12px;">${item.category}</span>
            ${item.description ? `<br><span style="color: #999; font-size: 11px;">${item.description}</span>` : ''}
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center; font-weight: bold;">
            ${item.quantity}
          </td>
        </tr>
      `
      )
      .join("");

    const resend = getResendClient();
    const { data: result, error } = await resend.emails.send({
      from: "ShowMax Events <noreply@showmaxevents.com>",
      to: [adminEmail],
      replyTo: data.clientEmail,
      subject: `🎯 New Quote Request: ${data.eventName} - ${data.clientName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #fff;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 28px;">🎯 New Quote Request</h1>
            <p style="color: #fef2f2; margin: 10px 0 0 0; font-size: 14px;">Action Required - Client Awaiting Response</p>
          </div>
          
          <div style="padding: 30px;">
            <div style="background-color: #fef2f2; border-left: 4px solid #dc2626; padding: 15px; margin-bottom: 25px; border-radius: 4px;">
              <p style="margin: 0; color: #991b1b; font-weight: bold;">
                ⏰ Response Time: Within 24 hours
              </p>
            </div>
            
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Client Information
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #333; font-size: 16px;">${data.clientName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${data.clientEmail}" style="color: #facc15; text-decoration: none; font-weight: bold;">
                    ${data.clientEmail}
                  </a>
                </td>
              </tr>
            </table>
            
            <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Event Details
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Event Name:</strong></td>
                <td style="padding: 8px 0; color: #333; font-weight: bold; font-size: 16px;">${data.eventName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Event Date:</strong></td>
                <td style="padding: 8px 0; color: #dc2626; font-weight: bold;">
                  ${new Date(data.eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Location:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.eventLocation}</td>
              </tr>
            </table>
            
            <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Equipment Requested
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <thead>
                <tr style="background-color: #facc15;">
                  <th style="padding: 12px; text-align: left; border-bottom: 2px solid #333;">Equipment</th>
                  <th style="padding: 12px; text-align: center; border-bottom: 2px solid #333; width: 100px;">Quantity</th>
                </tr>
              </thead>
              <tbody>
                ${equipmentListHtml}
              </tbody>
            </table>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #facc15; margin-top: 15px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Total Items:</strong> ${data.items.reduce((sum, item) => sum + item.quantity, 0)} units requested
              </p>
            </div>
            
            ${data.additionalNotes ? `
              <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
                Client Notes
              </h2>
              <div style="background-color: #fffbeb; border-left: 4px solid #facc15; padding: 15px; margin: 15px 0; border-radius: 4px;">
                <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">
                  ${data.additionalNotes}
                </p>
              </div>
            ` : ''}
            
            <div style="background-color: #f0fdf4; border: 2px solid #22c55e; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
              <h3 style="color: #166534; margin-top: 0;">⚡ Quick Actions</h3>
              <div style="margin: 15px 0;">
                <a href="mailto:${data.clientEmail}?subject=Re: Quote Request - ${data.eventName}" 
                   style="display: inline-block; background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 5px;">
                  📧 Reply to Client
                </a>
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin" 
                   style="display: inline-block; background-color: #facc15; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 5px;">
                  📊 View Dashboard
                </a>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 12px; margin: 5px 0;">
                <strong>Quote ID:</strong> ${Date.now()}<br>
                <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
                <strong>Total Items:</strong> ${data.items.reduce((sum, item) => sum + item.quantity, 0)} units
              </p>
            </div>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
            <p style="font-size: 12px; color: #999; margin: 5px 0;">
              ShowMax Events - Admin Notification System<br>
              This email was sent to ${adminEmail}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send quote request to admin:", error);
      return { success: false, error };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send quote request to admin:", error);
    return { success: false, error };
  }
}

// Simple Inquiry Email Interfaces
interface SimpleInquiryData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  company?: string;
  message: string;
}

export async function sendSimpleInquiryEmail(data: SimpleInquiryData) {
  const adminEmail = process.env.ADMIN_EMAIL || "info@showmaxevents.com";

  try {
    const resend = getResendClient();

    // Send confirmation to client
    const clientEmailResult = await resend.emails.send({
      from: "ShowMax Events <noreply@showmaxevents.com>",
      to: [data.clientEmail],
      subject: "Inquiry Received - ShowMax Events",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fff;">
          <div style="background: linear-gradient(135deg, #000 0%, #1a1a1a 100%); padding: 30px; text-align: center;">
            <h1 style="color: #facc15; margin: 0; font-size: 28px;">ShowMax Events</h1>
            <p style="color: #fff; margin: 10px 0 0 0; font-size: 14px;">Professional AV Equipment Rental</p>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #333; margin-top: 0;">Thank You for Your Inquiry!</h2>
            <p style="color: #666; line-height: 1.6;">Hi ${data.clientName},</p>
            <p style="color: #666; line-height: 1.6;">
              We've received your inquiry and our team will review it shortly. We'll get back to you within 24 hours with a response.
            </p>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #facc15;">
              <h3 style="margin-top: 0; color: #333;">Your Message</h3>
              <p style="color: #666; line-height: 1.6; white-space: pre-wrap; margin: 0;">
                ${data.message}
              </p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              If you have any questions in the meantime, feel free to reach out:
            </p>
            <p style="color: #666; margin: 5px 0;">
              📧 <a href="mailto:contact@showmaxevents.com" style="color: #facc15;">contact@showmaxevents.com</a><br>
              📞 <a href="tel:+16046394629" style="color: #facc15;">1.604.639.4629</a>
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-top: 30px;">
              Best regards,<br>
              <strong>The ShowMax Events Team</strong>
            </p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #ddd;">
            <p style="font-size: 12px; color: #999; margin: 5px 0;">
              ShowMax Events - Professional AV Rental & Event Production<br>
              Vancouver, BC | <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://showmaxevents.com'}" style="color: #facc15;">www.showmaxevents.com</a>
            </p>
          </div>
        </div>
      `,
    });

    if (clientEmailResult.error) {
      console.error("Failed to send client confirmation:", clientEmailResult.error);
    }

    // Send notification to admin
    const adminEmailResult = await resend.emails.send({
      from: "ShowMax Events <noreply@showmaxevents.com>",
      to: [adminEmail],
      replyTo: data.clientEmail,
      subject: `📧 New Inquiry from ${data.clientName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #fff;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 28px;">📧 New Inquiry</h1>
            <p style="color: #fef2f2; margin: 10px 0 0 0; font-size: 14px;">Action Required - Client Awaiting Response</p>
          </div>
          
          <div style="padding: 30px;">
            <div style="background-color: #fef2f2; border-left: 4px solid #dc2626; padding: 15px; margin-bottom: 25px; border-radius: 4px;">
              <p style="margin: 0; color: #991b1b; font-weight: bold;">
                ⏰ Response Time: Within 24 hours
              </p>
            </div>
            
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Contact Information
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #333; font-size: 16px;">${data.clientName}</td>
              </tr>
              ${data.company ? `
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Company:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.company}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${data.clientEmail}" style="color: #facc15; text-decoration: none; font-weight: bold;">
                    ${data.clientEmail}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0;">
                  <a href="tel:${data.clientPhone}" style="color: #facc15; text-decoration: none;">
                    ${data.clientPhone}
                  </a>
                </td>
              </tr>
            </table>
            
            <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Message
            </h2>
            <div style="background-color: #fffbeb; border-left: 4px solid #facc15; padding: 15px; margin: 15px 0; border-radius: 4px;">
              <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">
                ${data.message}
              </p>
            </div>
            
            <div style="background-color: #f0fdf4; border: 2px solid #22c55e; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
              <h3 style="color: #166534; margin-top: 0;">⚡ Quick Actions</h3>
              <div style="margin: 15px 0;">
                <a href="mailto:${data.clientEmail}?subject=Re: Your Inquiry" 
                   style="display: inline-block; background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 5px;">
                  📧 Reply to Client
                </a>
              </div>
            </div>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
            <p style="font-size: 12px; color: #999; margin: 5px 0;">
              ShowMax Events - Admin Notification System<br>
              This email was sent to ${adminEmail}
            </p>
          </div>
        </div>
      `,
    });

    if (adminEmailResult.error) {
      console.error("Failed to send admin notification:", adminEmailResult.error);
      return { success: false, error: adminEmailResult.error };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send simple inquiry emails:", error);
    return { success: false, error };
  }
}

// Event Booking Email Interface
interface EventBookingData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  company?: string;
  eventDate: string;
  venueName: string;
  setupDateTime?: string;
  rehearsalDateTime?: string;
  showDateTime?: string;
  strikeDateTime?: string;
  hasFloorPlan: "yes" | "no" | "not-sure";
  floorPlanDescription?: string;
  themeCreativeElements?: string;
  specialFeatures?: string;
  audioNeeds?: string;
  lightingNeeds?: string;
  videoNeeds?: string;
  ledWallNeeds?: string;
  camerasNeeds?: string;
  stagingNeeds?: string;
  draperyNeeds?: string;
  powerNeeds?: string;
  riggingNeeds?: string;
  additionalItems?: string;
  budgetRange?: string;
  budgetNotes?: string;
  needVenueReferral?: boolean;
  needDecorReferral?: boolean;
  needFurnitureReferral?: boolean;
  needCateringReferral?: boolean;
  needEventManagementReferral?: boolean;
  needSecurityReferral?: boolean;
}

export async function sendEventBookingEmail(data: EventBookingData) {
  const adminEmail = process.env.ADMIN_EMAIL || "info@showmaxevents.com";

  try {
    const resend = getResendClient();

    // Format event date
    const formattedEventDate = new Date(data.eventDate).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    // Build referrals list
    const referrals = [];
    if (data.needVenueReferral) referrals.push("Venues");
    if (data.needDecorReferral) referrals.push("Decor");
    if (data.needFurnitureReferral) referrals.push("Furniture");
    if (data.needCateringReferral) referrals.push("Catering");
    if (data.needEventManagementReferral) referrals.push("Event Management");
    if (data.needSecurityReferral) referrals.push("Security");

    // Send confirmation to client
    const clientEmailResult = await resend.emails.send({
      from: "ShowMax Events <noreply@showmaxevents.com>",
      to: [data.clientEmail],
      subject: "Event Booking Request Received - ShowMax Events",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #fff;">
          <div style="background: linear-gradient(135deg, #000 0%, #1a1a1a 100%); padding: 30px; text-align: center;">
            <h1 style="color: #facc15; margin: 0; font-size: 28px;">ShowMax Events</h1>
            <p style="color: #fff; margin: 10px 0 0 0; font-size: 14px;">Professional AV Equipment Rental</p>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #333; margin-top: 0;">Thank You for Your Event Booking Request!</h2>
            <p style="color: #666; line-height: 1.6;">Hi ${data.clientName},</p>
            <p style="color: #666; line-height: 1.6;">
              We've received your detailed event booking request and our team is reviewing it now. 
              We'll get back to you within 24 hours with detailed pricing and availability information.
            </p>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #facc15;">
              <h3 style="margin-top: 0; color: #333;">Event Summary</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Event Date:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${formattedEventDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Venue:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.venueName}</td>
                </tr>
              </table>
            </div>
            
            <h3 style="color: #333;">What Happens Next?</h3>
            <ol style="color: #666; line-height: 1.8;">
              <li>Our team will review your event requirements</li>
              <li>We'll confirm availability for your event date</li>
              <li>You'll receive a detailed quote within 24 hours</li>
              <li>Once approved, we'll coordinate delivery and setup</li>
            </ol>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://showmaxevents.com'}/contact" 
                 style="display: inline-block; background-color: #facc15; color: #000; padding: 14px 28px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Contact Us
              </a>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              If you have any questions in the meantime, feel free to reach out:
            </p>
            <p style="color: #666; margin: 5px 0;">
              📧 <a href="mailto:contact@showmaxevents.com" style="color: #facc15;">contact@showmaxevents.com</a><br>
              📞 <a href="tel:+16046394629" style="color: #facc15;">1.604.639.4629</a>
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-top: 30px;">
              Best regards,<br>
              <strong>The ShowMax Events Team</strong>
            </p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #ddd;">
            <p style="font-size: 12px; color: #999; margin: 5px 0;">
              ShowMax Events - Professional AV Rental & Event Production<br>
              Vancouver, BC | <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://showmaxevents.com'}" style="color: #facc15;">www.showmaxevents.com</a>
            </p>
          </div>
        </div>
      `,
    });

    if (clientEmailResult.error) {
      console.error("Failed to send client confirmation:", clientEmailResult.error);
    }

    // Build technical requirements section
    const technicalRequirements = [];
    if (data.audioNeeds) technicalRequirements.push({ label: "Audio", value: data.audioNeeds });
    if (data.lightingNeeds) technicalRequirements.push({ label: "Lighting", value: data.lightingNeeds });
    if (data.videoNeeds) technicalRequirements.push({ label: "Video", value: data.videoNeeds });
    if (data.ledWallNeeds) technicalRequirements.push({ label: "LED Wall", value: data.ledWallNeeds });
    if (data.camerasNeeds) technicalRequirements.push({ label: "Cameras", value: data.camerasNeeds });
    if (data.stagingNeeds) technicalRequirements.push({ label: "Staging", value: data.stagingNeeds });
    if (data.draperyNeeds) technicalRequirements.push({ label: "Drapery", value: data.draperyNeeds });
    if (data.powerNeeds) technicalRequirements.push({ label: "Power", value: data.powerNeeds });
    if (data.riggingNeeds) technicalRequirements.push({ label: "Rigging", value: data.riggingNeeds });
    if (data.additionalItems) technicalRequirements.push({ label: "Additional Items", value: data.additionalItems });

    // Send detailed notification to admin
    const adminEmailResult = await resend.emails.send({
      from: "ShowMax Events <noreply@showmaxevents.com>",
      to: [adminEmail],
      replyTo: data.clientEmail,
      subject: `🎯 New Event Booking Request: ${data.venueName} - ${data.clientName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #fff;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 28px;">🎯 New Event Booking Request</h1>
            <p style="color: #fef2f2; margin: 10px 0 0 0; font-size: 14px;">Action Required - Client Awaiting Response</p>
          </div>
          
          <div style="padding: 30px;">
            <div style="background-color: #fef2f2; border-left: 4px solid #dc2626; padding: 15px; margin-bottom: 25px; border-radius: 4px;">
              <p style="margin: 0; color: #991b1b; font-weight: bold;">
                ⏰ Response Time: Within 24 hours
              </p>
            </div>
            
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Contact Information
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #333; font-size: 16px;">${data.clientName}</td>
              </tr>
              ${data.company ? `
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Company:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.company}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${data.clientEmail}" style="color: #facc15; text-decoration: none; font-weight: bold;">
                    ${data.clientEmail}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0;">
                  <a href="tel:${data.clientPhone}" style="color: #facc15; text-decoration: none;">
                    ${data.clientPhone}
                  </a>
                </td>
              </tr>
            </table>
            
            <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Event Details
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Event Date:</strong></td>
                <td style="padding: 8px 0; color: #dc2626; font-weight: bold; font-size: 16px;">${formattedEventDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Venue:</strong></td>
                <td style="padding: 8px 0; color: #333; font-weight: bold;">${data.venueName}</td>
              </tr>
              ${data.setupDateTime ? `
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Setup:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.setupDateTime}</td>
              </tr>
              ` : ''}
              ${data.rehearsalDateTime ? `
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Rehearsal:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.rehearsalDateTime}</td>
              </tr>
              ` : ''}
              ${data.showDateTime ? `
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Show:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.showDateTime}</td>
              </tr>
              ` : ''}
              ${data.strikeDateTime ? `
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Strike:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.strikeDateTime}</td>
              </tr>
              ` : ''}
            </table>
            
            ${data.hasFloorPlan !== "not-sure" || data.floorPlanDescription ? `
            <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Floor Plan
            </h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
              <p style="margin: 0; color: #666;"><strong>Has Floor Plan:</strong> ${data.hasFloorPlan === "yes" ? "Yes" : data.hasFloorPlan === "no" ? "No" : "Not Sure"}</p>
              ${data.floorPlanDescription ? `
              <p style="margin: 10px 0 0 0; color: #333; white-space: pre-wrap;">${data.floorPlanDescription}</p>
              ` : ''}
            </div>
            ` : ''}
            
            ${data.themeCreativeElements || data.specialFeatures ? `
            <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Show Design
            </h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
              ${data.themeCreativeElements ? `
              <p style="margin: 0 0 10px 0; color: #666;"><strong>Theme / Creative Elements:</strong></p>
              <p style="margin: 0 0 15px 0; color: #333; white-space: pre-wrap;">${data.themeCreativeElements}</p>
              ` : ''}
              ${data.specialFeatures ? `
              <p style="margin: 0 0 10px 0; color: #666;"><strong>Special Features:</strong></p>
              <p style="margin: 0; color: #333; white-space: pre-wrap;">${data.specialFeatures}</p>
              ` : ''}
            </div>
            ` : ''}
            
            ${technicalRequirements.length > 0 ? `
            <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Technical Requirements
            </h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
              ${technicalRequirements.map(req => `
              <p style="margin: 0 0 10px 0; color: #666;"><strong>${req.label}:</strong></p>
              <p style="margin: 0 0 15px 0; color: #333; white-space: pre-wrap;">${req.value}</p>
              `).join('')}
            </div>
            ` : ''}
            
            ${data.budgetRange || data.budgetNotes ? `
            <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Budget
            </h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
              ${data.budgetRange ? `
              <p style="margin: 0 0 10px 0; color: #666;"><strong>Budget Range:</strong> ${data.budgetRange}</p>
              ` : ''}
              ${data.budgetNotes ? `
              <p style="margin: 10px 0 0 0; color: #666;"><strong>Budget Notes:</strong></p>
              <p style="margin: 0; color: #333; white-space: pre-wrap;">${data.budgetNotes}</p>
              ` : ''}
            </div>
            ` : ''}
            
            ${referrals.length > 0 ? `
            <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
              Referrals Needed
            </h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
              <p style="margin: 0; color: #333;">${referrals.join(", ")}</p>
            </div>
            ` : ''}
            
            <div style="background-color: #f0fdf4; border: 2px solid #22c55e; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
              <h3 style="color: #166534; margin-top: 0;">⚡ Quick Actions</h3>
              <div style="margin: 15px 0;">
                <a href="mailto:${data.clientEmail}?subject=Re: Event Booking Request - ${data.venueName}" 
                   style="display: inline-block; background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 5px;">
                  📧 Reply to Client
                </a>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 12px; margin: 5px 0;">
                <strong>Submitted:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
            <p style="font-size: 12px; color: #999; margin: 5px 0;">
              ShowMax Events - Admin Notification System<br>
              This email was sent to ${adminEmail}
            </p>
          </div>
        </div>
      `,
    });

    if (adminEmailResult.error) {
      console.error("Failed to send admin notification:", adminEmailResult.error);
      return { success: false, error: adminEmailResult.error };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send event booking emails:", error);
    return { success: false, error };
  }
}

