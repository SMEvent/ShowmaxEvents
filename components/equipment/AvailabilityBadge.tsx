"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { checkAvailability } from "@/lib/flex/client";
import { FlexAvailabilityResponse } from "@/lib/flex/types";
import { format, addDays } from "date-fns";

interface AvailabilityBadgeProps {
  flexItemId: string;
  startDate?: Date;
  endDate?: Date;
}

export function AvailabilityBadge({
  flexItemId,
  startDate,
  endDate,
}: AvailabilityBadgeProps) {
  const [availability, setAvailability] =
    useState<FlexAvailabilityResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const start = startDate || new Date();
        const end = endDate || addDays(new Date(), 7);

        const result = await checkAvailability(flexItemId, {
          start: format(start, "yyyy-MM-dd"),
          end: format(end, "yyyy-MM-dd"),
        });

        setAvailability(result);
      } catch (error) {
        console.error("Failed to fetch availability:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, [flexItemId, startDate, endDate]);

  if (loading) {
    return (
      <Badge variant="outline" className="animate-pulse">
        Checking...
      </Badge>
    );
  }

  if (!availability) {
    return (
      <Badge variant="outline">Unavailable</Badge>
    );
  }

  if (availability.available && availability.quantity > 0) {
    return (
      <Badge variant="default" className="bg-green-500">
        Available ({availability.quantity})
      </Badge>
    );
  }

  return <Badge variant="destructive">Unavailable</Badge>;
}

