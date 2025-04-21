'use client';
import * as React from "react"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { IconWrapper } from "@/components/common/IconWrapper"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

const team: TeamMember[] = [
  {
    name: "Dr. Alexandra Wright",
    role: "Chief AI Architect",
    bio: "Leading the development of our next-generation AI agent architecture. Previously led AI research at Stanford.",
    image: "/team/alexandra.jpg",
    social: {
      twitter: "https://twitter.com/alexwright",
      linkedin: "https://linkedin.com/in/alexwright",
      github: "https://github.com/alexwright",
    },
  },
  {
    name: "Marcus Chen",
    role: "Lead Engineer",
    bio: "Architect of our distributed agent deployment system. 15+ years experience in cloud infrastructure.",
    image: "/team/marcus.jpg",
    social: {
      twitter: "https://twitter.com/marcuschen",
      linkedin: "https://linkedin.com/in/marcuschen",
      github: "https://github.com/marcuschen",
    },
  },
  {
    name: "Dr. Maria Santos",
    role: "Head of Research",
    bio: "Leading research in agent memory systems and context preservation. PhD in Machine Learning.",
    image: "/team/maria.jpg",
    social: {
      twitter: "https://twitter.com/mariasantos",
      linkedin: "https://linkedin.com/in/mariasantos",
    },
  },
  {
    name: "James Wilson",
    role: "Security Lead",
    bio: "Expert in AI system security and data privacy. Previously security architect at major tech firms.",
    image: "/team/james.jpg",
    social: {
      linkedin: "https://linkedin.com/in/jameswilson",
      github: "https://github.com/jameswilson",
    },
  },
]

export function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="relative isolate overflow-hidden card-membrane bg-[var(--color-background)]/80 backdrop-blur-lg py-24 sm:py-32"
    >
      {/* SVG Fiber Overlay for organic depth */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 -z-10" aria-hidden="true">
        <defs>
          <linearGradient id="team-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,120 Q200,200 400,120 T800,120" fill="none" stroke="url(#team-fiber)" strokeWidth="16" opacity="0.10" />
        <path d="M0,220 Q200,300 400,220 T800,220" fill="none" stroke="url(#team-fiber)" strokeWidth="10" opacity="0.07" />
      </svg>
      <div className="mx-auto mb-16 text-center md:max-w-[58rem]">
        <h2
          id="team-heading"
          className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl text-[var(--color-foreground)]"
        >
          Meet Our Team
        </h2>
        <p className="mt-6 text-lg text-[var(--color-muted-foreground)] border-b-[1px] border-[var(--color-border)]">
          The minds weaving the bio-mechanical future.
        </p>
      </div>
      <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <Card
            key={member.name}
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/70 card-membrane p-8 shadow-[0_0_16px_4px_var(--color-accent)] transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_24px_6px_var(--color-accent)] focus-within:shadow-[0_0_24px_6px_var(--color-accent)]"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-xl border border-[var(--color-border)]"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <CardHeader className="items-center text-center">
              <CardTitle className="text-xl font-semibold text-[var(--color-foreground)]">
                {member.name}
              </CardTitle>
              <CardDescription className="text-[var(--color-muted-foreground)]">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-3">
              <p className="text-sm text-[var(--color-muted-foreground)] mb-2">{member.bio}</p>
              <div className="flex space-x-3">
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                  >
                    <IconWrapper icon={Twitter} size="sm" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                  >
                    <IconWrapper icon={Linkedin} size="sm" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                  >
                    <IconWrapper icon={Github} size="sm" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
