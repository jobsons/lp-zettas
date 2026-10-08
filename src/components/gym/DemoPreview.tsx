"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { DemoArtwork, type DemoProps } from "@/remotion/DemoArtwork";
const DemoPlayer = dynamic(() => import("./DemoPlayer"), { ssr: false });
export default function DemoPreview({ kind, compact = false }: DemoProps) {
  const root = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setLoaded(true);
      },
      { threshold: 0.1 },
    );
    if (root.current) observer.observe(root.current);
    return () => {
      preference.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);
  return (
    <div ref={root} className={`demo-preview ${compact ? "demo-hero" : ""}`}>
      <div className="demo-browser" aria-hidden="true">
        <span />
        <span />
        <span />
        <small>
          zettas /{" "}
          {kind === "cobranca"
            ? "cobrança"
            : kind === "gestao"
              ? "gestão"
              : kind}
        </small>
        <span className="demo-browser-badge">Prévia da solução</span>
      </div>
      <div className="demo-surface">
        <div
          className="demo-poster"
          aria-hidden={loaded && !reducedMotion}
          role="img"
          aria-label={`Demonstração ilustrativa de ${kind}. Dados fictícios da Academia Aurora.`}
        >
          <div>
            <DemoArtwork kind={kind} compact={compact} />
          </div>
        </div>
        {loaded && !reducedMotion && (
          <div className="demo-playback">
            <DemoPlayer kind={kind} compact={compact} visible={visible} />
          </div>
        )}
      </div>
      <div className="demo-disclaimer">
        Demonstração com dados fictícios
        {reducedMotion && <span> · Visualização estática</span>}
      </div>
    </div>
  );
}
