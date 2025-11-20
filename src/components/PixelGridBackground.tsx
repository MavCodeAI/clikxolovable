import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  accent?: "primary" | "orange-glow";
  density?: number;
  speed?: number;
};

const PixelGridBackground = ({ className, accent = "primary", density = 10, speed = 0.6 }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number>(0);
  const phasesRef = useRef<Float32Array | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const resize = () => {
      const parent = canvas.parentElement!;
      const rect = parent.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(rect.width / density);
      const rows = Math.ceil(rect.height / density);
      phasesRef.current = new Float32Array(cols * rows);
      for (let i = 0; i < phasesRef.current.length; i++) phasesRef.current[i] = Math.random() * Math.PI * 2;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    const draw = (t: number) => {
      const now = t / 1000;
      if (now - lastRef.current < 1 / 24) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      lastRef.current = now;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const gap = 1;
      const size = density - gap;
      const cols = Math.ceil(w / density);
      const rows = Math.ceil(h / density);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.05)";
      ctx.fillRect(0, 0, w, h);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          const phase = phasesRef.current![idx];
          const pulse = 0.35 + 0.65 * Math.abs(Math.sin(phase + now * speed));
          const accentChance = (x + y) % 17 === 0;
          if (accentChance) {
            ctx.fillStyle = `hsla(var(--${accent}) / ${0.12 + 0.18 * pulse})`;
          } else {
            ctx.fillStyle = `rgba(255,255,255,${0.03 + 0.12 * pulse})`;
          }
          ctx.fillRect(x * density + gap, y * density + gap, size, size);
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [density, speed, accent]);

  return <canvas ref={canvasRef} className={className} />;
};

export default PixelGridBackground;