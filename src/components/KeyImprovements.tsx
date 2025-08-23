import {
  Smartphone,
  Cloud,
  Globe,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface KeyImprovementsProps {
  isPremium?: boolean;
}

export function KeyImprovements({ isPremium = false }: KeyImprovementsProps) {
  const standardImprovements = [
    {
      icon: Smartphone,
      title: "App Móvil MVP",
      category: "Frontend",
      color: "bg-blue-500",
      features: [
        "Solución de errores persistentes",
        "Login con Google integrado",
        "Pagos seguros con Stripe",
        "Fix en comunidad",
        "Fix vídeo mostrado en mi colección",
        "Sesión persistente",
        "Publicación Playstore",
        "Publicación Appstore",
      ],
      timeline: "Septiembre 2025",
      hourlyRate: 35,
      hours: 125,
    },
    {
      icon: Cloud,
      title: "Backend básico GCP MVP",
      category: "Infrastructure",
      color: "bg-green-500",
      features: [
        "API Python en Google Cloud Run",
        "CDN global para contenido estático",
        "Autenticación Google Cloud",
        "Optimización de velocidad de descarga",
      ],
      timeline: "Octubre 2025",
      hourlyRate: 50,
      hours: 20,
    },
    {
      icon: Globe,
      title: "Landing MVP",
      category: "Marketing",
      color: "bg-orange-500",
      features: [
        "Diseño responsive",
        "Integración Stripe Links",
        "SEO base y analytics",
        "Hosting",
        "Cambio de dominio",
        "Módulo administrador"
      ],
      timeline: "Septiembre 2025",
      hourlyRate: 35,
      hours: 28,
    },
  ];

  const premiumImprovements = [
    {
      icon: Smartphone,
      title: "App Móvil Premium",
      category: "Frontend Avanzado",
      color: "bg-purple-500",
      features: [
        "Todo lo del plan Standard",
        "Rediseño completo UX/UI premium",
        "Animaciones y microinteracciones",
        "Modo offline avanzado",
        "Push notifications inteligentes",
        "Sistema de recomendaciones IA",
        "Chat AI",
        "Geolocalización avanzada",
        "Login con Meta",
      ],
      timeline: "Octubre 2025",
      hourlyRate: 43,
      hours: 132,
    },
    {
      icon: Cloud,
      title: "Backend Escalable Enterprise",
      category: "Infrastructure Premium",
      color: "bg-purple-600",
      features: [
        "Todo lo del plan Standard",
        "Arquitectura de microservicios",
        "Auto-scaling inteligente",
        "Diseño de datos ETL migración",
        "Backend Propio",
        "API GraphQL optimizada",
        "Monitoreo y alertas avanzadas",
      ],
      timeline: "Noviembre 2025",
      hourlyRate: 50,
      hours: 178,
    },
    {
      icon: Globe,
      title: "Landingpage Premium",
      category: "Marketing Premium",
      color: "bg-purple-700",
      features: [
        "Todo lo del plan Standard",
        "Landing page interactiva premium",
        "Dashboard de analytics avanzado",
        "Email automatizado notifiaciones",
        "Chatbot IA",
        "Panel de administración completo",
        "Generacion de reportes"
      ],
      timeline: "Diciembre 2025",
      hourlyRate: 45,
      hours: 58,
    },
  ];

  const improvements = isPremium ? premiumImprovements : standardImprovements;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm border ${
            isPremium 
              ? 'bg-purple-100 text-purple-800 border-purple-200' 
              : 'bg-green-100 text-green-800 border-green-200'
          }`}>
            <CheckCircle className="w-4 h-4 mr-2" />
            {isPremium ? 'Transformación Premium' : 'Mejoras Estratégicas'}
          </div>

          <h2 className="text-4xl text-gray-900">
            <span className={isPremium ? "text-purple-600" : "text-orange-600"}>
              {isPremium ? 'Ecosistema completo' : 'Tres pilares'}
            </span>{" "}
            para la evolución de Qolect
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isPremium 
              ? 'Una transformación integral con tecnología de vanguardia, diseño premium y funcionalidades avanzadas que posicionarán a Qolect como líder del mercado.'
              : 'Un enfoque integral que abarca experiencia de usuario, infraestructura robusta y presencia digital optimizada.'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:grid-rows-[1fr] items-stretch">
          {improvements.map((improvement, index) => {
            const Icon = improvement.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white relative overflow-hidden flex flex-col h-full"
              >
                {/* Gradient background */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${improvement.color}`}
                />

                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 ${improvement.color} rounded-xl flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs"
                    >
                      {improvement.category}
                    </Badge>
                  </div>

                  <CardTitle className="text-gray-900 text-xl">
                    {improvement.title}
                  </CardTitle>

                  <div className="text-sm text-gray-500">
                    🎯 Entrega: {improvement.timeline}
                  </div>
                </CardHeader>

                {/* Content grows to fill available space */}
                <CardContent className="flex-1 flex flex-col justify-between">
                  {/* Features list */}
                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {improvement.features.map(
                        (feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* Fixed bottom section - always at the bottom */}
                  <div className="mt-auto pt-6 border-t border-gray-100 space-y-4">
                    {/* Primera fila: Impacto esperado */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        Impacto esperado:
                      </span>
                      <span className={isPremium ? "text-purple-600" : "text-green-600"}>
                        Alto
                      </span>
                    </div>
                    
                    {/* Segunda fila: Timeline desarrollo (izq) y Costo por hora (der) */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 text-sm">
                      {/* Timeline desarrollo - izquierda */}
                      <div className="flex-1">
                        <div className={`font-medium ${isPremium ? 'text-purple-600' : 'text-orange-600'}`}>
                          {improvement.hours} horas
                        </div>
                        <div className="text-xs text-gray-500">Timeline desarrollo</div>
                      </div>
                      
                      {/* Costo por hora - derecha */}
                      <div className="flex-1 sm:text-right">
                        <div className={`font-medium ${isPremium ? 'text-purple-600' : 'text-orange-600'}`}>
                          ${improvement.hourlyRate}
                        </div>
                        <div className="text-xs text-gray-500">Costo por hora</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className={`mt-16 rounded-2xl p-8 text-center ${
          isPremium 
            ? 'bg-gradient-to-r from-purple-50 to-indigo-50' 
            : 'bg-gradient-to-r from-orange-50 to-blue-50'
        }`}>
          <h3 className="text-2xl text-gray-900 mb-4">
            {isPremium ? 'Transformación integral del ecosistema' : 'Sinergia entre componentes'}
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {isPremium 
              ? 'El Plan Premium crea un ecosistema tecnológico de vanguardia: aplicación móvil con IA y AR, backend enterprise auto-escalable, y plataforma digital completa con CRM integrado. Una solución que no solo mejora Qolect, sino que lo redefine como el líder indiscutible del sector.'
              : 'Estas tres mejoras trabajan en conjunto para crear un ecosistema digital completo: la app móvil atrae y retiene usuarios, el backend GCP garantiza escalabilidad y rendimiento, y el landing MVP optimiza la conversión y captación de nuevos clientes.'
            }
          </p>
        </div>
      </div>
    </section>
  );
}