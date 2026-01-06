import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faLightbulb, faGlobe } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "../ThemeToggle"; 

const studentImg = "/images/student.png";
const missionImg = "/images/image.png";
// import ThemeToggle from "../../../public/styles/ThemeToggle"; 

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-creme to-menthe/30 flex flex-col">

      {/* Header */}
      <header className="bg-prune text-white px-6 py-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tighter">Disco</h1>
          
          <nav className="flex items-center gap-4 md:gap-8">
            <ThemeToggle />
            <Link to="/login" className="hidden md:block hover:text-menthe transition font-medium">
              Log In
            </Link>
            <Link to="/signup">
              <button className="bg-corail hover:bg-corail/90 text-white px-5 py-2.5 rounded-lg font-semibold transition text-sm md:text-base shadow-md">
                Sign Up
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-12 md:py-20 gap-12">
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h2 className="text-4xl md:text-6xl font-bold text-prune mb-6 leading-tight">
            Learn Smarter.<br />
            <span className="text-corail">Plan Better.</span><br />
            Stay Focused.
          </h2>
          <p className="text-lg md:text-xl text-gris mb-8 max-w-lg">
            Disco vous aide à organiser vos révisions, améliorer votre concentration, et suivre vos progrès efficacement.
          </p>
          <Link to="/signup">
            <button className="w-full md:w-auto bg-corail text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-corail/90 transition shadow-xl hover:scale-105 active:scale-95">
              Commencer gratuitement
            </button>
          </Link>
        </div>
        
        <div className="md:w-1/2 flex justify-center order-1 md:order-2">
          <img 
            src={studentImg} 
            alt="Étudiant" 
            className="w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl animate-pulse-slow" 
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-prune mb-16">Pourquoi choisir Disco ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: faBook, color: "menthe", title: "Planification efficace", desc: "Créez des plannings adaptés à vos besoins académiques." },
              { icon: faLightbulb, color: "corail", title: "100% gratuit", desc: "Tous les outils sont gratuits pour tous les étudiants." },
              { icon: faGlobe, color: "prune", title: "Accessible partout", desc: "Utilisable dans le monde entier sans restrictions." }
            ].map((feature, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition">
                <div className={`bg-${feature.color}/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition`}>
                  <FontAwesomeIcon icon={feature.icon} className={`text-3xl text-${feature.color}`} />
                </div>
                <h4 className="text-2xl font-semibold text-prune mb-3">{feature.title}</h4>
                <p className="text-gris">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-creme/40">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-prune">Notre Mission, Vision & Valeurs</h3>
            <div className="space-y-8">
              {[
                { label: "Mission", text: "Aider chaque étudiant à réussir grâce à une planification efficace." },
                { label: "Vision", text: "Devenir la plateforme n°1 de planification académique personnalisée." },
                { label: "Valeurs", text: "Accessibilité, Simplicité, Inclusion, Soutien." }
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-corail pl-6">
                  <h4 className="text-xl font-bold text-prune uppercase tracking-wide">{item.label}</h4>
                  <p className="text-gris text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={missionImg} 
              alt="Mission" 
              className="w-full max-w-md object-cover rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500" 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-prune text-white text-center py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-8">
          <p className="opacity-80">© {new Date().getFullYear()} Disco. Tous droits réservés.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm opacity-60">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;