import React, { useState, useMemo } from "react";
import { Workflow, ListChecks, MoreVertical, XCircle, Search, Play, Pause } from "lucide-react";

const mockWorkflows = [
  { id: "1", name: "Data Analysis", steps: 5, status: "active", agents: ["Research Agent", "Analyst Agent"] },
  { id: "2", name: "Content Generation", steps: 3, status: "paused", agents: ["Copywriter Agent"] },
  { id: "3", name: "Market Research", steps: 4, status: "active", agents: ["Market Research Agent"] },
];

function WorkflowDetailModal({ workflow, onClose }: { workflow: any; onClose: () => void }) {
  if (!workflow) return null;
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
            <Workflow />
          </span>
          <div>
            <h3 className="font-bold text-2xl mb-1">{workflow.name}</h3>
            <div className="text-sm text-muted-foreground">{workflow.steps} steps</div>
          </div>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Status:</span> <span className={`ml-1 ${workflow.status === "active" ? "text-green-600" : "text-yellow-500"}`}>{workflow.status}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Agents:</span> {workflow.agents.join(", ")}
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

export default function WorkflowSection() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [modalWorkflow, setModalWorkflow] = useState<any>(null);
  const [showMenu, setShowMenu] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      mockWorkflows.filter(
        (workflow) =>
          workflow.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };
  const selectAll = () => setSelected(filtered.map((w) => w.id));
  const clearAll = () => setSelected([]);

  const Overlay = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
      <defs>
        <linearGradient id="workflow-fiber" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>
      <path d="M0,15 Q60,40 120,15 T240,15" fill="none" stroke="url(#workflow-fiber)" strokeWidth="8" opacity="0.13" />
    </svg>
  );

  return (
    <section className="relative p-4 rounded-2xl bg-card-membrane/80 border border-[var(--color-border)] shadow-xl mb-6 overflow-hidden">
      <Overlay />
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-xl tracking-tight flex items-center gap-2">
          <ListChecks className="w-5 h-5 text-accent" /> Workflows
        </h2>
        <button
          className="px-2 py-1 rounded-lg bg-accent/20 hover:bg-accent/40 text-xs font-semibold transition"
          onClick={selectAll}
          aria-label="Select all workflows"
        >
          Select All
        </button>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            className="pl-8 pr-2 py-2 rounded-lg border bg-background/80 shadow-inner w-full focus:ring-2 focus:ring-accent outline-none transition"
            placeholder="Search workflows..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search workflows"
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
        {filtered.map((workflow) => (
          <li
            key={workflow.id}
            className={`group flex items-center gap-3 p-3 rounded-2xl bg-background/70 border border-transparent hover:border-accent/60 hover:shadow-lg transition relative cursor-pointer ${selected.includes(workflow.id) ? "ring-2 ring-accent/60" : ""}`}
            tabIndex={0}
            aria-label={`Workflow: ${workflow.name}`}
            onClick={() => setModalWorkflow(workflow)}
            onContextMenu={(e) => {
              e.preventDefault();
              setShowMenu(workflow.id);
            }}
            onBlur={() => setShowMenu(null)}
          >
            <input
              type="checkbox"
              className="accent-accent mr-2"
              checked={selected.includes(workflow.id)}
              onChange={() => toggleSelect(workflow.id)}
              tabIndex={-1}
              aria-label={`Select ${workflow.name}`}
              onClick={(e) => e.stopPropagation()}
            />
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-accent/30 shadow text-xl">
              <Workflow className="w-5 h-5" />
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-[var(--color-foreground)] text-base truncate block">
                {workflow.name}
              </span>
              <span className="block text-xs text-muted-foreground truncate">
                {workflow.steps} steps
              </span>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full shadow transition-all flex items-center gap-1 ${workflow.status === "active" ? "bg-green-100 text-green-700 animate-pulse" : "bg-yellow-100 text-yellow-700 animate-pulse"}`}
              aria-label={workflow.status}
            >
              {workflow.status === "active" ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              {workflow.status.charAt(0).toUpperCase() + workflow.status.slice(1)}
            </span>
            <button
              className="ml-2 p-2 rounded-full hover:bg-accent/20 transition"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(showMenu === workflow.id ? null : workflow.id);
              }}
              aria-label="More actions"
            >
              <MoreVertical className="w-5 h-5 text-muted-foreground" />
            </button>
            {/* Context Menu */}
            {showMenu === workflow.id && (
              <div className="absolute top-12 right-0 z-20 bg-background border border-[var(--color-border)] rounded-xl shadow-lg p-2 min-w-[140px] animate-fadeIn">
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Edit</button>
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Start/Pause</button>
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Delete</button>
              </div>
            )}
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="text-center text-muted-foreground py-8">No workflows found.</li>
        )}
      </ul>
      {modalWorkflow && <WorkflowDetailModal workflow={modalWorkflow} onClose={() => setModalWorkflow(null)} />}
    </section>
  );
}
