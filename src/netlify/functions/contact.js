import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function handler(event, context) {
  try {
    const { name, email, company, service, problem } = JSON.parse(event.body);

    // Save to Supabase
    await supabase.from('contacts').insert([
      { name, email, company, service, problem }
    ]);

    // Send email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',  // If using Gmail
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,  // Your email to receive notifications
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nProblem: ${problem}`
    });

    return { statusCode: 200, body: 'Success' };

  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: 'Failed to send message' };
  }
}
