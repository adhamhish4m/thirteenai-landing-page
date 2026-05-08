import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import {
  makeAmbient,
  makeScatter,
  stepParticle,
  isExpired,
  shouldEmitScatter,
  pickScatterOffset,
  alphaForParticle,
} from '../lib/sparks';
import type { Particle } from '../lib/sparks';

const AMBIENT_SPAWN_PROBABILITY_PER_FRAME = 0.05;
const AMBIENT_PARTICLE_CAP = 50;

type SparksCanvasProps = {
  /** Ref to the element whose mouse events drive the scatter sparks. Defaults to the canvas itself. */
  trackRef?: RefObject<HTMLElement | null>;
  className?: string;
};

export function SparksCanvas({ trackRef, className }: SparksCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, lastEmit: 0, prevX: 0, prevY: 0 };

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
    }
    resize();

    const target = trackRef?.current ?? canvas;

    function onMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      const now = performance.now();
      if (
        shouldEmitScatter({
          now,
          lastEmit: mouse.lastEmit,
          currentX: mouse.x,
          currentY: mouse.y,
          prevX: mouse.prevX,
          prevY: mouse.prevY,
        })
      ) {
        mouse.lastEmit = now;
        mouse.prevX = mouse.x;
        mouse.prevY = mouse.y;
        const { dx, dy } = pickScatterOffset();
        particles.push(makeScatter(mouse.x + dx, mouse.y + dy));
      }
    }
    function onLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    target.addEventListener('mousemove', onMove);
    target.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', resize);

    let last = performance.now();
    let raf = 0;

    function tick(now: number) {
      const dt = now - last;
      last = now;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;

      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      if (
        Math.random() < AMBIENT_SPAWN_PROBABILITY_PER_FRAME &&
        particles.filter(p => p.type === 'ambient').length < AMBIENT_PARTICLE_CAP
      ) {
        particles.push(makeAmbient({ width: W, height: H }));
      }

      particles = particles.filter(p => {
        stepParticle(p, dt);
        if (isExpired(p)) return false;
        const alpha = alphaForParticle(p);
        const color = p.hue === 'purple' ? '157,106,221' : '201,169,110';
        const r = p.size;
        const gradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6);
        gradient.addColorStop(0, `rgba(${color},${alpha * 0.9})`);
        gradient.addColorStop(0.4, `rgba(${color},${alpha * 0.3})`);
        gradient.addColorStop(1, `rgba(${color},0)`);
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, r * 6, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = `rgba(${color},${alpha})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx!.fill();
        return true;
      });

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      target.removeEventListener('mousemove', onMove);
      target.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
    };
  }, [trackRef]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
      aria-hidden
    />
  );
}
