import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  accent?: "primary" | "orange-glow";
  density?: number;
};

const PixelGridBackground = ({ className, accent = "primary", density = 10 }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

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
    };

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const gap = 1;
      const size = density - gap;
      const cols = Math.ceil(w / density);
      const rows = Math.ceil(h / density);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.05)";
      ctx.fillRect(0, 0, w, h);

      // Simplified static grid - no animation for cleaner look
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const accentChance = (x + y) % 17 === 0;
          if (accentChance) {
            ctx.fillStyle = `hsla(var(--${accent}) / 0.15)`;
          } else {
            ctx.fillStyle = "rgba(255,255,255,0.08)";
          }
          ctx.fillRect(x * density + gap, y * density + gap, size, size);
        }
      }
    };

    resize();
    draw(); // Draw once, no animation loop

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas.parentElement!);

    return () => {
      ro.disconnect();
    };
  }, [density, accent]);

  return <canvas ref={canvasRef} className={className} />;
};

export default PixelGridBackground;
