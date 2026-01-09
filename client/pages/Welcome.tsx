import { Link } from "react-router-dom";
import { Zap, BookOpen, Briefcase, BarChart3, Users, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Welcome() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Guidance",
      description: "Get personalized career advice and skill recommendations from your AI companion"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Structured Learning Path",
      description: "Follow a curated roadmap from beginner to advanced levels in your field"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Exploration",
      description: "Discover career paths, companies, and salary insights tailored to your goals"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Monitor your skills development with detailed progress indicators and analytics"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Insights",
      description: "Learn from peer experiences and industry best practices"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Results",
      description: "Accelerate your career growth with targeted, efficient learning"
    },
  ];

  const testimonials = [
    {
      name: "Arjun Kumar",
      role: "2nd Year, Computer Science",
      text: "AcadeAI helped me identify my strengths and create a clear path to landing my dream internship."
    },
    {
      name: "Priya Sharma",
      role: "3rd Year, IT",
      text: "The AI career chatbot answered all my placement preparation questions in real-time!"
    },
    {
      name: "Rahul Patel",
      role: "1st Year, Electronics",
      text: "I found the perfect learning path for transitioning into AI/ML development."
    },
  ];

  const stats = [
    { number: "10,000+", label: "Students Empowered" },
    { number: "500+", label: "Learning Paths" },
    { number: "98%", label: "Placement Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card shadow-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-card-hover transition-shadow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg text-foreground hidden sm:inline">AcadeAI</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/internships" className="text-foreground hover:text-primary font-medium text-sm transition-colors">
                Internships
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-card-hover transition-all text-sm"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-block px-3 py-1 bg-secondary text-primary rounded-full text-sm font-semibold">
                  Welcome to Your Future 🚀
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                Your AI-Powered Career Companion
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Navigate your academic journey and career path with personalized guidance from advanced AI. Get skilled, get noticed, get hired.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-card-hover transition-all active:opacity-95"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/internships"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Explore Internships
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col gap-4 pt-8">
              {[
                "✓ Free to use for all students",
                "✓ Trusted by 10,000+ students",
                "✓ 24/7 AI Career Assistant"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="bg-gradient-to-br from-primary via-blue-400 to-blue-600 rounded-2xl p-1">
              <div className="bg-card rounded-xl p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">AI Career Chat</p>
                    <p className="text-xs text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-white">Y</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground bg-secondary rounded px-3 py-2">
                        What skills should I learn?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground bg-primary text-primary-foreground rounded px-3 py-2">
                        Based on your interests in AI and Web Development, I recommend mastering Python, JavaScript, and frameworks like React or TensorFlow...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-4xl sm:text-5xl font-bold text-primary">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and AI guidance designed specifically for college students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl shadow-card border border-border p-8 hover:shadow-card-hover transition-all group"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who are already building their future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl shadow-card border border-border p-8 space-y-4"
              >
                <p className="text-foreground italic">{`"${testimonial.text}"`}</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-12 text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Start your journey with AcadeAI today and get personalized guidance from the most advanced AI career assistant.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-card-hover transition-all active:opacity-95"
          >
            Get Started for Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-foreground">AcadeAI</span>
              </div>
              <p className="text-muted-foreground text-sm">Your AI-powered career companion</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <div className="space-y-2">
                <Link to="/login" className="text-muted-foreground hover:text-primary text-sm transition-colors block">
                  Sign In
                </Link>
                <Link to="/internships" className="text-muted-foreground hover:text-primary text-sm transition-colors block">
                  Internships
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Learn</h4>
              <div className="space-y-2">
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors block">
                  Documentation
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors block">
                  Blog
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors block">
                  Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors block">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 AcadeAI. All rights reserved. Built with ❤️ for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
