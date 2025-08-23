import { useState } from "react";
import { Palette, Smartphone, Monitor, PenTool, ExternalLink, Eye } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function DesignInspiration() {
  const designReferences = [
    {
      title: "Interfaz de navegación premium",
      description: "Referencia de diseño para navegación moderna y elegante con microinteracciones fluidas",
      type: "Inspiración UI",
      category: "Navigation",
      links: [
        {
          title: "Epic - Travel App Navigation",
          url: "https://epic.travel/epic-journal/",
          description: "Navegación moderna para apps de viajes"
        },
        {
          title: "librairie - experience App Navigation",
          url: "https://librairie-experience.com/?ref=lapaninja",
          description: "Navegación moderna para apps de viajes"
        }
      ]
    },
    {
      title: "Wireframes y prototipado",
      description: "Referencias de proceso de wireframing para experiencias sobre la app existente",
      type: "Prototipo",
      category: "UX Process",
      links: [
        {
          title: "Figma  - Prototipo uno",
          url: "https://simple-stomp-97386391.figma.site/",
          description: "Estilizando elementos"
        },
        {
          title: "Figma  - Prototipo dos",
          url: "https://decoy-geek-96240730.figma.site/",
          description: "Probando estilos"
        }
      ]
    },
    {
      title: "Estilos Landing Page",
      description: "Referencias de estilos de landing page, temas, colores, etc",
      type: "Funcionalidad",
      category: "Booking Flow",
      links: [
        {
          title: "Storyboard - Flow",
          url: "https://www.storyboard-agency.com/?ref=lapaninja",
          description: "Diseño de flujos"
        },
        {
          title: "Ada - Complex Forms",
          url: "https://www.ada.cx/?ref=lapaninja",
          description: "Patrones para formularios complejos"
        }
      ]
    },
    
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Inspiración UI":
        return Palette;
      case "Prototipo":
        return PenTool;
      case "Funcionalidad":
        return Smartphone;
      case "UX Design":
        return Monitor;
      case "Feature Design":
        return Smartphone;
      case "Diseño Propio":
        return PenTool;
      default:
        return Palette;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Inspiración UI":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Prototipo":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Funcionalidad":
        return "bg-green-100 text-green-700 border-green-200";
      case "UX Design":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Feature Design":
        return "bg-indigo-100 text-indigo-700 border-indigo-200";
      case "Diseño Propio":
        return "bg-pink-100 text-pink-700 border-pink-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section id="design-inspiration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm border border-orange-200">
            <Palette className="w-4 h-4 mr-2" />
            Inspiración de Diseño
          </div>
          
          <h2 className="text-4xl text-gray-900">
            Referencias y metodología
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enlaces curados a las mejores referencias de diseño y metodologías que guiarán el rediseño de Qolect hacia una experiencia premium.
          </p>
        </div>

        {/* Galería de referencias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {designReferences.map((reference, index) => {
            const TypeIcon = getTypeIcon(reference.type);
            
            return (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group h-full"
              >
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className={`${getTypeColor(reference.type)} border`}>
                        <TypeIcon className="w-3 h-3 mr-1" />
                        {reference.type}
                      </Badge>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {reference.category}
                      </span>
                    </div>
                    
                    <h3 className="text-gray-900 font-medium">{reference.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{reference.description}</p>
                  </div>

                  {/* Enlaces */}
                  <div className="flex-grow space-y-3">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Referencias externas
                    </div>
                    
                    {reference.links.map((link, linkIndex) => (
                      <div 
                        key={linkIndex}
                        className="group/link border border-gray-200 rounded-lg p-3 hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-200"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 truncate">
                              {link.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {link.description}
                            </p>
                          </div>
                          
                          <Button
                            size="sm"
                            variant="ghost"
                            className="shrink-0 h-8 w-8 p-0 hover:bg-orange-100 group-hover/link:text-orange-600"
                            onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer con botón principal */}
                  <div className="pt-4 border-t border-gray-100">
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => {
                        // Abrir todos los enlaces en pestañas separadas
                        reference.links.forEach(link => {
                          window.open(link.url, '_blank', 'noopener,noreferrer');
                        });
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver todas las referencias
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Principios de diseño */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
          <div className="text-center space-y-6">
            <h3 className="text-2xl text-gray-900">
              Principios de Diseño para Qolect
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-gray-900 font-medium">Mobile First</h4>
                <p className="text-sm text-gray-600">
                  Diseño optimizado para dispositivos móviles con navegación intuitiva
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <Palette className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-gray-900 font-medium">Premium UI</h4>
                <p className="text-sm text-gray-600">
                  Interfaz elegante con acentos azules/amarillos y tipografía sofisticada, respetando logos y estilos legacy
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <Monitor className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-gray-900 font-medium">UX Centrada</h4>
                <p className="text-sm text-gray-600">
                  Flujos de usuario optimizados para la planificación de viajes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}