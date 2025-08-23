import { Calendar, CheckCircle, Clock, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface TimelineProps {
  isPremium?: boolean;
}

export function Timeline({ isPremium = false }: TimelineProps) {
  const standardMilestones = [
    {
      date: "25 Agosto 2025",
      title: "Inicio del Proyecto",
      description: "Kickoff, setup del entorno de desarrollo y planificación detallada",
      status: "upcoming",
      icon: Rocket,
      color: "bg-blue-500"
    },
    {
      date: "Septiembre 2025",
      title: "App Móvil + Landing",
      description: "Entrega de app móvil optimizada y landing page MVP funcional",
      status: "upcoming", 
      icon: CheckCircle,
      color: "bg-green-500"
    },
    {
      date: "Septiembre 2025",
      title: "Backend GCP",
      description: "Migración completa a Google Cloud con todas las integraciones",
      status: "upcoming",
      icon: Clock,
      color: "bg-orange-500"
    }
  ];

  const premiumMilestones = [
    {
      date: "25 Agosto 2025",
      title: "Inicio & Research",
      description: "Kickoff, UX research avanzado, arquitectura enterprise y setup completo",
      status: "upcoming",
      icon: Rocket,
      color: "bg-purple-500"
    },
    {
      date: "Septiembre 2025",
      title: "Fase 1: Fundamentos Premium",
      description: "App móvil rediseñada, backend escalable básico y landing interactiva",
      status: "upcoming",
      icon: CheckCircle,
      color: "bg-purple-600"
    },
    {
      date: "Octubre 2025",
      title: "Fase 2: Features Avanzadas",
      description: "IA integrada, realidad aumentada, microservicios y dashboard analytics",
      status: "upcoming",
      icon: Clock,
      color: "bg-purple-700"
    },
    {
      date: "Octubre 2025",
      title: "Fase 3: Optimización Enterprise",
      description: "Auto-scaling, multi-región, CRM completo y email marketing automatizado",
      status: "upcoming",
      icon: CheckCircle,
      color: "bg-purple-800"
    },
    {
      date: "Octubre 2025",
      title: "Lanzamiento Premium",
      description: "Testing integral, optimización final y lanzamiento del ecosistema completo",
      status: "upcoming",
      icon: Rocket,
      color: "bg-purple-900"
    }
  ];

  const milestones = isPremium ? premiumMilestones : standardMilestones;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm border ${
            isPremium 
              ? 'bg-purple-100 text-purple-800 border-purple-200' 
              : 'bg-orange-100 text-orange-800 border-orange-200'
          }`}>
            <Calendar className="w-4 h-4 mr-2" />
            {isPremium ? 'Roadmap Premium Extendido' : 'Timeline de Entregas'}
          </div>
          
          <h2 className="text-4xl text-gray-900">
            <span className={isPremium ? "text-purple-600" : "text-orange-600"}>
              {isPremium ? 'Transformación progresiva' : 'Roadmap claro'}
            </span> con hitos alcanzables
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isPremium 
              ? 'Un cronograma extendido de 2 meses que permite implementar tecnología de vanguardia con la calidad enterprise que Qolect merece.'
              : 'Un cronograma optimizado de 1 meses garantizando entregas incrementales de valor.'
            }
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-8 bottom-8 w-0.5 bg-gray-300 md:transform md:-translate-x-px" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 w-8 h-8 ${milestone.color} rounded-full flex items-center justify-center md:transform md:-translate-x-1/2 z-10`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                    <Card className="border-none shadow-lg bg-white">
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                          <div className={`text-sm ${isPremium ? 'text-purple-600' : 'text-orange-600'}`}>{milestone.date}</div>
                          <h3 className="text-xl text-gray-900">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isPremium ? 'bg-purple-500' : 'bg-orange-500'}`} />
                          <span className="text-sm text-gray-500">Próximo hito</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-2/12" />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Summary */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
          <h3 className="text-2xl text-gray-900">
            Cronograma optimizado para el éxito
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className={`text-2xl ${isPremium ? 'text-purple-600' : 'text-blue-600'}`}>
                {isPremium ? '2 meses' : '1 meses'}
              </div>
              <div className="text-sm text-gray-600">Duración total del proyecto</div>
            </div>
            
            <div className="space-y-2">
              <div className={`text-2xl ${isPremium ? 'text-purple-600' : 'text-green-600'}`}>
                {isPremium ? 'Demo quincenal' : 'Demo semanal'}
              </div>
              <div className="text-sm text-gray-600">Seguimiento y feedback continuo</div>
            </div>
            
            <div className="space-y-2">
              <div className={`text-2xl ${isPremium ? 'text-purple-600' : 'text-orange-600'}`}>
                {isPremium ? 'Entregas Premium' : 'Entregas MVP'}
              </div>
              <div className="text-sm text-gray-600">Valor incremental</div>
            </div>
          </div>
          
          <p className="text-gray-700 max-w-2xl mx-auto">
            Cada hito está diseñado para entregar funcionalidad completa y usable, 
            permitiendo validación temprana y ajustes basados en feedback real.
          </p>
        </div>
      </div>
    </section>
  );
}