import { ReactNode } from "react";

interface CaseStudySectionProps {
  children: ReactNode;
}

const CaseStudySection = ({ children }: CaseStudySectionProps) => {
  return (
    <section className="pb-12 border-b border-border">
      <div className="text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
};

export default CaseStudySection;
