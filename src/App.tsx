import { useEffect, useRef } from 'react';
import { Zap, Activity } from 'lucide-react';
import circuitSvg from './assets/circuito_animado.svg';

function App() {
  const circuitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Criar partículas de energia fluindo
    const createEnergyParticles = () => {
      if (!circuitRef.current) return;

      const container = circuitRef.current;
      const particle = document.createElement('div');
      particle.className = 'energy-particle';
      
      // Posição inicial aleatória
      const startX = Math.random() * container.offsetWidth;
      const startY = Math.random() * container.offsetHeight;
      
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      
      container.appendChild(particle);

      // Remover partícula após animação
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 3000);
    };

    // Criar partículas periodicamente
    const particleInterval = setInterval(createEnergyParticles, 40);

    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      
      {/* Animated background grid */}
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

      {/* Main circuit display */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-6xl w-full">
          {/* Circuit container */}
          <div 
            ref={circuitRef}
            className="circuit-container relative bg-black/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-cyan-500/30 p-4 sm:p-6 lg:p-8 shadow-2xl"
          >
            {/* Neon border glow - apenas nas linhas da borda */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-cyan-400/50 neon-border"></div>
            
            {/* Circuit SVG */}
            <div className="relative z-10 flex items-center justify-center">
              <img 
                src={circuitSvg} 
                alt="Circuito Eletrônico Neural"
                className="circuit-svg max-w-full h-auto filter drop-shadow-2xl"
                style={{ maxHeight: '50vh' }}
              />
            </div>

            {/* Overlay effects */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Scanning line */}
              <div className="scan-line"></div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="status-card">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-green-400 font-mono text-xs sm:text-sm">T/SANGUINÉO: O+</span>
              </div>
            </div>
            <div className="status-card">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                <span className="text-cyan-400 font-mono text-xs sm:text-sm">ALERGIA: ASPIRINA/BEZENTACIL</span>
              </div>
            </div>
            <div className="status-card">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                <span className="text-purple-400 font-mono text-xs sm:text-sm"> DOADOR DE ORGÃOS </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-4 sm:p-6 text-center">
        <p className="text-gray-500 text-xs sm:text-sm font-mono">
          Neural Interface v2.049 | Quantum Processing Unit Active
        </p>
      </footer>
    </div>
  );
}

export default App;