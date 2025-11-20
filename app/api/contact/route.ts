import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, message } = body

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ success: false, error: "Invalid email address" }, { status: 400 })
        }

        // Send email using Resend
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // Resend's test email
            to: process.env.RECIPIENT_EMAIL || "raihanur.rahman.2022@gmail.com",
            replyTo: email, // User can reply directly to the sender
            subject: `Portfolio Contact: ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #555;">Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #888; font-size: 12px; text-align: center;">
            Sent from your portfolio contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
        })

        return NextResponse.json({
            success: true,
            message: "Message sent successfully! I'll get back to you soon.",
        })
    } catch (error) {
        console.error("Contact form error:", error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to send message. Please try again or contact me directly at raihanur.rahman.2022@gmail.com",
            },
            { status: 500 }
        )
    }
}
