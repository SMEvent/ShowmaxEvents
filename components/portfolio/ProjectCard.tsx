import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  projectName: string;
  client?: string;
  eventType?: string;
  eventDate?: string;
  location?: string;
  image: {
    url: string;
    alt: string;
  };
  featured?: boolean;
}

export function ProjectCard({
  slug,
  projectName,
  client,
  eventType,
  eventDate,
  location,
  image,
  featured,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {featured && (
            <Badge className="absolute top-2 right-2">Featured</Badge>
          )}
          {eventType && (
            <div className="absolute top-2 left-2">
              <Badge variant="secondary">{eventType}</Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">
          {projectName}
        </h3>
        {client && (
          <p className="text-sm text-muted-foreground mb-3">{client}</p>
        )}
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          {eventDate && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{eventDate}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" asChild className="w-full">
          <Link href={`/portfolio/${slug}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

