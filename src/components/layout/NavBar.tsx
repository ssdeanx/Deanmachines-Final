'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Home,
  ChevronDown,
  Brain,
  Database,
  Wrench,
  Workflow,
  Building,
  Headset,
  BarChart,
  Rocket,
  Code,
  BookOpen,
  LineChart,
  type LucideIcon,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/common/SearchInput";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { UserNav } from "@/components/user/UserNav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { IconWrapper } from "@/components/common/IconWrapper";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { type NavItem } from "@/types/nav";

/**
 * Maps icon strings from config to their corresponding Lucide icon components
 */
const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  database: Database,
  wrench: Wrench,
  workflow: Workflow,
  building: Building,
  headset: Headset,
  barChart: BarChart,
  chart: LineChart, // Added missing chart icon
  rocket: Rocket,
  code: Code,
  bookOpen: BookOpen,
};

/**
 * Component for rendering a list item in dropdown navigation
 * @param title - The title of the navigation item
 * @param href - The link destination
 * @param description - Optional description text
 * @param icon - Optional icon identifier
 * @returns A styled navigation list item component
 */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    href: string;
    description?: string;
    icon?: string;
  }
>(({ className, title, href, description, icon, ...props }, ref) => {
  const IconComponent = icon ? iconMap[icon] || null : null;

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300",
            "hover:bg-card-membrane/60 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            {IconComponent && (
              <div className="rounded-md bg-card-membrane p-2 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 motion-reduce:transition-none">
                <IconComponent className="size-5 text-foreground/70 group-hover:text-foreground transition-colors" />
              </div>
            )}
            <div className="text-sm font-medium leading-none group-hover:translate-x-0.5 transition-transform duration-300 motion-reduce:transition-none">
              {title}
            </div>
          </div>
          {description && (
            <p className="line-clamp-2 mt-2 text-sm leading-snug text-foreground/70 group-hover:text-foreground/70/80 transition-colors">
              {description}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

/**
 * Main navigation component rendering nav items and dropdowns
 */
function MainNav() {
  const pathname = usePathname();
  const { mainNav } = siteConfig;

  // Check if a path is active (exact match or starts with path for sections)
  const isActive = (path: string): boolean => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <div className="flex items-center gap-6 md:gap-10 bg-card-membrane/80 backdrop-blur-lg rounded-2xl shadow-[0_0_24px_6px_var(--color-accent)] border border-[var(--color-border)] relative overflow-visible">
      {/* SVG Fiber Overlay for Bio-Mechanical Weave */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 -z-10" aria-hidden="true">
        <defs>
          <linearGradient id="navbar-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,30 Q120,60 240,30 T480,30" fill="none" stroke="url(#navbar-fiber)" strokeWidth="10" opacity="0.13" />
        <path d="M0,70 Q160,120 320,70 T640,70" fill="none" stroke="url(#navbar-fiber)" strokeWidth="6" opacity="0.09" />
      </svg>
      <Link
        href="/"
        className="flex items-center space-x-2 font-heading text-2xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] bg-clip-text text-transparent drop-shadow-[0_0_8px_var(--color-accent)] transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] outline-none"
        aria-label="Home"
      >
        <span className="sr-only md:not-sr-only font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{siteConfig.name}</span>
        <span className="md:hidden font-bold text-xl">dm</span>
      </Link>
      <NavigationMenu className="hidden md:flex bg-transparent">
        <NavigationMenuList className="gap-2">
          {/* Home Nav Item */}
          <NavigationMenuItem>
            <Link href="/" aria-label="Home">
              <NavigationMenuLink asChild>
                <span
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "group px-4 py-2 rounded-xl shadow-[0_0_8px_2px_var(--color-accent)] border border-transparent bg-card-membrane/60 backdrop-blur-md transition-all duration-300",
                    isActive("/")
                      ? "bg-accent/80 text-accent-foreground ring-2 ring-[var(--color-accent)] drop-shadow-[0_0_12px_var(--color-accent)]"
                      : "hover:bg-card-membrane/80 hover:text-[var(--color-accent)] hover:ring-2 hover:ring-[var(--color-accent)] hover:drop-shadow-[0_0_10px_var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  )}
                  tabIndex={0}
                  role="menuitem"
                >
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[var(--color-accent)] opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l9-9 9 9" /><path d="M9 21V9h6v12" /></svg>
                    Home
                  </span>
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* Dynamic Nav Items */}
          {mainNav.map((item) => (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} aria-label={item.title} tabIndex={0}>
                <NavigationMenuLink asChild>
                  <span
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "group px-4 py-2 rounded-xl shadow-[0_0_8px_2px_var(--color-accent)] border border-transparent bg-card-membrane/60 backdrop-blur-md transition-all duration-300",
                      isActive(item.href)
                        ? "bg-accent/80 text-accent-foreground ring-2 ring-[var(--color-accent)] drop-shadow-[0_0_12px_var(--color-accent)]"
                        : "hover:bg-card-membrane/80 hover:text-[var(--color-accent)] hover:ring-2 hover:ring-[var(--color-accent)] hover:drop-shadow-[0_0_10px_var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                    )}
                    tabIndex={0}
                    role="menuitem"
                  >
                    <span className="flex items-center gap-1">
                      {item.icon && iconMap[item.icon] && (
                        <IconWrapper icon={iconMap[item.icon]} size="sm" withHoverEffect />
                      )}
                      {item.title}
                    </span>
                    {item.description && (
                      <span className="block text-xs text-muted-foreground/80 mt-1 opacity-80">
                        {item.description}
                      </span>
                    )}
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

/**
 * Mobile navigation item component for responsive menu
 * Enhanced with smooth animations and improved interactions
 */
function MobileNavItem({
  item,
  isActive,
  depth = 0
}: {
  item: NavItem;
  isActive: (path: string) => boolean;
  depth?: number;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const IconComponent = item.icon ? iconMap[item.icon] || null : null;

  return (
    <div className={cn(
      "group transition-all duration-300",
      isOpen && "bg-card-membrane/10 rounded-lg"
    )}>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className={cn(
            "flex w-full items-center gap-2 py-2 text-base font-medium transition-colors duration-300",
            isActive(item.href) ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground",
            depth > 0 ? "pl-4" : "",
            "group-hover:translate-x-0.5 transition-transform motion-reduce:transition-none"
          )}
          onClick={hasChildren ? () => setIsOpen(!isOpen) : undefined}
        >
          {IconComponent && <IconComponent className="size-4 opacity-70 group-hover:opacity-100 transition-opacity" />}
          {item.title}
        </Link>
        {hasChildren && (
          <Button
            variant="ghost"
            size="sm"
            className="size-8 p-0 hover:bg-card-membrane/60 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-300",
                isOpen ? "rotate-180" : ""
              )}
            />
            <span className="sr-only">Toggle {item.title} submenu</span>
          </Button>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className="ml-4 mt-1 space-y-1 animate-in slide-in-from-left-5 duration-300">
          {item.children?.map((child, index) => (
            <div
              key={child.href}
              className={cn(
                "rounded-md transition-all duration-300 hover:bg-card-membrane/40",
                "animate-in fade-in-50 duration-300",
                { "delay-100": index === 0 },
                { "delay-150": index === 1 },
                { "delay-200": index >= 2 }
              )}
            >
              <Link
                href={child.href}
                className={cn(
                  "flex items-center gap-2 py-2 pl-4 text-sm font-medium transition-all duration-300",
                  "rounded-md",
                  isActive(child.href)
                    ? "text-primary font-semibold"
                    : "text-foreground/70 hover:text-foreground hover:translate-x-1"
                )}              >
                {child.icon && iconMap[child.icon] && (
                  <IconWrapper icon={iconMap[child.icon]} size="sm" withHoverEffect />
                )}
                {child.title}
              </Link>
              {child.description && (
                <p className="pl-4 text-xs text-foreground/70 mb-2 line-clamp-1">{child.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Primary navigation component including desktop and mobile navigation
 */
export function NavBar() {
  const pathname = usePathname();

  // Use useState with undefined as initial state to avoid hydration mismatch
  const [isScrolled, setIsScrolled] = React.useState<boolean | undefined>(undefined);
  // Add state for manual authentication handling
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  // Check for authentication from localStorage on client-side only
  React.useEffect(() => {
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem('auth');
        if (authData) {
          const parsedAuth = JSON.parse(authData);
          setIsAuthenticated(!!parsedAuth.authenticated);
          setIsAdmin(!!parsedAuth.isAdmin);
        }
      } catch (e) {
        console.error('Error checking authentication:', e);
      }
    };

    checkAuth();
    // Listen for auth changes
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  // Handle scroll event to update navbar styling
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if a path is active (exact match or starts with path for sections)
  const isActive = (path: string): boolean => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  /**
   * Get navigation items based on authentication status and user role
   */  const getNavItems = () => {
    const items = [...siteConfig.mainNav]; // Create a copy to avoid mutating the original

    if (isAuthenticated) {
      // Add user-specific navigation items
      if (!items.some(item => item.href === "/dashboard")) {
        items.push({
          title: "Dashboard",
          slug: "dashboard", // Added slug property to match NavItem interface
          href: "/dashboard",
        });
      }
      // Add admin-specific navigation items if the user is an admin
      if (isAdmin && !items.some(item => item.href === "/admin")) {
        items.push({
          title: "Admin",
          slug: "admin", // Added slug property to match NavItem interface
          href: "/admin/dashboard",          children: [
            {
              title: "Dashboard",
              href: "/admin/dashboard",
              slug: "admin-dashboard",
              icon: "barChart",
              description: "Admin dashboard with key metrics and performance indicators",
            },
            {
              title: "Users",
              href: "/admin/users",
              slug: "admin-users",
              icon: "building",
              description: "Manage user accounts and permissions",
            },
            {
              title: "Settings",
              href: "/admin/settings",
              slug: "admin-settings",
              icon: "wrench",
              description: "Configure system settings and preferences",
            },
          ]
        });
      }
    }

    return items;
  };

  // Get the appropriate navigation items based on auth status
  const navigationItems = getNavItems();

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-card-membrane/70 backdrop-blur-xl transition-all duration-300",
      "supports-[backdrop-filter]:bg-card-membrane/60",
      isScrolled ? "shadow-card-membrane-lgmd" : "shadow-card-membrane-lgcard-membrane-sm"
    )}>
      <div className="container flex h-16 items-center @container">
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <nav className="flex items-center space-x-2">
            <SearchInput />
            <ThemeToggle />

            {/* Mobile navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="@md:hidden transition-all duration-300 hover:scale-110 active:scale-95 motion-reduce:transition-none"
                  aria-label="Toggle menu"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[80%] max-w-sm animate-in slide-in-from-right-80 duration-300 border-l border-card-membrane/50"
              >
                <SheetHeader>
                  <SheetTitle className="text-left font-heading">Navigation</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-2 animate-in fade-in slide-in-from-right-5 duration-500 delay-150">
                  <Link
                    href="/"
                    className={cn(
                      "flex items-center gap-2 py-2 text-base font-medium transition-all duration-300 rounded-md px-2",
                      isActive("/")
                        ? "text-primary bg-primary/10 font-medium"
                        : "text-foreground/70 hover:text-foreground hover:bg-card-membrane/40"
                    )}
                  >
                    <Home className="size-5 text-primary" />
                    <span>Home</span>
                  </Link>

                  {/* Mobile navigation items */}
                    {navigationItems.map((item) => (
                    <MobileNavItem
                      key={item.href}
                      item={item}
                      isActive={isActive}
                    />
                    ))}

                  {/* Mobile login/signup links for unauthenticated users */}
                  {!isAuthenticated && (
                    <div className="mt-4 space-y-2 border-t pt-4 border-card-membrane/30">
                      <Link
                        href="/login"
                        className="flex items-center gap-2 py-2.5 px-2 text-base font-medium transition-all duration-300 rounded-md
                          text-foreground/70 hover:text-foreground hover:bg-card-membrane/40"
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className="flex items-center justify-center gap-2 py-2.5 text-base font-medium
                          bg-primary text-primary-foreground hover:bg-primary/90
                          transition-all duration-300 rounded-md hover:shadow-card-membrane-lgcard-membrane-sm active:scale-[0.98]"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>            {/* Authentication UI */}
            <div className="hidden @md:flex items-center space-x-2">
              {false ? ( // Simplified from status === "loading"
                <div className="h-8 w-20 bg-card-membrane/50 animate-pulse rounded-md" aria-hidden="true">
                  <span className="sr-only">Loading authentication status</span>
                </div>
              ) : isAuthenticated ? (
                <UserNav user={{}} /> // Provide empty user object as fallback
              ) : (
                <>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mr-1 transition-all duration-300 hover:border-primary/50 hover:bg-card-membrane/40 active:scale-95"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary transition-all duration-300 hover:bg-primary/90 active:scale-95 shadow-card-membrane-lgcard-membrane-sm hover:shadow"
                  >
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
function getNavItems() {
// Implementation moved inside the NavBar component
}
