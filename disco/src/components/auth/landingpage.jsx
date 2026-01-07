import React from 'react';
import { BookOpen, Calendar, CheckCircle, Clock, ArrowRight, Star } from 'lucide-react';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-main)', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* --- NAVIGATION --- */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 10%', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--prune)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ backgroundColor: 'var(--corail)', width: '32px', height: '32px', borderRadius: '8px' }}></div>
          DISCO
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#features" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500' }}>Fonctionnalités</a>
          <button className="btn-disco-prune">Se connecter</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header style={{ padding: '5rem 10%', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ backgroundColor: 'var(--menthe-soft)', color: 'var(--prune)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
          🚀 Batch 2026 : Prépare tes examens sans stress
        </span>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '850', color: 'var(--prune)', marginTop: '1.5rem', lineHeight: '1.1' }}>
          Dansez avec vos révisions, <span style={{ color: 'var(--corail)' }}>brillez</span> aux examens.
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '1.5rem', lineHeight: '1.6' }}>
          Disco génère automatiquement ton planning de révisions intelligent en fonction de tes priorités et de ton rythme biologique.
        </p>
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-disco-corail" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Commencer gratuitement <ArrowRight size={20} style={{ marginLeft: '10px' }} />
          </button>
          <button className="btn-disco-prune" style={{ fontSize: '1.1rem', padding: '1rem 2rem', backgroundColor: 'transparent', border: '2px solid var(--prune)', color: 'var(--prune)' }}>
            Voir la démo
          </button>
        </div>
      </header>

      {/* --- STATS / TRUST --- */}
      <section style={{ display: 'flex', justifyContent: 'center', gap: '4rem', padding: '2rem', backgroundColor: 'var(--bg-card)', borderY: '1px solid var(--border-color)' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--prune)', marginBottom: '0' }}>+15k</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Étudiants actifs</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--prune)', marginBottom: '0' }}>98%</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Objectifs atteints</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--prune)', marginBottom: '0' }}>4.9/5</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Note App Store</p>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section id="features" style={{ padding: '5rem 10%' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--prune)', marginBottom: '3rem', fontSize: '2rem' }}>Pourquoi choisir Disco ?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          {/* Card 1 */}
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px var(--shadow-color)' }}>
            <div style={{ backgroundColor: 'var(--corail-soft)', color: 'var(--corail)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Calendar size={28} />
            </div>
            <h4 style={{ color: 'var(--prune)', fontSize: '1.2rem', marginBottom: '1rem' }}>Planning Auto-Généré</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>Entre tes matières et tes dates d'examens, Disco s'occupe du reste. Ton temps est optimisé.</p>
          </div>

          {/* Card 2 */}
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px var(--shadow-color)' }}>
            <div style={{ backgroundColor: 'var(--menthe-soft)', color: 'var(--menthe)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Clock size={28} />
            </div>
            <h4 style={{ color: 'var(--prune)', fontSize: '1.2rem', marginBottom: '1rem' }}>Méthode Pomodoro</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>Chronomètre intégré avec cycles de repos pour garder un cerveau frais et disponible toute la journée.</p>
          </div>

          {/* Card 3 */}
          <div style={{ backgroundColor: 'var(--bg-prune-soft)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px var(--shadow-color)' }}>
            <div style={{ backgroundColor: 'var(--white)', color: 'var(--prune)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <CheckCircle size={28} />
            </div>
            <h4 style={{ color: 'var(--prune)', fontSize: '1.2rem', marginBottom: '1rem' }}>Suivi de Progression</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>Visualise ton avancement en temps réel et reçois des badges de motivation pour chaque chapitre terminé.</p>
          </div>

        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section style={{ margin: '5rem 10%', backgroundColor: 'var(--prune)', borderRadius: '30px', padding: '4rem', textAlign: 'center', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: '2' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Prêt à valider ton année ?</h2>
          <p style={{ marginBottom: '2rem', opacity: '0.9' }}>Rejoins des milliers d'étudiants qui ont repris le contrôle sur leur temps.</p>
          <button className="btn-disco-corail" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
            Créer mon planning Disco
          </button>
        </div>
        {/* Décoration subtile en arrière-plan */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'var(--prune-light)', opacity: '0.5' }}></div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ padding: '3rem 10%', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', textAlign: 'center' }}>
        <p>© 2026 Disco App. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default LandingPage;