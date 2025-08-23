import { AlertTriangle, Smartphone, Users, CreditCard, Wifi, Palette } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function CurrentSituation() {
  const challenges = [
    {
      icon: Smartphone,
      title: "Login y Autenticación",
      description: "La app requiere mejoras en el sistema de login y sesión persistente"
    },
    {
      icon: Users,
      title: "Funciones de Comunidad",
      description: "Falta implementar características sociales y de interacción entre usuarios"
    },
    {
      icon: CreditCard,
      title: "Sistema de Pagos",
      description: "Necesita integración con Stripe para pagos seguros y eficientes"
    },
    {
      icon: Wifi,
      title: "Estabilidad Backend",
      description: "Requiere migración a Google Cloud para mayor confiabilidad y escalabilidad"
    },
    {
      icon: Palette,
      title: "Rediseño de la App",
      description: "Actualmente la app presenta un diseño con oportunidades de mejora"
    }
  ];

  return (
    <section id="current-situation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm border border-red-200">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Situación Actual
          </div>
          
          <h2 className="text-4xl text-gray-900">
            Qolect hoy: Una base sólida con <span className="text-red-600">oportunidades de mejora</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La aplicación móvil existe y funciona, pero necesita optimizaciones estratégicas para ofrecer una experiencia premium y competitiva en el mercado de viajes.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  
                  <h3 className="text-gray-900">{challenge.title}</h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full">
            <AlertTriangle className="w-8 h-8 text-orange-600" />
          </div>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            <strong>Es momento de actuar:</strong> Estas mejoras no solo optimizarán la experiencia del usuario, sino que posicionarán a Qolect a la vanguardia en mercado de aplicaciones de viajes.
          </p>
        </div>
      </div>
    </section>
  );
}