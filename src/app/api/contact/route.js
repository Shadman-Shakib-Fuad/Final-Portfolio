import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "shadmanfuad456@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #7c3aed; margin-bottom: 20px;">📬 New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #555; font-weight: bold; width: 80px;">Name:</td>
              <td style="padding: 10px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #555; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; color: #111;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #555; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; color: #111; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;" />
          <p style="color: #999; font-size: 12px;">Sent from your portfolio contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Server error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}