import { Star } from 'lucide-react';
import './index.css';
import { BackgroundPaths } from './components/ui/background-boxes';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background with Paths */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-purple-950/20 to-black overflow-hidden">
        <BackgroundPaths />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 glass-strong border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-clash">
                LEAD THIRTEEN
              </span>
            </div>
            <a
              href="#testimonials"
              className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Testimonials
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Launch Announcement */}
        <section className="pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 py-16 sm:py-24 md:py-32 px-6">
              {/* Animated glow orbs */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] animate-blob" />
                <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-violet-400/10 rounded-full blur-[80px] animate-blob animation-delay-2000" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase sprint-badge-glow">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Coming Soon
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-clash tracking-tight text-center">
                  <span className="sprint-text-gradient">The Thirteen</span>
                  <br />
                  <span className="sprint-text-gradient-alt">Sprint</span>
                </h2>

                <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium tracking-wide sprint-shimmer">
                  Stay Tuned
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 sm:mb-16">
              What our <span className="text-primary">clients</span> say
            </h2>

            {/* Video Testimonials */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div className="glass-strong rounded-2xl overflow-hidden shadow-lg shadow-primary/10 border border-white/10">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src="https://www.youtube.com/embed/V0uXW7PsV0U?modestbranding=1&rel=0"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    title="Randy Clarke Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-foreground">Randy Clarke</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">CEO, Go Janitorial</p>
                </div>
              </div>

              <div className="glass-strong rounded-2xl overflow-hidden shadow-lg shadow-primary/10 border border-white/10">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src="https://www.youtube.com/embed/N1JtDzzi_9A?modestbranding=1&rel=0"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    title="Vince Ozonoh Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-foreground">Vince Ozonoh</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Founder, TaskSpaceAI</p>
                </div>
              </div>
            </div>

            {/* Text Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="glass-strong p-6 sm:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  "Working with Adham has been a game changer. He combined deep technical knowledge with a strong grasp of compliance-sensitive workflows, helping us create a solution that genuinely reduces admin time and improves accuracy for advisers. Highly recommend."
                </p>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-foreground">Alessandro Tolomeo</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Founder, ID MATTER AI</p>
                </div>
              </div>

              <div className="glass-strong p-6 sm:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  "You've been very reliable, easy to work with and the quality of what you produced has exceeded what I expected! I really appreciate the effort you've put in and would recommend you to anyone!"
                </p>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-foreground">Jordan Hopkins</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Founder, ITK UK</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
