import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DarkVeil from './components/DarkVeil';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { PortfolioProvider } from './context/PortfolioContext';
import EditControls from './components/EditControls';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <PortfolioProvider>
      <div className="app-container">
        {/* Background layer */}
        <div className="background-layer">
          <DarkVeil 
            hueShift={-10} 
            noiseIntensity={0.08} 
            scanlineIntensity={0.2} 
            speed={0.3} 
            scanlineFrequency={2} 
            warpAmount={0.5} 
            resolutionScale={1} 
          />
        </div>

        {/* Mobile nav toggle */}
        <button className="mobile-nav-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Two Column Layout */}
        <div className="layout-wrapper">
          <Sidebar isOpen={isSidebarOpen} />
          
          {/* We want clicking outside the sidebar on mobile to close it */}
          {isSidebarOpen && (
            <div 
              className="mobile-overlay" 
              style={{position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(0,0,0,0.5)'}}
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <MainContent />
        </div>
        
        <EditControls />
      </div>
    </PortfolioProvider>
  );
}

export default App;
