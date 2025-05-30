import { HeroPattern } from "@/components/HeroPattern";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const features = [
    "Data-Driven Insights",
    "Custom Lead Generation",
    "Market Intelligence",
    "24/7 Support",
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Decorative grid pattern */}
      <HeroPattern />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <p className="text-sm font-medium text-primary">
              Empowering Businesses with Data Intelligence
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent mb-6 leading-tight">
            Unlock Your Business Potential with Smart Data Solutions
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your business with our comprehensive data solutions. From
            lead generation to market analysis, we help you make data-driven
            decisions that drive growth.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="#contact"
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="#about"
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/5"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
