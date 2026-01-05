import React from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const AuthLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-prune/20 via-creme to-menthe/30 flex items-center justify-center p-4 relative">
      <div className="absolute top-8 right-8">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/50">
          <h2 className="text-3xl font-bold text-prune text-center mb-8">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;