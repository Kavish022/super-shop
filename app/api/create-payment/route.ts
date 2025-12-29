import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		// Simple mock payment response. If you have STRIPE_SECRET_KEY set,
		// you can replace this implementation with real Stripe calls.
		const body = await request.json().catch(() => ({}));

		// Return a mock client secret and echo any received amount for convenience
		return NextResponse.json({
			clientSecret: process.env.STRIPE_SECRET_KEY ? 'live_or_real_client_secret_here' : 'test_client_secret',
			received: body,
			message: 'Mock payment response - replace with Stripe integration when ready',
		});
	} catch (err) {
		return NextResponse.json({ error: 'Payment processing failed' }, { status: 500 });
	}
}
