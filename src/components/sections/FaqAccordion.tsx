'use client';

import * as React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

interface FaqCategory {
  name: string
  color?: string
}

interface Faq {
  question: string
  answer: string
  category?: string
  isPopular?: boolean
}

const categories: FaqCategory[] = [
  { name: "General", color: "card-membrane-500/10 text-blue-500" },
  { name: "Technical", color: "bg-purple-500/10 text-purple-500" },
  { name: "Pricing", color: "bg-green-500/10 text-[var(--color-foreground)]" },
  { name: "Security", color: "bg-amber-500/10 text-amber-500" },
]

const faqs: Faq[] = [
  {
    question: "What is Mastra AI?",
    answer: "Mastra AI is a platform for building, deploying, and managing AI agents. It provides the tools and infrastructure needed to create intelligent agents that can understand context, learn from interactions, and automate complex tasks.",
    category: "General",
    isPopular: true
  },
  {
    question: "How does agent memory work?",
    answer: "Agents in Mastra maintain context through our advanced memory management system. They can store and recall information from previous interactions, learn from patterns, and maintain long-term memory across sessions using various storage backends.",
    category: "Technical"
  },
  {
    question: "Can I deploy Mastra agents anywhere?",
    answer: "Yes! Mastra agents are cloud-agnostic and can be deployed on any infrastructure. We support major cloud providers like AWS, Azure, and GCP, as well as self-hosted options for enterprise customers.",
  },
  {
    question: "What kind of tasks can Mastra agents handle?",
    answer: "Mastra agents can handle a wide range of tasks from simple automations to complex workflows. Common use cases include customer support, data analysis, process automation, content generation, and custom AI assistants.",
  },
  {
    question: "Is Mastra secure?",
    answer: "Security is our top priority. We implement bank-grade encryption, regular security audits, and comprehensive logging. Enterprise plans include additional security features like SSO, audit logs, and custom security policies.",
  },
  {
    question: "How do I get started?",
    answer: "You can start with our free tier to experiment and build your first agent. Our documentation provides comprehensive guides and examples. For larger deployments, contact our sales team for a custom solution.",
  },
]

export function FaqAccordion() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Filter FAQs based on search query and selected category
  const filteredFaqs = React.useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === null ||
        faq.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="container py-20 card-membrane relative overflow-hidden backdrop-blur-lg" ref={sectionRef}>
      {/* SVG Fiber Overlay for organic depth */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" aria-hidden="true">
        <defs>
          <linearGradient id="faq-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,20 Q100,80 200,20 T400,20 T600,20" fill="none" stroke="url(#faq-fiber)" strokeWidth="8" opacity="0.2" />
        <path d="M0,60 Q100,120 200,60 T400,60 T600,60" fill="none" stroke="url(#faq-fiber)" strokeWidth="6" opacity="0.12" />
      </svg>
      <motion.div
        className="mx-auto mb-16 text-center md:max-w-[58rem]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-background)]"
          >
            <span className="text-2xl">📋</span>
          </motion.div>
        </div>

        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl bg-[var(--color-background)] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Everything you need to know about Mastra AI and our agent platform.
        </p>

        {/* Search and filter controls */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row items-center justify-center">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="group relative isolate overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/70 card-membrane p-6 backdrop-blur-lg transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_24px_6px_var(--color-accent)] focus-within:shadow-[0_0_24px_6px_var(--color-accent)]/20"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Badge
              variant={activeCategory === null ? "default" : "outline"}
              className={cn(
                "cursor-pointer text-sm px-3 py-1 transition-all hover:scale-105",
                activeCategory === null ? "bg-[var(--color-accent)] text-primary-foreground shadow-[0_0_16px_4px_var(--color-accent)] border border-[var(--color-accent)]/40" : "hover:bg-primary/10 border border-[var(--color-accent)]/50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              )}
              tabIndex={0}
              aria-pressed={activeCategory === null}
              onClick={() => setActiveCategory(null)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setActiveCategory(null); }}
            >
              All
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                className={cn(
                  "cursor-pointer text-sm px-3 py-1 transition-all hover:scale-105",
                  category.color && activeCategory !== category.name ? category.color : "",
                  activeCategory === category.name ? "bg-[var(--color-accent)] text-primary-foreground shadow-[0_0_16px_4px_var(--color-accent)] border border-[var(--color-accent)]/40" : "hover:bg-primary/10 border border-[var(--color-accent)]/50",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                )}
                tabIndex={0}
                aria-pressed={activeCategory === category.name}
                onClick={() => setActiveCategory(category.name)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setActiveCategory(category.name); }}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mx-auto max-w-[64rem]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="w-full card-membrane bg-[var(--color-background)]/60 backdrop-blur-md rounded-2xl shadow-[0_4px_32px_0_var(--color-shadow)]">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="group border border-[var(--color-border)]/40 rounded-xl mb-4 overflow-hidden backdrop-blur-lg bg-[var(--color-background)]/60 card-membrane shadow-[0_2px_16px_0_var(--color-shadow)] transition-shadow duration-300 focus-within:shadow-[0_0_16px_4px_var(--color-accent)]">
                    <AccordionTrigger className="text-left px-4 py-4 hover:bg-[var(--color-accent)]/20 data-[state=open]:bg-[var(--color-accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 rounded-lg transition-colors duration-200">
                      <div className="flex items-start">
                        {faq.isPopular && (
                          <Badge className="mr-2 bg-primary/20 text-primary hover:bg-primary/30">Popular</Badge>
                        )}
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-[var(--color-background)]/40 px-4 py-4 text-[var(--color-muted-foreground)] rounded-b-xl">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="prose prose-sm max-w-none dark:prose-invert"
                      >
                        {faq.answer}
                      </motion.div>
                      {faq.category && (
                        <div className="mt-3 pt-3 border-t border-border/30 flex items-center">
                          <span className="text-xs text-muted-foreground">Category:</span>
                          <Badge variant="outline" className={cn(
                            categories.find(c => c.name === faq.category)?.color || "",
                            "border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                          )}>
                            {faq.category}
                          </Badge>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10 text-muted-foreground"
              >
                <p>No FAQs found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory(null);
                  }}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </Accordion>
      </motion.div>
    </div>
  )
}
