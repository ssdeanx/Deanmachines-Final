import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

/**
 * ThemeToggle component with improved animations and accessibility
 *
 * Features:
 * - Smooth transitions between theme states
 * - Active theme indicator
 * - Keyboard navigation support
 * - Modern UI with consistent iconography
 * - Motion-reduced experience support
 *
 * @returns A theme toggle dropdown menu component
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Handle mounting to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 px-0">
        <div className="h-5 w-5 bg-card-membrane/30 rounded-full animate-pulse" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 px-0 relative overflow-hidden rounded-xl bg-[oklch(0.15_0.005_285/0.6)] backdrop-blur-lg border-2 border-[oklch(0.25_0.005_285/0.5)] before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:z-10 before:bg-[url('data:image/svg+xml;utf8,<svg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'fibers\' patternUnits=\'userSpaceOnUse\' width=\'60\' height=\'60\'><path d=\'M0 30 Q30 0 60 30 T120 30\' stroke=\'%2350a3a3\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.06\'/><path d=\'M0 40 Q30 60 60 40 T120 40\' stroke=\'%2350a3a3\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.06\'/></pattern></defs><rect width=\'100%25\' height=\'100%25\' fill=\'url(%23fibers)\'/></svg>')] focus-visible:ring-2 focus-visible:ring-[oklch(0.85_0.25_130)] focus:outline-none hover:scale-[1.07] hover:border-[oklch(0.85_0.25_130)] hover:shadow-[0_0_12px_2px_oklch(0.85_0.25_130/0.35)] transition-all duration-300"
          aria-label="Change theme"
        >
          <span className="sr-only">Toggle theme</span>
          <Sun
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] transition-all duration-500",
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              theme === "dark"
                ? "opacity-0 rotate-90 scale-0"
                : "opacity-100 rotate-0 scale-100 text-[oklch(0.85_0.25_130)] drop-shadow-[0_0_8px_oklch(0.85_0.25_130/0.25)]",
              "motion-reduce:transition-none"
            )}
          />
          <Moon
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] transition-all duration-500",
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              theme === "dark"
                ? "opacity-100 rotate-0 scale-100 text-[oklch(0.85_0.25_130)] drop-shadow-[0_0_8px_oklch(0.85_0.25_130/0.25)]"
                : "opacity-0 -rotate-90 scale-0",
              "motion-reduce:transition-none"
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[130px] animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-xl bg-[oklch(0.15_0.005_285/0.7)] backdrop-blur-lg border-2 border-[oklch(0.25_0.005_285/0.5)] before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:z-10 before:bg-[url('data:image/svg+xml;utf8,<svg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'fibers\' patternUnits=\'userSpaceOnUse\' width=\'60\' height=\'60\'><path d=\'M0 30 Q30 0 60 30 T120 30\' stroke=\'%2350a3a3\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.06\'/><path d=\'M0 40 Q30 60 60 40 T120 40\' stroke=\'%2350a3a3\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.06\'/></pattern></defs><rect width=\'100%25\' height=\'100%25\' fill=\'url(%23fibers)\'/></svg>')] shadow-[0_4px_24px_0_rgba(0,234,255,0.08)]"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn(
            "cursor-pointer flex items-center gap-2",
            theme === "light" && "bg-[oklch(0.85_0.25_130/0.12)] text-[oklch(0.85_0.25_130)] drop-shadow-[0_0_8px_oklch(0.85_0.25_130/0.15)]"
          )}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
          {theme === "light" && <span className="ml-auto text-xs opacity-60">Active</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn(
            "cursor-pointer flex items-center gap-2",
            theme === "dark" && "bg-[oklch(0.85_0.25_130/0.12)] text-[oklch(0.85_0.25_130)] drop-shadow-[0_0_8px_oklch(0.85_0.25_130/0.15)]"
          )}
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
          {theme === "dark" && <span className="ml-auto text-xs opacity-60">Active</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={cn(
            "cursor-pointer flex items-center gap-2",
            theme === "system" && "bg-[oklch(0.85_0.25_130/0.12)] text-[oklch(0.85_0.25_130)] drop-shadow-[0_0_8px_oklch(0.85_0.25_130/0.15)]"
          )}
        >
          <Laptop className="h-4 w-4" />
          <span>System</span>
          {theme === "system" && <span className="ml-auto text-xs opacity-60">Active</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
