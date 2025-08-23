import { useState } from "react";
import { Hero } from "./components/Hero";
import { CurrentSituation } from "./components/CurrentSituation";
import { PlansSection } from "./components/PlansSection";
import { Impact } from "./components/Impact";
import { FinalCTA } from "./components/FinalCTA";

export default function App() {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      
      {/* Current Situation */}
      <CurrentSituation />

      {/* Plans Section - Contains toggle and dynamic content */}
      <PlansSection isPremium={isPremium} onToggle={setIsPremium} />
      
      {/* Impact & Benefits */}
      <Impact />
      
      {/* Final CTA - Always at the end */}
      <FinalCTA isPremium={isPremium} />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-2xl">Qolect - Proyecto de Mejoras 2025</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Propuesta técnica para la evolución de la plataforma de viajes más innovadora del mercado.
          </p>
          <div className="pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2025 Qolect. Documento confidencial para uso interno y presentación a inversionistas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}