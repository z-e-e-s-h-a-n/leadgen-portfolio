import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Search, Users, BarChart2, Send } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description:
      "We analyze your business needs and objectives to create a tailored strategy.",
    icon: ClipboardList,
    badge: "Step 1",
    details: [
      "Initial consultation",
      "Requirement gathering",
      "Goal setting",
      "Strategy development",
    ],
  },
  {
    title: "Research",
    description:
      "Our team conducts in-depth market research and competitor analysis.",
    icon: Search,
    badge: "Step 2",
    details: [
      "Market analysis",
      "Competitor research",
      "Target audience identification",
      "Opportunity assessment",
    ],
  },
  {
    title: "Lead Generation",
    description:
      "We identify and qualify potential leads using advanced targeting methods.",
    icon: Users,
    badge: "Step 3",
    details: [
      "Lead identification",
      "Data collection",
      "Lead qualification",
      "Contact verification",
    ],
  },
  {
    title: "Analysis",
    description:
      "Data is analyzed and processed to ensure quality and relevance.",
    icon: BarChart2,
    badge: "Step 4",
    details: [
      "Data validation",
      "Quality assurance",
      "Performance metrics",
      "Insight generation",
    ],
  },
  {
    title: "Delivery",
    description:
      "Final results are delivered with detailed reports and insights.",
    icon: Send,
    badge: "Step 5",
    details: [
      "Report generation",
      "Data delivery",
      "Results presentation",
      "Next steps planning",
    ],
  },
];

export function Process() {
  return (
    <section id="process" className="py-12 container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Our Process
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          We follow a systematic approach to ensure the highest quality results
          for your business.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                {/* Left side (even) or Right side (odd) */}
                <div
                  className={`${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  } mb-8 lg:mb-0`}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <step.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">
                            {step.title}
                          </CardTitle>
                        </div>
                        <Badge variant="secondary" className="text-sm">
                          {step.badge}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center text-sm"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>

                {/* Empty div for spacing */}
                <div
                  className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
