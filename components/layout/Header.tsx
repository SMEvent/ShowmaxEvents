"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Set<string>>(new Set());
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<Set<string>>(new Set());

  // Define navigation structure (moved before useEffect to be accessible)
  const leftNavigation = [
    {
      name: "Events",
      href: "/events#events",
      hasDropdown: true,
      items: [
        { 
          name: "Live Event Production", 
          href: "/events#live-events",
          hasSubmenu: true,
          subItems: [
            { name: "Professional Audio Systems", href: "/events#live-events-audio" },
            { name: "Event Lighting", href: "/events#live-events-lighting" },
            { name: "LED Wall Rental", href: "/events#live-events-video" },
            { name: "Rigging Services", href: "/events#live-events-rigging" },
            { name: "Staging & Drape", href: "/events#live-events-staging-drape" },
          ]
        },
        { 
          name: "Hybrid & Virtual Events", 
          href: "/events#hybrid-events",
          hasSubmenu: true,
          subItems: [
            { name: "Live Streaming", href: "/events#hybrid-events-streaming" },
            { name: "Multi-Camera Production", href: "/events#hybrid-events-multicam" },
            { name: "Virtual Platforms", href: "/events#hybrid-events-platforms" },
            { name: "Remote Speaker Management", href: "/events#hybrid-events-remote" },
          ]
        },
      ],
    },
    {
      name: "Film & Television",
      href: "/film-tv",
      hasDropdown: false,
    },
    {
      name: "Installations",
      href: "/installs",
      hasDropdown: true,
      items: [
        { name: "LED Wall Installations", href: "/installs#installs-led-walls" },
        { name: "Professional Audio Systems", href: "/installs#installs-audio" },
        { name: "Lighting Systems", href: "/installs#installs-lighting" },
        { name: "Video & Projection", href: "/installs#installs-video" },
        { name: "Rigging & Power", href: "/installs#installs-rigging" },
      ],
    },
  ];

  const rightNavigation = [
    { name: "Rentals", href: "/rentals", hasDropdown: false },
    { name: "Sales", href: "/sales", hasDropdown: false },
    { 
      name: "Venues", 
      href: "/venues", 
      hasDropdown: true,
      items: [
        { name: "Aurum Event Centre", href: "/venues#aurum-event-centre" },
        { name: "Rocky Mountaineer Station", href: "/venues#rocky-mountaineer-station" },
        { name: "Plaza of Nations", href: "/venues#plaza-of-nations" },
      ]
    },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  // Track active section using Intersection Observer
  useEffect(() => {
    // Get all navigation links to find which sections to observe
    const getAllSectionIds = (): string[] => {
      const ids: string[] = [];
      
      // Helper to extract section IDs from navigation items
      const extractIds = (items: any[]) => {
        items.forEach((item) => {
          if (item.href) {
            const hashIndex = item.href.indexOf("#");
            if (hashIndex > 0) {
              const hash = item.href.substring(hashIndex + 1);
              if (hash) ids.push(hash);
            }
          }
          if (item.subItems) {
            extractIds(item.subItems);
          }
        });
      };

      extractIds(leftNavigation.flatMap(nav => nav.items || []));
      return ids;
    };

    const sectionIds = getAllSectionIds();
    
    // Only observe sections if we're on a page that has them
    if (sectionIds.length === 0) {
      // For pages without sections, use hash-based detection
      const updateHash = () => {
        setActiveSectionId(window.location.hash.replace("#", ""));
      };
      updateHash();
      window.addEventListener("hashchange", updateHash);
      return () => window.removeEventListener("hashchange", updateHash);
    }

    // Create Intersection Observer with optimized settings
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: [0, 0.5]
    };

    let isUserScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;
    let hashUpdateTimeout: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        
        const topSection = visibleEntries[0];
        if (topSection && topSection.target.id) {
          const id = topSection.target.id;
          setActiveSectionId(id);
          
          // Only update hash after scrolling has stopped to prevent jumps
          if (hashUpdateTimeout) {
            clearTimeout(hashUpdateTimeout);
          }
          
          if (!isUserScrolling) {
            hashUpdateTimeout = setTimeout(() => {
              if (window.location.hash !== `#${id}`) {
                // Use replaceState to avoid triggering scroll
                const currentScroll = window.scrollY;
                window.history.replaceState(null, "", `#${id}`);
                // Restore scroll position if it changed
                if (window.scrollY !== currentScroll) {
                  window.scrollTo(0, currentScroll);
                }
              }
            }, 500);
          }
        }
      }
    }, observerOptions);

    // Observe all sections
    const observedElements: Element[] = [];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observedElements.push(element);
      }
    });
    
    // Track when user is actively scrolling
    const handleScroll = () => {
      isUserScrolling = true;
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
      }, 150);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Listen for hash changes (when clicking nav links)
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionIds.includes(hash)) {
        setActiveSectionId(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      if (hashUpdateTimeout) {
        clearTimeout(hashUpdateTimeout);
      }
      observedElements.forEach(el => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when sidebar is open and reset dropdowns when closed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Close all dropdowns when mobile menu closes
      setOpenMobileDropdowns(new Set());
      setOpenMobileSubmenus(new Set());
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    if (href === "#") return false;

    // Split href into path and hash
    const hashIndex = href.indexOf("#");
    const basePath = hashIndex > 0 ? href.substring(0, hashIndex) : href;
    const hrefSectionId = hashIndex > 0 ? href.substring(hashIndex + 1) : "";

    // Check if pathname matches
    if (basePath === "/") {
      if (pathname !== "/") return false;
    } else {
      // Remove trailing slash for comparison
      const normalizedBase = basePath.replace(/\/$/, "");
      const normalizedPath = pathname.replace(/\/$/, "");
      if (!normalizedPath.startsWith(normalizedBase)) return false;
    }

    // If href has a section ID, check if it matches the active section
    if (hrefSectionId) {
      return activeSectionId === hrefSectionId;
    }

    // If href has no hash, only match if we're on that page without a specific section
    // This prevents parent items from being highlighted when on a subsection
    return activeSectionId === "";
  };

  // Helper functions for mobile dropdown toggles
  const toggleMobileDropdown = (itemName: string) => {
    setOpenMobileDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemName)) {
        newSet.delete(itemName);
        // Also close any open submenus for this dropdown
        setOpenMobileSubmenus((subPrev) => {
          const newSubSet = new Set(subPrev);
          // Remove submenus that belong to this dropdown
          Array.from(subPrev).forEach((subName) => {
            if (subName.startsWith(itemName)) {
              newSubSet.delete(subName);
            }
          });
          return newSubSet;
        });
      } else {
        newSet.add(itemName);
      }
      return newSet;
    });
  };

  const toggleMobileSubmenu = (subItemName: string) => {
    setOpenMobileSubmenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(subItemName)) {
        newSet.delete(subItemName);
      } else {
        newSet.add(subItemName);
      }
      return newSet;
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-[25px] px-4">
      <nav
        className="container mx-auto relative flex h-16 items-center justify-between px-4 rounded-xl glass-panel overflow-visible"
      >
        {/* Left Navigation */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 flex-1 justify-end max-w-[40%] pr-8 xl:pr-16">
          {leftNavigation.map((item) => {
            const active = isActive(item.href);
            if (item.hasDropdown && item.items) {
              // Special handling for Events - hover dropdown with click navigation
              if (item.name === "Events") {
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => setEventsDropdownOpen(true)}
                    onMouseLeave={() => setEventsDropdownOpen(false)}
                  >
                    <DropdownMenu 
                      open={eventsDropdownOpen} 
                      onOpenChange={(open) => {
                        setEventsDropdownOpen(open);
                        if (!open) {
                          setOpenSubmenu(null);
                        }
                      }} 
                      modal={false}
                    >
                      <DropdownMenuTrigger asChild>
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            // Ensure navigation happens on click
                            setEventsDropdownOpen(false);
                          }}
                          className={`relative font-semibold text-xs xl:text-sm whitespace-nowrap px-1.5 xl:px-2.5 py-2 rounded-full transition-all ${
                            active
                              ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(250,204,21,0.55)]"
                              : "text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="start"
                        className="rounded-xl border border-primary/20 p-2 min-w-[220px] !overflow-visible bg-black/95 backdrop-blur-sm"
                        onMouseEnter={() => setEventsDropdownOpen(true)}
                        onMouseLeave={() => setEventsDropdownOpen(false)}
                      >
                        {item.items.map((subItem) => {
                          if ('hasSubmenu' in subItem && subItem.hasSubmenu && subItem.subItems) {
                            const isSubmenuOpen = openSubmenu === subItem.name;
                            return (
                              <DropdownMenuSub 
                                key={subItem.name}
                                open={isSubmenuOpen}
                                onOpenChange={(open) => {
                                  if (open) {
                                    setOpenSubmenu(subItem.name);
                                  } else if (openSubmenu === subItem.name) {
                                    setOpenSubmenu(null);
                                  }
                                }}
                              >
                                <DropdownMenuSubTrigger 
                                  className="text-white hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground rounded-lg transition-colors cursor-pointer"
                                  onMouseEnter={() => {
                                    // Immediately close other submenus and open this one
                                    setOpenSubmenu(subItem.name);
                                  }}
                                >
                                  {subItem.name}
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent 
                                  className="rounded-xl border border-primary/20 min-w-[240px] !overflow-visible bg-black/95 backdrop-blur-sm"
                                  sideOffset={8}
                                  alignOffset={-8}
                                  onMouseEnter={() => {
                                    setOpenSubmenu(subItem.name);
                                  }}
                                  onMouseLeave={() => {
                                    setOpenSubmenu(null);
                                  }}
                                >
                                  <div className="flex flex-col p-2" style={{ gap: '4px' }}>
                                    <Link 
                                      href="/events#events"
                                      className="block w-full px-3 py-2 text-sm text-white rounded-lg hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground transition-colors no-underline"
                                      style={{ display: 'block' }}
                                    >
                                      Overview
                                    </Link>
                                    <div className="h-px bg-gray-700 my-1" style={{ display: 'block' }} />
                                    {subItem.subItems.map((subSubItem) => (
                                      <Link
                                        key={subSubItem.name}
                                        href={subSubItem.href}
                                        className="block w-full px-3 py-2 text-sm text-white rounded-lg hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground transition-colors no-underline whitespace-nowrap"
                                        style={{ display: 'block' }}
                                      >
                                        {subSubItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </DropdownMenuSubContent>
                              </DropdownMenuSub>
                            );
                          }
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center w-full px-3 py-2 text-sm text-white rounded-lg hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground transition-colors no-underline mb-1"
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                );
              }
              // Other dropdown items keep the original behavior
              return (
                <div key={item.name} className="flex items-center gap-1">
                <Link
                  href={item.href}
                  className={`relative font-semibold text-xs xl:text-sm whitespace-nowrap px-1.5 xl:px-2.5 py-2 rounded-full transition-all ${
                    active
                      ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(250,204,21,0.55)]"
                      : "text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]"
                  }`}
                >
                  {item.name}
                </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        aria-label={`More ${item.name} options`}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                      active
                        ? "bg-primary text-primary-foreground shadow-[0_0_22px_rgba(250,204,21,0.4)]"
                        : "text-white/80 hover:text-primary hover:bg-[rgba(250,204,21,0.16)] hover:shadow-[0_0_16px_rgba(250,204,21,0.3)]"
                    }`}
                      >
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="rounded-xl border border-primary/20 p-2 min-w-[220px] !overflow-visible bg-black/95 backdrop-blur-sm"
                    >
                      {item.items.map((subItem) => {
                        if ('hasSubmenu' in subItem && subItem.hasSubmenu && subItem.subItems) {
                          return (
                            <DropdownMenuSub key={subItem.name}>
                              <DropdownMenuSubTrigger className="text-white hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground rounded-lg transition-colors cursor-pointer">
                                {subItem.name}
                              </DropdownMenuSubTrigger>
                              <DropdownMenuSubContent 
                                className="rounded-xl border border-primary/20 min-w-[240px] !overflow-visible bg-black/95 backdrop-blur-sm"
                                sideOffset={8}
                                alignOffset={-8}
                              >
                                <div className="flex flex-col p-2" style={{ gap: '4px' }}>
                                  <Link 
                                    href="/events#events"
                                    className="block w-full px-3 py-2 text-sm text-white rounded-lg hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground transition-colors no-underline"
                                    style={{ display: 'block' }}
                                  >
                                    Overview
                                  </Link>
                                  <div className="h-px bg-gray-700 my-1" style={{ display: 'block' }} />
                                  {subItem.subItems.map((subSubItem) => (
                                    <Link
                                      key={subSubItem.name}
                                      href={subSubItem.href}
                                      className="block w-full px-3 py-2 text-sm text-white rounded-lg hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground transition-colors no-underline whitespace-nowrap"
                                      style={{ display: 'block' }}
                                    >
                                      {subSubItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>
                          );
                        }
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center w-full px-3 py-2 text-sm text-white rounded-lg hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground transition-colors no-underline mb-1"
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-semibold text-xs xl:text-sm whitespace-nowrap px-1.5 xl:px-2.5 py-2 rounded-full transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(250,204,21,0.55)]"
                    : "text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Centered Logo - Absolutely positioned for true centering */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <Link href="/" className="flex items-center pointer-events-auto">
            <Image
              src="/showmax_logo.png"
              alt="ShowMax Production Services"
              width={180}
              height={60}
              className="h-16 w-auto md:h-20 lg:h-24 xl:h-40"
              priority
              unoptimized
            />
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 flex-1 justify-start max-w-[40%] pl-8 xl:pl-16">
          {rightNavigation.map((item) => {
            const active = isActive(item.href);
            if (item.hasDropdown && item.items) {
              return (
                <div key={item.name} className="flex items-center gap-1">
                  <Link
                    href={item.href}
                    className={`relative font-semibold text-xs xl:text-sm whitespace-nowrap px-1.5 xl:px-2.5 py-2 rounded-full transition-all ${
                      active
                        ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(250,204,21,0.55)]"
                        : "text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]"
                    }`}
                  >
                    {item.name}
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        aria-label={`More ${item.name} options`}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                          active
                            ? "bg-primary text-primary-foreground shadow-[0_0_22px_rgba(250,204,21,0.4)]"
                            : "text-white/80 hover:text-primary hover:bg-[rgba(250,204,21,0.16)] hover:shadow-[0_0_16px_rgba(250,204,21,0.3)]"
                        }`}
                      >
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="rounded-xl border border-primary/20 p-2 min-w-[220px] !overflow-visible bg-black/95 backdrop-blur-sm"
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center w-full px-3 py-2 text-sm text-white rounded-lg hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground transition-colors no-underline mb-1"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-semibold text-xs xl:text-sm whitespace-nowrap px-1.5 xl:px-2.5 py-2 rounded-full transition-all ${
                  active 
                    ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(250,204,21,0.55)]" 
                    : "text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-primary hover:bg-[rgba(250,204,21,0.12)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <>
        {/* Backdrop/Overlay with Haze */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)',
              backdropFilter: 'blur(2px)'
            }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden transform transition-transform duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ 
            backdropFilter: 'blur(20px)', 
            WebkitBackdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            willChange: mobileMenuOpen ? 'transform' : 'auto',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)'
          }}
        >
          {/* Animated Moving Circular Lights */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large light - top area */}
            <div 
              className="absolute animate-light-1"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.7) 0%, rgba(250, 204, 21, 0.4) 40%, rgba(250, 204, 21, 0.1) 70%, transparent 85%)',
                filter: 'blur(20px)',
                top: '10%',
                left: '10%',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)'
              }}
            />
            
            {/* Medium light - middle left */}
            <div 
              className="absolute animate-light-2"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.65) 0%, rgba(250, 204, 21, 0.35) 50%, rgba(250, 204, 21, 0.1) 70%, transparent 85%)',
                filter: 'blur(15px)',
                top: '30%',
                left: '5%',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)'
              }}
            />
            
            {/* Small light - center */}
            <div 
              className="absolute animate-light-3"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.6) 0%, rgba(250, 204, 21, 0.3) 50%, rgba(250, 204, 21, 0.1) 70%, transparent 85%)',
                filter: 'blur(12px)',
                top: '50%',
                left: '20%',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)'
              }}
            />
            
            {/* Medium-large light - bottom area */}
            <div 
              className="absolute animate-light-4"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.65) 0%, rgba(250, 204, 21, 0.35) 40%, rgba(250, 204, 21, 0.1) 70%, transparent 85%)',
                filter: 'blur(18px)',
                top: '65%',
                left: '15%',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)'
              }}
            />
            
            {/* Small light - top right */}
            <div 
              className="absolute animate-light-5"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.55) 0%, rgba(250, 204, 21, 0.3) 50%, rgba(250, 204, 21, 0.1) 70%, transparent 85%)',
                filter: 'blur(10px)',
                top: '20%',
                left: '50%',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)'
              }}
            />
            
            {/* Extra small light - middle right */}
            <div 
              className="absolute animate-light-1"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.5) 0%, rgba(250, 204, 21, 0.25) 50%, rgba(250, 204, 21, 0.1) 70%, transparent 85%)',
                filter: 'blur(8px)',
                top: '45%',
                left: '60%',
                animationDelay: '2s',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)'
              } as React.CSSProperties}
            />
            
            {/* Medium light - bottom right */}
            <div 
              className="absolute animate-light-2"
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.6) 0%, rgba(250, 204, 21, 0.3) 50%, rgba(250, 204, 21, 0.1) 70%, transparent 85%)',
                filter: 'blur(14px)',
                top: '75%',
                left: '40%',
                animationDelay: '1s',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)'
              } as React.CSSProperties}
            />
          </div>
          
          {/* Subtle haze overlay for depth */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: 'radial-gradient(ellipse at top left, rgba(250, 204, 21, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(0, 0, 0, 0.3) 0%, transparent 50%)'
            }}
          />
          
          <div className="flex flex-col h-full relative z-10">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-lg font-bold text-white">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:bg-[rgba(250,204,21,0.12)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {/* Left Navigation Mobile */}
              {leftNavigation.map((item) => {
                const active = isActive(item.href);
                const isDropdownOpen = openMobileDropdowns.has(item.name);
                
                if (item.hasDropdown && item.items) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className={`flex-1 py-2 px-3 rounded-full font-semibold text-sm transition-all ${
                            active
                              ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(250,204,21,0.55)]"
                              : "text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => toggleMobileDropdown(item.name)}
                          className={`ml-2 p-2 rounded-full transition-all ${
                            isDropdownOpen
                              ? "text-primary bg-[rgba(250,204,21,0.14)]"
                              : "text-white/70 hover:text-primary hover:bg-[rgba(250,204,21,0.1)]"
                          }`}
                          aria-label={`Toggle ${item.name} menu`}
                        >
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {isDropdownOpen && (
                        <div className="pl-4 space-y-1 mt-1 animate-in slide-in-from-top-2 duration-200">
                          {item.items.map((subItem) => {
                            const subActive = isActive(subItem.href);
                            const hasSubmenu = 'hasSubmenu' in subItem && subItem.hasSubmenu && subItem.subItems;
                            const isSubmenuOpen = openMobileSubmenus.has(subItem.name);
                            
                            return (
                              <div key={subItem.name} className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <Link
                                    href={subItem.href}
                                    className={`flex-1 py-1.5 px-3 rounded-full text-sm transition-all ${
                                      subActive
                                        ? "bg-primary text-primary-foreground shadow-[0_0_28px_rgba(250,204,21,0.4)]"
                                        : "text-gray-200 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                                    }`}
                                    onClick={() => {
                                      if (!hasSubmenu) {
                                        setMobileMenuOpen(false);
                                      }
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                  {hasSubmenu && (
                                    <button
                                      onClick={() => toggleMobileSubmenu(subItem.name)}
                                      className={`ml-2 p-1.5 rounded-full transition-all ${
                                        isSubmenuOpen
                                          ? "text-primary bg-[rgba(250,204,21,0.14)]"
                                          : "text-white/60 hover:text-primary hover:bg-[rgba(250,204,21,0.1)]"
                                      }`}
                                      aria-label={`Toggle ${subItem.name} submenu`}
                                    >
                                      <ChevronRight 
                                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                          isSubmenuOpen ? "rotate-90" : ""
                                        }`}
                                      />
                                    </button>
                                  )}
                                </div>
                                {hasSubmenu && isSubmenuOpen && subItem.subItems && (
                                  <div className="pl-4 space-y-0.5 mt-0.5 animate-in slide-in-from-left-2 duration-200">
                                    {subItem.subItems.map((subSubItem) => {
                                      const subSubActive = isActive(subSubItem.href);
                                      return (
                                        <Link
                                          key={subSubItem.name}
                                          href={subSubItem.href}
                                          className={`block py-1.5 px-3 rounded-full text-xs transition-all ${
                                            subSubActive
                                              ? "bg-primary/80 text-primary-foreground shadow-[0_0_24px_rgba(250,204,21,0.35)]"
                                              : "text-gray-300 hover:text-primary hover:bg-[rgba(250,204,21,0.12)] hover:shadow-[0_0_18px_rgba(250,204,21,0.25)]"
                                          }`}
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          {subSubItem.name}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-2 px-3 rounded-full font-semibold text-sm transition-all ${
                      active
                        ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(250,204,21,0.55)]"
                        : "text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="h-px bg-white/10 my-3" />

              {/* Right Navigation Mobile */}
              {rightNavigation.map((item) => {
                const active = isActive(item.href);
                const isDropdownOpen = openMobileDropdowns.has(item.name);
                
                if (item.hasDropdown && item.items) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className={`flex-1 py-2 px-3 rounded-full font-semibold text-sm transition-all ${
                            active
                              ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(250,204,21,0.55)]"
                              : "text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => toggleMobileDropdown(item.name)}
                          className={`ml-2 p-2 rounded-full transition-all ${
                            isDropdownOpen
                              ? "text-primary bg-[rgba(250,204,21,0.14)]"
                              : "text-white/70 hover:text-primary hover:bg-[rgba(250,204,21,0.1)]"
                          }`}
                          aria-label={`Toggle ${item.name} menu`}
                        >
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {isDropdownOpen && (
                        <div className="pl-4 space-y-1 mt-1 animate-in slide-in-from-top-2 duration-200">
                          {item.items.map((subItem) => {
                            const subActive = isActive(subItem.href);
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block py-1.5 px-3 rounded-full text-sm transition-all ${
                                  subActive
                                    ? "bg-primary text-primary-foreground shadow-[0_0_28px_rgba(250,204,21,0.4)]"
                                    : "text-gray-200 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-2 px-3 rounded-full font-semibold text-sm transition-all ${
                      active 
                        ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(250,204,21,0.55)]" 
                        : "text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

            </div>
          </div>
        </div>
      </>
    </header>
  );
}

