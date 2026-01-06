import React from "react";
import AuthLayout from "./AuthLayout";

const ResetPassword = () => {
  return (
    <AuthLayout title="Réinitialiser le mot de passe">
      <div className="auth-page relative overflow-hidden max-w-md mx-auto bg-white/90 backdrop-blur p-8 rounded-2xl shadow-2xl">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />

        <form className="space-y-6">
          <div>
            <label className="block text-prune font-medium mb-2 text-left">
              Entre ton email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-prune focus:ring-2 focus:ring-prune/30 transition-all outline-none"
              placeholder="ton@email.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-prune text-white py-3 rounded-lg font-semibold hover:bg-prune/90 transition shadow-md active:scale-[0.98]"
          >
            Envoyer le lien
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <a href="/login" className="text-prune hover:underline">Retour à la connexion</a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;