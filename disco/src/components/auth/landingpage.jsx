import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      backgroundColor: '#fff9f0', 
      minHeight: '100vh',
      padding: '0',
      margin: '0'
    }}>
      {/* NAVIGATION */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1.5rem 5%', 
        borderBottom: '2px solid rgba(67, 44, 88, 0.15)', 
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <div style={{ 
          fontSize: '2rem', 
          fontWeight: '800', 
          color: '#432c58', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px' 
        }}>
          <div style={{ 
            backgroundColor: '#ff6b6b', 
            width: '40px', 
            height: '40px', 
            borderRadius: '10px' 
          }}></div>
          DISCO
        </div>
        <button 
          onClick={() => navigate('/login')}
          style={{ 
            backgroundColor: '#432c58', 
            color: 'white', 
            padding: '0.8rem 1.8rem', 
            borderRadius: '12px', 
            border: 'none', 
            cursor: 'pointer', 
            fontWeight: '600',
            fontSize: '1rem'
          }}
        >
          Se connecter
        </button>
      </nav>

      {/* HERO */}
      <header style={{ 
        padding: '4rem 5%', 
        textAlign: 'center', 
        maxWidth: '900px', 
        margin: '0 auto' 
      }}>
        <div style={{ 
          backgroundColor: 'rgba(168, 219, 199, 0.3)', 
          color: '#432c58', 
          padding: '0.6rem 1.5rem', 
          borderRadius: '25px', 
          fontSize: '1rem', 
          fontWeight: '600',
          display: 'inline-block',
          marginBottom: '2rem'
        }}>
          🚀 Batch 2026 : Prépare tes examens sans stress
        </div>
        
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '900', 
          color: '#432c58', 
          marginTop: '1rem', 
          lineHeight: '1.2',
          marginBottom: '1.5rem'
        }}>
          Dansez avec vos révisions, <span style={{ color: '#ff6b6b' }}>brillez</span> aux examens.
        </h1>
        
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#666666', 
          marginTop: '1.5rem', 
          lineHeight: '1.8',
          marginBottom: '2.5rem'
        }}>
          Disco génère automatiquement ton planning de révisions intelligent en fonction de tes priorités et de ton rythme biologique.
        </p>
        
        <div style={{ 
          marginTop: '2.5rem', 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={() => navigate('/login')}
            style={{ 
              backgroundColor: '#ff6b6b', 
              color: 'white', 
              fontSize: '1.1rem', 
              padding: '1rem 2rem',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            Commencer gratuitement <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            style={{ 
              backgroundColor: 'transparent', 
              color: '#432c58', 
              fontSize: '1.1rem', 
              padding: '1rem 2rem',
              borderRadius: '12px',
              border: '2px solid #432c58',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Voir la démo
          </button>
        </div>
      </header>

      {/* STATS */}
      <section style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '4rem', 
        padding: '3rem 5%', 
        backgroundColor: '#ffffff', 
        borderTop: '1px solid rgba(67, 44, 88, 0.15)',
        borderBottom: '1px solid rgba(67, 44, 88, 0.15)',
        flexWrap: 'wrap'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            color: '#432c58', 
            fontSize: '2.5rem', 
            fontWeight: '800',
            margin: '0 0 0.5rem 0' 
          }}>+15k</h3>
          <p style={{ 
            color: '#666666', 
            fontSize: '1rem',
            margin: 0 
          }}>Étudiants actifs</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            color: '#432c58', 
            fontSize: '2.5rem', 
            fontWeight: '800',
            margin: '0 0 0.5rem 0' 
          }}>98%</h3>
          <p style={{ 
            color: '#666666', 
            fontSize: '1rem',
            margin: 0 
          }}>Objectifs atteints</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            color: '#432c58', 
            fontSize: '2.5rem', 
            fontWeight: '800',
            margin: '0 0 0.5rem 0' 
          }}>4.9/5</h3>
          <p style={{ 
            color: '#666666', 
            fontSize: '1rem',
            margin: 0 
          }}>Note App Store</p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '5rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#432c58', 
          marginBottom: '3rem', 
          fontSize: '2.5rem',
          fontWeight: '800'
        }}>
          Pourquoi choisir Disco ?
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Card 1 */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '2rem', 
            borderRadius: '20px', 
            border: '1px solid rgba(67, 44, 88, 0.15)', 
            boxShadow: '0 4px 20px rgba(67, 44, 88, 0.08)' 
          }}>
            <div style={{ 
              backgroundColor: 'rgba(255, 107, 107, 0.15)', 
              color: '#ff6b6b', 
              width: '60px', 
              height: '60px', 
              borderRadius: '15px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '1.5rem' 
            }}>
              <Calendar size={32} />
            </div>
            <h4 style={{ 
              color: '#432c58', 
              fontSize: '1.3rem', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Planning Auto-Généré
            </h4>
            <p style={{ 
              color: '#666666', 
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>
              Entre tes matières et tes dates d&apos;examens, Disco s&apos;occupe du reste. Ton temps est optimisé.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '2rem', 
            borderRadius: '20px', 
            border: '1px solid rgba(67, 44, 88, 0.15)', 
            boxShadow: '0 4px 20px rgba(67, 44, 88, 0.08)' 
          }}>
            <div style={{ 
              backgroundColor: 'rgba(168, 219, 199, 0.3)', 
              color: '#a8dbc7', 
              width: '60px', 
              height: '60px', 
              borderRadius: '15px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '1.5rem' 
            }}>
              <Clock size={32} />
            </div>
            <h4 style={{ 
              color: '#432c58', 
              fontSize: '1.3rem', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Méthode Pomodoro
            </h4>
            <p style={{ 
              color: '#666666', 
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>
              Chronomètre intégré avec cycles de repos pour garder un cerveau frais et disponible toute la journée.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '2rem', 
            borderRadius: '20px', 
            border: '1px solid rgba(67, 44, 88, 0.15)', 
            boxShadow: '0 4px 20px rgba(67, 44, 88, 0.08)' 
          }}>
            <div style={{ 
              backgroundColor: 'rgba(67, 44, 88, 0.15)', 
              color: '#432c58', 
              width: '60px', 
              height: '60px', 
              borderRadius: '15px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '1.5rem' 
            }}>
              <CheckCircle size={32} />
            </div>
            <h4 style={{ 
              color: '#432c58', 
              fontSize: '1.3rem', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Suivi de Progression
            </h4>
            <p style={{ 
              color: '#666666', 
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>
              Visualise ton avancement en temps réel et reçois des badges de motivation pour chaque chapitre terminé.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        margin: '4rem 5%', 
        backgroundColor: '#432c58', 
        borderRadius: '30px', 
        padding: '4rem 2rem', 
        textAlign: 'center', 
        color: 'white',
        boxShadow: '0 10px 40px rgba(67, 44, 88, 0.3)'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontWeight: '800'
        }}>
          Prêt à valider ton année ?
        </h2>
        <p style={{ 
          marginBottom: '2rem', 
          opacity: '0.95',
          fontSize: '1.2rem'
        }}>
          Rejoins des milliers d&apos;étudiants qui ont repris le contrôle sur leur temps.
        </p>
        <button 
          onClick={() => navigate('/login')}
          style={{ 
            backgroundColor: '#ff6b6b', 
            color: 'white', 
            padding: '1rem 3rem', 
            fontSize: '1.2rem',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '700',
            boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
          }}
        >
          Créer mon planning Disco
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ 
        padding: '2rem 5%', 
        borderTop: '1px solid rgba(67, 44, 88, 0.15)', 
        color: '#666666', 
        textAlign: 'center',
        backgroundColor: '#ffffff'
      }}>
        <p style={{ margin: 0 }}>© 2026 Disco App. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
