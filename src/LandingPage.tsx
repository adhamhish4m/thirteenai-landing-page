import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Zap, Target, TrendingUp, ArrowRight, CheckCircle, BarChart3, Users, MessageSquare, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Particles } from '@/components/ui/particles';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-background to-blue-500/5" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Particle field effects - OPTIMIZED FOR PRODUCTION */}
      <Particles
        className="absolute inset-0"
        quantity={60}
        ease={80}
        staticity={60}
        color="#a855f7"
        size={0.4}
      />

      {/* Navigation */}
      <nav className="relative z-20 glass-strong border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-primary via-primary-glow to-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-glow to-primary">
                THIRTEEN AI
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/login')}
                className="text-sm sm:text-base hover:text-primary transition-colors"
              >
                Sign In
              </Button>
              <Button
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-primary via-primary-glow to-primary hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all text-sm sm:text-base"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-6 sm:mb-8 hover:shadow-lg hover:shadow-primary/20 transition-all">
                <Zap className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-xs sm:text-sm font-medium">AI-Powered Outreach Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-glow to-primary">
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

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
                <Button
                  size="lg"
                  onClick={() => navigate('/login')}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary via-primary-glow to-primary hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all text-base sm:text-lg px-8 py-6"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass-card glass-hover border-white/10 text-base sm:text-lg px-8 py-6"
                >
                  Watch Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
              <Card className="glass-strong glass-hover hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    10M+
                  </div>
                  <div className="text-base sm:text-lg text-muted-foreground">
                    Messages Personalized
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-strong glass-hover hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                    4.2x
                  </div>
                  <div className="text-base sm:text-lg text-muted-foreground">
                    Higher Response Rate
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-strong glass-hover hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                    95%
                  </div>
                  <div className="text-base sm:text-lg text-muted-foreground">
                    Time Saved
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section - Bento Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Everything you need to{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-glow to-primary">
                  scale outreach
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful AI tools that automate research, personalization, and follow-ups
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Feature 1 - Large */}
              <Card className="lg:col-span-2 glass-strong glass-hover hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 sm:mb-6">
                    <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AI-Powered Research</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                    Our AI automatically researches each lead using Perplexity AI, finding relevant talking points, recent news, and personalization angles in seconds.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 rounded-full glass-card text-xs sm:text-sm">Company Research</div>
                    <div className="px-3 py-1 rounded-full glass-card text-xs sm:text-sm">News Analysis</div>
                    <div className="px-3 py-1 rounded-full glass-card text-xs sm:text-sm">Social Insights</div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="glass-strong glass-hover hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 sm:mb-6">
                    <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Smart Personalization</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Generate hyper-relevant icebreakers that reference specific details about each prospect.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="glass-strong glass-hover hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 sm:mb-6">
                    <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Campaign Analytics</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Track performance, response rates, and optimize your campaigns in real-time.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 4 - Large */}
              <Card className="lg:col-span-2 glass-strong glass-hover hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-4 sm:mb-6">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Multi-Source Lead Import</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                    Import leads from Apollo.io, CSV files, or any other source. We handle the data validation and enrichment automatically.
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="glass-card p-3 sm:p-4 rounded-lg">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mb-2" />
                      <div className="text-xs sm:text-sm font-medium">Apollo Integration</div>
                    </div>
                    <div className="glass-card p-3 sm:p-4 rounded-lg">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mb-2" />
                      <div className="text-xs sm:text-sm font-medium">CSV Upload</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="glass-strong glass-hover hover:shadow-pink-500/20 hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-4 sm:mb-6">
                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Scale Effortlessly</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Process thousands of leads in minutes. Built for teams that need to move fast.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Simple 3-step process
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                From upload to personalized messages in minutes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="glass-strong glass-hover p-6 sm:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg shadow-primary/50">
                    1
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Upload Leads</h3>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Import your leads from Apollo.io or upload a CSV file with your prospect list.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="glass-strong glass-hover p-6 sm:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg shadow-blue-500/50">
                    2
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AI Research</h3>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Our AI researches each lead automatically, finding relevant personalization angles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="glass-strong glass-hover p-6 sm:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg shadow-green-500/50">
                    3
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Get Results</h3>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Download personalized messages and watch your response rates soar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="glass-strong glass-hover border-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              <CardContent className="p-8 sm:p-12 lg:p-16 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Ready to{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-glow to-primary">
                    10x your outreach
                  </span>
                  ?
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
                  Join thousands of sales teams using AI to personalize at scale and close more deals.
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate('/login')}
                  className="bg-gradient-to-r from-primary via-primary-glow to-primary hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7"
                >
                  <Rocket className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Start Your Free Trial
                </Button>
                <p className="text-sm sm:text-base text-muted-foreground mt-4 sm:mt-6">
                  No credit card required • Free 14-day trial • Cancel anytime
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 glass-card">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary via-primary-glow to-primary flex items-center justify-center">
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
