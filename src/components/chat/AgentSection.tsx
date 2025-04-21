import React, { useState, useMemo } from "react";
import { User, Users, BadgeCheck, Activity, MoreVertical, XCircle, Search } from "lucide-react";

type Agent = {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  status: "online" | "offline" | "busy";
  skills?: string[];
};

const mockAgents: Agent[] = [
  { id: "1", name: "Research Agent", avatar: "🧑‍🔬", role: "Researcher", status: "online", skills: ["search", "summarize"] },
  { id: "2", name: "Coder Agent", avatar: "👨‍💻", role: "Developer", status: "busy", skills: ["code", "debug"] },
  { id: "3", name: "Copywriter Agent", avatar: "✍️", role: "Writer", status: "offline", skills: ["write", "edit"] },
  { id: "4", name: "Analyst Agent", avatar: "📊", role: "Analyst", status: "online", skills: ["analyze", "report"] },
  { id: "5", name: "Market Research Agent", avatar: "📈", role: "Researcher", status: "online", skills: ["market", "trend"] },
];

function AgentDetailModal({ agent, onClose }: { agent: Agent; onClose: () => void }) {
  if (!agent) return null;
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
            <span aria-hidden>{agent.avatar}</span>
          </span>
          <div>
            <h3 className="font-bold text-2xl mb-1">{agent.name}</h3>
            <div className="text-sm text-muted-foreground">{agent.role}</div>
          </div>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Status:</span> <span className={`ml-1 ${agent.status === "online" ? "text-green-600" : agent.status === "busy" ? "text-yellow-500" : "text-gray-500"}`}>{agent.status}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Skills:</span> {agent.skills?.join(", ")}
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

export default function AgentSection() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [modalAgent, setModalAgent] = useState<Agent | null>(null);
  const [showMenu, setShowMenu] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      mockAgents.filter(
        (agent) =>
          agent.name.toLowerCase().includes(search.toLowerCase()) ||
          agent.role.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };
  const selectAll = () => setSelected(filtered.map((a) => a.id));
  const clearAll = () => setSelected([]);

  const Overlay = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
      <defs>
        <linearGradient id="agent-fiber" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>
      <path d="M0,10 Q60,40 120,10 T240,10" fill="none" stroke="url(#agent-fiber)" strokeWidth="8" opacity="0.13" />
    </svg>
  );

  return (
    <section className="relative p-4 rounded-2xl bg-card-membrane/80 border border-[var(--color-border)] shadow-xl mb-6 overflow-hidden">
      <Overlay />
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-xl tracking-tight flex items-center gap-2">
          <Users className="w-5 h-5 text-accent" /> Agents
        </h2>
        <button
          className="px-2 py-1 rounded-lg bg-accent/20 hover:bg-accent/40 text-xs font-semibold transition"
          onClick={selectAll}
          aria-label="Select all agents"
        >
          Select All
        </button>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            className="pl-8 pr-2 py-2 rounded-lg border bg-background/80 shadow-inner w-full focus:ring-2 focus:ring-accent outline-none transition"
            placeholder="Search agents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search agents"
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
        {filtered.map((agent) => (
          <li
            key={agent.id}
            className={`group flex items-center gap-3 p-3 rounded-2xl bg-background/70 border border-transparent hover:border-accent/60 hover:shadow-lg transition relative cursor-pointer ${selected.includes(agent.id) ? "ring-2 ring-accent/60" : ""}`}
            tabIndex={0}
            aria-label={`Agent: ${agent.name}`}
            onClick={() => setModalAgent(agent)}
            onContextMenu={(e) => {
              e.preventDefault();
              setShowMenu(agent.id);
            }}
            onBlur={() => setShowMenu(null)}
          >
            <input
              type="checkbox"
              className="accent-accent mr-2"
              checked={selected.includes(agent.id)}
              onChange={() => toggleSelect(agent.id)}
              tabIndex={-1}
              aria-label={`Select ${agent.name}`}
              onClick={(e) => e.stopPropagation()}
            />
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-accent/30 shadow text-xl">
              <span aria-hidden>{agent.avatar}</span>
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-[var(--color-foreground)] text-base truncate block">
                {agent.name}
              </span>
              <span className="block text-xs text-muted-foreground truncate">
                {agent.role}
              </span>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full shadow transition-all flex items-center gap-1 ${agent.status === "online" ? "bg-green-100 text-green-700 animate-pulse" : agent.status === "busy" ? "bg-yellow-100 text-yellow-700 animate-pulse" : "bg-gray-100 text-gray-500"}`}
              aria-label={agent.status}
            >
              {agent.status === "online" && <BadgeCheck className="w-4 h-4" />}
              {agent.status === "busy" && <Activity className="w-4 h-4" />}
              {agent.status === "offline" && <XCircle className="w-4 h-4" />}
              {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
            </span>
            <button
              className="ml-2 p-2 rounded-full hover:bg-accent/20 transition"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(showMenu === agent.id ? null : agent.id);
              }}
              aria-label="More actions"
            >
              <MoreVertical className="w-5 h-5 text-muted-foreground" />
            </button>
            {/* Context Menu */}
            {showMenu === agent.id && (
              <div className="absolute top-12 right-0 z-20 bg-background border border-[var(--color-border)] rounded-xl shadow-lg p-2 min-w-[140px] animate-fadeIn">
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Edit</button>
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Enable/Disable</button>
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-accent/10 transition text-sm">Delete</button>
              </div>
            )}
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="text-center text-muted-foreground py-8">No agents found.</li>
        )}
      </ul>
      {modalAgent && <AgentDetailModal agent={modalAgent} onClose={() => setModalAgent(null)} />}
    </section>
  );
}
