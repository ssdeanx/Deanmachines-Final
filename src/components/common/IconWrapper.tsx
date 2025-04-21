
"use client";

import * as React from "react"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * IconWrapper component for consistent icon presentation
 *
 * Features:
 * - Standardized icon sizing
 * - Customizable variants
 * - Proper accessibility attributes
 * - Optional background and color variants
 * - Support for hover effects
 *
 * @param icon - The Lucide icon component to render
 * @param size - Size variant (sm, md, lg, xl)
 * @param variant - Visual style variant
 * @param className - Additional CSS classes
 * @returns A wrapped icon component
 */
interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "outline" | "solid" | "ghost";
  withBackground?: boolean;
  withHoverEffect?: boolean;
}

const sizeClasses = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-8",
} as const;

const variantClasses = {
  default: "",
  outline: "border-card-membraned-md p-1",
  solid: "bg-primary text-primary-foreground rounded-md p-1",
  ghost: "text-foreground/70 hover:text-foreground transition-colors",
} as const;

export function IconWrapper({
  icon: Icon,
  size = "md",
  variant = "default",
  withBackground = false,
  withHoverEffect = false,
  className,
  ...props
}: IconWrapperProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center relative",
        variant !== "default" && variantClasses[variant],
        withBackground && "bg-[oklch(0.15_0.005_285/0.6)] backdrop-blur-lg rounded-xl p-1.5 before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:z-10 before:bg-[url('data:image/svg+xml;utf8,<svg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'fibers\' patternUnits=\'userSpaceOnUse\' width=\'60\' height=\'60\'><path d=\'M0 30 Q30 0 60 30 T120 30\' stroke=\'%2350a3a3\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.06\'/><path d=\'M0 40 Q30 60 60 40 T120 40\' stroke=\'%2350a3a3\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.06\'/></pattern></defs><rect width=\'100%25\' height=\'100%25\' fill=\'url(%23fibers)\'/></svg>')] border-[2.5px] border-[oklch(0.25_0.005_285/0.5)] shadow-[0_2px_12px_0_rgba(0,234,255,0.08)]", 
        withHoverEffect && "transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-[0_0_12px_2px_oklch(0.85_0.25_130/0.35)] focus-visible:ring-2 focus-visible:ring-[oklch(0.85_0.25_130)] focus:outline-none", 
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {withHoverEffect && isHovered && (
        <span
          className="absolute inset-0 rounded-full animate-pulse pointer-events-none z-20"
          style={{
            boxShadow: '0 0 16px 4px oklch(0.85 0.25 130 / 0.35)',
            background: 'radial-gradient(circle at 60% 40%, oklch(0.85 0.25 130 / 0.18) 0%, transparent 80%)',
            filter: 'blur(2px)'
          }}
          aria-hidden="true"
        />
      )} 
      <Icon
        className={cn(
          sizeClasses[size],
          withHoverEffect && "transition-all duration-300",
          withHoverEffect && isHovered ? "text-[oklch(0.85_0.25_130)] drop-shadow-[0_0_8px_oklch(0.85_0.25_130/0.25)]" : "text-[oklch(0.98_0_0)]"
        )}
        aria-hidden="true"
      />
    </div>
  )
}
