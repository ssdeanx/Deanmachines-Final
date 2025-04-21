// Main chat layout wrapper
export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full bg-card-membrane/80 backdrop-blur-lg rounded-xl shadow-[0_0_24px_6px_var(--color-accent)] border border-[var(--color-border)] relative overflow-visible">
      {/* SVG Fiber Overlay for Bio-Mechanical Weave */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden="true">
        <defs>
          <linearGradient id="layout-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,40 Q150,80 300,40 T600,40" fill="none" stroke="url(#layout-fiber)" strokeWidth="12" opacity="0.12" />
      </svg>
      {children}
    </div>
  );
}
