import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AvailabilityBadge } from "./AvailabilityBadge";

interface EquipmentCardProps {
  slug: string;
  name: string;
  category: string;
  description?: string;
  image: {
    url: string;
    alt: string;
  };
  dayRate?: number;
  featured?: boolean;
  flexItemId?: string;
}

export function EquipmentCard({
  slug,
  name,
  category,
  description,
  image,
  dayRate,
  featured,
  flexItemId,
}: EquipmentCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {featured && (
            <Badge className="absolute top-2 right-2">Featured</Badge>
          )}
          <div className="absolute top-2 left-2">
            <Badge variant="secondary">{category}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          {dayRate && (
            <div className="text-sm">
              <span className="font-semibold text-lg">${dayRate}</span>
              <span className="text-muted-foreground">/day</span>
            </div>
          )}
          {flexItemId && <AvailabilityBadge flexItemId={flexItemId} />}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/equipment/${slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

