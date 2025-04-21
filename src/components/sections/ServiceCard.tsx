'use client'
import * as React from "react"
import { useRef, useState } from "react"
import { LucideIcon, Check } from "lucide-react"
import * as icons from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconWrapper } from "@/components/common/IconWrapper"

// Define the type for valid icon names based on the lucide-react export
type IconName = keyof typeof icons;

interface ServiceCardProps {
  title: string
  description: string
  iconName: IconName // Use the specific type for icon names
  features?: string[]
  className?: string
  variant?: "default" | "featured"
}

/**
 * Enhanced ServiceCard with 3D perspective effects, animations, and micro-interactions
 * Implements 2025 design trends with hover states, gradients, and blurs
 */
export function ServiceCard({
  title,
  description,
  iconName,
  features,
  className,
  variant = "default"
}: ServiceCardProps) {
  const Icon = icons[iconName] as LucideIcon
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // 3D card effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 25
    const rotateY = (centerX - x) / 25

    setRotate({ x: rotateX, y: rotateY })
  }

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
  }

  // Feature list animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    },
  }

  const isFeatured = variant === "featured"

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/70 card-membrane p-8 shadow-[0_0_16px_4px_var(--color-accent)] transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_24px_6px_var(--color-accent)] focus-within:shadow-[0_0_24px_6px_var(--color-accent)]",
        className
      )}
      tabIndex={0}
      style={{
        transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out",
      }}
      aria-label={title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      <Card
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/70 card-membrane p-8 shadow-[0_0_16px_4px_var(--color-accent)] transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_24px_6px_var(--color-accent)] focus-within:shadow-[0_0_24px_6px_var(--color-accent)]",
          className
        )}
      >
        {/* SVG Fiber Overlay for each card */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 -z-10" aria-hidden="true">
          <defs>
            <linearGradient id="servicecard-fiber" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" />
              <stop offset="100%" stopColor="var(--color-primary)" />
            </linearGradient>
          </defs>
          <path d="M0,30 Q40,60 80,30 T160,30 T240,30" fill="none" stroke="url(#servicecard-fiber)" strokeWidth="8" opacity="0.15" />
        </svg>
        <CardHeader className="space-y-4">
          <div className="flex items-start space-x-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className={cn(
                "rounded-xl p-3 transition-colors duration-300",
                isFeatured
                  ? "bg-[var(--color-background)]"
                  : "border card-membraned"
              )}
            >
              <IconWrapper
                icon={Icon}
                size="lg"
                className={cn(
                  "transition-transform duration-300",
                  isHovered && "scale-110",
                  isFeatured && "text-[var(--color-foreground)]"
                )}
              />
            </motion.div>
            <div className="space-y-1">
              <CardTitle className={cn(
                "transition-all duration-300",
                isFeatured && "text-[var(--color-foreground)]",
                isHovered && isFeatured && "text-[var(--color-foreground)]/80"
              )}>
                {title}
              </CardTitle>
              <CardDescription className="text-base">{description}</CardDescription>
            </div>
          </div>
          {isFeatured && (
            <div className="h-1 w-16 rounded-full bg-[var(--color-background)]" />
          )}
        </CardHeader>
        {isFeatured && (
          <>
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--color-background)] blur-2xl animate-pulse-slow" />
            <div className="absolute right-12 bottom-12 h-16 w-16 rounded-full bg-[var(--color-background)] blur-xl animate-float" />
          </>
        )}
        {features && features.length > 0 && (
          <CardContent>
            <motion.ul
              className="space-y-3"
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-2 text-sm"
                >
                  <Check
                    size={16}
                    className={cn(
                      "mt-0.5 transition-colors duration-300",
                      isFeatured ? "text-[var(--color-foreground)]" : "text-foreground"
                    )}
                  />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </CardContent>
        )}
      </Card>
    </motion.div>
  )
}
