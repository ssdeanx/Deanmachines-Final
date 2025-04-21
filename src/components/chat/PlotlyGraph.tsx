"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

/**
 * PlotlyGraph - Modular, accessible Plotly.js chart for ChatObservability
 * 2025 standards: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions
 */
export function PlotlyGraph({ data }: { data: { x: number[]; y: number[]; name?: string }[] }) {
  // Memoize layout for performance
  const layout = useMemo(() => ({
    autosize: true,
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    font: { color: "var(--color-foreground)" },
    margin: { l: 32, r: 24, t: 32, b: 32 },
    showlegend: true,
    xaxis: { gridcolor: "var(--color-border)" },
    yaxis: { gridcolor: "var(--color-border)" },
  }), []);

  return (
    <div className="relative bg-card-membrane/80 rounded-xl shadow p-4 border border-[var(--color-border)]">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="plotly-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <Plot
        data={data.map((series) => ({ ...series, type: "scatter", mode: "lines+markers", marker: { color: "#38bdf8" } }))}
        layout={layout}
        useResizeHandler
        style={{ width: "100%", height: 240 }}
        config={{ displayModeBar: false, responsive: true }}
      />
    </div>
  );
}

export default PlotlyGraph;
