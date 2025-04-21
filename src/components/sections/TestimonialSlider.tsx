'use client';

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatar: string;
  company?: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Mastra AI has transformed how we handle customer support. Our agents now understand context and provide more accurate responses.",
    author: "Sarah Chen",
    title: "CTO",
    company: "TechCorp",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
  },
  {
    quote: "The ability to deploy agents anywhere has made scaling our AI operations effortless. Their platform is a game-changer.",
    author: "Michael Rodriguez",
    title: "Head of AI",
    company: "DataFlow",
    avatar: "/avatars/michael.jpg",
    rating: 5,
  },
  {
    quote: "Integration was smooth, and the documentation is excellent. Our dev team was able to get started quickly.",
    author: "Emma Thompson",
    title: "Lead Developer",
    company: "AI Solutions",
    avatar: "/avatars/emma.jpg",
    rating: 4,
  },
  {
    quote: "The memory management system is incredible. Our agents maintain context across sessions, making interactions feel natural.",
    author: "David Park",
    title: "AI Architect",
    company: "Innovation Labs",
    avatar: "/avatars/david.jpg",
    rating: 5,
  },
];

/**
 * Enhanced TestimonialCard component with 3D effects and microinteractions
 */
function TestimonialCard({
  testimonial,
  index
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="h-full"
    >
      <Card
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/70 card-membrane p-8 shadow-[0_0_16px_4px_var(--color-accent)] transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_24px_6px_var(--color-accent)] focus-within:shadow-[0_0_24px_6px_var(--color-accent)]"
      >
        <CardContent className="relative flex h-full flex-col justify-between space-y-4 p-6">
          {/* Quote icon with gradient */}
          <div className="absolute -right-4 -top-4 z-10 opacity-10">
            <Quote className="h-16 w-16 rotate-180 text-[var(--color-primary)]" strokeWidth={1} />
          </div>

          {/* Rating stars */}
          {testimonial.rating && (
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < (testimonial.rating || 0)
                      ? "fill-[var(--color-yellow)] text-[var(--color-yellow)]"
                      : "fill-none text-[var(--color-muted-foreground)]/30"
                  )}
                />
              ))}
            </div>
          )}

          {/* Quote text with animated gradient underline */}
          <blockquote className="relative">
            <p className="text-base text-[var(--color-muted-foreground)]">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="absolute -bottom-2 left-0 h-px w-16 bg-[var(--color-background)] gradient-to-r from-[var(--color-primary)] to-transparent" />
          </blockquote>

          {/* Author info with hover effects */}
          <footer className="flex items-center gap-x-4 pt-4">
            <div className="relative">
              <Avatar className="h-10 w-10 border-2 border-[var(--color-background)] ring-2 ring-[var(--color-primary)]/20">
                <AvatarImage
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <AvatarFallback className="bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <motion.div
                className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[var(--color-background)] bg-[var(--color-green)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 0.4
                }}
              />
            </div>
            <div>
              <cite className="not-italic font-medium text-[var(--color-foreground)]">
                {testimonial.author}
              </cite>
              <div className="text-sm text-[var(--color-muted-foreground)]">
                {testimonial.title}
                {testimonial.company && (
                  <>, <span className="text-[var(--color-primary)]">{testimonial.company}</span></>
                )}
              </div>
            </div>
          </footer>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/**
 * Enhanced TestimonialSlider with cutting-edge 2025 design trends
 * Features scroll-triggered animations, 3D effects, and custom navigation
 */
export function TestimonialSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Title animations
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    },
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden card-membrane bg-[var(--color-background)]/80 backdrop-blur-lg py-24 sm:py-32"
    >
      {/* SVG Fiber Overlay for organic depth */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 -z-10" aria-hidden="true">
        <defs>
          <linearGradient id="testimonial-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,120 Q200,200 400,120 T800,120" fill="none" stroke="url(#testimonial-fiber)" strokeWidth="16" opacity="0.10" />
        <path d="M0,220 Q200,300 400,220 T800,220" fill="none" stroke="url(#testimonial-fiber)" strokeWidth="10" opacity="0.07" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
        >
          <motion.div
            className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-background)]/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Quote className="h-6 w-6 text-[var(--color-primary)]" />
          </motion.div>

          <motion.h2
            id="testimonials-heading"
            className="text-3xl font-heading tracking-tight sm:text-4xl bg-[var(--color-background)] gradient-to-r from-[var(--color-foreground)] to-[var(--color-foreground)]/70 bg-clip-text text-[var(--color-foreground)] transparent"
            variants={titleVariants}
          >
            Trusted by Innovators
          </motion.h2>

          <motion.p
            className="mt-6 text-lg leading-8 text-[var(--color-muted-foreground)]"
            variants={titleVariants}
          >
            See what our customers are saying about Mastra AI
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 px-4"
                >
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselPrevious
                className="static mx-0 flex h-10 w-10 translate-y-0 border border-[var(--color-border)] bg-[var(--color-background)]/80 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] hover:scale-110 hover:border-[var(--color-border)] backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
              />

              <div className="flex gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="group relative h-3 w-8 overflow-hidden rounded-full transition-all duration-300"
                  >
                    <span
                      className={cn(
                        "absolute inset-0 rounded-full card-membraned-[var(--color-foreground)]/20 transition-colors group-hover:card-membraned-[var(--color-foreground)]/40"
                      )}
                    />
                    <span
                      className={cn(
                        "absolute inset-0 origin-left rounded-full bg-[var(--color-primary)] transition-all duration-500",
                        index === current
                          ? "scale-x-100 bg-[var(--color-background)] gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/80 to-[var(--color-primary)]/70"
                          : "scale-x-0"
                      )}
                    />
                    {index === current && (
                      <span className="absolute inset-0 bg-[var(--color-primary)]/50 animate-pulse-slow rounded-full blur-md -z-10"></span>
                    )}
                  </button>
                ))}
              </div>

              <CarouselNext
                className="static mx-0 flex h-10 w-10 translate-y-0 border border-[var(--color-border)] bg-[var(--color-background)]/80 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] hover:scale-110 hover:border-[var(--color-border)] backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
              />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
