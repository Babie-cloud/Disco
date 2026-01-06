import React from "react";

const AuthLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-creme to-menthe/30 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl mx-auto">
        {title && <h1 className="text-4xl font-bold text-prune text-center mb-8">{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;