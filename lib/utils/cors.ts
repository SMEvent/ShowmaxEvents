import { NextResponse } from "next/server";

const allowedOrigins = [
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
];

export function corsHeaders(origin?: string | null) {
  // Check if origin is allowed
  const isAllowed = origin && allowedOrigins.includes(origin);
  
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : allowedOrigins[0],
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

export function handleCors(request: Request) {
  const origin = request.headers.get("origin");
  
  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: corsHeaders(origin),
    });
  }

  return null;
}

