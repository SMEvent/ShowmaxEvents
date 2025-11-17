import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user is admin
    const { data: userData } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single();

    if (userData?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Get stats
    const [
      { count: totalInquiries },
      { count: pendingInquiries },
      { count: completedInquiries },
      { count: totalClients },
    ] = await Promise.all([
      supabase.from("inquiries").select("*", { count: "exact", head: true }),
      supabase
        .from("inquiries")
        .select("*", { count: "exact", head: true })
        .eq("status", "pending"),
      supabase
        .from("inquiries")
        .select("*", { count: "exact", head: true })
        .eq("status", "booked"),
      supabase.from("users").select("*", { count: "exact", head: true }),
    ]);

    return NextResponse.json({
      stats: {
        totalInquiries: totalInquiries || 0,
        pendingInquiries: pendingInquiries || 0,
        completedInquiries: completedInquiries || 0,
        totalClients: totalClients || 0,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

