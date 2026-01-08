import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { Send, MessageCircle, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const suggestedQuestions = [
  "What skills should I learn for my career goals?",
  "Guide me for internship opportunities",
  "Which career path is best for me?",
  "How can I prepare for placements?",
  "What projects should I build?",
  "How to improve my coding skills?",
];

const aiResponses: { [key: string]: string } = {
  skills:
    "Based on your interests in AI and Web Development, I recommend focusing on Python, JavaScript/TypeScript, and frameworks like TensorFlow or PyTorch. Start with fundamentals and gradually move to advanced topics. Would you like a detailed learning roadmap?",
  internship:
    "Great question! For internships, focus on: 1) Build 2-3 solid projects, 2) Contribute to open source, 3) Network on LinkedIn, 4) Apply to programs like Google Summer of Code. Start applying 3-4 months before you want to intern.",
  career:
    "Based on your profile, I see strong potential in Software Engineering, Data Science, and AI/ML roles. Your interests align well with tech companies. Would you like me to show you the top 3 recommended career paths with salary ranges?",
  placement:
    "To ace placements: 1) Master DSA (Data Structures & Algorithms), 2) Practice coding on LeetCode, 3) Build projects, 4) Prepare for system design, 5) Mock interviews. Start 6 months before placements.",
  projects:
    "Here are recommended projects: 1) Build a predictive ML model, 2) Create a full-stack web app, 3) Develop a Python automation tool, 4) Contribute to open source. Pick projects that align with your interests!",
  coding:
    "To improve coding: 1) Daily practice on coding platforms, 2) Understand algorithms deeply, 3) Build real projects, 4) Code review others' code, 5) Participate in competitions. Consistency is key!",
  default:
    "That's a great question! I'm your AI career companion. I can help with career guidance, skill recommendations, internship tips, and learning paths. What specific area would you like help with?",
};

function getAIResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  if (
    lowerMessage.includes("skill") ||
    lowerMessage.includes("learn") ||
    lowerMessage.includes("develop")
  ) {
    return aiResponses.skills;
  }
  if (
    lowerMessage.includes("intern") ||
    lowerMessage.includes("experience")
  ) {
    return aiResponses.internship;
  }
  if (lowerMessage.includes("career") || lowerMessage.includes("path")) {
    return aiResponses.career;
  }
  if (
    lowerMessage.includes("placement") ||
    lowerMessage.includes("placement")
  ) {
    return aiResponses.placement;
  }
  if (lowerMessage.includes("project") || lowerMessage.includes("build")) {
    return aiResponses.projects;
  }
  if (lowerMessage.includes("cod") || lowerMessage.includes("program")) {
    return aiResponses.coding;
  }

  return aiResponses.default;
}

export default function CareerChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm your AI Career Companion. I'm here to help you with career guidance, skill recommendations, internship tips, and learning paths. What would you like to know?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message?: string) => {
    const textToSend = message || input.trim();
    if (!textToSend) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(textToSend),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto h-full">
        {/* Chat Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Career Chat</h1>
          </div>
          <p className="text-muted-foreground">
            Get personalized career guidance from your AI companion
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden flex flex-col h-[600px]">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } animate-slide-up`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-xl ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-secondary text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-slide-up">
                <div className="bg-secondary text-foreground px-4 py-3 rounded-xl rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions (shown when no messages except welcome) */}
          {messages.length === 1 && (
            <div className="px-6 pb-6">
              <p className="text-xs text-muted-foreground mb-3 font-semibold">
                Try asking:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {suggestedQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(question)}
                    className="text-left px-3 py-2 text-sm rounded-lg border border-border hover:border-primary hover:bg-blue-50 transition-all text-foreground"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-border bg-white p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about your career..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
