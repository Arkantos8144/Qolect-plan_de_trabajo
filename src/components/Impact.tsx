import { TrendingUp, Users, DollarSign, Shield, Zap, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Impact() {
  const benefits = [
    {
      icon: Users,
      title: "Experiencia Premium",
      description: "Mayor retención y satisfacción del usuario con funcionalidades avanzadas",
      metric: "Aumento en la retención esperada",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Escalabilidad Garantizada", 
      description: "Infraestructura Google Cloud que crece con el negocio sin limitaciones",
      metric: "99.9% uptime garantizado",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Pagos Seguros",
      description: "Integración Stripe para transacciones confiables y cumplimiento PCI",
      metric: "Certificación PCI DSS",
      color: "text-orange-600"
    },
    {
      icon: Globe,
      title: "Captación Optimizada",
      description: "Landing page diseñada para conversión y generación de leads calificados",
      metric: "+60% conversión esperada",
      color: "text-purple-600"
    },
    {
      icon: DollarSign,
      title: "Costos Controlados",
      description: "Operación eficiente con costos predecibles y escalamiento gradual",
      metric: "Precios competitivos GCP",
      color: "text-red-600"
    },
    {
      icon: TrendingUp,
      title: "Ventaja Competitiva",
      description: "Tecnología moderna que posiciona a Qolect por delante de competidores",
      metric: "Liderazgo tecnológico",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm border border-green-200">
            <TrendingUp className="w-4 h-4 mr-2" />
            Impacto y Beneficios
          </div>

          <h2 className="text-4xl text-gray-900">
            <span className="text-green-600">Resultados medibles</span> que transformarán Qolect
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada mejora está diseñada para generar valor inmediato y sostenible para el negocio y los usuarios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 bg-white"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-6 h-6 ${benefit.color}`} />
                    <CardTitle className="text-lg text-gray-900">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 ${benefit.color}`}>
                    {benefit.metric}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ROI Summary */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl text-gray-900">
              Retorno de inversión proyectado usando el plan completo
            </h3>

            <div className="space-y-2">
              <div className="text-3xl text-blue-600">200%+</div>
              <div className="text-sm text-gray-600">Aumento en eficiencia</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl text-orange-600">5 años</div>
              <div className="text-sm text-gray-600">Tecnología future-proof</div>
            </div>

            <p className="text-gray-700 max-w-2xl mx-auto">
              La inversión en estas mejoras no solo optimiza la operación actual, sino que establece las bases
              para el crecimiento sostenible y la innovación continua en Qolect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
