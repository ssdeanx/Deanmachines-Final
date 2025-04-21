'use client';
import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { CallToAction } from "@/components/common/CallToAction"

interface PlanFeature {
  text: string
  footnote?: string
}

interface Plan {
  name: string
  description: string
  price: {
    monthly: string
    annual: string
  }
  features: PlanFeature[]
  cta: {
    text: string
    href: string
  }
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: "Hobby",
    description: "Perfect for personal projects and experiments",
    price: {
      monthly: "$0",
      annual: "$0",
    },
    features: [
      { text: "1 AI Agent" },
      { text: "1,000 API calls/month" },
      { text: "Basic memory storage" },
      { text: "Community support" },
      { text: "Public templates" },
    ],
    cta: {
      text: "Start for Free",
      href: "/signup",
    },
  },
  {
    name: "Pro",
    description: "For professionals and small teams",
    price: {
      monthly: "$9",
      annual: "$225",
    },
    features: [
      { text: "Agents, Tools, Workflows" },
      { text: "Bring your own API keys" },
      { text: "Supports OpenAI, Anthropic, Gemini, VertexAI" },
      { text: "All models supported" },
      { text: "Advanced memory management" },
      { text: "Priority support" },
      { text: "Private templates" },
      { text: "Custom integrations" },
      { text: "Usage analytics" },
    ],
    cta: {
      text: "Get Started",
      href: "/signup",
    },
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: {
      monthly: "Custom",
      annual: "Custom",
    },
    features: [
      { text: "Unlimited AI Agents" },
      { text: "Custom API limits" },
      { text: "Enterprise memory solutions" },
      { text: "24/7 Support" },
      { text: "Custom templates" },
      { text: "Advanced security" },
      { text: "SLA guarantees" },
      { text: "Dedicated account manager" },
    ],
    cta: {
      text: "Contact Sales",
      href: "/contact",
    },
  },
]

export function PricingTable() {
  // Use null for initial state to indicate "not initialized yet"
  const [isAnnual, setIsAnnual] = React.useState<boolean | null>(null)

  // Initialize state on client-side only to prevent hydration mismatch
  React.useEffect(() => {
    // Check localStorage for saved preference, default to false if not found
    const savedPreference = localStorage.getItem('pricingPreference') === 'annual'
    setIsAnnual(savedPreference)
  }, [])

  // Handle switching between billing periods
  const handleBillingChange = (checked: boolean) => {
    setIsAnnual(checked)
    localStorage.setItem('pricingPreference', checked ? 'annual' : 'monthly')
  }

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative isolate overflow-hidden card-membrane bg-[var(--color-background)]/80 backdrop-blur-lg py-24 sm:py-32"
    >
      {/* SVG Fiber Overlay for organic depth */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 -z-10" aria-hidden="true">
        <defs>
          <linearGradient id="pricing-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,120 Q200,200 400,120 T800,120" fill="none" stroke="url(#pricing-fiber)" strokeWidth="16" opacity="0.10" />
        <path d="M0,220 Q200,300 400,220 T800,220" fill="none" stroke="url(#pricing-fiber)" strokeWidth="10" opacity="0.07" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="pricing-heading"
            className="text-4xl font-heading tracking-tight sm:text-5xl"
          >
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--color-foreground)]">
            Choose the perfect plan for your needs. All plans include core features.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative flex items-center gap-x-4">
            <span className="text-sm font-semibold">Monthly</span>
            <Switch
              id="billing-toggle"
              checked={isAnnual === null ? false : isAnnual}
              onCheckedChange={handleBillingChange}
              aria-label="Toggle annual billing"
              className="bg-[var(--color-background)]/70 card-membrane"
            />
            <span className="text-sm font-semibold">
              Annual
              <Badge className="ml-2" variant="secondary">
                Save 20%
              </Badge>
            </span>
          </div>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/70 card-membrane p-8 shadow-[0_0_16px_4px_var(--color-accent)] transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_24px_6px_var(--color-accent)] focus-within:shadow-[0_0_24px_6px_var(--color-accent)]"
            >
              {plan.popular && (
                <Badge
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  variant="default"
                >
                  Most Popular
                </Badge>
              )}
              <div className="p-8">
                <h3
                  className="text-2xl font-semibold leading-7"
                  id={`${plan.name}-plan`}
                >
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[var(--color-foreground)]">
                  {plan.description}
                </p>
                <p className="mt-6">
                  <span className="text-4xl font-bold tracking-tight">
                    {isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly !== "Custom" && (
                    <>
                      {" "}
                      <span className="text-sm font-semibold leading-6 text-[var(--color-foreground)]">
                        {isAnnual ? "/year" : "/month"}
                      </span>
                    </>
                  )}
                </p>
                <CallToAction
                  title={plan.cta.text}
                  href={plan.cta.href}
                  variant={plan.popular ? "default" : "outline"}
                  showArrow={plan.popular}
                  className={cn("mt-6 w-full transition-all duration-300", {
                    "shadow-sm hover:shadow-md": plan.popular,
                  })}
                  aria-describedby={`${plan.name}-plan`}
                />
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6"
                >
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-[var(--color-foreground)]" aria-hidden="true" />
                      <span>
                        {feature.text}
                        {feature.footnote && (
                          <sup
                            className="cursor-help text-xs text-[var(--color-foreground)]"
                            title={feature.footnote}
                          >
                            *
                          </sup>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
