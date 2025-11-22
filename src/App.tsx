import { Sparkles, Zap, Target, TrendingUp, ArrowRight, CheckCircle, BarChart3, Users, MessageSquare, Rocket } from 'lucide-react';
import './index.css';
import { BackgroundPaths } from './components/ui/background-boxes';

function App() {
  const handleGetStarted = () => {
    // Redirect to your main app's login page
    window.location.href = 'https://your-main-app-url.vercel.app/login';
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
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-primary via-[#c794de] to-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#c794de] to-primary">
                THIRTEEN AI
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={handleGetStarted}
                className="px-4 py-2 sm:px-6 sm:py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm sm:text-base"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section with VSL */}
        <section className="pt-20 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-6xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-6 sm:mb-8 hover:shadow-lg hover:shadow-primary/20 transition-all">
                <Zap className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-xs sm:text-sm font-medium">AI-Powered Outreach Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#c794de] to-primary">
                  Personalize
                </span>
                {' '}at Scale with{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  AI Intelligence
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your cold outreach with AI-powered personalization.
                Research, craft, and send hyper-personalized messages that actually get responses.
              </p>

              {/* VSL Video - Primary Focus */}
              <div className="mb-12 sm:mb-16">
                <div className="relative w-full max-w-5xl mx-auto glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10">
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src="https://www.loom.com/embed/e5f3a873cee244a1b8948472d9ab2ab2?sid=8b3e5e5c-3b5e-4f5e-9b5e-5e5c3b5e5e5c"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      title="THIRTEEN AI Demo"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
                <button
                  onClick={handleGetStarted}
                  className="w-full sm:w-auto px-8 py-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-base sm:text-lg font-semibold"
                >
                  <Rocket className="inline-block mr-2 h-5 w-5" />
                  Start Free Trial
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="glass-strong p-6 sm:p-8 rounded-2xl text-center hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  10M+
                </div>
                <div className="text-base sm:text-lg text-muted-foreground">
                  Messages Personalized
                </div>
              </div>

              <div className="glass-strong p-6 sm:p-8 rounded-2xl text-center hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  4.2x
                </div>
                <div className="text-base sm:text-lg text-muted-foreground">
                  Higher Response Rate
                </div>
              </div>

              <div className="glass-strong p-6 sm:p-8 rounded-2xl text-center hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                  95%
                </div>
                <div className="text-base sm:text-lg text-muted-foreground">
                  Time Saved
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Everything you need to{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#c794de] to-primary">
                  scale outreach
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful AI tools that automate research, personalization, and follow-ups
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="glass-strong p-6 sm:p-8 rounded-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AI-Powered Research</h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Our AI automatically researches each lead using Perplexity AI, finding relevant talking points in seconds.
                </p>
              </div>

              <div className="glass-strong p-6 sm:p-8 rounded-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 sm:mb-6">
                  <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Smart Personalization</h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Generate hyper-relevant icebreakers that reference specific details about each prospect.
                </p>
              </div>

              <div className="glass-strong p-6 sm:p-8 rounded-2xl hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 sm:mb-6">
                  <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Campaign Analytics</h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Track performance, response rates, and optimize your campaigns in real-time.
                </p>
              </div>

              <div className="glass-strong p-6 sm:p-8 rounded-2xl hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-4 sm:mb-6">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Multi-Source Import</h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Import leads from Apollo.io, CSV files, or any other source automatically.
                </p>
              </div>

              <div className="glass-strong p-6 sm:p-8 rounded-2xl hover:shadow-pink-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-4 sm:mb-6">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-pink-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Scale Effortlessly</h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Process thousands of leads in minutes. Built for teams that need to move fast.
                </p>
              </div>

              <div className="glass-strong p-6 sm:p-8 rounded-2xl hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 sm:mb-6">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Lightning Fast</h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Optimized performance ensures your campaigns run smoothly at any scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="glass-strong p-8 sm:p-12 lg:p-16 rounded-3xl text-center border-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Ready to{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#c794de] to-primary">
                  10x your outreach
                </span>
                ?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
                Join thousands of sales teams using AI to personalize at scale and close more deals.
              </p>
              <button
                onClick={handleGetStarted}
                className="px-8 sm:px-12 py-6 sm:py-7 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-base sm:text-lg font-semibold"
              >
                <Rocket className="inline-block mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Start Your Free Trial
              </button>
              <p className="text-sm sm:text-base text-muted-foreground mt-4 sm:mt-6">
                No credit card required • Free 14-day trial • Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 glass-card">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary via-[#c794de] to-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">THIRTEEN AI</span>
              </div>
              <div className="text-sm text-muted-foreground">
                © 2025 Thirteen AI. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
