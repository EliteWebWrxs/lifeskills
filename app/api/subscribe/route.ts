import { sendEmail } from "@/app/utils/mail.utils";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const data = await extractFormData(req);
    const emailContent = generateEmailContent(data);

    const sender = {
      name: "Website Inquiry",
      address: process.env.GOOGLE_EMAIL,
    };

    const res = await sendEmail({
      sender,
      recipients: [
        {
          name: "subscription",
          address: "info@mylifeskills.org",
        },
      ],
      subject: `subscription - for ${data.email}`,
      message: emailContent,
    });

    return NextResponse.json({ accepted: "Email was sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Unable to send email at this time" },
      { status: 500 }
    );
  }
  async function extractFormData(req: any) {
    const data = await req.formData();
    return {
      email: data.get("email"),
    };
  }

  function generateEmailContent({ email }: { email: string }) {
    return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #0056b3;">🎉 New Newsletter Subscriber</h2>
      <p>You've received a new subscription to your newsletter:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
        <tr>
          <td style="font-weight: bold; padding: 6px 0;">Email Address:</td>
          <td>${email}</td>
        </tr>
      </table>

      <p style="margin-top: 24px; font-size: 0.9rem; color: #555;">
        Make sure to add this email to your list if you're managing subscribers manually.
      </p>
    </div>
  `;
  }
}
