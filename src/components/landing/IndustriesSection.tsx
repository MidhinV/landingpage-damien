import { Building2, GraduationCap, Heart, Stethoscope, Users, Briefcase, Building } from "lucide-react";

const industries = [
  { icon: Heart, name: "Health, Disability & Aged Care" },
  { icon: Stethoscope, name: "Allied Health" },
  { icon: Users, name: "Not-for-profits" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: GraduationCap, name: "Education & Training" },
  { icon: Building2, name: "Member-based Organisations" },
  { icon: Building, name: "Small to Medium Businesses" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-32 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Who I Work With
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Organisations That Care{" "}
            <span className="text-gradient">Deeply About People</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Organisations ready to modernise while keeping people at the centre.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="max-w-6xl mx-auto">
          {/* First Row - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {industries.slice(0, 4).map((industry, index) => {
              const isHighlighted = index % 4 === 0;
              
              return (
                <div
                  key={industry.name}
                  className={`group hover-lift ${
                    isHighlighted 
                      ? "card-elevated bg-gradient-to-br from-primary/5 to-transparent border-primary/20" 
                      : "card-minimal"
                  }`}
                >
                  <div className="p-6 text-center space-y-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 ${
                      isHighlighted
                        ? "bg-primary/10 group-hover:bg-primary/20"
                        : "bg-muted group-hover:bg-primary/10"
                    }`}>
                      <industry.icon className={`w-7 h-7 transition-colors ${
                        isHighlighted ? "text-primary" : "text-primary"
                      }`} />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Second Row - 3 items centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full lg:w-auto lg:max-w-[75%]">
              {industries.slice(4).map((industry, index) => {
                const actualIndex = index + 4;
                const isHighlighted = actualIndex % 4 === 0;
                
                return (
                  <div
                    key={industry.name}
                    className={`group hover-lift ${
                      isHighlighted 
                        ? "card-elevated bg-gradient-to-br from-primary/5 to-transparent border-primary/20" 
                        : "card-minimal"
                    }`}
                  >
                    <div className="p-6 text-center space-y-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 ${
                        isHighlighted
                          ? "bg-primary/10 group-hover:bg-primary/20"
                          : "bg-muted group-hover:bg-primary/10"
                      }`}>
                        <industry.icon className={`w-7 h-7 transition-colors ${
                          isHighlighted ? "text-primary" : "text-primary"
                        }`} />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground leading-tight">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
