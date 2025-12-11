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

