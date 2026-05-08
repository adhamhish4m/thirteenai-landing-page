import { describe, it, expect } from 'vitest';
import {
  makeAmbient,
  makeScatter,
  stepParticle,
  isExpired,
  shouldEmitScatter,
} from './sparks';
import type { Particle } from './sparks';

describe('makeAmbient', () => {
  it('spawns at the bottom of the bounds with upward velocity', () => {
    const p = makeAmbient({ width: 800, height: 400 });
    expect(p.type).toBe('ambient');
    expect(p.y).toBeGreaterThanOrEqual(400);
    expect(p.vy).toBeLessThan(0); // upward
    expect(p.x).toBeGreaterThanOrEqual(0);
    expect(p.x).toBeLessThanOrEqual(800);
    expect(p.life).toBe(0);
    expect(p.maxLife).toBeGreaterThan(0);
  });

  it('uses champagne or purple hue', () => {
    const p = makeAmbient({ width: 100, height: 100 });
    expect(['champagne', 'purple']).toContain(p.hue);
  });
});

describe('makeScatter', () => {
  it('spawns at the given coordinates with no velocity', () => {
    const p = makeScatter(120, 240);
    expect(p.type).toBe('scatter');
    expect(p.x).toBe(120);
    expect(p.y).toBe(240);
    expect(p.vx).toBe(0);
    expect(p.vy).toBe(0);
  });

  it('has a finite max lifetime in the 700-1300ms range', () => {
    const p = makeScatter(0, 0);
    expect(p.maxLife).toBeGreaterThanOrEqual(700);
    expect(p.maxLife).toBeLessThanOrEqual(1300);
  });
});

describe('stepParticle', () => {
  it('advances position by velocity scaled by dt', () => {
    const p: Particle = {
      type: 'ambient',
      x: 100, y: 100,
      vx: 1, vy: -1,
      life: 0, maxLife: 5000,
      size: 1, hue: 'champagne',
    };
    stepParticle(p, 100); // 100ms
    // position should have moved a bit (the formula uses dt * 0.06)
    expect(p.x).toBeCloseTo(100 + 1 * 100 * 0.06, 5);
    expect(p.y).toBeCloseTo(100 + -1 * 100 * 0.06, 5);
    expect(p.life).toBe(100);
  });
});

describe('isExpired', () => {
  it('returns true when life >= maxLife', () => {
    expect(isExpired({ life: 1000, maxLife: 1000 } as Particle)).toBe(true);
    expect(isExpired({ life: 1001, maxLife: 1000 } as Particle)).toBe(true);
    expect(isExpired({ life: 999, maxLife: 1000 } as Particle)).toBe(false);
  });
});

describe('shouldEmitScatter', () => {
  it('emits when both time AND distance thresholds exceeded', () => {
    const result = shouldEmitScatter({
      now: 1000,
      lastEmit: 700,         // 300ms ago, > 240
      currentX: 100, currentY: 100,
      prevX: 80, prevY: 80,  // distance ~28, > 14
    });
    expect(result).toBe(true);
  });

  it('does not emit if time threshold not met', () => {
    const result = shouldEmitScatter({
      now: 1000,
      lastEmit: 900,         // 100ms ago, < 240
      currentX: 100, currentY: 100,
      prevX: 50, prevY: 50,
    });
    expect(result).toBe(false);
  });

  it('does not emit if distance threshold not met', () => {
    const result = shouldEmitScatter({
      now: 1000,
      lastEmit: 700,
      currentX: 100, currentY: 100,
      prevX: 95, prevY: 95,  // distance ~7, < 14
    });
    expect(result).toBe(false);
  });
});
