export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          company_name: string | null;
          phone: string | null;
          role: "client" | "admin";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          company_name?: string | null;
          phone?: string | null;
          role?: "client" | "admin";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          company_name?: string | null;
          phone?: string | null;
          role?: "client" | "admin";
          created_at?: string;
          updated_at?: string;
        };
      };
      inquiries: {
        Row: {
          id: string;
          user_id: string;
          event_name: string | null;
          event_date: string | null;
          event_location: string | null;
          equipment_requested: Json;
          additional_notes: string | null;
          status: "pending" | "reviewing" | "quoted" | "booked" | "declined";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          event_name?: string | null;
          event_date?: string | null;
          event_location?: string | null;
          equipment_requested?: Json;
          additional_notes?: string | null;
          status?: "pending" | "reviewing" | "quoted" | "booked" | "declined";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          event_name?: string | null;
          event_date?: string | null;
          event_location?: string | null;
          equipment_requested?: Json;
          additional_notes?: string | null;
          status?: "pending" | "reviewing" | "quoted" | "booked" | "declined";
          created_at?: string;
          updated_at?: string;
        };
      };
      saved_quotes: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          equipment_items: Json;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          equipment_items?: Json;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          equipment_items?: Json;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      equipment_favorites: {
        Row: {
          id: string;
          user_id: string;
          equipment_slug: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          equipment_slug: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          equipment_slug?: string;
          created_at?: string;
        };
      };
    };
  };
}

