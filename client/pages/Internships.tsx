import { Link } from "react-router-dom";
import { Zap, Briefcase, MapPin, Calendar, DollarSign, Users, Star, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

interface Internship {
  id: number;
  company: string;
  logo: string;
  position: string;
  location: string;
  duration: string;
  stipend: string;
  category: string;
  rating: number;
  applicants: number;
  skills: string[];
  description: string;
  deadline: string;
  about: string;
}

const internships: Internship[] = [
  {
    id: 1,
    company: "Google",
    logo: "🔍",
    position: "Engineering Intern - AI/ML",
    location: "Bangalore, India",
    duration: "12 weeks",
    stipend: "₹60,000/month",
    category: "AI/ML",
    rating: 4.9,
    applicants: 5200,
    skills: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"],
    description: "Work on cutting-edge AI and ML projects with the Google Research team.",
    deadline: "February 28, 2024",
    about: "Google's AI/ML internship program is designed to give students hands-on experience with real-world problems. You'll work alongside experienced engineers and researchers to build solutions that impact millions of users."
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "⊞",
    position: "Software Engineer Intern",
    location: "Hyderabad, India",
    duration: "12 weeks",
    stipend: "₹55,000/month",
    category: "Development",
    rating: 4.8,
    applicants: 4800,
    skills: ["C++", "C#", ".NET", "Cloud Computing"],
    description: "Develop innovative solutions using Microsoft technologies and cloud services.",
    deadline: "March 15, 2024",
    about: "Join Microsoft's internship program and work on cloud-based solutions. You'll get mentorship from experienced professionals and access to the latest Microsoft tools and technologies."
  },
  {
    id: 3,
    company: "Amazon",
    logo: "🅰",
    position: "Backend Intern",
    location: "Bangalore, India",
    duration: "12 weeks",
    stipend: "₹58,000/month",
    category: "Development",
    rating: 4.7,
    applicants: 6100,
    skills: ["Java", "AWS", "Databases", "System Design"],
    description: "Build scalable backend systems for Amazon's e-commerce platform.",
    deadline: "February 20, 2024",
    about: "Amazon's backend internship focuses on building distributed systems and understanding large-scale infrastructure. You'll work on real problems that serve millions of customers."
  },
  {
    id: 4,
    company: "Meta",
    logo: "ƒ",
    position: "Data Science Intern",
    location: "Delhi, India",
    duration: "12 weeks",
    stipend: "₹62,000/month",
    category: "Data Science",
    rating: 4.8,
    applicants: 3500,
    skills: ["Python", "Statistics", "SQL", "Data Visualization"],
    description: "Analyze massive datasets to drive product decisions at Meta.",
    deadline: "March 1, 2024",
    about: "Work with Meta's data team to understand user behavior and drive product improvements. You'll have access to real data and work on problems that affect billions of users."
  },
  {
    id: 5,
    company: "Goldman Sachs",
    logo: "GS",
    position: "Technology Analyst Intern",
    location: "Mumbai, India",
    duration: "12 weeks",
    stipend: "₹70,000/month",
    category: "Finance Tech",
    rating: 4.6,
    applicants: 2800,
    skills: ["Java", "Python", "Finance Basics", "Problem Solving"],
    description: "Develop trading systems and financial software at a leading investment bank.",
    deadline: "February 25, 2024",
    about: "Goldman Sachs' tech internship program offers exposure to the finance industry and advanced software development. Work on high-performance systems used in trading and risk management."
  },
  {
    id: 6,
    company: "Adobe",
    logo: "🎨",
    position: "Software Engineer Intern",
    location: "Bangalore, India",
    duration: "12 weeks",
    stipend: "₹52,000/month",
    category: "Development",
    rating: 4.7,
    applicants: 2200,
    skills: ["JavaScript", "React", "TypeScript", "Web Development"],
    description: "Build creative software tools used by millions of designers worldwide.",
    deadline: "March 10, 2024",
    about: "Adobe's internship program focuses on building world-class creative tools. You'll work on products like Photoshop, Illustrator, and Premiere Pro."
  },
  {
    id: 7,
    company: "Netflix",
    logo: "N",
    position: "Frontend Intern",
    location: "Bangalore, India",
    duration: "12 weeks",
    stipend: "₹59,000/month",
    category: "Development",
    rating: 4.9,
    applicants: 3100,
    skills: ["React", "JavaScript", "CSS", "Performance Optimization"],
    description: "Create engaging user interfaces for Netflix's streaming platform.",
    deadline: "March 5, 2024",
    about: "Work on the frontend systems that serve content to millions of users worldwide. Learn best practices in performance optimization and user experience design."
  },
  {
    id: 8,
    company: "Stripe",
    logo: "S",
    position: "Backend/Payments Intern",
    location: "Bangalore, India",
    duration: "12 weeks",
    stipend: "₹61,000/month",
    category: "Finance Tech",
    rating: 4.8,
    applicants: 2600,
    skills: ["Go", "Python", "Payment Systems", "APIs"],
    description: "Work on payment processing systems serving millions of transactions.",
    deadline: "February 28, 2024",
    about: "Stripe's internship program focuses on building reliable payment infrastructure. Learn about payment systems, security, and working with global payments at scale."
  },
];

export default function Internships() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = ["All", "AI/ML", "Development", "Data Science", "Finance Tech"];

  const filteredInternships = internships.filter((internship) => {
    const matchesCategory = selectedCategory === "All" || internship.category === selectedCategory;
    const matchesSearch =
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <Link to="/" className="text-foreground hover:text-primary font-medium text-sm transition-colors">
                Home
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

      {/* Header Section */}
      <section className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-foreground">
              Internship Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover internships at top tech and finance companies. Build real-world experience and launch your career.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by company or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <span className="absolute right-4 top-3 text-muted-foreground">🔍</span>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 items-center">
            <Filter className="w-5 h-5 text-muted-foreground" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "border border-border text-foreground hover:border-primary hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            Showing {filteredInternships.length} internship{filteredInternships.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Internships Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredInternships.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredInternships.map((internship) => (
              <div
                key={internship.id}
                className="bg-card rounded-xl shadow-card border border-border p-6 hover:shadow-card-hover transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl bg-secondary rounded-lg w-16 h-16 flex items-center justify-center">
                        {internship.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground">{internship.company}</h3>
                        <p className="text-sm text-primary font-semibold">{internship.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold text-sm">{internship.rating}</span>
                  </div>
                </div>

                {/* Position */}
                <h2 className="text-lg font-bold text-foreground mb-4">{internship.position}</h2>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{internship.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <DollarSign className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="font-semibold text-foreground">{internship.stipend}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{internship.applicants} applied</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground text-sm mb-4">{internship.description}</p>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground font-semibold mb-2">REQUIRED SKILLS</p>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-secondary text-primary px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deadline and Button */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm">
                    <p className="text-muted-foreground">Deadline</p>
                    <p className="font-semibold text-foreground">{internship.deadline}</p>
                  </div>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-card-hover transition-all text-sm"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-lg text-muted-foreground">No internships found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchTerm("");
              }}
              className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-card-hover transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-secondary border-y border-border py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">{internships.length}+</p>
              <p className="text-muted-foreground font-medium">Active Opportunities</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">₹52-70K</p>
              <p className="text-muted-foreground font-medium">Average Monthly Stipend</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">12 weeks</p>
              <p className="text-muted-foreground font-medium">Average Duration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-12 text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">
            Ready to Land Your Dream Internship?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Create a profile, get personalized recommendations, and ace your internship applications with AcadeAI.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-card-hover transition-all active:opacity-95"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-foreground">AcadeAI</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Home
              </Link>
              <Link to="/internships" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Internships
              </Link>
              <Link to="/login" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Sign In
              </Link>
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
