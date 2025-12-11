"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const simpleInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please provide more details"),
});

const eventBookingSchema = z.object({
  // Contact Info
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  
  // Production Schedule
  eventDate: z.string().min(1, "Event date is required"),
  venueName: z.string().min(2, "Venue name is required"),
  setupDateTime: z.string().optional(),
  rehearsalDateTime: z.string().optional(),
  showDateTime: z.string().optional(),
  strikeDateTime: z.string().optional(),
  
  // Floor Plan
  hasFloorPlan: z.enum(["yes", "no", "not-sure"]),
  floorPlanDescription: z.string().optional(),
  
  // Show Design
  themeCreativeElements: z.string().optional(),
  specialFeatures: z.string().optional(),
  
  // Technical Requirements
  audioNeeds: z.string().optional(),
  lightingNeeds: z.string().optional(),
  videoNeeds: z.string().optional(),
  ledWallNeeds: z.string().optional(),
  camerasNeeds: z.string().optional(),
  stagingNeeds: z.string().optional(),
  draperyNeeds: z.string().optional(),
  powerNeeds: z.string().optional(),
  riggingNeeds: z.string().optional(),
  additionalItems: z.string().optional(),
  
  // Budget
  budgetRange: z.string().optional(),
  budgetNotes: z.string().optional(),
  
  // Referrals
  needVenueReferral: z.boolean().optional(),
  needDecorReferral: z.boolean().optional(),
  needFurnitureReferral: z.boolean().optional(),
  needCateringReferral: z.boolean().optional(),
  needEventManagementReferral: z.boolean().optional(),
  needSecurityReferral: z.boolean().optional(),
});

type SimpleInquiryData = z.infer<typeof simpleInquirySchema>;
type EventBookingData = z.infer<typeof eventBookingSchema>;

interface InquiryFormProps {
  onSuccess?: () => void;
}

export function InquiryForm({ onSuccess }: InquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const [formType, setFormType] = useState<"simple" | "detailed">("simple");

  const simpleForm = useForm<SimpleInquiryData>({
    resolver: zodResolver(simpleInquirySchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const eventForm = useForm<EventBookingData>({
    resolver: zodResolver(eventBookingSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      eventDate: "",
      venueName: "",
      setupDateTime: "",
      rehearsalDateTime: "",
      showDateTime: "",
      strikeDateTime: "",
      hasFloorPlan: "not-sure",
      floorPlanDescription: "",
      themeCreativeElements: "",
      specialFeatures: "",
      audioNeeds: "",
      lightingNeeds: "",
      videoNeeds: "",
      ledWallNeeds: "",
      camerasNeeds: "",
      stagingNeeds: "",
      draperyNeeds: "",
      powerNeeds: "",
      riggingNeeds: "",
      additionalItems: "",
      budgetRange: "",
      budgetNotes: "",
      needVenueReferral: false,
      needDecorReferral: false,
      needFurnitureReferral: false,
      needCateringReferral: false,
      needEventManagementReferral: false,
      needSecurityReferral: false,
    },
  });

  const onSimpleSubmit = async (data: SimpleInquiryData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "simple" }),
      });

      if (!response.ok) throw new Error("Failed to submit inquiry");
      
      toast.success("Inquiry submitted successfully!");
      simpleForm.reset();
      onSuccess?.();
    } catch (error) {
      toast.error("Failed to submit inquiry. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onEventSubmit = async (data: EventBookingData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "event-booking" }),
      });

      if (!response.ok) throw new Error("Failed to submit inquiry");
      
      toast.success("Event booking request submitted successfully!");
      eventForm.reset();
      onSuccess?.();
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Tabs value={formType} onValueChange={(value) => setFormType(value as "simple" | "detailed")} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="simple">Email Inquiry</TabsTrigger>
        <TabsTrigger value="detailed">Event Booking Request</TabsTrigger>
      </TabsList>

      <TabsContent value="simple">
        <Form {...simpleForm}>
          <form onSubmit={simpleForm.handleSubmit(onSimpleSubmit)} className="space-y-6">
            <FormField
              control={simpleForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={simpleForm.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={simpleForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone *</FormLabel>
                  <FormControl>
                    <Input placeholder="(604) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={simpleForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={simpleForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Inquiry"}
            </Button>
          </form>
        </Form>
      </TabsContent>

      <TabsContent value="detailed">
        <Form {...eventForm}>
          <form onSubmit={eventForm.handleSubmit(onEventSubmit)} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Contact Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={eventForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone *</FormLabel>
                      <FormControl>
                        <Input placeholder="(604) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Production Schedule */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold text-primary">Production Schedule</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={eventForm.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="venueName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Venue Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Vancouver Convention Centre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="setupDateTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Setup Date/Time</FormLabel>
                      <FormControl>
                        <Input placeholder="Dec 15, 8:00 AM" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="rehearsalDateTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rehearsal Date/Time</FormLabel>
                      <FormControl>
                        <Input placeholder="Dec 15, 2:00 PM" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="showDateTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Show Date/Time</FormLabel>
                      <FormControl>
                        <Input placeholder="Dec 15, 7:00 PM" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="strikeDateTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Strike Date/Time</FormLabel>
                      <FormControl>
                        <Input placeholder="Dec 16, 12:00 AM" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Floor Plan */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold text-primary">Floor Plan</h3>
              <FormField
                control={eventForm.control}
                name="hasFloorPlan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you have a floor plan?</FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            value="yes"
                            checked={field.value === "yes"}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="text-primary"
                          />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            value="no"
                            checked={field.value === "no"}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="text-primary"
                          />
                          <span>No</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            value="not-sure"
                            checked={field.value === "not-sure"}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="text-primary"
                          />
                          <span>Not Sure</span>
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={eventForm.control}
                name="floorPlanDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe your setup or attach floor plan via email</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your event layout..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Show Design */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold text-primary">Show Design</h3>
              <FormDescription className="text-white/70">
                Showmax can help with the entire show design process with support from our design department In Real Life Designs.
              </FormDescription>
              
              <FormField
                control={eventForm.control}
                name="themeCreativeElements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Theme / Creative Elements</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your event theme, colors, style..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={eventForm.control}
                name="specialFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Features</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any special effects, features, or requirements..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Technical Requirements */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold text-primary">Technical Requirements</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={eventForm.control}
                  name="audioNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Audio</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe audio needs..." className="min-h-[60px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="lightingNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lighting</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe lighting needs..." className="min-h-[60px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="videoNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Video</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe video needs..." className="min-h-[60px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="ledWallNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LED Wall</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe LED wall needs..." className="min-h-[60px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="camerasNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cameras</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe camera needs..." className="min-h-[60px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="stagingNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Staging</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe staging needs..." className="min-h-[60px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="draperyNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Drapery</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe drapery needs..." className="min-h-[60px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="powerNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Power</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe power needs..." className="min-h-[60px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="riggingNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rigging</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe rigging needs..." className="min-h-[60px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="additionalItems"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Items</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any other requirements..." className="min-h-[60px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Budget Parameters */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold text-primary">Budget Parameters</h3>
              <FormDescription className="text-white/70">
                Establishing a preliminary budget helps us narrow down design options and manage expectations.
              </FormDescription>
              
              <FormField
                control={eventForm.control}
                name="budgetRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., $10,000 - $25,000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={eventForm.control}
                name="budgetNotes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any additional budget considerations..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Referrals Needed */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold text-primary">Referrals Needed</h3>
              <FormDescription className="text-white/70">
                Do you need help with referrals for any additional services? We have a large network of proven and reliable suppliers.
              </FormDescription>
              
              <div className="grid gap-3 md:grid-cols-2">
                <FormField
                  control={eventForm.control}
                  name="needVenueReferral"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4"
                        />
                      </FormControl>
                      <FormLabel className="!mt-0 cursor-pointer">Venues</FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="needDecorReferral"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4"
                        />
                      </FormControl>
                      <FormLabel className="!mt-0 cursor-pointer">Decor</FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="needFurnitureReferral"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4"
                        />
                      </FormControl>
                      <FormLabel className="!mt-0 cursor-pointer">Furniture</FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="needCateringReferral"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4"
                        />
                      </FormControl>
                      <FormLabel className="!mt-0 cursor-pointer">Catering</FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="needEventManagementReferral"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4"
                        />
                      </FormControl>
                      <FormLabel className="!mt-0 cursor-pointer">Event Management</FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={eventForm.control}
                  name="needSecurityReferral"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4"
                        />
                      </FormControl>
                      <FormLabel className="!mt-0 cursor-pointer">Security</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit Event Booking Request"}
            </Button>
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  );
}
