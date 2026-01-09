import { useState } from "react";
import Layout from "@/components/Layout";
import { CheckCircle2, Circle, Clock, Calendar, Plus, Trash2, Edit2, AlertCircle } from "lucide-react";

interface Task {
  id: number;
  title: string;
  description: string;
  course: string;
  time: string;
  duration: number;
  day: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  icon: string;
}

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Python Basics - Chapter 3",
    description: "Complete arrays and lists section",
    course: "Python Programming",
    time: "9:00 AM",
    duration: 90,
    day: "Monday",
    completed: true,
    priority: "high",
    icon: "🐍"
  },
  {
    id: 2,
    title: "Practice JavaScript ES6",
    description: "Arrow functions and destructuring",
    course: "JavaScript",
    time: "11:00 AM",
    duration: 60,
    day: "Monday",
    completed: true,
    priority: "high",
    icon: "⚡"
  },
  {
    id: 3,
    title: "Web Development Project",
    description: "Build responsive layout with CSS Grid",
    course: "Web Development",
    time: "2:00 PM",
    duration: 120,
    day: "Monday",
    completed: false,
    priority: "high",
    icon: "🌐"
  },
  {
    id: 4,
    title: "Data Science Reading",
    description: "Explore pandas and numpy libraries",
    course: "Data Science",
    time: "9:00 AM",
    duration: 75,
    day: "Tuesday",
    completed: false,
    priority: "medium",
    icon: "📊"
  },
  {
    id: 5,
    title: "ML Algorithm Study",
    description: "Linear regression and gradient descent",
    course: "Machine Learning",
    time: "11:00 AM",
    duration: 100,
    day: "Tuesday",
    completed: false,
    priority: "high",
    icon: "🤖"
  },
  {
    id: 6,
    title: "Database Design",
    description: "Normalization and indexing",
    course: "Databases",
    time: "3:00 PM",
    duration: 80,
    day: "Wednesday",
    completed: false,
    priority: "medium",
    icon: "💾"
  },
  {
    id: 7,
    title: "System Design Problem",
    description: "Design a URL shortener service",
    course: "System Design",
    time: "4:00 PM",
    duration: 90,
    day: "Thursday",
    completed: false,
    priority: "high",
    icon: "🏗️"
  },
  {
    id: 8,
    title: "Code Review Practice",
    description: "Review open-source projects",
    course: "Development",
    time: "10:00 AM",
    duration: 60,
    day: "Friday",
    completed: false,
    priority: "low",
    icon: "👀"
  },
  {
    id: 9,
    title: "Weekly Project Work",
    description: "Continue capstone project",
    course: "Full Stack",
    time: "2:00 PM",
    duration: 180,
    day: "Saturday",
    completed: false,
    priority: "high",
    icon: "🎯"
  },
  {
    id: 10,
    title: "Test & Quiz Prep",
    description: "Prepare for weekly assessment",
    course: "Multiple",
    time: "10:00 AM",
    duration: 120,
    day: "Sunday",
    completed: false,
    priority: "high",
    icon: "📝"
  },
];

export default function Checklist() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [newTask, setNewTask] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const dayTasks = tasks.filter((task) => task.day === selectedDay);
  const completedCount = dayTasks.filter((task) => task.completed).length;
  const totalDailyTime = dayTasks.reduce((sum, task) => sum + task.duration, 0);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-muted";
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Learning Checklist & Timetable</h1>
        </div>
        <p className="text-muted-foreground">
          Organize your daily learning tasks and track your progress
        </p>
      </div>

      {/* Weekly Overview */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {daysOfWeek.map((day) => {
          const dayTaskCount = tasks.filter((t) => t.day === day).length;
          const dayCompletedCount = tasks.filter((t) => t.day === day && t.completed).length;

          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`p-4 rounded-lg border-2 transition-all text-center ${
                selectedDay === day
                  ? "bg-primary text-primary-foreground border-primary shadow-card"
                  : "bg-card border-border hover:border-primary text-foreground"
              }`}
            >
              <p className="text-sm font-semibold mb-2">{day.slice(0, 3)}</p>
              <p className="text-2xl font-bold mb-1">
                {dayTaskCount > 0 ? dayCompletedCount : "—"}
              </p>
              <p className="text-xs opacity-75">
                {dayTaskCount} task{dayTaskCount !== 1 ? "s" : ""}
              </p>
            </button>
          );
        })}
      </div>

      {/* Daily Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-muted-foreground font-medium">Tasks Today</p>
            <AlertCircle className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold text-primary mb-2">{dayTasks.length}</p>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-success h-2 rounded-full"
              style={{ width: `${dayTasks.length > 0 ? (completedCount / dayTasks.length) * 100 : 0}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {completedCount} completed
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-muted-foreground font-medium">Total Duration</p>
            <Clock className="w-5 h-5 text-orange-500" />
          </div>
          <p className="text-3xl font-bold text-orange-500">
            {Math.floor(totalDailyTime / 60)}h {totalDailyTime % 60}m
          </p>
          <p className="text-xs text-muted-foreground mt-4">Estimated today</p>
        </div>

        <div className="bg-card rounded-xl shadow-card border border-border p-6 animate-slide-up hover:shadow-card-hover transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-muted-foreground font-medium">Progress</p>
            <CheckCircle2 className="w-5 h-5 text-success" />
          </div>
          <p className="text-3xl font-bold text-success">
            {dayTasks.length > 0 ? Math.round((completedCount / dayTasks.length) * 100) : 0}%
          </p>
          <p className="text-xs text-muted-foreground mt-4">Of daily goals</p>
        </div>
      </div>

      {/* Daily Tasks */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8 mb-8 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">{selectedDay}'s Tasks</h2>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-card-hover transition-all text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </div>

        {/* Add Task Form */}
        {showAddForm && (
          <div className="mb-6 p-4 bg-secondary rounded-lg border border-border">
            <input
              type="text"
              placeholder="What do you need to learn today?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-3"
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setNewTask("");
                }}
                className="flex-1 px-4 py-2 border border-border rounded-lg text-foreground font-medium hover:bg-secondary transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-card-hover transition-all">
                Add Task
              </button>
            </div>
          </div>
        )}

        {/* Tasks List */}
        {dayTasks.length > 0 ? (
          <div className="space-y-4">
            {dayTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-start gap-4 p-4 bg-secondary rounded-lg border border-border hover:border-primary transition-all group"
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggleTask(task.id)}
                  className="mt-1 flex-shrink-0"
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-success" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </button>

                {/* Task Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl flex-shrink-0">{task.icon}</span>
                    <h3
                      className={`font-semibold ${
                        task.completed
                          ? "text-muted-foreground line-through"
                          : "text-foreground"
                      }`}
                    >
                      {task.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{task.description}</p>

                  {/* Task Meta */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded border ${getPriorityColor(task.priority)}`}>
                      {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.time}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      ⏱️ {task.duration} min
                    </span>
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                      {task.course}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-card rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                  <button onClick={() => deleteTask(task.id)} className="p-2 hover:bg-card rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground mb-4">No tasks for {selectedDay}</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-card-hover transition-all"
            >
              Create First Task
            </button>
          </div>
        )}
      </div>

      {/* Weekly Timetable View */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8 mb-8 animate-slide-up">
        <h2 className="text-2xl font-bold text-foreground mb-6">Weekly Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Time</th>
                {daysOfWeek.map((day) => (
                  <th key={day} className="text-center py-3 px-4 font-semibold text-foreground">
                    {day.slice(0, 3)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["9:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "10:00 AM"].map((time) => (
                <tr key={time} className="border-b border-border hover:bg-secondary transition-colors">
                  <td className="py-4 px-4 font-medium text-foreground text-sm">{time}</td>
                  {daysOfWeek.map((day) => {
                    const taskAtTime = tasks.find((t) => t.day === day && t.time === time);
                    return (
                      <td key={`${day}-${time}`} className="py-4 px-4 text-center">
                        {taskAtTime ? (
                          <div className="inline-block">
                            <div
                              className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 ${
                                taskAtTime.completed
                                  ? "bg-success bg-opacity-20 text-success"
                                  : "bg-primary bg-opacity-20 text-primary"
                              }`}
                            >
                              <span>{taskAtTime.icon}</span>
                              <span className="hidden sm:inline">{taskAtTime.duration}m</span>
                            </div>
                          </div>
                        ) : (
                          <span className="text-muted-foreground text-sm">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tips Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-secondary rounded-xl border border-border p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">📋 Task Tips</h3>
          <ul className="space-y-3 text-sm text-foreground">
            <li>✓ Break large topics into smaller tasks</li>
            <li>✓ Set realistic time estimates</li>
            <li>✓ Schedule breaks between tasks</li>
            <li>✓ Review completed tasks weekly</li>
            <li>✓ Adjust priorities based on goals</li>
          </ul>
        </div>

        <div className="bg-secondary rounded-xl border border-border p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">🎯 This Week's Goals</h3>
          <ul className="space-y-3 text-sm text-foreground">
            <li>✓ Complete 35 hours of learning</li>
            <li>✓ Finish Python Chapter 5</li>
            <li>✓ Complete JavaScript project</li>
            <li>✓ Start ML algorithms course</li>
            <li>✓ Take one practice test</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
