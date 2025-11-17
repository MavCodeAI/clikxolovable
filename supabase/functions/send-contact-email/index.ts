import { serve } from "@std/http/server";
import { Resend } from "npm:resend@^4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  projectType: string;
  budget: string;
  timeline: string;
  companySize: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Processing contact form submission...");
    
    const { name, email, phone, serviceType, projectType, budget, timeline, companySize, message }: ContactFormData = await req.json();
    
    // Validate input
    if (!name || !email || !message || !serviceType || !projectType || !budget || !timeline || !companySize) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send confirmation email to the user
    console.log(`Sending confirmation email to: ${email}`);
    const userEmailResponse = await resend.emails.send({
      from: "ClikXo <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting ClikXo!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #ff8c00 0%, #ffa500 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .header h1 { color: white; margin: 0; font-size: 28px; }
              .content { background: #ffffff; padding: 30px; border: 2px solid #f0f0f0; border-radius: 0 0 10px 10px; }
              .highlight { color: #ff8c00; font-weight: bold; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 Thank You for Reaching Out!</h1>
              </div>
              <div class="content">
                <h2>Hello ${name},</h2>
                <p>Thank you for contacting <span class="highlight">ClikXo</span> - your performance digital marketing partner!</p>
                <p>We have received your message and our team will review it carefully. We typically respond within <strong>24 hours</strong> during business days.</p>
                
                <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #ff8c00; margin: 20px 0;">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                  <p><strong>Service Interest:</strong> ${serviceType}</p>
                  <p><strong>Project Type:</strong> ${projectType}</p>
                  <p><strong>Budget Range:</strong> ${budget}</p>
                  <p><strong>Timeline:</strong> ${timeline}</p>
                  <p><strong>Company Size:</strong> ${companySize}</p>
                  <h4>Message:</h4>
                  <p style="white-space: pre-wrap;">${message}</p>
                </div>

                <p>In the meantime, feel free to explore our services on our website!</p>
                
                <p>Best regards,<br>
                <strong>The ClikXo Team</strong><br>
                Dubai, UAE</p>
              </div>
              <div class="footer">
                <p>ClikXo - Performance Digital Marketing Agency</p>
                <p>📧 info@clikxo.com | 📞 +971 44318653</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    // Send notification email to ClikXo team
    console.log("Sending notification to ClikXo team...");
    const adminEmailResponse = await resend.emails.send({
      from: "ClikXo Website <onboarding@resend.dev>",
      to: ["info@clikxo.com"], // Replace with your actual team email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .header h1 { color: white; margin: 0; font-size: 24px; }
              .content { background: #ffffff; padding: 30px; border: 2px solid #f0f0f0; border-radius: 0 0 10px 10px; }
              .info-box { background: #f8f9fa; padding: 15px; border-left: 4px solid #ff8c00; margin: 20px 0; }
              .urgent { background: #fff3cd; border-left-color: #ff8c00; padding: 10px; margin: 10px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🔔 New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="urgent">
                  <strong>⚡ Action Required:</strong> New inquiry received from website
                </div>
                
                <h3>Contact Details:</h3>
                <div class="info-box">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                  ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
                  <p><strong>Service Interest:</strong> ${serviceType}</p>
                  <p><strong>Project Type:</strong> ${projectType}</p>
                  <p><strong>Budget Range:</strong> ${budget}</p>
                  <p><strong>Timeline:</strong> ${timeline}</p>
                  <p><strong>Company Size:</strong> ${companySize}</p>
                  <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })} (Dubai Time)</p>
                </div>

                <h3>Message:</h3>
                <div class="info-box">
                  <p style="white-space: pre-wrap;">${message}</p>
                </div>

                <p><strong>Next Steps:</strong></p>
                <ul>
                  <li>Reply to the customer within 24 hours</li>
                  <li>Use the email address above to respond directly</li>
                  <li>Update CRM with this lead information</li>
                </ul>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Admin notification email sent:", adminEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Email sent successfully",
        userEmail: userEmailResponse,
        adminEmail: adminEmailResponse
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Failed to send email",
        details: error?.toString() || "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
