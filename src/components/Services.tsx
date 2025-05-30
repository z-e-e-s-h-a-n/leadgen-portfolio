"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Users, Target } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { DetailDialog } from "./ui/detail-dialog";

const services = [
  {
    title: "Lead Generation & Research",
    description:
      "Comprehensive B2B and B2C lead generation, market research, and competitor analysis to help you reach your ideal customers.",
    icon: Target,
    features: [
      "Targeted lead generation",
      "Market research & analysis",
      "Competitor intelligence",
      "Web research & data mining",
    ],
    cta: "Explore Lead Generation",
    metrics: [
      { label: "Success Rate", value: "98%" },
      { label: "Avg. Response Time", value: "24h" },
      { label: "Client Satisfaction", value: "4.9/5" },
    ],
    detailedFeatures: [
      "Custom lead scoring and qualification",
      "Multi-channel lead generation",
      "Competitor analysis and market mapping",
      "Industry-specific research",
      "Lead nurturing strategies",
      "ROI tracking and reporting",
    ],
  },
  {
    title: "Data Management",
    description:
      "End-to-end data solutions including collection, processing, and analysis to drive informed business decisions.",
    icon: Database,
    features: [
      "Data mining & scraping",
      "Data entry & processing",
      "Database management",
      "Data analysis & insights",
    ],
    cta: "Learn About Data Solutions",
    metrics: [
      { label: "Data Accuracy", value: "99.9%" },
      { label: "Processing Speed", value: "10K/hr" },
      { label: "Cost Reduction", value: "40%" },
    ],
    detailedFeatures: [
      "Automated data collection",
      "Data cleaning and validation",
      "Database optimization",
      "Real-time data processing",
      "Custom data analytics",
      "Data security compliance",
    ],
  },
  {
    title: "List Building & Outreach",
    description:
      "Build high-quality, targeted contact lists and execute effective outreach campaigns across multiple channels.",
    icon: Users,
    features: [
      "Email list building",
      "LinkedIn lead generation",
      "Contact enrichment",
      "Multi-channel outreach",
    ],
    cta: "Start Building Lists",
    metrics: [
      { label: "List Quality", value: "95%" },
      { label: "Response Rate", value: "35%" },
      { label: "Conversion Rate", value: "12%" },
    ],
    detailedFeatures: [
      "Custom list building",
      "Contact verification",
      "Email deliverability optimization",
      "Multi-channel campaign management",
      "Response tracking",
      "Campaign analytics",
    ],
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  return (
    <section id="services" className="py-20 bg-secondary/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive data and research solutions tailored to your business
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors relative"
                  onClick={() => setSelectedService(service)}
                >
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <DetailDialog
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
        description={selectedService?.description || ""}
        tags={selectedService?.features}
        features={selectedService?.detailedFeatures}
        metrics={selectedService?.metrics}
        cta={
          selectedService
            ? {
                label: selectedService.cta,
                href: "#contact",
              }
            : undefined
        }
      />
    </section>
  );
}
