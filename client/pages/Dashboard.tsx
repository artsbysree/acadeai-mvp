import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import {
  TrendingUp,
  BookOpen,
  Briefcase,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";

interface StudentProfile {
  name: string;
  email: string;
  branch: string;
  year: string;
  interests: string[];
  careerGoals: string;
}

const skillRecommendations = [
  {
    id: 1,
    skill: "Python Programming",
    category: "Programming",
    level: "Beginner to Intermediate",
    progress: 65,
    icon: "🐍",
    description: "Master Python for data science and AI applications",
  },
  {
    id: 2,
    skill: "Data Analysis",
    category: "Data Science",
    level: "Beginner",
    progress: 40,
    icon: "📊",
    description: "Learn data manipulation and visualization techniques",
  },
  {
    id: 3,
    skill: "Machine Learning",
    category: "AI/ML",
    level: "Intermediate",
    progress: 25,
    icon: "🤖",
    description: "Build and deploy ML models for real-world problems",
  },
  {
    id: 4,
    skill: "Web Development",
    category: "Development",
    level: "Beginner",
    progress: 50,
    icon: "🌐",
    description: "Create responsive and interactive web applications",
  },
  {
    id: 5,
    skill: "System Design",
    category: "Development",
    level: "Advanced",
    progress: 15,
    icon: "🏗️",
    description: "Design scalable systems and architecture patterns",
  },
  {
    id: 6,
    skill: "Cloud Computing",
    category: "Infrastructure",
    level: "Intermediate",
    progress: 35,
    icon: "☁️",
    description: "Deploy applications on AWS, GCP, or Azure",
  },
];

const careerPaths = [
  {
    title: "Software Engineer",
    companies: "Google, Microsoft, Amazon",
    avgSalary: "$120-180k",
    match: 95,
  },
  {
    title: "Data Scientist",
    companies: "Meta, Netflix, Tesla",
    avgSalary: "$130-200k",
    match: 88,
  },
  {
    title: "AI/ML Engineer",
    companies: "OpenAI, DeepMind, IBM",
    avgSalary: "$140-220k",
    match: 92,
  },
];

export default function Dashboard() {
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    // Load profile from localStorage
    const stored = localStorage.getItem("studentProfile");
    if (stored) {
      const parsedProfile = JSON.parse(stored);
      setProfile(parsedProfile);
      // Calculate overall progress (mock calculation)
      const avgSkillProgress =
        skillRecommendations.reduce((sum, skill) => sum + skill.progress, 0) /
        skillRecommendations.length;
      setOverallProgress(Math.round(avgSkillProgress));
    }
  }, []);

  if (!profile) {
    return (
      <Layout showNav={false}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Loading your profile...
            </p>
            <a
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Back to Login
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Welcome Section */}
      <div className="mb-8 animate-slide-up">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Welcome back, {profile.name}! 👋
        </h1>
        <p className="text-lg text-muted-foreground">
          You're on track for an amazing career. Let's build your future together.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Overall Progress Card */}
        <div className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Overall Progress</h3>
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div className="text-4xl font-bold text-primary mb-4">
            {overallProgress}%
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Keep pushing to reach your goals
          </p>
        </div>

        {/* Skills in Progress */}
        <div className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Active Learning</h3>
            <BookOpen className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-4xl font-bold text-blue-500 mb-4">
            {skillRecommendations.length}
          </div>
          <div className="flex flex-wrap gap-2">
            {skillRecommendations.slice(0, 3).map((skill) => (
              <span
                key={skill.id}
                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
              >
                {skill.skill}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Skills in your roadmap
          </p>
        </div>

        {/* Career Match */}
        <div className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Career Match</h3>
            <Briefcase className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-4xl font-bold text-green-500 mb-4">93%</div>
          <p className="text-sm text-muted-foreground">
            Alignment with your goals across all paths
          </p>
          <button className="mt-4 text-sm text-primary font-semibold hover:underline">
            View paths →
          </button>
        </div>
      </div>

      {/* Recommended Skills */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Skills to Develop
          </h2>
          <a
            href="/learning"
            className="text-primary font-semibold text-sm hover:underline flex items-center gap-2"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillRecommendations.slice(0, 6).map((skill) => (
            <div
              key={skill.id}
              className="bg-card rounded-xl shadow-card border border-border p-6 hover:shadow-card-hover transition-all duration-200 animate-slide-up"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{skill.icon}</div>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">
                {skill.skill}
              </h3>
              <p className="text-xs text-primary font-semibold mb-3">
                {skill.category}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {skill.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{skill.level}</span>
                  <span className="font-semibold text-primary">
                    {skill.progress}%
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-card-hover transition-all text-sm active:opacity-95">
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Career Guidance */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8 hover:shadow-card-hover transition-shadow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Recommended Career Paths
          </h2>
          <a
            href="/chat"
            className="text-primary font-semibold text-sm hover:underline flex items-center gap-2"
          >
            Ask AI <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerPaths.map((path, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-foreground text-lg">
                  {path.title}
                </h3>
                <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
                  <span className="text-sm font-bold text-green-700">
                    {path.match}%
                  </span>
                  <span className="text-xs text-green-600">Match</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Top Companies:</strong> {path.companies}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Avg. Salary:</strong> {path.avgSalary}/year
              </p>
              <button className="w-full px-4 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
