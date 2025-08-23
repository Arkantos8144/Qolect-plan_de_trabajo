import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FinalCTAProps {
  isPremium?: boolean;
}

export function FinalCTA({ isPremium = false }: FinalCTAProps) {
  const standardReasons = [
    "Tecnología probada y escalable",
    "Timeline realista de 2 meses",
    "Equipo experimentado en GCP y móviles",
    "Metodología ágil con demos semanales"
  ];

  const premiumReasons = [
    "Tecnología enterprise de vanguardia",
    "Transformación integral del ecosistema",
    "Equipo especializado en soluciones premium",
    "ROI superior con features de IA y AR",
    "Posicionamiento como líder del mercado"
  ];

  const reasons = isPremium ? premiumReasons : standardReasons;

  return (
    <section className={`py-20 relative overflow-hidden ${
      isPremium 
        ? 'bg-gradient-to-br from-purple-50 via-white to-indigo-50' 
        : 'bg-gradient-to-br from-orange-50 via-white to-blue-50'
    }`}>
      {/* Background elements */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl ${
        isPremium ? 'bg-purple-100' : 'bg-orange-100'
      }`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl ${
        isPremium ? 'bg-indigo-100' : 'bg-blue-100'
      }`} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm border ${
                isPremium 
                  ? 'bg-purple-100 text-purple-800 border-purple-200' 
                  : 'bg-orange-100 text-orange-800 border-orange-200'
              }`}>
                <TrendingUp className="w-4 h-4 mr-2" />
                {isPremium ? 'Inversión Premium' : 'Momento de Decisión'}
              </div>
              
              <h2 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                <span className={isPremium ? "text-purple-600" : "text-orange-600"}>
                  {isPremium ? 'Qolect Premium' : 'Qolect está listo'}
                </span> para evolucionar.
                <br />
                {isPremium ? 'Lidera el futuro de los viajes.' : 'Es momento de dar el siguiente paso.'}
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {isPremium 
                  ? 'La oportunidad de transformar Qolect en una plataforma enterprise de clase mundial está aquí. Con IA, AR y tecnología de vanguardia, no solo competiremos, lideraremos el mercado.'
                  : 'La propuesta está completa, la tecnología está probada, y el equipo está preparado. Solo falta tu aprobación para transformar Qolect en la plataforma de viajes del futuro.'
                }
              </p>
            </div>
            
            {/* Reasons */}
            <div className="space-y-4">
              <h3 className="text-lg text-gray-900">
                {isPremium ? '¿Por qué elegir Premium?' : '¿Por qué aprobar ahora?'}
              </h3>
              <ul className="space-y-3">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            
            {/* Investment summary */}
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className={`text-2xl ${isPremium ? 'text-purple-600' : 'text-orange-600'}`}>
                      ${isPremium ? '43/50' : '35/50'}
                    </div>
                    <div className="text-xs text-gray-500">Costo hora</div>
                  </div>
                  <div>
                    <div className={`text-2xl ${isPremium ? 'text-purple-600' : 'text-green-600'}`}>
                      {isPremium ? '368 horas' : '173 horas'}
                    </div>
                    <div className="text-xs text-gray-500">Tiempo desarrollo</div>
                  </div>
                  <div>
                    <div className={`text-2xl ${isPremium ? 'text-purple-600' : 'text-blue-600'}`}>
                      {isPremium ? '∞+' : 'Limitado'}
                    </div>
                    <div className="text-xs text-gray-500">
                      {isPremium ? 'Enterprise Scale' : 'Escalabilidad'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-3xl rotate-3 opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc1NTg5NDg1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business Meeting"
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Floating success indicators */}
                <div className="absolute -top-4 -right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm shadow-lg">
                  ✓ Aprobado
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm shadow-lg">
                  🚀 Listo para iniciar
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final note */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Nota importante:</strong> {
              isPremium 
                ? 'El Plan Premium representa una inversión estratégica para liderar el mercado de viajes. Con tecnología de vanguardia y funcionalidades enterprise, Qolect se convertirá en la referencia del sector.'
                : 'Este proyecto representa una oportunidad única de posicionar a Qolect a la altura tecnológica del mercado de viajes. Cada día de retraso es una ventaja que damos a la competencia.'
            }
          </p>
        </div>
      </div>
    </section>
  );
}