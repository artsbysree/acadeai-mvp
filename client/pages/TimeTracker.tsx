import { useState } from "react";
import Layout from "@/components/Layout";
import { Clock, TrendingUp, Award, Zap, BarChart3, Calendar } from "lucide-react";

interface CourseTime {
  id: number;
  name: string;
  hours: number;
  minutes: number;
  target: number;
  icon: string;
  color: string;
  category: string;
}

interface DailyActivity {
  day: string;
  date: string;
  duration: number;
  courses: string;
  streak: boolean;
}

const courseData: CourseTime[] = [
  { id: 1, name: "Python Programming", hours: 24, minutes: 45, target: 40, icon: "🐍", color: "from-blue-400 to-blue-600", category: "Programming" },
  { id: 2, name: "Web Development", hours: 18, minutes: 30, target: 30, icon: "🌐", color: "from-purple-400 to-purple-600", category: "Development" },
  { id: 3, name: "Data Science", hours: 12, minutes: 15, target: 25, icon: "📊", color: "from-green-400 to-green-600", category: "Data" },
  { id: 4, name: "Machine Learning", hours: 8, minutes: 50, target: 20, icon: "🤖", color: "from-orange-400 to-orange-600", category: "AI/ML" },
  { id: 5, name: "System Design", hours: 5, minutes: 20, target: 15, icon: "🏗️", color: "from-pink-400 to-pink-600", category: "Development" },
  { id: 6, name: "Databases", hours: 3, minutes: 45, target: 10, icon: "💾", color: "from-indigo-400 to-indigo-600", category: "Database" },
];

const weeklyActivity: DailyActivity[] = [
  { day: "Mon", date: "Jan 22", duration: 180, courses: "Python, Web Dev", streak: true },
  { day: "Tue", date: "Jan 23", duration: 220, courses: "Data Science, ML", streak: true },
  { day: "Wed", date: "Jan 24", duration: 150, courses: "Web Dev, System Design", streak: true },
  { day: "Thu", date: "Jan 25", duration: 280, courses: "Python, Data Science", streak: true },
  { day: "Fri", date: "Jan 26", duration: 210, courses: "ML, Databases", streak: true },
  { day: "Sat", date: "Jan 27", duration: 170, courses: "Python, Web Dev", streak: true },
  { day: "Sun", date: "Jan 28", duration: 240, courses: "All Subjects", streak: true },
];

const monthlyStats = [
  { week: "Week 1", hours: 12.5, courses: 4 },
  { week: "Week 2", hours: 18.3, courses: 5 },
  { week: "Week 3", hours: 21.7, courses: 6 },
  { week: "Week 4", hours: 19.2, courses: 5 },
];

export default function TimeTracker() {
  const [selectedCourse, setSelectedCourse] = useState<CourseTime | null>(null);
  const [timeframe, setTimeframe] = useState<"week" | "month">("week");

  const totalHours = courseData.reduce((sum, course) => sum + course.hours, 0);
  const totalMinutes = courseData.reduce((sum, course) => sum + course.minutes, 0);
  const totalLearningHours = Math.floor(totalHours + totalMinutes / 60);
  const totalLearningMinutes = (totalMinutes % 60);

  const averageDailyHours = (totalLearningHours / 7).toFixed(1);
  const completePercentage = Math.round((totalLearningHours / (courseData.reduce((sum, c) => sum + c.target, 0))) * 100);

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Learning Time Tracker</h1>
        </div>
        <p className="text-muted-foreground">
          Monitor your learning hours and optimize your study schedule
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-muted-foreground font-medium">Total Learning</p>
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold text-primary">{totalLearningHours}h {totalLearningMinutes}m</p>
          <p className="text-xs text-muted-foreground mt-2">This month</p>
        </div>

        <div className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-muted-foreground font-medium">Daily Average</p>
            <TrendingUp className="w-5 h-5 text-success" />
          </div>
          <p className="text-3xl font-bold text-success">{averageDailyHours}h</p>
          <p className="text-xs text-muted-foreground mt-2">Per day</p>
        </div>

        <div className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-muted-foreground font-medium">Courses Active</p>
            <Zap className="w-5 h-5 text-orange-500" />
          </div>
          <p className="text-3xl font-bold text-orange-500">{courseData.length}</p>
          <p className="text-xs text-muted-foreground mt-2">Courses tracked</p>
        </div>

        <div className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-muted-foreground font-medium">Goal Progress</p>
            <Award className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-3xl font-bold text-purple-500">{completePercentage}%</p>
          <p className="text-xs text-muted-foreground mt-2">Of weekly target</p>
        </div>
      </div>

      {/* Course Time Breakdown */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8 mb-8 animate-slide-up">
        <h2 className="text-2xl font-bold text-foreground mb-6">Course-wise Time Investment</h2>
        <div className="space-y-6">
          {courseData.map((course) => {
            const percentage = Math.round((course.hours / 40) * 100);
            const totalTime = course.hours + course.minutes / 60;
            const targetPercentage = Math.round((totalTime / course.target) * 100);

            return (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="p-4 rounded-lg border border-border hover:border-primary hover:bg-secondary transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{course.icon}</span>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{course.name}</p>
                      <p className="text-xs text-muted-foreground">{course.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{course.hours}h {course.minutes}m</p>
                    <p className="text-xs text-muted-foreground">Target: {course.target}h</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold text-primary">{targetPercentage}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${course.color} transition-all`}
                      style={{ width: `${Math.min(targetPercentage, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Activity Chart */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8 mb-8 animate-slide-up">
        <h2 className="text-2xl font-bold text-foreground mb-6">Weekly Activity</h2>
        <div className="grid grid-cols-7 gap-3 mb-8">
          {weeklyActivity.map((activity, idx) => {
            const maxDuration = Math.max(...weeklyActivity.map((a) => a.duration));
            const height = (activity.duration / maxDuration) * 300;

            return (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-primary to-blue-400 rounded-t-lg transition-all hover:from-blue-600 hover:to-blue-500 cursor-pointer group"
                  style={{ height: `${height}px` }}
                  title={`${activity.duration} minutes`}
                />
                <div className="text-center">
                  <p className="font-semibold text-sm text-foreground">{activity.day}</p>
                  <p className="text-xs text-muted-foreground">{(activity.duration / 60).toFixed(1)}h</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Activity Details */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {weeklyActivity.map((activity, idx) => (
            <div key={idx} className="p-3 bg-secondary rounded-lg border border-border text-xs">
              <p className="font-semibold text-foreground mb-2">{activity.day}</p>
              <div className="space-y-1">
                <p className="text-muted-foreground">Duration: {Math.floor(activity.duration / 60)}h {activity.duration % 60}m</p>
                <div className="flex items-center gap-1">
                  <span>🔥</span>
                  <p className="text-primary font-semibold">Streak</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Insights */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8 mb-8 animate-slide-up">
        <h2 className="text-2xl font-bold text-foreground mb-6">Monthly Insights</h2>
        <div className="space-y-4">
          {monthlyStats.map((stat, idx) => (
            <div key={idx} className="p-4 bg-secondary rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-foreground">{stat.week}</p>
                <div className="text-right">
                  <p className="font-bold text-primary">{stat.hours}h</p>
                  <p className="text-xs text-muted-foreground">{stat.courses} courses</p>
                </div>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(stat.hours / 25) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-secondary rounded-xl border border-border p-6 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Key Insights</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="text-sm text-foreground">✓ You're 15% ahead of schedule this week!</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="text-sm text-foreground">✓ Your most active day: Thursday (4h 40m)</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="text-sm text-foreground">✓ Best performing course: Python (24h 45m)</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="text-sm text-foreground">✓ Maintain your 7-day learning streak!</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-xl border border-border p-6 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-bold text-foreground">Recommendations</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="text-sm text-foreground">📌 Focus more on Databases (3h 45m of 10h target)</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="text-sm text-foreground">📌 System Design needs attention (5h 20m of 15h target)</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="text-sm text-foreground">📌 Schedule 2-3 hours daily to reach your goals</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="text-sm text-foreground">📌 Your best learning time: 6 PM - 9 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Goal Setting */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Set Your Learning Goals</h3>
        <p className="text-blue-100">Adjust your weekly learning targets and get personalized recommendations</p>
        <button className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-card-hover transition-all">
          Update Goals →
        </button>
      </div>
    </Layout>
  );
}
