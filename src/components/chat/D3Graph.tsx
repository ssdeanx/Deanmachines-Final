"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

/**
 * D3Graph - Modular, accessible D3.js chart for ChatObservability
 * 2025 standards: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions
 */
export function D3Graph({ data }: { data: { x: number; y: number }[] }) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    const width = 320;
    const height = 160;
    // Scales
    const x = d3.scaleLinear().domain([0, d3.max(data, d => d.x) || 1]).range([24, width - 24]);
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.y) || 1]).range([height - 24, 24]);
    // Line
    const line = d3.line<{ x: number; y: number }>()
      .x(d => x(d.x))
      .y(d => y(d.y));
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "url(#d3-fiber)")
      .attr("stroke-width", 3)
      .attr("d", line);
    // Axes (minimal)
    svg.append("g")
      .attr("transform", `translate(0,${height - 24})`)
      .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0));
    svg.append("g")
      .attr("transform", `translate(24,0)`)
      .call(d3.axisLeft(y).ticks(5).tickSizeOuter(0));
  }, [data]);

  return (
    <div className="relative bg-card-membrane/80 rounded-xl shadow p-4 border border-[var(--color-border)]">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="d3-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <svg ref={ref} width={320} height={160} role="img" aria-label="D3 Line Chart" className="mx-auto" />
    </div>
  );
}

export default D3Graph;
