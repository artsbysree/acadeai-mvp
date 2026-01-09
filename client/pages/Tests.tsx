import { useState } from "react";
import Layout from "@/components/Layout";
import { BookOpen, CheckCircle2, Clock, AlertCircle, TrendingUp, Award, ArrowRight, Share2 } from "lucide-react";
import { shareToLinkedIn } from "@/lib/utils";

interface Test {
  id: number;
  title: string;
  course: string;
  duration: number;
  questions: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  status: "completed" | "in-progress" | "not-started";
  score?: number;
  maxScore?: number;
  completedDate?: string;
  icon: string;
}

interface TestResult {
  id: number;
  testTitle: string;
  score: number;
  maxScore: number;
  date: string;
  time: number;
  category: string;
}

const tests: Test[] = [
  {
    id: 1,
    title: "Python Basics Quiz",
    course: "Python Programming",
    duration: 15,
    questions: 10,
    difficulty: "Beginner",
    status: "completed",
    score: 90,
    maxScore: 100,
    completedDate: "Jan 28, 2024",
    icon: "🐍"
  },
  {
    id: 2,
    title: "Data Structures Test",
    course: "Data Structures",
    duration: 30,
    questions: 20,
    difficulty: "Intermediate",
    status: "completed",
    score: 85,
    maxScore: 100,
    completedDate: "Jan 25, 2024",
    icon: "🏗️"
  },
  {
    id: 3,
    title: "Web Dev Assessment",
    course: "Web Development",
    duration: 45,
    questions: 30,
    difficulty: "Intermediate",
    status: "in-progress",
    icon: "🌐"
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    course: "Machine Learning",
    duration: 60,
    questions: 40,
    difficulty: "Advanced",
    status: "not-started",
    icon: "🤖"
  },
  {
    id: 5,
    title: "JavaScript ES6+ Quiz",
    course: "JavaScript",
    duration: 20,
    questions: 15,
    difficulty: "Intermediate",
    status: "completed",
    score: 88,
    maxScore: 100,
    completedDate: "Jan 20, 2024",
    icon: "⚡"
  },
  {
    id: 6,
    title: "SQL Database Challenge",
    course: "Databases",
    duration: 40,
    questions: 25,
    difficulty: "Intermediate",
    status: "not-started",
    icon: "💾"
  },
];

const testResults: TestResult[] = [
  { id: 1, testTitle: "Python Basics Quiz", score: 90, maxScore: 100, date: "Jan 28, 2024", time: 12, category: "Python" },
  { id: 2, testTitle: "Data Structures Test", score: 85, maxScore: 100, date: "Jan 25, 2024", time: 28, category: "DSA" },
  { id: 3, testTitle: "JavaScript ES6+ Quiz", score: 88, maxScore: 100, date: "Jan 20, 2024", time: 18, category: "JavaScript" },
];

const stats = [
  { label: "Tests Completed", value: 3, icon: "✓" },
  { label: "Average Score", value: "87.67%", icon: "📊" },
  { label: "Learning Streak", value: "5 days", icon: "🔥" },
  { label: "Total Time", value: "58 mins", icon: "⏱️" },
];

export default function Tests() {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const filteredTests = tests.filter((test) => {
    if (filter === "completed") return test.status === "completed";
    if (filter === "pending") return test.status !== "completed";
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "in-progress":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      default:
        return "Not Started";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-muted";
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Assessment Tests</h1>
        </div>
        <p className="text-muted-foreground">
          Test your knowledge and track your learning progress
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
              </div>
              <span className="text-3xl opacity-50">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Results */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8 mb-8 animate-slide-up">
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Results</h2>
        <div className="space-y-4">
          {testResults.map((result) => (
            <div
              key={result.id}
              className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:border-primary border border-border transition-colors"
            >
              <div className="flex-1">
                <p className="font-semibold text-foreground">{result.testTitle}</p>
                <p className="text-sm text-muted-foreground">{result.date}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Score</p>
                  <p className="text-2xl font-bold text-primary">
                    {result.score}/{result.maxScore}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Time</p>
                  <p className="text-lg font-semibold text-foreground">{result.time} min</p>
                </div>
                <button
                  onClick={() =>
                    shareToLinkedIn(
                      `🎉 Test Achievement Unlocked!`,
                      `I just completed "${result.testTitle}" with a score of ${result.score}/${result.maxScore} on AcadeAI! 📚 Excited to continue my learning journey towards my career goals. #StudentLife #LearningJourney`
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-colors border border-primary font-semibold text-sm"
                  title="Share on LinkedIn"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-success-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-4 mb-8 border-b border-border pb-4">
        {(["all", "completed", "pending"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 font-medium text-sm rounded-lg transition-all ${
              filter === tab
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-secondary"
            }`}
          >
            {tab === "all" ? "All Tests" : tab === "completed" ? "Completed" : "Pending"}
          </button>
        ))}
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {filteredTests.map((test) => (
          <div
            key={test.id}
            className="bg-card rounded-xl shadow-card border border-border p-6 hover:shadow-card-hover transition-all group animate-slide-up"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{test.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{test.title}</h3>
                    <p className="text-sm text-muted-foreground">{test.course}</p>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(test.status)}`}>
                {getStatusText(test.status)}
              </span>
            </div>

            {/* Difficulty Badge */}
            <div className="mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(test.difficulty)}`}>
                {test.difficulty}
              </span>
            </div>

            {/* Details */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary rounded-lg">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <p className="font-semibold text-foreground">{test.duration} min</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Questions</p>
                <p className="font-semibold text-foreground">{test.questions}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Status</p>
                {test.status === "completed" && test.score && (
                  <p className="font-semibold text-success">{test.score}%</p>
                )}
                {test.status === "in-progress" && (
                  <p className="font-semibold text-primary">In Progress</p>
                )}
                {test.status === "not-started" && (
                  <p className="font-semibold text-muted-foreground">Pending</p>
                )}
              </div>
            </div>

            {/* Score Progress (if completed) */}
            {test.status === "completed" && test.score && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Performance</span>
                  <span className="text-sm font-semibold text-primary">{test.score}/{test.maxScore}</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${(test.score / (test.maxScore || 100)) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Completed Date */}
            {test.completedDate && (
              <p className="text-xs text-muted-foreground mb-4">Completed: {test.completedDate}</p>
            )}

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSelectedTest(test)}
                className={`py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  test.status === "completed"
                    ? "bg-secondary text-primary hover:border-primary border border-border"
                    : "bg-primary text-primary-foreground hover:shadow-card-hover"
                }`}
              >
                {test.status === "completed" ? "Review Test" : test.status === "in-progress" ? "Continue Test" : "Start Test"}
                <ArrowRight className="w-4 h-4" />
              </button>
              {test.status === "completed" && (
                <button
                  onClick={() =>
                    shareToLinkedIn(
                      `✨ Skill Mastery Milestone!`,
                      `I just completed "${test.title}" in the "${test.course}" course with a score of ${test.score}%! 🚀 I'm using AcadeAI to build my career skills. Join me on this learning journey! 📖 #SkillDevelopment #CareerGrowth`
                    )
                  }
                  className="py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-300"
                  title="Share on LinkedIn"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-secondary rounded-xl border border-border p-8 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Improve Your Performance
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Regular testing helps identify knowledge gaps and reinforces learning. Try to complete one test per week to maximize retention.
        </p>
        <button className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-card-hover transition-all">
          Take a New Test →
        </button>
      </div>
    </Layout>
  );
}
