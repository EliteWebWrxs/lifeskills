import { sendEmail } from "@/app/utils/mail.utils";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const data = await extractFormData(req);
    const emailContent = generateEmailContent(data);
    const subject = data.subject || "";

    const sender = {
      name: "Website Inquiry",
      address: process.env.GOOGLE_EMAIL,
    };

    const recipients = determineRecipients(subject);

    const res = await sendEmail({
      sender,
      recipients,
      subject: `${subject} - Inquiry`,
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
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      subject: data.get("inquiryType"),
      message: data.get("message"),
    };
  }

  function generateEmailContent({ name, email, phone, message, subject }: any) {
    return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #0056b3;">New Inquiry Received</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="font-weight: bold; padding: 6px 0;">Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 6px 0;">Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 6px 0;">Phone Number:</td>
          <td>${phone}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 6px 0;">Inquiry Reason:</td>
          <td>${subject}</td>
        </tr>
      </table>

      <h3 style="margin-top: 24px; color: #333;">Message:</h3>
      <p style="background: #f9f9f9; padding: 12px; border-radius: 4px;">${message}</p>
    </div>
  `;
  }

  // Utility function to determine recipients based on subject or other criteria
  function determineRecipients(subject: string) {
    if (subject) {
      return [
        {
          name: "Website Inquiry",
          address: "info@mylifeskills.org",
        },
      ];
    } else {
      return [
        {
          name: "News Letter Subscription",
          address: "info@mylifeskills.org",
        },
      ];
    }
  }
}
