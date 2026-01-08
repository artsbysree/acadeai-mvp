import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Check } from "lucide-react";

const interests = [
  { id: "tech", label: "Technology", icon: "💻" },
  { id: "ai", label: "Artificial Intelligence", icon: "🤖" },
  { id: "web", label: "Web Development", icon: "🌐" },
  { id: "data", label: "Data Science", icon: "📊" },
  { id: "cloud", label: "Cloud Computing", icon: "☁️" },
  { id: "mobile", label: "Mobile Development", icon: "📱" },
  { id: "security", label: "Cybersecurity", icon: "🔒" },
  { id: "ml", label: "Machine Learning", icon: "⚙️" },
];

const branches = [
  "Computer Science",
  "Information Technology",
  "Electronics",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Other",
];

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduated"];

export default function Login() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    interests: [] as string[],
    careerGoals: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((i) => i !== interestId)
        : [...prev.interests, interestId],
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store user data (in real app, this would be sent to backend)
    localStorage.setItem("studentProfile", JSON.stringify(formData));
    // Navigate to dashboard
    window.location.href = "/dashboard";
  };

  const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = formData.branch && formData.year;
  const isStep3Valid = formData.interests.length > 0 && formData.careerGoals;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-card">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">AcadeAI</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Your AI-Powered Academic & Career Companion
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`h-2 flex-1 rounded-full transition-all ${
                num <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card border border-border p-8">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Let's Get Started
                </h2>
                <p className="text-muted-foreground">
                  Tell us about yourself
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {/* Step 2: Academic Info */}
          {step === 2 && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Your Academic Profile
                </h2>
                <p className="text-muted-foreground">
                  Help us understand your background
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Branch of Study
                </label>
                <select
                  value={formData.branch}
                  onChange={(e) =>
                    handleSelectChange("branch", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select your branch</option>
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Year of Study
                </label>
                <select
                  value={formData.year}
                  onChange={(e) => handleSelectChange("year", e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select your year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Interests & Goals */}
          {step === 3 && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Your Interests & Goals
                </h2>
                <p className="text-muted-foreground mb-6">
                  Select your areas of interest and tell us about your goals
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Areas of Interest
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => toggleInterest(interest.id)}
                      className={`p-3 rounded-lg border-2 transition-all text-left ${
                        formData.interests.includes(interest.id)
                          ? "border-primary bg-secondary"
                          : "border-border hover:border-primary hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{interest.icon}</span>
                        <span className="font-medium text-sm text-foreground">
                          {interest.label}
                        </span>
                        {formData.interests.includes(interest.id) && (
                          <Check className="w-4 h-4 text-primary ml-auto" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Career Goals
                </label>
                <textarea
                  name="careerGoals"
                  value={formData.careerGoals}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      careerGoals: e.target.value,
                    }))
                  }
                  placeholder="e.g., Become a software engineer at a tech company, work in AI research, etc."
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              type="button"
              onClick={handlePrev}
              className={`flex-1 px-4 py-2 border border-border rounded-lg font-semibold transition-all ${
                step === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-secondary text-foreground"
              }`}
              disabled={step === 1}
            >
              Back
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={
                  (step === 1 && !isStep1Valid) ||
                  (step === 2 && !isStep2Valid)
                }
                className={`flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold transition-all ${
                  (step === 1 && !isStep1Valid) ||
                  (step === 2 && !isStep2Valid)
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-lg hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isStep3Valid}
                className={`flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold transition-all ${
                  !isStep3Valid
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-lg hover:bg-blue-600"
                }`}
              >
                Get Started
              </button>
            )}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="#" className="text-primary font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
