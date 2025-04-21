import React, { useState, useMemo } from "react";
import { Activity, MessageCircle, Bot, Wrench, MoreVertical, XCircle, Search, Filter } from "lucide-react";

const mockTraces = [
  { id: "1", event: "Tool executed", type: "tool", agent: "Research Agent", time: "11:45 AM" },
  { id: "2", event: "Message sent", type: "message", agent: "Coder Agent", time: "11:44 AM" },
  { id: "3", event: "Agent status updated", type: "agent", agent: "Writer Agent", time: "11:43 AM" },
];

function TraceDetailModal({ trace, onClose }: { trace: any; onClose: () => void }) {
  if (!trace) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-card-membrane/90 rounded-2xl shadow-2xl border border-[var(--color-border)] max-w-md w-full p-8 relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent/30 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <XCircle className="w-6 h-6 text-muted-foreground" />
        </button>
        <div className="flex items-center gap-4 mb-4">
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/30 text-2xl shadow">
            {trace.type === "tool" ? <Wrench /> : trace.type === "message" ? <MessageCircle /> : <Bot />}
          </span>
          <div>
            <h3 className="font-bold text-2xl mb-1">{trace.event}</h3>
            <div className="text-sm text-muted-foreground">{trace.time}</div>
          </div>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Type:</span> {trace.type}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Agent:</span> {trace.agent}
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="px-4 py-2 rounded-xl bg-primary text-white font-semibold shadow hover:bg-primary/80 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const typeOptions = [
  { value: "all", label: "All", icon: Activity },
  { value: "tool", label: "Tool", icon: Wrench },
  { value: "message", label: "Message", icon: MessageCircle },
  { value: "agent", label: "Agent", icon: Bot },
];

export default function TraceSection() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [selected, setSelected] = useState<string[]>([]);
  const [modalTrace, setModalTrace] = useState<any>(null);
  const [showMenu, setShowMenu] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let traces = mockTraces;
    if (type !== "all") traces = traces.filter((t) => t.type === type);
    if (search)
      traces = traces.filter(
        (t) =>
          t.event.toLowerCase().includes(search.toLowerCase()) ||
          t.agent.toLowerCase().includes(search.toLowerCase())
      );
    return traces;
  }, [type, search]);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };
  const selectAll = () => setSelected(filtered.map((t) => t.id));
  const clearAll = () => setSelected([]);

  const Overlay = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
      <defs>
        <linearGradient id="trace-fiber" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>
      <path d="M0,10 Q60,40 120,10 T240,10" fill="none" stroke="url(#trace-fiber)" strokeWidth="8" opacity="0.13" />
    </svg>
  );

  return (
    <section className="relative p-4 rounded-2xl bg-card-membrane/80 border border-[var(--color-border)] shadow-xl mb-6 overflow-hidden">
      <Overlay />
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-xl tracking-tight flex items-center gap-2">
          <Activity className="w-5 h-5 text-accent" /> Traces
        </h2>
        <button
          className="px-2 py-1 rounded-lg bg-accent/20 hover:bg-accent/40 text-xs font-semibold transition"
          onClick={selectAll}
          aria-label="Select all traces"
        >
          Select All
        </button>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            className="pl-8 pr-2 py-2 rounded-lg border bg-background/80 shadow-inner w-full focus:ring-2 focus:ring-accent outline-none transition"
            placeholder="Search traces..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search traces"
          />
        </span>
        <div className="flex items-center gap-1">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <select
            className="rounded-lg border bg-background/80 px-2 py-1 text-xs focus:ring-2 focus:ring-accent outline-none transition"
            value={type}
            onChange={(e) => setType(e.target.value)}
            aria-label="Filter by type"
          >
            {typeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <button
          className="px-2 py-1 rounded-lg bg-accent/20 hover:bg-accent/40 text-xs font-semibold transition"
          onClick={clearAll}
          aria-label="Clear selection"
        >
          Clear
        </button>
      </div>
      <ul className="space-y-2">
        {filtered.map((trace) => (
          <li
            key={trace.id}
            className={`group flex items-center gap-3 p-3 rounded-2xl bg-background/70 border border-transparent hover:border-accent/60 hover:shadow-lg transition relative cursor-pointer ${selected.includes(trace.id) ? "ring-2 ring-accent/60" : ""}`}
            tabIndex={0}
            aria-label={`Trace: ${trace.event}`}
            onClick={() => setModalTrace(trace)}
            onContextMenu={(e) => {
              e.preventDefault();
              setShowMenu(trace.id);
            }}
            onBlur={() => setShowMenu(null)}
          >
            <input
              type="checkbox"
              className="accent-accent mr-2"
              checked={selected.includes(trace.id)}
              onChange={() => toggleSelect(trace.id)}
              tabIndex={-1}
              aria-label={`Select ${trace.event}`}
              onClick={(e) => e.stopPropagation()}
            />
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-accent/30 shadow text-xl">
              {trace.type === "tool" ? <Wrench className="w-5 h-5" /> : trace.type === "message" ? <MessageCircle className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-[var(--color-foreground)] text-base truncate block">
                {trace.event}
              </span>
              <span className="block text-xs text-muted-foreground truncate">
                {trace.agent}
              </span>
            </div>
            <span className="text-xs px-3 py-1 rounded-full shadow transition-all bg-gray-100 text-gray-500">
              {trace.time}
            </span>
            <button
              className="ml-2 p-2 rounded-full hover:bg-accent/20 transition"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(showMenu === trace.id ? null : trace.id);
              }}
              aria-label="More actions"
            >
              <MoreVertical className="w-5 h-5 text-muted-foreground" />
            </button>
            {/* Context Menu */}
            {showMenu === trace.id && (
              <div className="absolute top-12 right-0 z-20 bg-background border border-[var(--color-border)] rounded-xl shadow-lg p-2 min-w-[140px] animate-fadeIn">
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Edit</button>
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Delete</button>
              </div>
            )}
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="text-center text-muted-foreground py-8">No trace events found.</li>
        )}
      </ul>
      {modalTrace && <TraceDetailModal trace={modalTrace} onClose={() => setModalTrace(null)} />}
    </section>
  );
}
