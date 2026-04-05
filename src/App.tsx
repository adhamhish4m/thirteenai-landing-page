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
              TESTIMONIALS
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* VSL Section */}
        <section className="pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10">
              <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1180306974?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="thirteen_sprint_vsl"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href="https://cal.com/adham-hamza/fit-assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 sm:mb-16">
              WHAT OUR <span className="text-primary">CLIENTS</span> SAY
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
