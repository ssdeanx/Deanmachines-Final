// Attachment/file preview in chat
import { FileText, XCircle } from "lucide-react";

export default function ChatAttachmentPreview() {
  return (
    <div
      tabIndex={0}
      aria-label="File attachment preview"
      className="relative flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-card-membrane/80 p-3 shadow-xl hover:shadow-2xl focus:ring-2 focus:ring-accent outline-none group overflow-hidden transition-all"
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="file-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,8 Q30,24 60,8 T120,8" fill="none" stroke="url(#file-fiber)" strokeWidth="6" opacity="0.14" />
      </svg>
      <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-accent/20 shadow text-xl animate-fadeIn">
        <FileText className="w-5 h-5 text-accent animate-pulse" aria-hidden />
      </span>
      <span className="truncate font-medium text-[var(--color-foreground)]">filename.pdf</span>
      <button
        className="ml-auto p-2 rounded-full hover:bg-red-100/50 focus:bg-red-100/80 transition focus:outline-none"
        aria-label="Remove attachment"
      >
        <XCircle className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
}
