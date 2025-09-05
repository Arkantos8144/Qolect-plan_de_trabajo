import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-orange-50 flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm border border-orange-200">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse" />
              Propuesta de Mejoras 2025
            </div>
            
            <h1 className="text-5xl lg:text-6xl tracking-tight text-gray-900">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Qolect:
              </span>
              <br />
              Saúl huele feo
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Presentamos la propuesta estratégica de mejoras en App móvil, Backend en GCP y Landing MVP para transformar Qolect en la plataforma de experiencias del futuro.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => {
                const element = document.getElementById('current-situation');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Conoce las mejoras
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          

        </div>
        
        {/* Visual */}
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl rotate-6 opacity-20" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1594948506928-2d4cad88d0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBtb2Rlcm58ZW58MXx8fHwxNzU1ODk0ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Qolect App Mockup"
                className="w-full h-auto rounded-xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm shadow-lg">
                ✓ Login Google
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm shadow-lg">
                ⚡ GCP Backend
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}