import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, phone } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // TODO: Add Segment tracking
    // analytics.identify(email, {
    //   email,
    //   phone,
    //   source: 'website_popup',
    //   optInDate: new Date(),
    //   emailOptIn: true,
    //   smsOptIn: !!phone
    // });

    // TODO: Save to database
    // await db.leads.create({
    //   email,
    //   phone,
    //   source: 'website_popup',
    //   createdAt: new Date()
    // });

    // TODO: Send welcome email via Twilio SendGrid
    // if (email) {
    //   await sendWelcomeEmail(email);
    // }

    // TODO: Send welcome SMS via Twilio
    // if (phone) {
    //   await sendWelcomeSMS(phone);
    // }

    console.log('Lead captured:', { email, phone });

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed'
    });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
