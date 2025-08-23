import { useState } from "react";
import { Palette, Smartphone, Monitor, PenTool, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DesignInspiration() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const designReferences = [
    {
      mainImage: "https://sfsrokbwfnccfvnzjasm.supabase.co/storage/v1/object/sign/imperio-rifas-bucket/Prueba/image.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZmZmYjE5Ni02MDlkLTRkYmQtYTIzMS02YjhjODEzNDllZGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbXBlcmlvLXJpZmFzLWJ1Y2tldC9QcnVlYmEvaW1hZ2Uud2VicCIsImlhdCI6MTc1NTkwMTE4MCwiZXhwIjoxNzU2NTA1OTgwfQ.RrtoDWSZ1s5xfBhUq8BQdSAk0wP1-3iwrbUqLdFYfRI",
      images: [
        "https://sfsrokbwfnccfvnzjasm.supabase.co/storage/v1/object/sign/imperio-rifas-bucket/Prueba/image.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZmZmYjE5Ni02MDlkLTRkYmQtYTIzMS02YjhjODEzNDllZGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbXBlcmlvLXJpZmFzLWJ1Y2tldC9QcnVlYmEvaW1hZ2Uud2VicCIsImlhdCI6MTc1NTkwMTE4MCwiZXhwIjoxNzU2NTA1OTgwfQ.RrtoDWSZ1s5xfBhUq8BQdSAk0wP1-3iwrbUqLdFYfRI",
        "https://images.unsplash.com/photo-1604355231395-bf02775c357f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZpZ2F0aW9uJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1NTkwMjA5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1NTkwMjA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      title: "Interfaz de navegación premium",
      description: "Referencia de diseño para navegación moderna y elegante",
      type: "Inspiración UI"
    },
    {
      mainImage: "https://sfsrokbwfnccfvnzjasm.supabase.co/storage/v1/object/sign/imperio-rifas-bucket/Prueba/image%20(1).webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZmZmYjE5Ni02MDlkLTRkYmQtYTIzMS02YjhjODEzNDllZGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbXBlcmlvLXJpZmFzLWJ1Y2tldC9QcnVlYmEvaW1hZ2UgKDEpLndlYnAiLCJpYXQiOjE3NTU5MDE1NjAsImV4cCI6MTc1NjUwNjM2MH0.4rcYNi_4A6QzsW9KugMlLsHa28F90jNr4HPbFdy2z8Y",
      images: [
        "https://sfsrokbwfnccfvnzjasm.supabase.co/storage/v1/object/sign/imperio-rifas-bucket/Prueba/image%20(1).webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZmZmYjE5Ni02MDlkLTRkYmQtYTIzMS02YjhjODEzNDllZGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbXBlcmlvLXJpZmFzLWJ1Y2tldC9QcnVlYmEvaW1hZ2UgKDEpLndlYnAiLCJpYXQiOjE3NTU5MDE1NjAsImV4cCI6MTc1NjUwNjM2MH0.4rcYNi_4A6QzsW9KugMlLsHa28F90jNr4HPbFdy2z8Y",
        "https://images.unsplash.com/photo-1698434156098-68e834638679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBtb2NrdXAlMjBkZXNpZ258ZW58MXx8fHx8MTc1NTkwMjA5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NTU4OTM3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      title: "Wireframes iniciales",
      description: "Proceso de wireframing y prototipado inicial del proyecto",
      type: "Prototipo"
    },
    {
      mainImage: "https://images.unsplash.com/photo-1730818029039-662126e61821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwJTIwc2NyZWVufGVufDF8fHx8MTc1NTg5Nzk1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1730818029039-662126e61821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwJTIwc2NyZWVufGVufDF8fHx8MTc1NTg5Nzk1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NTkwMjA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1583319251241-214024248bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU1OTAyMDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      title: "Pantalla de reservas",
      description: "Funcionalidad de reservas y experiencia de usuario optimizada",
      type: "Funcionalidad"
    }
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

  const openCarousel = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
  };

  const closeCarousel = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      const maxIndex = designReferences[selectedProject].images.length - 1;
      setCurrentImageIndex(currentImageIndex >= maxIndex ? 0 : currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const maxIndex = designReferences[selectedProject].images.length - 1;
      setCurrentImageIndex(currentImageIndex <= 0 ? maxIndex : currentImageIndex - 1);
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
            Referencias visuales
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Referencias visuales que guiarán el rediseño de Qolect hacia una experiencia premium y centrada en el usuario.
          </p>
        </div>

        {/* Galería de referencias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {designReferences.map((reference, index) => {
            const TypeIcon = getTypeIcon(reference.type);
            
            return (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group cursor-pointer"
                onClick={() => openCarousel(index)}
              >
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden">
                    <ImageWithFallback
                      src={reference.mainImage}
                      alt={reference.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Overlay con tipo */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-xs shadow-sm">
                      <TypeIcon className="w-3 h-3 mr-1" />
                      {reference.type}
                    </div>
                  </div>

                  {/* Indicador de múltiples imágenes */}
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center px-2 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs">
                      +{reference.images.length}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                      Ver galería
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-gray-900 font-medium">{reference.title}</h3>
                  <p className="text-sm text-gray-600">{reference.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Modal del carrusel */}
        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && closeCarousel()}>
          <DialogContent className="max-w-4xl w-full p-0 bg-black/95">
            <DialogTitle className="sr-only">
              {selectedProject !== null ? designReferences[selectedProject].title : ""}
            </DialogTitle>
            
            {selectedProject !== null && (
              <div className="relative">
                {/* Botón cerrar */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                  onClick={closeCarousel}
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Información del proyecto */}
                <div className="absolute top-4 left-4 z-10 text-white">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-lg font-medium">{designReferences[selectedProject].title}</h3>
                    <p className="text-sm opacity-80">{designReferences[selectedProject].description}</p>
                    <div className="flex items-center mt-2">
                      {(() => {
                        const TypeIcon = getTypeIcon(designReferences[selectedProject].type);
                        return <TypeIcon className="w-4 h-4 mr-2" />;
                      })()}
                      <span className="text-xs">{designReferences[selectedProject].type}</span>
                    </div>
                  </div>
                </div>

                {/* Imagen principal */}
                <div className="relative aspect-video">
                  <ImageWithFallback
                    src={designReferences[selectedProject].images[currentImageIndex]}
                    alt={`${designReferences[selectedProject].title} - Imagen ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />

                  {/* Controles del carrusel */}
                  {designReferences[selectedProject].images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Indicadores de páginas */}
                {designReferences[selectedProject].images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {designReferences[selectedProject].images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentImageIndex(imgIndex)}
                      />
                    ))}
                  </div>
                )}

                {/* Contador de imágenes */}
                <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  {currentImageIndex + 1} / {designReferences[selectedProject].images.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

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