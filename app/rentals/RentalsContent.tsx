"use client";

import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Search, FileText, ExternalLink, Grid3x3, List, X, Download, Maximize2 } from "lucide-react";

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
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('compact');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [userSelectedView, setUserSelectedView] = useState(false);
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  // Set default view mode based on screen size
  useEffect(() => {
    if (!userSelectedView) {
      const handleResize = () => {
        // 768px is the 'md' breakpoint in Tailwind
        const isLargeScreen = window.innerWidth >= 768;
        setViewMode(isLargeScreen ? 'grid' : 'compact');
      };

      // Set initial view mode
      handleResize();

      // Add resize listener
      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [userSelectedView]);

  // Handle manual view mode change
  const handleViewModeChange = (mode: 'grid' | 'compact') => {
    setViewMode(mode);
    setUserSelectedView(true);
  };

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
      {/* Search Bar & View Toggle */}
      <div className="mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-white/40" />
            <Input
              type="text"
              placeholder="Search equipment by name, category, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 sm:pl-10 h-10 sm:h-11 text-sm sm:text-base bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="flex gap-1 border border-white/10 rounded-md bg-white/5 p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleViewModeChange('compact')}
              className={`h-8 w-8 p-0 ${viewMode === 'compact' ? 'bg-primary text-black hover:bg-primary hover:text-black' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
              title="List View"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleViewModeChange('grid')}
              className={`h-8 w-8 p-0 ${viewMode === 'grid' ? 'bg-primary text-black hover:bg-primary hover:text-black' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
              title="Grid View"
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {searchQuery && (
          <p className="mt-2 text-xs sm:text-sm text-white/60">
            Found <span className="text-primary font-semibold">{filteredEquipment.length}</span> result{filteredEquipment.length !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
        )}
      </div>

      {/* Catalog Viewer */}
      <div className="mb-6 max-w-2xl mx-auto px-2 sm:px-0">
        <div className="flex items-center justify-center">
          <Button 
            variant="outline"
            size="sm"
            className="border-white/20 bg-white/5 hover:bg-white/10 hover:border-primary/40 text-white/70 hover:text-white transition-all text-xs sm:text-sm h-8 sm:h-9"
            onClick={() => {
              // On mobile, open in new tab for better viewing
              if (window.innerWidth < 768) {
                window.open('/ShowmaxEquipmentCatalog.pdf', '_blank');
              } else {
                setShowPdfViewer(true);
              }
            }}
          >
            <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>View Full Catalog (PDF)</span>
            <Maximize2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 ml-1.5 hidden md:inline" />
            <ExternalLink className="h-3 w-3 ml-1.5 md:hidden" />
          </Button>
        </div>
      </div>

      {/* PDF Viewer Dialog - Desktop Only */}
      <Dialog open={showPdfViewer} onOpenChange={setShowPdfViewer}>
        <DialogContent 
          className="max-w-[98vw] w-[98vw] h-[95vh] p-0 gap-0 bg-black/95 border-white/20 flex flex-col"
          showCloseButton={false}
        >
          <DialogHeader className="p-3 sm:p-4 pb-2 sm:pb-3 border-b border-white/10 shrink-0">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <DialogTitle className="text-white text-base sm:text-lg lg:text-xl">Equipment Catalog</DialogTitle>
                <DialogDescription className="text-white/60 text-xs sm:text-sm mt-0.5 sm:mt-1 hidden sm:block">
                  Browse our complete equipment inventory
                </DialogDescription>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white h-7 sm:h-8 text-xs px-2 sm:px-3"
                  title="Download PDF"
                >
                  <a href="/ShowmaxEquipmentCatalog.pdf" download className="flex items-center gap-1 sm:gap-1.5">
                    <Download className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span className="hidden lg:inline">Download</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white h-7 sm:h-8 text-xs px-2 sm:px-3"
                  title="Open in new tab"
                >
                  <a href="/ShowmaxEquipmentCatalog.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-1.5">
                    <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span className="hidden lg:inline">New Tab</span>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPdfViewer(false)}
                  className="text-white/70 hover:text-white hover:bg-white/10 h-7 sm:h-8 w-7 sm:w-8 p-0"
                  title="Close (ESC)"
                >
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-neutral-900">
            <iframe
              src="/ShowmaxEquipmentCatalog.pdf#view=Fit&toolbar=1&navpanes=1&scrollbar=1"
              className="w-full h-full border-0"
              title="Equipment Catalog PDF"
              style={{ minHeight: '100%' }}
            />
          </div>
        </DialogContent>
      </Dialog>

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
            <>
              {/* Compact List View */}
              {viewMode === 'compact' && (
                <div className="space-y-2">
                  {filteredEquipment.map((item) => (
                    <Card 
                      key={item._id} 
                      className="text-white/85 hover:border-primary/50 transition-all group cursor-pointer relative overflow-hidden"
                      onClick={() => setExpandedItem(expandedItem === item._id ? null : item._id)}
                    >
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          {/* Category Badge */}
                          <Badge variant="secondary" className="capitalize text-[10px] shrink-0 hidden sm:flex">
                            {item.category}
                          </Badge>
                          
                          {/* Equipment Name - Flexible */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-sm sm:text-base line-clamp-1 group-hover:text-primary transition-colors">
                                {item.name}
                              </h3>
                              {item.featured && (
                                <Badge className="bg-primary text-black text-[9px] px-1.5 py-0 h-4 shrink-0">New</Badge>
                              )}
                            </div>
                            {/* Desktop: Show description on hover */}
                            {item.description && (
                              <p className="text-xs text-white/50 line-clamp-1 mt-0.5 hidden md:block md:group-hover:hidden">
                                {item.description}
                              </p>
                            )}
                          </div>
                          
                          {/* Quantity - Fixed Width */}
                          {item.quantity !== null && item.quantity !== undefined && (
                            <div className="text-xs sm:text-sm shrink-0 text-right">
                              <div className="flex items-center gap-1.5">
                                <span className="text-white/50 text-[10px] sm:text-xs">Qty:</span>
                                <span className="font-semibold text-primary text-sm sm:text-base">
                                  {item.quantity}
                                </span>
                              </div>
                            </div>
                          )}
                          
                          {/* Price - Fixed Width */}
                          {item.day_rate && (
                            <div className="text-xs sm:text-sm shrink-0 text-right min-w-[70px] sm:min-w-[80px]">
                              <span className="font-semibold text-primary text-sm sm:text-base">
                                ${item.day_rate}
                              </span>
                              <span className="text-white/50 text-[10px] sm:text-xs">/day</span>
                            </div>
                          )}
                        </div>

                        {/* Expandable Details - Mobile (tap to expand) */}
                        {item.description && expandedItem === item._id && (
                          <div className="mt-3 pt-3 border-t border-white/10 md:hidden animate-in slide-in-from-top-2">
                            <p className="text-xs text-white/70 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        )}

                        {/* Hover Details - Desktop */}
                        {item.description && (
                          <div className="hidden md:block md:opacity-0 md:group-hover:opacity-100 transition-opacity mt-2 pt-2 border-t border-white/10">
                            <p className="text-xs text-white/70 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </CardContent>

                      {/* Visual Indicator for Mobile */}
                      <div className="absolute bottom-1 right-1 md:hidden">
                        <div className={`w-5 h-5 flex items-center justify-center rounded-full bg-white/5 transition-transform ${expandedItem === item._id ? 'rotate-180' : ''}`}>
                          <span className="text-[10px] text-white/40">▼</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Grid View */}
              {viewMode === 'grid' && (
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredEquipment.map((item) => (
                    <Card 
                      key={item._id} 
                      className="text-white/85 hover:border-primary/50 transition-all group cursor-pointer relative"
                      onClick={() => setExpandedItem(expandedItem === item._id ? null : item._id)}
                    >
                      <CardHeader className="pb-2 p-3 sm:p-4">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <Badge variant="secondary" className="capitalize text-[10px]">
                            {item.category}
                          </Badge>
                          {item.featured && (
                            <Badge className="bg-primary text-black text-[10px]">New</Badge>
                          )}
                        </div>
                        <CardTitle className="text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                          {item.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-3 sm:p-4 pt-0">
                        {item.description && (
                          <>
                            {/* Default truncated view */}
                            <CardDescription className={`text-white/50 text-xs mb-2.5 transition-all ${expandedItem === item._id ? 'md:line-clamp-none' : 'line-clamp-2'} md:group-hover:line-clamp-none`}>
                              {item.description}
                            </CardDescription>
                            {/* Mobile expanded view */}
                            {expandedItem === item._id && (
                              <CardDescription className="md:hidden text-white/50 text-xs mb-2.5">
                                {item.description}
                              </CardDescription>
                            )}
                          </>
                        )}
                        <div className="flex items-center justify-between gap-2 text-xs">
                          {item.quantity !== null && item.quantity !== undefined && (
                            <div>
                              <span className="text-white/50">Qty: </span>
                              <span className="font-semibold text-primary text-sm">
                                {item.quantity}
                              </span>
                            </div>
                          )}
                          {item.day_rate && (
                            <div className="whitespace-nowrap">
                              <span className="font-semibold text-primary text-sm">
                                ${item.day_rate}
                              </span>
                              <span className="text-white/50">/day</span>
                            </div>
                          )}
                        </div>
                      </CardContent>

                      {/* Visual Indicator for Mobile - Grid View */}
                      {item.description && (
                        <div className="absolute top-2 right-2 md:hidden">
                          <div className={`w-4 h-4 flex items-center justify-center rounded-full bg-black/30 transition-transform ${expandedItem === item._id ? 'rotate-180' : ''}`}>
                            <span className="text-[8px] text-white/60">▼</span>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              )}
            </>
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

