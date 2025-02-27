import { Resend } from 'resend';
import NewsLetterEmail from '@/components/newsletter-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("hello")
    const body = await req.json()
    if(!body || !body.email) {
        return Response.json({message: "Email can't be empty!"}, { status: 400})
    }
    const email = body.email.toLowerCase()
    const { error } = await resend.emails.send({
      from: "info@nokuto.shop",
      to: [email],
      subject: "Hello world",
      react: React.createElement(NewsLetterEmail)
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({message: `Email sent to ${email}`});
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}