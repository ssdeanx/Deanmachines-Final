import React, { useState, useMemo } from "react";
import { Search, Settings, Info, CheckCircle, XCircle, MoreVertical } from "lucide-react";

// Mock data for demonstration
const mockTools = [
  { id: "1", name: "Knowledge Search", description: "Semantic search over docs", enabled: true, type: "search" },
  { id: "2", name: "Web Browser", description: "Browse the web live", enabled: false, type: "browser" },
  { id: "3", name: "Code Interpreter", description: "Run Python code", enabled: true, type: "code" },
  { id: "4", name: "Arxiv", description: "Search academic papers", enabled: true, type: "research" },
  { id: "5", name: "Reddit", description: "Fetch Reddit threads", enabled: false, type: "community" },
  { id: "6", name: "GitHub", description: "Repo/code search", enabled: true, type: "dev" },
];

// Tool detail modal (2025 style)
function ToolDetailModal({ tool, onClose }: { tool: any; onClose: () => void }) {
  if (!tool) return null;
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
            <Info />
          </span>
          <div>
            <h3 className="font-bold text-2xl mb-1">{tool.name}</h3>
            <div className="text-sm text-muted-foreground">{tool.description}</div>
          </div>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Type:</span> {tool.type}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Status:</span> {tool.enabled ? (
            <span className="text-green-600 ml-1">Enabled</span>
          ) : (
            <span className="text-gray-500 ml-1">Disabled</span>
          )}
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

export default function ToolSection() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [modalTool, setModalTool] = useState<any>(null);
  const [showMenu, setShowMenu] = useState<string | null>(null);

  // Filtered tools
  const filtered = useMemo(
    () =>
      mockTools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(search.toLowerCase()) ||
          tool.description.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  // Bulk select
  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };
  const selectAll = () => setSelected(filtered.map((tool) => tool.id));
  const clearAll = () => setSelected([]);

  // SVG Fiber Overlay
  const Overlay = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
      <defs>
        <linearGradient id="tool-fiber" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>
      <path d="M0,20 Q60,40 120,20 T240,20" fill="none" stroke="url(#tool-fiber)" strokeWidth="8" opacity="0.13" />
    </svg>
  );

  return (
    <section className="relative p-4 rounded-2xl bg-card-membrane/80 border border-[var(--color-border)] shadow-xl mb-6 overflow-hidden">
      <Overlay />
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-xl tracking-tight flex items-center gap-2">
          <Settings className="w-5 h-5 text-accent" /> Tools
        </h2>
        <button
          className="px-2 py-1 rounded-lg bg-accent/20 hover:bg-accent/40 text-xs font-semibold transition"
          onClick={selectAll}
          aria-label="Select all tools"
        >
          Select All
        </button>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            className="pl-8 pr-2 py-2 rounded-lg border bg-background/80 shadow-inner w-full focus:ring-2 focus:ring-accent outline-none transition"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search tools"
          />
        </span>
        <button
          className="px-2 py-1 rounded-lg bg-accent/20 hover:bg-accent/40 text-xs font-semibold transition"
          onClick={clearAll}
          aria-label="Clear selection"
        >
          Clear
        </button>
      </div>
      <ul className="space-y-2">
        {filtered.map((tool) => (
          <li
            key={tool.id}
            className={`group flex items-center gap-3 p-3 rounded-2xl bg-background/70 border border-transparent hover:border-accent/60 hover:shadow-lg transition relative cursor-pointer ${selected.includes(tool.id) ? "ring-2 ring-accent/60" : ""}`}
            tabIndex={0}
            aria-label={`Tool: ${tool.name}`}
            onClick={() => setModalTool(tool)}
            onContextMenu={(e) => {
              e.preventDefault();
              setShowMenu(tool.id);
            }}
            onBlur={() => setShowMenu(null)}
          >
            <input
              type="checkbox"
              className="accent-accent mr-2"
              checked={selected.includes(tool.id)}
              onChange={() => toggleSelect(tool.id)}
              tabIndex={-1}
              aria-label={`Select ${tool.name}`}
              onClick={(e) => e.stopPropagation()}
            />
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-accent/30 shadow text-xl">
              {tool.type === "search" && <Search className="w-5 h-5" />}
              {tool.type === "browser" && <Info className="w-5 h-5" />}
              {tool.type === "code" && <Settings className="w-5 h-5" />}
              {tool.type === "research" && <Info className="w-5 h-5" />}
              {tool.type === "community" && <Info className="w-5 h-5" />}
              {tool.type === "dev" && <Settings className="w-5 h-5" />}
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-[var(--color-foreground)] text-base truncate block">
                {tool.name}
              </span>
              <span className="block text-xs text-muted-foreground truncate">
                {tool.description}
              </span>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full shadow transition-all flex items-center gap-1 ${tool.enabled ? "bg-green-100 text-green-700 animate-pulse" : "bg-gray-100 text-gray-500"}`}
              aria-label={tool.enabled ? "Enabled" : "Disabled"}
            >
              {tool.enabled ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              {tool.enabled ? "Enabled" : "Disabled"}
            </span>
            <button
              className="ml-2 p-2 rounded-full hover:bg-accent/20 transition"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(showMenu === tool.id ? null : tool.id);
              }}
              aria-label="More actions"
            >
              <MoreVertical className="w-5 h-5 text-muted-foreground" />
            </button>
            {/* Context Menu */}
            {showMenu === tool.id && (
              <div className="absolute top-12 right-0 z-20 bg-background border border-[var(--color-border)] rounded-xl shadow-lg p-2 min-w-[140px] animate-fadeIn">
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Edit</button>
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Enable/Disable</button>
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Delete</button>
              </div>
            )}
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="text-center text-muted-foreground py-8">No tools found.</li>
        )}
      </ul>
      {modalTool && <ToolDetailModal tool={modalTool} onClose={() => setModalTool(null)} />}
    </section>
  );
}
