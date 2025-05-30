import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const values = [
  "Expert team of data analysts and researchers",
  "Customized solutions for your specific needs",
  "High-quality, verified data delivery",
  "Fast turnaround times",
  "Competitive pricing",
  "24/7 customer support",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We are a team of dedicated professionals specializing in data-driven
            solutions. Our expertise in lead generation, data mining, and market
            research helps businesses make informed decisions and achieve their
            growth objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Our Commitment to Excellence
            </h3>
            <p className="text-muted-foreground text-lg">
              We are committed to delivering exceptional value through our data
              solutions. Our team works tirelessly to ensure that every client
              receives the highest quality service and results that drive real
              business growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg">
                To empower businesses with accurate, actionable data and
                insights that drive growth and success in the digital
                marketplace.
              </p>
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">Our Vision</h4>
                <p className="text-muted-foreground">
                  To be the leading provider of data-driven solutions that
                  transform businesses and drive innovation in the digital age.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
