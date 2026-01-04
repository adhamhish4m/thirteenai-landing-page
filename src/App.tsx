import { Pen, Database, Bot } from 'lucide-react';
import './index.css';
import { BackgroundPaths } from './components/ui/background-boxes';

function App() {
  const handleBookCall = () => {
    const cal = (window as any).Cal;
    if (cal && cal.ns && cal.ns["fit-assessment"]) {
      cal.ns["fit-assessment"]("modal", {
        calLink: "adham-hamza/fit-assessment",
        config: { layout: "month_view" }
      });
    }
  };

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
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={handleBookCall}
                className="inline-flex items-center justify-center rounded-md text-sm sm:text-base md:text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-5 sm:h-12 sm:px-6 md:h-14 md:px-8"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section with VSL */}
        <section className="pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-6xl mx-auto">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-8 leading-tight">
                Get more{' '}
                <span className="text-primary">
                  interested leads
                </span>
                {' '}using AI
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                <span className="text-primary">Personalized outreach</span> that brings you interested leads
              </p>

              {/* VSL Video - Primary Focus */}
              <div className="mb-12 sm:mb-16">
                <div className="relative w-full max-w-5xl mx-auto glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10">
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src="https://www.loom.com/embed/e5f3a873cee244a1b8948472d9ab2ab2?sid=8b3e5e5c-3b5e-4f5e-9b5e-5e5c3b5e5e5c&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      title="Lead Thirteen Demo"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
                <button
                  onClick={handleBookCall}
                  className="inline-flex items-center justify-center rounded-md text-base sm:text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 sm:h-14 sm:px-8 w-full sm:w-auto max-w-xs"
                >
                  Book a Call
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-sm sm:text-base text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span>enriched leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span>ai personalization</span>
                </div>
                <div className="flex items-center gap-2">
                  <Pen className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span>copy that converts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="glass-strong p-6 sm:p-8 rounded-2xl text-center hover:-translate-y-2 transition-all duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  $132,635
                </div>
                <div className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium">
                  Generated in Client Opportunities
                </div>
              </div>

              <div className="glass-strong p-6 sm:p-8 rounded-2xl text-center hover:-translate-y-2 transition-all duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  3 Calls
                </div>
                <div className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium">
                  Booked in First 4 Days
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
