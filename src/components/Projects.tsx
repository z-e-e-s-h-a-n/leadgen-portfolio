"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { DetailDialog } from "./ui/detail-dialog";

const projects = [
  {
    title: "B2B Lead Generation Campaign",
    description:
      "Successfully generated 5,000+ qualified leads for a SaaS company through targeted LinkedIn outreach and email campaigns.",
    tags: ["Lead Generation", "B2B", "LinkedIn", "Email Marketing"],
    image: "/projects/leads.jpg",
    link: "#",
    metrics: [
      { label: "Leads Generated", value: "5,000+" },
      { label: "Response Rate", value: "35%" },
      { label: "Conversion Rate", value: "12%" },
    ],
    features: [
      "Targeted industry research",
      "Custom lead scoring system",
      "Multi-channel outreach strategy",
      "Automated follow-up sequences",
      "Detailed performance analytics",
      "ROI tracking and reporting",
    ],
    challenge:
      "The client needed to expand their B2B customer base in the SaaS industry but struggled with identifying and reaching decision-makers.",
    solution:
      "We implemented a comprehensive lead generation strategy combining LinkedIn Sales Navigator, email outreach, and content marketing to identify and engage potential customers.",
    results:
      "The campaign resulted in 5,000+ qualified leads, a 35% response rate, and a 12% conversion rate, significantly exceeding the client's initial targets.",
  },
  {
    title: "Market Research Analysis",
    description:
      "Comprehensive market analysis for a healthcare provider, identifying key opportunities and competitive advantages.",
    tags: ["Market Research", "Healthcare", "Data Analysis", "Strategy"],
    image: "/projects/market.jpg",
    link: "#",
    metrics: [
      { label: "Market Coverage", value: "100%" },
      { label: "Data Points", value: "10,000+" },
      { label: "ROI Increase", value: "45%" },
    ],
    features: [
      "Competitive landscape analysis",
      "Market size and growth projections",
      "Customer behavior insights",
      "Regulatory compliance review",
      "Opportunity identification",
      "Strategic recommendations",
    ],
    challenge:
      "A healthcare provider needed to understand market dynamics and identify growth opportunities in a rapidly evolving industry.",
    solution:
      "We conducted extensive market research, analyzing competitors, customer behavior, and industry trends to provide actionable insights.",
    results:
      "The analysis led to a 45% increase in ROI through optimized market positioning and targeted service offerings.",
  },
  {
    title: "Data Mining & Enrichment",
    description:
      "Enhanced client database with 10,000+ verified business contacts, improving outreach effectiveness by 40%.",
    tags: ["Data Mining", "Contact Enrichment", "CRM", "Automation"],
    image: "/projects/data.jpg",
    link: "#",
    metrics: [
      { label: "Contacts Enriched", value: "10,000+" },
      { label: "Data Accuracy", value: "99.9%" },
      { label: "Effectiveness", value: "+40%" },
    ],
    features: [
      "Automated data collection",
      "Contact verification system",
      "Data enrichment pipeline",
      "CRM integration",
      "Quality assurance checks",
      "Regular data updates",
    ],
    challenge:
      "A client's existing database was outdated and lacked crucial contact information, leading to poor outreach results.",
    solution:
      "We implemented an automated data mining and enrichment system to verify and enhance contact information.",
    results:
      "The enhanced database improved outreach effectiveness by 40% and significantly increased response rates.",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore how we&apos;ve helped businesses achieve their growth
            objectives through our data-driven solutions and lead generation
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => setSelectedProject(project)}
                >
                  View Case Study
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <DetailDialog
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        description={selectedProject?.description || ""}
        tags={selectedProject?.tags}
        features={selectedProject?.features}
        metrics={selectedProject?.metrics}
        cta={
          selectedProject
            ? {
                label: "Get Similar Results",
                href: "#contact",
              }
            : undefined
        }
      />
    </section>
  );
}
