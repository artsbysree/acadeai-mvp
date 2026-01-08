import { useState } from "react";
import Layout from "@/components/Layout";
import { CheckCircle2, Circle, Lock, Zap, Trophy } from "lucide-react";

interface LearningStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: "completed" | "in-progress" | "locked";
  progress: number;
  resources: string[];
}

const learningRoadmap: { [key: string]: LearningStep[] } = {
  beginner: [
    {
      id: "b1",
      title: "Python Fundamentals",
      description: "Learn basic Python syntax, data types, and control flow",
      duration: "3 weeks",
      status: "completed",
      progress: 100,
      resources: [
        "Python Official Docs",
        "Codecademy Python Course",
        "YouTube Tutorials",
      ],
    },
    {
      id: "b2",
      title: "Data Structures & Basics",
      description: "Master lists, dictionaries, sets, and basic algorithms",
      duration: "4 weeks",
      status: "completed",
      progress: 100,
      resources: ["LeetCode Easy Problems", "GeeksforGeeks", "HackerRank"],
    },
    {
      id: "b3",
      title: "Web Basics (HTML/CSS)",
      description: "Learn HTML5 and CSS3 for web development",
      duration: "3 weeks",
      status: "in-progress",
      progress: 60,
      resources: ["MDN Web Docs", "FreeCodeCamp", "W3Schools"],
    },
    {
      id: "b4",
      title: "JavaScript Essentials",
      description: "Master JavaScript fundamentals and DOM manipulation",
      duration: "4 weeks",
      status: "locked",
      progress: 0,
      resources: ["MDN Docs", "Eloquent JavaScript", "JavaScript.info"],
    },
  ],
  intermediate: [
    {
      id: "i1",
      title: "React.js Fundamentals",
      description: "Build interactive UIs with React components and hooks",
      duration: "5 weeks",
      status: "locked",
      progress: 0,
      resources: ["React Documentation", "Scrimba React Course", "Net Ninja"],
    },
    {
      id: "i2",
      title: "SQL & Databases",
      description: "Learn SQL, database design, and NoSQL concepts",
      duration: "4 weeks",
      status: "locked",
      progress: 0,
      resources: ["SQLZoo", "W3Schools SQL", "MongoDB University"],
    },
    {
      id: "i3",
      title: "APIs & Backend Basics",
      description: "Build REST APIs and understand backend architecture",
      duration: "5 weeks",
      status: "locked",
      progress: 0,
      resources: ["Express.js Docs", "RESTful API Design", "Node.js Docs"],
    },
    {
      id: "i4",
      title: "Machine Learning Basics",
      description: "Introduction to ML concepts, models, and scikit-learn",
      duration: "6 weeks",
      status: "locked",
      progress: 0,
      resources: ["Fast.ai", "Coursera ML Course", "Scikit-learn Docs"],
    },
  ],
  advanced: [
    {
      id: "a1",
      title: "System Design & Architecture",
      description: "Learn to design scalable systems and microservices",
      duration: "6 weeks",
      status: "locked",
      progress: 0,
      resources: [
        "System Design Interview Book",
        "HLD Resources",
        "Architecture Patterns",
      ],
    },
    {
      id: "a2",
      title: "Deep Learning & Neural Networks",
      description: "Master deep learning with TensorFlow and PyTorch",
      duration: "8 weeks",
      status: "locked",
      progress: 0,
      resources: ["Fast.ai Part 2", "Deep Learning Specialization", "Papers"],
    },
    {
      id: "a3",
      title: "DevOps & Cloud Deployment",
      description: "Deploy applications with Docker, Kubernetes, and AWS",
      duration: "6 weeks",
      status: "locked",
      progress: 0,
      resources: ["Docker Docs", "Kubernetes", "AWS Training"],
    },
    {
      id: "a4",
      title: "Advanced System Design",
      description: "Design complex real-world systems and architectures",
      duration: "6 weeks",
      status: "locked",
      progress: 0,
      resources: ["Design Patterns", "OOAD", "Architecture Blogs"],
    },
  ],
};

const PathCard = ({
  step,
  canAccess,
}: {
  step: LearningStep;
  canAccess: boolean;
}) => {
  const getStatusIcon = () => {
    switch (step.status) {
      case "completed":
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case "in-progress":
        return (
          <div className="w-6 h-6 rounded-full border-3 border-blue-500 border-t-transparent animate-spin" />
        );
      case "locked":
        return <Lock className="w-6 h-6 text-muted-foreground" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  return (
    <div
      className={`rounded-lg border p-6 transition-all ${
        canAccess
          ? "border-border bg-card shadow-card hover:shadow-card-hover hover:border-primary"
          : "border-border bg-muted opacity-60 cursor-not-allowed"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-foreground mb-1">
            {step.title}
          </h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </div>
        <div className="ml-4 flex-shrink-0">{getStatusIcon()}</div>
      </div>

      {/* Progress Bar */}
      {step.status !== "locked" && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">
              Progress
            </span>
            <span className="text-xs font-bold text-primary">
              {step.progress}%
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${step.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Duration and Resources */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Zap className="w-4 h-4" />
          {step.duration}
        </div>

        {canAccess && step.resources.length > 0 && (
          <div className="pt-3 border-t border-border">
            <p className="text-xs font-semibold text-foreground mb-2">
              Resources:
            </p>
            <div className="flex flex-wrap gap-2">
              {step.resources.map((resource, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-secondary text-primary px-2 py-1 rounded-full"
                >
                  {resource}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {canAccess && (
        <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-card-hover transition-all text-sm active:opacity-95">
          {step.status === "completed"
            ? "Review"
            : step.status === "in-progress"
              ? "Continue"
              : "Start"}
        </button>
      )}
    </div>
  );
};

export default function LearningPath() {
  const [activeLevel, setActiveLevel] = useState<"beginner" | "intermediate" | "advanced">(
    "beginner"
  );

  const completedSteps = Object.values(learningRoadmap)
    .flat()
    .filter((step) => step.status === "completed").length;

  const totalSteps = Object.values(learningRoadmap).flat().length;

  const currentLevel = learningRoadmap[activeLevel];

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Your Learning Path</h1>
        </div>
        <p className="text-muted-foreground">
          A structured roadmap to master the skills needed for your career
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-card rounded-xl shadow-card border border-border p-6 mb-8 animate-slide-up hover:shadow-card-hover transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-foreground">Overall Progress</h2>
          <span className="text-2xl font-bold text-primary">
            {Math.round((completedSteps / totalSteps) * 100)}%
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-400 to-primary h-3 rounded-full transition-all"
            style={{ width: `${(completedSteps / totalSteps) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-4 text-sm text-muted-foreground">
          <span>{completedSteps} completed</span>
          <span>{totalSteps - completedSteps} remaining</span>
        </div>
      </div>

      {/* Level Selector */}
      <div className="flex gap-4 mb-8 border-b border-border pb-4 overflow-x-auto">
        {(["beginner", "intermediate", "advanced"] as const).map((level) => (
          <button
            key={level}
            onClick={() => setActiveLevel(level)}
            className={`px-6 py-2 font-semibold text-sm whitespace-nowrap border-b-2 transition-all capitalize ${
              activeLevel === level
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {level} Level
          </button>
        ))}
      </div>

      {/* Learning Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentLevel.map((step, idx) => (
          <PathCard
            key={step.id}
            step={step}
            canAccess={idx === 0 || step.status !== "locked"}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-secondary rounded-xl border border-border p-8 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Ready to accelerate your learning?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get personalized guidance and support from your AI career companion. Ask
          questions, get recommendations, and stay on track.
        </p>
        <a
          href="/chat"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Chat with AI →
        </a>
      </div>
    </Layout>
  );
}
