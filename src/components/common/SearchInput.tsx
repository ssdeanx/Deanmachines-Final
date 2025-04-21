'use client';
import * as React from "react"
import { Search, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

/**
 * Enhanced search input component with modern features
 *
 * @interface SearchInputProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 * @property {(value: string) => void} [onSearch] - Callback when search value changes
 * @property {boolean} [loading] - Whether search is in loading state
 * @property {boolean} [withClear] - Whether to show a clear button
 * @property {number} [debounceMs] - Debounce delay in milliseconds
 */
interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
  loading?: boolean;
  withClear?: boolean;
  debounceMs?: number;
}

export function SearchInput({
  className,
  onSearch,
  loading = false,
  withClear = true,
  debounceMs = 300,
  ...props
}: SearchInputProps) {
  const [value, setValue] = React.useState("")
  const [isFocused, setIsFocused] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Debounced search handler
  const debouncedSearch = React.useCallback(
    React.useMemo(() => {
      let timeoutId: NodeJS.Timeout | null = null;

      return (searchValue: string) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          onSearch?.(searchValue);
          timeoutId = null;
        }, debounceMs);
      };
    }, [debounceMs, onSearch]),
    [debounceMs, onSearch]
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      debouncedSearch(newValue);
    },
    [debouncedSearch]
  );

  const handleClear = React.useCallback(() => {
    setValue("");
    onSearch?.("");
    inputRef.current?.focus();
  }, [onSearch]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div
      className={cn(
        "group relative transition-all duration-300",
        "rounded-xl px-2 py-1",
        "bg-[oklch(0.15_0.005_285/0.6)] backdrop-blur-lg",
        "before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:z-10 before:bg-[url('data:image/svg+xml;utf8,<svg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'fibers\' patternUnits=\'userSpaceOnUse\' width=\'60\' height=\'60\'><path d=\'M0 30 Q30 0 60 30 T120 30\' stroke=\'%2350a3a3\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.06\'/><path d=\'M0 40 Q30 60 60 40 T120 40\' stroke=\'%2350a3a3\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.06\'/></pattern></defs><rect width=\'100%25\' height=\'100%25\' fill=\'url(%23fibers)\'/></svg>')] border-[2.5px] border-[oklch(0.25_0.005_285/0.5)]",
        isFocused ? "ring-2 ring-[oklch(0.85_0.25_130/0.5)] border-[oklch(0.85_0.25_130/0.7)] shadow-[0_0_16px_2px_oklch(0.85_0.25_130/0.18)]" : "border-[oklch(0.25_0.005_285/0.5)] shadow-[0_2px_8px_0_rgba(0,234,255,0.04)]",
        className
      )}
    >
      <Search
        className={cn(
          "absolute left-2.5 top-1/2 -translate-y-1/2 size-4 transition-colors duration-300",
          isFocused ? "text-[oklch(0.85_0.25_130)] drop-shadow-[0_0_8px_oklch(0.85_0.25_130/0.25)]" : "text-[oklch(0.98_0_0)/70]" ,
          "group-hover:text-primary/80 motion-reduce:transition-none"
        )}
      />
      <Input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        className={cn(
          "pl-8 transition-all duration-300",
          withClear && value ? "pr-8" : "pr-4",
          "bg-transparent text-[oklch(0.98_0_0)] placeholder:text-[oklch(0.6_0.01_285)]",
          "focus-visible:ring-0 focus-visible:outline-none",
          "rounded-xl border-none shadow-none",
        )}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Search"
        disabled={loading}
        {...props}
      />
      {loading && (
        <div
          className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 animate-spin rounded-full border-2 border-[oklch(0.85_0.25_130/0.7)] border-t-transparent shadow-[0_0_8px_oklch(0.85_0.25_130/0.18)]"
          aria-hidden="true"
        >
          <span className="sr-only">Loading search results...</span>
        </div>
      )}
      {withClear && value && !loading && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 size-6 p-0 text-[oklch(0.98_0_0)/70] hover:text-[oklch(0.85_0.25_130)] hover:bg-[oklch(0.15_0.005_285/0.45)] transition-colors active:scale-95 rounded-full"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <X className="size-3" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
    </div>
  );
}
