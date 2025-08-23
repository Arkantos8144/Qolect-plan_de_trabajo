import React from "react";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { Sparkles, Shield } from "lucide-react";

interface PlanToggleBarProps {
  isPremium: boolean;
  onToggle: (value: boolean) => void;
}

export function PlanToggleBar({ isPremium, onToggle }: PlanToggleBarProps) {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-2xl opacity-50"></div>
      
      <div className="relative z-10">
        <div className="text-center space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-3xl text-gray-900">
              Elige tu <span className={isPremium ? "text-purple-600" : "text-orange-600"}>plan de mejoras</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Selecciona el nivel de transformación que mejor se adapte a tus objetivos y presupuesto
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center space-x-8">
            {/* Standard Plan */}
            <div className={`flex items-center space-x-3 transition-all duration-300 ${!isPremium ? 'scale-110' : 'opacity-60'}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${!isPremium ? 'bg-orange-100' : 'bg-gray-100'}`}>
                <Shield className={`w-6 h-6 ${!isPremium ? 'text-orange-600' : 'text-gray-400'}`} />
              </div>
              <div className="text-left">
                <div className={`font-medium ${!isPremium ? 'text-gray-900' : 'text-gray-500'}`}>
                  Plan Standard
                </div>
                <div className="text-sm text-gray-500">Mejoras esenciales</div>
              </div>
            </div>

            {/* Switch */}
            <div className="flex flex-col items-center space-y-2">
              <Switch
                checked={isPremium}
                onCheckedChange={onToggle}
                className={`data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-orange-600`}
              />
              <div className="text-xs text-gray-500 font-medium">
                {isPremium ? 'Premium activo' : 'Standard activo'}
              </div>
            </div>

            {/* Premium Plan */}
            <div className={`flex items-center space-x-3 transition-all duration-300 ${isPremium ? 'scale-110' : 'opacity-60'}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isPremium ? 'bg-purple-100' : 'bg-gray-100'}`}>
                <Sparkles className={`w-6 h-6 ${isPremium ? 'text-purple-600' : 'text-gray-400'}`} />
              </div>
              <div className="text-left">
                <div className={`font-medium ${isPremium ? 'text-gray-900' : 'text-gray-500'}`}>
                  Plan Premium
                </div>
                <div className="text-sm text-gray-500">Transformación completa</div>
              </div>
            </div>
          </div>

          {/* Plan Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Standard Features */}
            <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${!isPremium ? 'border-orange-200 bg-orange-50/50' : 'border-gray-200 bg-gray-50'}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-medium ${!isPremium ? 'text-orange-900' : 'text-gray-700'}`}>
                    Plan Standard
                  </h3>
                  <Badge variant={!isPremium ? "default" : "secondary"} className={!isPremium ? "bg-orange-100 text-orange-800 border-orange-200" : ""}>
                    {!isPremium ? 'Actual' : 'Disponible'}
                  </Badge>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    App móvil optimizada
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    Backend estable en GCP
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    Landing page MVP
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    Timeline de 2 meses
                  </li>
                </ul>
                
                {/* Pricing Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-medium text-gray-400 line-through">$6355</span>
                        <span className="text-lg font-medium text-orange-600">$5719.5</span>
                        <Badge variant="destructive" className="text-xs px-1 py-0.5">-10%</Badge>
                      </div>
                      <div className="text-xs text-gray-500">Costo proyecto completo</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-orange-600">173 horas</div>
                      <div className="text-xs text-gray-500">Timeline desarrollo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Features */}
            <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${isPremium ? 'border-purple-200 bg-purple-50/50' : 'border-gray-200 bg-gray-50'}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-medium ${isPremium ? 'text-purple-900' : 'text-gray-700'}`}>
                    Plan Premium
                  </h3>
                  <Badge variant={isPremium ? "default" : "secondary"} className={isPremium ? "bg-purple-100 text-purple-800 border-purple-200" : ""}>
                    {isPremium ? 'Actual' : 'Disponible'}
                  </Badge>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                    Todo lo del Plan Standard
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                    Diseño premium + UX research
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                    Features avanzadas + IA
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                    Timeline extendido de 4 meses
                  </li>
                </ul>
                
                {/* Pricing Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-medium text-gray-400 line-through">$17186</span>
                        <span className="text-lg font-medium text-purple-600">$15467.4</span>
                        <Badge variant="destructive" className="text-xs px-1 py-0.5">-10%</Badge>
                      </div>
                      <div className="text-xs text-gray-500">Costo proyecto completo</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-purple-600">368 horas</div>
                      <div className="text-xs text-gray-500">Timeline desarrollo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}