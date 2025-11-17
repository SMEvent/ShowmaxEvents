"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Menu, X, User, ChevronDown } from "lucide-react";

export function Header() {
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSectionId, setActiveSectionId] = useState<string>("");

  // Define navigation structure (moved before useEffect to be accessible)
  const leftNavigation = [
    {
      name: "Our Services",
      href: "/production#production",
      hasDropdown: true,
      items: [
        { 
          name: "Live Event Production", 
          href: "/production#live-events",
          hasSubmenu: true,
          subItems: [
            { name: "Professional Audio Systems", href: "/production#live-events-audio" },
            { name: "Event Lighting", href: "/production#live-events-lighting" },
            { name: "LED Wall Rental", href: "/production#live-events-video" },
            { name: "Rigging Services", href: "/production#live-events-rigging" },
          ]
        },
        { 
          name: "Hybrid & Virtual Events", 
          href: "/production#hybrid-events",
          hasSubmenu: true,
          subItems: [
            { name: "Live Streaming", href: "/production#hybrid-events-streaming" },
            { name: "Multi-Camera Production", href: "/production#hybrid-events-multicam" },
            { name: "Virtual Platforms", href: "/production#hybrid-events-platforms" },
            { name: "Remote Speaker Management", href: "/production#hybrid-events-remote" },
          ]
        },
        { name: "Venues", href: "/production#venues" },
      ],
    },
    {
      name: "Installs",
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
    {
      name: "Rentals",
      href: "/rentals",
      hasDropdown: true,
      items: [
        { name: "Booking System", href: "/rentals/booking-system" },
      ],
    },
  ];

  const rightNavigation = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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

    // Create Intersection Observer with optimized settings for mobile
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px", // Trigger when section is in upper portion of viewport
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1] // More granular thresholds for better detection
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the section that's most visible and closest to the top
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Sort by intersection ratio and position, prefer higher ratio and higher position
        visibleEntries.sort((a, b) => {
          const ratioDiff = (b.intersectionRatio || 0) - (a.intersectionRatio || 0);
          if (Math.abs(ratioDiff) > 0.1) return ratioDiff;
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });
        
        const topSection = visibleEntries[0];
        if (topSection) {
          const id = topSection.target.id;
          if (id) {
            setActiveSectionId(id);
            // Update URL hash without scrolling
            if (window.location.hash !== `#${id}`) {
              window.history.replaceState(null, "", `#${id}`);
            }
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

    // Cache DOM elements to avoid repeated queries
    const sectionElements = new Map<string, HTMLElement>();
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionElements.set(id, element);
      }
    });

    // Minimal scroll handler - only updates when scrolling slows or stops
    // Intersection Observer handles active updates during scrolling
    let scrollTimeout: NodeJS.Timeout | null = null;
    let rafId: number | null = null;
    let lastScrollTime = 0;
    let lastScrollPosition = 0;
    let isScrolling = false;
    const SCROLL_THROTTLE_MS = 250; // Increased throttle for fast scrolling
    
    const handleScroll = () => {
      const now = Date.now();
      const currentScroll = window.scrollY;
      const scrollDelta = Math.abs(currentScroll - lastScrollPosition);
      lastScrollPosition = currentScroll;
      isScrolling = true;
      
      // Skip updates during fast scrolling - let Intersection Observer handle it
      // Only process if scroll has slowed down significantly
      if (now - lastScrollTime < SCROLL_THROTTLE_MS || scrollDelta > 50) {
        return;
      }
      lastScrollTime = now;
      
      // Cancel any pending requestAnimationFrame
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      
      // Use requestAnimationFrame for smooth updates
      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 200;
        let activeId = "";
        
        // Use cached elements for better performance
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const id = sectionIds[i];
          const element = sectionElements.get(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            
            // Check if section is in viewport
            if (elementTop <= scrollPosition && elementTop + rect.height >= scrollPosition - 300) {
              activeId = id;
              break;
            }
          }
        }
        
        // If no section in view, find the last one we scrolled past
        if (!activeId) {
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const id = sectionIds[i];
            const element = sectionElements.get(id);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = rect.top + window.scrollY;
              
              if (elementTop <= scrollPosition) {
                activeId = id;
                break;
              }
            }
          }
        }

        if (activeId && activeId !== activeSectionId) {
          setActiveSectionId(activeId);
        }
        
        rafId = null;
      });
    };

    // Update URL hash only after scrolling stops
    let scrollEndTimeout: NodeJS.Timeout | null = null;
    const handleScrollEnd = () => {
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout);
      }
      scrollEndTimeout = setTimeout(() => {
        isScrolling = false;
        // Update hash only when scrolling has completely stopped
        if (activeSectionId && window.location.hash !== `#${activeSectionId}`) {
          window.history.replaceState(null, "", `#${activeSectionId}`);
        }
      }, 400);
    };

    // Initial check
    const initialTimeout = setTimeout(handleScroll, 100);
    // Use passive listener for better scroll performance
    // Only attach scroll handler as fallback - Intersection Observer is primary
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScrollEnd, { passive: true });
    
    // Also listen for hash changes (when clicking nav links)
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionIds.includes(hash)) {
        setActiveSectionId(hash);
      } else {
        // If hash doesn't match, update based on scroll
        setTimeout(handleScroll, 50);
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      clearTimeout(initialTimeout);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout);
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      observedElements.forEach(el => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollEnd);
      window.removeEventListener("hashchange", handleHashChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-[25px] px-4">
      <nav
        className="container mx-auto relative flex h-16 items-center justify-between px-4 rounded-xl glass-panel overflow-visible"
      >
        {/* Left Navigation */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-1 min-w-0 max-w-[calc(50%-110px)] pr-14 xl:pr-28 justify-end">
          {leftNavigation.map((item) => {
            const active = isActive(item.href);
            if (item.hasDropdown && item.items) {
              return (
                <div key={item.name} className="flex items-center gap-1">
                <Link
                  href={item.href}
                  className={`relative font-semibold text-xs xl:text-sm whitespace-nowrap px-2 xl:px-3 py-2 rounded-full transition-all ${
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
                        if (subItem.hasSubmenu && subItem.subItems) {
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
                                    href="/production#production"
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
                className={`relative font-semibold text-xs xl:text-sm whitespace-nowrap px-2 xl:px-3 py-2 rounded-full transition-all ${
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
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

        {/* Right Navigation & Auth */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-1 justify-start min-w-0 max-w-[calc(50%-110px)] pl-14 xl:pl-28">
          {rightNavigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-semibold text-xs xl:text-sm whitespace-nowrap px-2 xl:px-3 py-2 rounded-full transition-all ${
                  active 
                    ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(250,204,21,0.55)]" 
                    : "text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-2 xl:gap-3 ml-2 xl:ml-4 flex-shrink-0">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden md:flex text-white hover:text-primary hover:bg-[rgba(250,204,21,0.12)] flex-shrink-0"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end"
                  className="rounded-xl border border-primary/20 px-2 py-2 bg-black/95 backdrop-blur-sm"
                >
                  <DropdownMenuItem asChild className="text-white/85 hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground rounded-lg transition-colors">
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-white/85 hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground rounded-lg transition-colors">
                    <Link href="/dashboard/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem onClick={signOut} className="text-white/85 hover:bg-[rgba(250,204,21,0.18)] hover:text-primary-foreground rounded-lg transition-colors">
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="ghost"
                asChild
                className="hidden md:flex text-white hover:bg-gray-800 flex-shrink-0 whitespace-nowrap text-xs xl:text-sm px-2 xl:px-3"
              >
                <Link href="/login">Sign In</Link>
              </Button>
            )}
          </div>
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
          style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
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
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
              {/* Left Navigation Mobile */}
              {leftNavigation.map((item) => {
                const active = isActive(item.href);
                if (item.hasDropdown && item.items) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <Link
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
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem) => {
                          const subActive = isActive(subItem.href);
                          return (
                            <div key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className={`block py-2 px-3 rounded-full text-sm transition-all ${
                                  subActive
                                    ? "bg-primary text-primary-foreground shadow-[0_0_28px_rgba(250,204,21,0.4)]"
                                    : "text-gray-200 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                              {subItem.hasSubmenu && subItem.subItems && (
                                <div className="pl-4 space-y-1 mt-1">
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

              {/* Right Navigation Mobile */}
              {rightNavigation.map((item) => {
                const active = isActive(item.href);
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

              {/* Auth Section */}
              <div className="pt-4 space-y-2 border-t border-white/10 mt-4">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="block py-2 px-3 rounded-full font-semibold text-sm text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/dashboard/profile"
                      className="block py-2 px-3 rounded-full font-semibold text-sm text-white/90 hover:text-primary hover:bg-[rgba(250,204,21,0.14)] hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full border border-primary/25 text-white hover:text-primary hover:bg-[rgba(250,204,21,0.12)] mt-2"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        signOut();
                      }}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border border-primary/25 text-white hover:text-primary hover:bg-[rgba(250,204,21,0.12)]"
                    asChild
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/login">Sign In</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </header>
  );
}

