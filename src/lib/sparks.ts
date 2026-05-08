export type Hue = 'champagne' | 'purple';
export type ParticleType = 'ambient' | 'scatter';

export type Particle = {
  type: ParticleType;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;     // ms accumulated
  maxLife: number;  // ms before expiry
  size: number;     // base radius in px
  hue: Hue;
};

export type Bounds = { width: number; height: number };

export function makeAmbient(bounds: Bounds): Particle {
  return {
    type: 'ambient',
    x: Math.random() * bounds.width,
    y: bounds.height + Math.random() * 30,
    vx: (Math.random() - 0.5) * 0.15,
    vy: -0.15 - Math.random() * 0.25,
    life: 0,
    maxLife: 6000 + Math.random() * 4000,
    size: 0.6 + Math.random() * 1.0,
    hue: Math.random() < 0.7 ? 'champagne' : 'purple',
  };
}

export function makeScatter(x: number, y: number): Particle {
  return {
    type: 'scatter',
    x,
    y,
    vx: 0,
    vy: 0,
    life: 0,
    maxLife: 700 + Math.random() * 600,
    size: 0.7 + Math.random() * 0.6,
    hue: Math.random() < 0.6 ? 'champagne' : 'purple',
  };
}

export function stepParticle(p: Particle, dt: number): void {
  p.life += dt;
  p.x += p.vx * dt * 0.06;
  p.y += p.vy * dt * 0.06;
}

export function isExpired(p: Particle): boolean {
  return p.life >= p.maxLife;
}

type EmitArgs = {
  now: number;
  lastEmit: number;
  currentX: number;
  currentY: number;
  prevX: number;
  prevY: number;
};

const SCATTER_TIME_THRESHOLD_MS = 240;
const SCATTER_DIST_THRESHOLD_PX = 14;

export function shouldEmitScatter(args: EmitArgs): boolean {
  if (args.now - args.lastEmit < SCATTER_TIME_THRESHOLD_MS) return false;
  const dx = args.currentX - args.prevX;
  const dy = args.currentY - args.prevY;
  if (Math.hypot(dx, dy) < SCATTER_DIST_THRESHOLD_PX) return false;
  return true;
}

export function pickScatterOffset(): { dx: number; dy: number } {
  const offset = 18 + Math.random() * 28;
  const angle = Math.random() * Math.PI * 2;
  return { dx: Math.cos(angle) * offset, dy: Math.sin(angle) * offset };
}

export function alphaForParticle(p: Particle): number {
  const t = p.life / p.maxLife;
  if (p.type === 'scatter') {
    // sharp peak then quick fade
    return Math.max(0, Math.min(1, Math.sin(t * Math.PI) * 1.2));
  }
  // ambient: fadeIn * fadeOut
  const fadeIn = Math.min(1, t * 4);
  const fadeOut = 1 - t;
  return fadeIn * fadeOut;
}
