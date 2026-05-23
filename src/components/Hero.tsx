import { useRef, useState } from 'react';
import { SparksCanvas } from './SparksCanvas';

const CONTACT_URL = 'mailto:adham@askthirteen.com';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [orbTransform, setOrbTransform] = useState('translate(0px, 0px)');

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    setOrbTransform(`translate(${x}px, ${y}px)`);
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden"
      style={{ minHeight: 'calc(100vh - 5rem)' }}
    >
      {/* sparks (full hero, behind everything) */}
      <SparksCanvas trackRef={heroRef} />

      {/* bottom fade — softly blends sparks/orb into the next section */}
      <div
        aria-hidden
        className="absolute left-0 right-0 bottom-0 pointer-events-none z-[1]"
        style={{
          height: '180px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(12,10,16,0.6) 55%, #0c0a10 100%)',
        }}
      />

      {/* orb */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: '-120px',
          right: '-120px',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(157,106,221,0.18), transparent 70%)',
          borderRadius: '50%',
          transform: orbTransform,
          transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* right-meta strip */}
      <div
        className="absolute z-10 top-10 right-8 lg:right-14 text-right font-display italic lowercase text-ivory/75 leading-[1.5] tracking-[-0.005em] hidden lg:block"
        aria-hidden
      >
        <div className="text-[20px] fade-in-up" style={{ animationDelay: '0.05s' }}>the assessment.</div>
        <div className="text-[20px] fade-in-up" style={{ animationDelay: '0.15s' }}>founder-led.</div>
        <div className="text-[20px] fade-in-up text-champagne" style={{ animationDelay: '0.25s' }}>a qualified AI engineer, not self-proclaimed.</div>
      </div>

      {/* content (bottom-left) */}
      <div className="absolute z-10 left-6 right-6 sm:left-10 sm:right-10 lg:left-14 bottom-14 max-w-[640px]">
        <div className="hairline w-7 mb-5 fade-in-up" style={{ animationDelay: '0.05s' }} />
        <h1
          className="font-display font-medium text-[44px] sm:text-[60px] md:text-[72px] lg:text-[80px] leading-[1.06] tracking-[-0.02em] text-ivory mb-4 fade-in-up"
          style={{ animationDelay: '0.15s' }}
        >
          AI,
          <br />
          <em className="italic font-normal text-champagne">engineered</em>.
        </h1>
        <div
          className="font-display italic text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.5] text-ivory/85 mb-7 max-w-[600px] space-y-3 fade-in-up"
          style={{ animationDelay: '0.25s' }}
        >
          <p>
            I run{' '}
            <span className="not-italic font-medium text-ivory">
              the assessment<span className="text-champagne">.</span>
            </span>{' '}
            with you.
          </p>
          <p>
            Together, we dig deep into your business and processes. We find exactly what's inefficient and holding you back.
          </p>
          <p>
            I then make a tailored roadmap for your business specifically, and build it out module by module for you.
          </p>
          <p className="text-ivory/70">
            Planned and executed by a qualified AI engineer, not a self-proclaimed one.
          </p>
        </div>
        <a
          href={CONTACT_URL}
          className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-ivory shadow-[0_0_0_1px_rgba(201,169,110,0.3)] hover:opacity-95 transition fade-in-up"
          style={{ animationDelay: '0.35s' }}
        >
          book the assessment.
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
