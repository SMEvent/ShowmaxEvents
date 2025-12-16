import { NextResponse, type NextRequest } from "next/server";

// Simplified middleware - no authentication checks needed
export async function updateSession(request: NextRequest) {
  // Simply pass through the request without any authentication logic
  return NextResponse.next({
    request,
  });
}

