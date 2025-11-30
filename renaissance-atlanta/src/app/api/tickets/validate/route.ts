import { NextRequest, NextResponse } from 'next/server';

// TODO: Replace with real database
const mockTickets: Record<string, any> = {
  'TICKET_VIP_001': {
    id: 'TICKET_VIP_001',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    ticketType: 'VIP',
    status: 'valid',
    checkedIn: false
  },
  'TICKET_GA_001': {
    id: 'TICKET_GA_001',
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    ticketType: 'General Admission',
    status: 'valid',
    checkedIn: false
  }
};

export async function POST(request: NextRequest) {
  try {
    const { ticketId } = await request.json();

    if (!ticketId) {
      return NextResponse.json(
        { valid: false, message: 'No ticket ID provided' },
        { status: 400 }
      );
    }

    // TODO: Look up ticket in database
    // const ticket = await db.tickets.findUnique({ where: { id: ticketId } });
    const ticket = mockTickets[ticketId];

    if (!ticket) {
      return NextResponse.json({
        valid: false,
        message: 'Invalid ticket - not found'
      });
    }

    if (ticket.status === 'cancelled') {
      return NextResponse.json({
        valid: false,
        message: 'Ticket has been cancelled'
      });
    }

    if (ticket.checkedIn) {
      return NextResponse.json({
        valid: false,
        message: 'Already checked in at ' + ticket.checkedInAt
      });
    }

    // Mark as checked in
    // TODO: Update database
    // await db.tickets.update({
    //   where: { id: ticketId },
    //   data: { checkedIn: true, checkedInAt: new Date() }
    // });
    ticket.checkedIn = true;
    ticket.checkedInAt = new Date().toISOString();

    // TODO: Track in Segment
    // analytics.track(ticket.customerEmail, 'Event Checked In', {
    //   ticketId: ticket.id,
    //   ticketType: ticket.ticketType
    // });

    return NextResponse.json({
      valid: true,
      message: 'Welcome!',
      customer: {
        name: ticket.customerName,
        ticketType: ticket.ticketType
      }
    });
  } catch (error) {
    console.error('Validation error:', error);
    return NextResponse.json(
      { valid: false, message: 'Error validating ticket' },
      { status: 500 }
    );
  }
}
