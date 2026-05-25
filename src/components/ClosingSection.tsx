const CONTACT_URL = 'https://cal.com/adham-hamza/fit-assessment';

export function ClosingSection() {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 30%, rgba(157,106,221,0.10) 0%, transparent 60%)',
        }}
      />
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="hairline w-6" />
            <span className="font-sans font-medium text-[13px] tracking-[0.32em] uppercase text-champagne">
              FIT CHECK
            </span>
          </div>
          <h2 className="font-display italic font-normal text-[52px] sm:text-[64px] lg:text-[80px] leading-[1.06] tracking-[-0.02em] text-ivory mb-5">
            Let's see if
            <br />
            <em className="italic text-champagne">we fit</em>.
          </h2>
          <p className="font-display italic text-[19px] sm:text-[22px] leading-[1.4] text-ivory/85 mb-8">
            A short conversation. No pitch deck. Either we're a match or we're not.
          </p>
          <a
            href={CONTACT_URL}
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-ivory shadow-[0_0_0_1px_rgba(201,169,110,0.3)] hover:opacity-95 transition"
          >
            see if you qualify.
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* RIGHT — letter card */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 lg:p-12">
          <div className="flex justify-between items-center font-mono text-[12px] tracking-[0.18em] uppercase mb-6">
            <span className="text-champagne">FROM ADHAM</span>
            <span className="text-ivory/40">LDN · 2026</span>
          </div>
          <div className="font-display text-[18px] sm:text-[19px] lg:text-[20px] leading-[1.65] text-ivory/95 mb-6 space-y-4">
            <p>You can't trust a self-proclaimed AI "expert" to properly analyze your business.</p>
            <p>You want someone with the credentials to back their claims. You want to feel you're in safe hands.</p>
            <p>The business you built doesn't deserve to be neglected or down-played.</p>
            <p>That's where I come in.</p>
            <p>
              I am a qualified AI professional with a degree in Computer Science with AI from a{' '}
              <em className="italic text-champagne">top 100 university in the world</em>.
            </p>
            <p>
              I start with one thing.{' '}
              <span className="font-medium">
                the assessment<span className="text-champagne">.</span>
              </span>{' '}
              I analyze your entire business with you over a call. Every process. Every bottleneck. Every reason why you're not spending more time doing what you love.
            </p>
            <p>I then craft a tailored roadmap that walks you through the exact steps we'd implement to give you your time and life back.</p>
            <p>Finally, I build it for you brick by brick. Planned and executed by a qualified AI engineer. No outsourcing.</p>
            <p>
              If you want to learn more,{' '}
              <em className="italic text-champagne">book the assessment</em>. Worst case scenario is you walk away knowing the exact next steps to get your life back and not be drowning IN your business.
            </p>
          </div>
          <p className="font-display italic text-[18px] sm:text-[19px] text-ivory/85 mb-1">
            Your biggest supporter,
          </p>
          <div className="font-hand text-[36px] sm:text-[40px] text-ivory leading-none mb-1">
            Adham
          </div>
          <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-muted-foreground">
            FOUNDER · THIRTEEN
          </div>
        </div>
      </div>
    </section>
  );
}
