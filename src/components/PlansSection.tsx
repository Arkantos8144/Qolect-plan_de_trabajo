import { PlanToggleBar } from "./PlanToggleBar";
import { KeyImprovements } from "./KeyImprovements";
import { DesignInspiration } from "./DesignInspiration";
import { Timeline } from "./Timeline";

interface PlansSectionProps {
  isPremium: boolean;
  onToggle: (value: boolean) => void;
}

export function PlansSection({ isPremium, onToggle }: PlansSectionProps) {
  return (
    <div className="bg-white">
      {/* Plan Toggle Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <PlanToggleBar 
            isPremium={isPremium} 
            onToggle={onToggle} 
          />
        </div>
      </section>

      {/* Key Improvements */}
      <KeyImprovements isPremium={isPremium} />
      
      {/* Design Inspiration - Only show for Premium */}
      {isPremium && <DesignInspiration />}
      
      {/* Timeline */}
      <Timeline isPremium={isPremium} />
    </div>
  );
}