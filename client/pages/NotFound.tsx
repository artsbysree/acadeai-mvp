import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-foreground font-semibold mb-2">
            Page not found
          </p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-card-hover transition-all active:opacity-95"
          >
            <Home className="w-5 h-5" />
            Back to Dashboard
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
