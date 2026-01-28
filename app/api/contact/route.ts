import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse.' },
        { status: 400 }
      );
    }

    // Send email using Resend
    if (process.env.RESEND_API_KEY && resend) {
      try {
        await resend.emails.send({
          from: 'Herakles Website <noreply@herakles-defense.com>',
          to: 'info@herakles-defense.com',
          replyTo: email,
          subject: `Kontaktanfrage von ${name}${company ? ` (${company})` : ''}`,
          html: `
            <h2>Neue Kontaktanfrage</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
            <h3>Nachricht:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p style="color: #666; font-size: 12px;">Diese Nachricht wurde über das Kontaktformular auf herakles-defense.com gesendet.</p>
          `,
        });

        return NextResponse.json(
          { success: true, message: 'Nachricht erfolgreich gesendet!' },
          { status: 200 }
        );
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Fall back to logging if email fails
        console.log('Contact form submission (email failed, logged instead):', { name, email, company, message });
        return NextResponse.json(
          { success: true, message: 'Nachricht erfolgreich empfangen. Wir melden uns in Kürze!' },
          { status: 200 }
        );
      }
    } else {
      // No API key configured - just log
      console.log('Contact form submission (no email service configured):', { name, email, company, message });
      return NextResponse.json(
        { success: true, message: 'Nachricht erfolgreich empfangen. Wir melden uns in Kürze!' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder senden Sie eine E-Mail an info@herakles-defense.com' },
      { status: 500 }
    );
  }
}
