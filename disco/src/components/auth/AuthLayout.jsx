import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom"; // Utilise Link pour éviter de recharger la page
import AuthLayout from "./AuthLayout"; 
import "../../../public/styles/Auth.scss";

const Login = () => {
  return (
    <AuthLayout title="Log in.">
      <div className="auth-card-content"> {/* On utilise une div interne car le décor est dans AuthLayout */}
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              required 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-prune/20 outline-none"
              placeholder="votre@email.com"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              required 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-prune/20 outline-none"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-prune text-white py-3 rounded-lg font-bold hover:bg-prune/90 transition shadow-lg"
          >
            Log In.
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-300"></span></div>
          <div className="relative flex justify-center text-sm"><span className="bg-white px-2 text-gray-500">or</span></div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border py-2.5 rounded-lg hover:bg-gray-50 transition">
            <FcGoogle size={20} /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2.5 rounded-lg hover:bg-[#166fe5] transition">
            <FaFacebookF size={18} /> Continue with Facebook
          </button>
        </div>

        <div className="mt-8 space-y-2 text-center text-sm">
          <p className="text-gray-600">
            Don’t have an account? <Link to="/signup" className="text-prune font-bold hover:underline">Create an account</Link>
          </p>
          <p>
            <Link to="/reset-password" name="reset" className="text-gray-400 hover:text-prune transition">Forgot password?</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;