"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Equipment {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  description?: string;
  day_rate?: number;
  quantity?: number;
  featured?: boolean;
}

interface RentalsContentProps {
  equipment: Equipment[];
}

export function RentalsContent({ equipment }: RentalsContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Group equipment by category
  const equipmentByCategory = equipment.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, Equipment[]>);

  // Filter equipment by category and search query
  const filteredEquipment = useMemo(() => {
    let filtered = selectedCategory === "all" 
      ? equipment 
      : equipment.filter(item => item.category === selectedCategory);

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [equipment, selectedCategory, searchQuery]);

  const categories = [
    { value: "all", label: "All Equipment", count: equipment.length },
    { value: "audio", label: "Audio", count: equipmentByCategory.audio?.length || 0 },
    { value: "video", label: "Video", count: equipmentByCategory.video?.length || 0 },
    { value: "lighting", label: "Lighting", count: equipmentByCategory.lighting?.length || 0 },
    { value: "staging", label: "Staging", count: equipmentByCategory.staging?.length || 0 },
    { value: "accessories", label: "Accessories", count: equipmentByCategory.accessories?.length || 0 },
  ];

  return (
    <div className="mt-8 sm:mt-12">
      {/* Search Bar */}
      <div className="mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-white/40" />
          <Input
            type="text"
            placeholder="Search equipment..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 sm:pl-10 h-11 sm:h-12 text-sm sm:text-base bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary"
          />
        </div>
        {searchQuery && (
          <p className="mt-2 text-xs sm:text-sm text-white/60 text-center">
            Found {filteredEquipment.length} result{filteredEquipment.length !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
        )}
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-6 sm:mb-8 h-auto gap-1 p-1">
          {categories.map((cat) => (
            <TabsTrigger 
              key={cat.value} 
              value={cat.value} 
              className="text-[10px] xs:text-xs sm:text-sm py-2 sm:py-2.5 px-1 sm:px-3 data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              <span className="truncate">{cat.label}</span>
              <span className="ml-1">({cat.count})</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-6 sm:mt-8">
          {filteredEquipment.length > 0 ? (
            <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredEquipment.map((item) => (
                <Card key={item._id} className="text-white/85 hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-3 p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary" className="capitalize text-[10px] sm:text-xs">
                        {item.category}
                      </Badge>
                      {item.featured && (
                        <Badge className="bg-primary text-black text-[10px] sm:text-xs">Featured</Badge>
                      )}
                    </div>
                    <CardTitle className="text-base sm:text-lg leading-snug line-clamp-2">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    {item.description && (
                      <CardDescription className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                        {item.description}
                      </CardDescription>
                    )}
                    <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
                      {item.quantity !== null && item.quantity !== undefined && (
                        <div className="text-xs sm:text-sm">
                          <span className="text-white/60">Available: </span>
                          <span className="font-semibold text-primary text-sm sm:text-base">
                            {item.quantity}
                          </span>
                          <span className="text-white/60"> unit{item.quantity !== 1 ? 's' : ''}</span>
                        </div>
                      )}
                      {item.day_rate && (
                        <div className="text-xs sm:text-sm whitespace-nowrap">
                          <span className="font-semibold text-primary text-base sm:text-lg">
                            ${item.day_rate}
                          </span>
                          <span className="text-white/60">/day</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
              ) : (
                <div className="text-center py-12 px-4">
                  <p className="text-white/60 text-sm sm:text-base">
                    {searchQuery 
                      ? `No equipment found matching "${searchQuery}"` 
                      : "No equipment found in this category."}
                  </p>
                  {searchQuery && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSearchQuery("")}
                      className="mt-4"
                    >
                      Clear search
                    </Button>
                  )}
                </div>
              )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

