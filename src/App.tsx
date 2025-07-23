import { useEffect, useRef } from 'react';
import { Zap, Activity } from 'lucide-react';
import circuitSvg from './assets/circuito_animado.svg';

function App() {
  const circuitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createEnergyParticles = () => {
      if (!circuitRef.current) return;

      const container = circuitRef.current;
      const particle = document.createElement('div');
      particle.className = 'energy-particle';
      
      const startX = Math.random() * container.offsetWidth;
      const startY = Math.random() * container.offsetHeight;
      
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      
      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 3000);
    };

    const particleInterval = setInterval(createEnergyParticles, 40);
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6">
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-2 text-green-400">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              <span className="text-xs sm:text-sm font-mono">ONLINE</span>
            </div>
            <div className="flex items-center space-x-2 text-cyan-400">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-mono">ACTIVE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-6xl w-full">
          {/* Circuit container */}
          <div 
            ref={circuitRef}
            className="circuit-container relative bg-black/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-cyan-500/30 p-4 sm:p-6 lg:p-8 shadow-2xl"
          >
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-cyan-400/50 neon-border"></div>
            
            <div className="relative z-10 flex items-center justify-center">
              <img 
                src={circuitSvg} 
                alt="Circuito Eletrônico Neural"
                className="circuit-svg max-w-full h-auto filter drop-shadow-2xl"
                style={{ maxHeight: '50vh' }}
              />
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="scan-line"></div>
            </div>
          </div>

          {/* Status indicators - Atualizado para melhor responsividade */}
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* Tipo Sanguíneo */}
            <div className="status-card p-2 sm:p-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-green-400 font-mono text-xs sm:text-sm md:text-base truncate">
                  T/SANGUINÉO: O+
                </span>
              </div>
            </div>
            
            {/* Alergias */}
            <div className="status-card p-2 sm:p-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                <span className="text-cyan-400 font-mono text-xs sm:text-sm md:text-base truncate">
                  ALERGIA: ASPIRINA
                </span>
              </div>
            </div>
            
            {/* Doador de Órgãos */}
            <div className="status-card p-2 sm:p-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                <span className="text-purple-400 font-mono text-xs sm:text-sm md:text-base truncate">
                  DOADOR DE ÓRGÃOS
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Atualizado para melhor responsividade */}
      <footer className="relative z-10 p-4 sm:p-6 text-center">
        <p className="text-gray-500 font-mono text-xs sm:text-sm md:text-base px-2 break-words">
          Neural Interface v2.049 | Caio Rodrigues
        </p>
      </footer>
    </div>
  );
}

export default App;