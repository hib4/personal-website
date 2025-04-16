import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn’t find the page{" "}
          <span className="font-mono">{location.pathname}</span>
        </p>
        <Button asChild>
          <a href="/">Back to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
