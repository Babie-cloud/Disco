import React from "react";
import AuthLayout from "./AuthLayout"; 
// Note : En 2026, on évite d'importer depuis /public. 
// Déplace tes fichiers .scss dans src/styles/ pour plus de sécurité.
import "../../../public/styles/Auth.scss"; 

const ResetPassword = () => {
  return (
    <AuthLayout title="Réinitialiser le mot de passe">
      {/* Conteneur principal avec les bulles de ton SCSS */}
      <div className="auth-page relative overflow-hidden">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />

        <div className="auth-card relative z-10">
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

          <div className="mt-6 text-center links">
            <a href="/login" className="text-prune hover:underline text-sm font-medium">
              Retour à la connexion
            </a>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;