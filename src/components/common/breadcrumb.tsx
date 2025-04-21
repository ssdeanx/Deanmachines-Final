import * as React from "react"
import Link from "next/link"
import { ChevronRight, Home, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { IconWrapper } from "./IconWrapper"

/**
 * Represents an item in the breadcrumb navigation
 *
 * @interface BreadcrumbItem
 * @property {string} title - The display text for the breadcrumb item
 * @property {string} [href] - The optional URL this breadcrumb links to
 * @property {LucideIcon} [icon] - Optional custom icon for the breadcrumb item
 */
interface BreadcrumbItem {
  title: string
  href?: string
  icon?: LucideIcon
}

/**
 * Props for the Breadcrumb component
 *
 * @interface BreadcrumbProps
 * @property {BreadcrumbItem[]} items - Array of breadcrumb items to display
 * @property {string} [className] - Optional additional CSS classes
 * @property {boolean} [showHomeIcon=true] - Whether to show the home icon in the first position
 * @property {string} [homeHref="/"] - URL for the home breadcrumb
 * @property {string} [separator="chevron"] - Type of separator to use between items
 */
interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  showHomeIcon?: boolean
  homeHref?: string
  separator?: "chevron" | "slash" | "dot"
}

/**
 * Renders a breadcrumb navigation component following WAI-ARIA guidelines
 *
 * @param props - Component props
 * @returns A breadcrumb navigation component with responsive design and accessibility features
 */
export function Breadcrumb({
  items,
  className,
  showHomeIcon = true,
  homeHref = "/",
  separator = "chevron"
}: BreadcrumbProps) {
  // Memoize last index calculation to avoid recalculation on re-renders
  const lastIndex = React.useMemo(() => items.length - 1, [items]);

  // Memoize separator element to prevent unnecessary re-renders
  const separatorElement = React.useMemo(() => {
    switch (separator) {
      case "slash":
        return <span className="text-foreground/70/60" aria-hidden="true">/</span>
      case "dot":
        return <span className="text-foreground/70/60 mx-1" aria-hidden="true">•</span>
      case "chevron":
      default:
        return <ChevronRight className="size-4 text-foreground/70/60" aria-hidden="true" />
    }
  }, [separator]);

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center text-sm @container",
        "rounded-xl px-3 py-2",
        "bg-[oklch(0.15_0.005_285/0.6)] backdrop-blur-lg border-2 border-[oklch(0.25_0.005_285/0.5)]",
        "before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:z-10 before:bg-[url('data:image/svg+xml;utf8,<svg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'fibers\' patternUnits=\'userSpaceOnUse\' width=\'60\' height=\'60\'><path d=\'M0 30 Q30 0 60 30 T120 30\' stroke=\'%2350a3a3\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.06\'/><path d=\'M0 40 Q30 60 60 40 T120 40\' stroke=\'%2350a3a3\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.06\'/></pattern></defs><rect width=\'100%25\' height=\'100%25\' fill=\'url(%23fibers)\'/></svg>')] shadow-[0_2px_12px_0_rgba(0,234,255,0.08)]",
        className
      )}
    >
      <ol
        className="flex items-center flex-wrap gap-x-2 gap-y-1 w-full"
        role="list"
      >
        {/* Home item */}
        {showHomeIcon && (
          <li className="flex items-center">
            <Link
              href={homeHref}
              className="flex items-center gap-1 rounded-md p-0.5 transition-all duration-300 hover:scale-[1.05] hover:border-[oklch(0.85_0.25_130)] hover:shadow-[0_0_8px_2px_oklch(0.85_0.25_130/0.18)] focus-visible:ring-2 focus-visible:ring-[oklch(0.85_0.25_130)] focus:outline-none hover:bg-[oklch(0.15_0.005_285/0.45)] motion-reduce:transform-none"
              aria-label="Home"
            >
              <IconWrapper
                icon={Home}
                size="sm"
                className="text-foreground/70/70"
                withHoverEffect
              />
              <span className="sr-only">Home</span>
            </Link>
          </li>
        )}

        {/* Breadcrumb items */}
        {items.map((item, index) => (
          <li
            key={`breadcrumb-${item.title}-${index}`}
            className="flex items-center gap-2 truncate"
            aria-hidden={item.href ? undefined : "false"}
          >
            {/* Show separator except for the first item when home icon is hidden */}
            {index > 0 || showHomeIcon ? separatorElement : null}

            {/* Render as link if it has href and is not the last item */}
            {item.href && index !== lastIndex ? (            <Link
              href={item.href}
              className="group inline-flex items-center gap-1.5 truncate rounded-md py-0.5 px-1.5 transition-all duration-300 hover:scale-[1.05] hover:border-[oklch(0.85_0.25_130)] hover:shadow-[0_0_8px_2px_oklch(0.85_0.25_130/0.18)] focus-visible:ring-2 focus-visible:ring-[oklch(0.85_0.25_130)] focus:outline-none hover:bg-[oklch(0.15_0.005_285/0.45)] motion-reduce:transform-none relative overflow-hidden isolate"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></span>
              {item.icon && (
                <IconWrapper
                  icon={item.icon}
                  size="sm"
                  className="text-[oklch(0.98_0_0)/70] group-hover:text-[oklch(0.85_0.25_130)] group-hover:drop-shadow-[0_0_8px_oklch(0.85_0.25_130/0.18)] transition-colors z-10"
                />
              )}
              <span className="truncate max-w-[180px] @md:max-w-[240px] @lg:max-w-none z-10">
                {item.title}
              </span>
            </Link>
            ) : (
              <span
                className="flex items-center gap-1.5 text-[oklch(0.98_0_0)] font-medium truncate py-0.5 px-1 max-w-[200px] @md:max-w-[300px] @lg:max-w-none"
                {...(index === lastIndex && { "aria-current": "page" })}
              >
                {item.icon && (
                  <IconWrapper
                    icon={item.icon}
                    size="sm"
                  />
                )}
                {item.title}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
