"use client";

import { useEffect, useState } from "react";

export default function TyreMotion() {
  const [phase, setPhase] = useState<"hidden" | "visible" | "done">("hidden");

  useEffect(() => {
    setPhase("visible");
    const timer = window.setTimeout(() => setPhase("done"), 2400);
    return () => window.clearTimeout(timer);
  }, []);

  if (phase !== "visible") return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#0a0e0c]"
      style={{ animation: "loader-exit .45s ease 2.4s forwards" }}
    >
      {/* dot-grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* breathe glow ball */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 340,
          height: 340,
          background:
            "radial-gradient(circle, rgba(168,212,0,.65) 0%, rgba(168,212,0,.22) 38%, transparent 68%)",
          filter: "blur(44px)",
          animation: "loader-glow-breathe 2.2s ease-in-out infinite",
        }}
      />

      {/* progress bar */}
      <div aria-hidden="true" className="relative z-10 flex flex-col items-center gap-5">
        <div className="w-[180px] h-[3px] rounded-full bg-[#1e2822] overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg,#0b8f3c,#b8dc35)",
              animation: "loader-progress 2.2s cubic-bezier(.4,0,.2,1) .2s forwards",
              width: 0,
            }}
          />
        </div>
      </div>

      {/* footer label */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 grid gap-2 text-center"
        style={{ animation: "loader-in .5s ease .35s forwards", opacity: 0 }}
      >
        <p className="m-0 whitespace-nowrap text-[13px] font-bold tracking-tight text-[#c8d4cc]">
          M/s Madhwendra{" "}
          <em className="not-italic font-black text-[#b8dc35]">
            Authorized Distributor BKT
          </em>
        </p>
        <p className="m-0 text-[8px] font-black tracking-[.16em] text-[#4a5a50]">
          OTR TYRES • CONSTRUCTION • MINING • EARTHMOVING
        </p>
      </div>
    </div>
  );
}
