"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Inc.",
    image: "/testimonials/sarah.jpg",
    quote:
      "The lead generation service exceeded our expectations. We saw a 40% increase in qualified leads within the first month.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "Innovate Solutions",
    image: "/testimonials/michael.jpg",
    quote:
      "Their data analysis and market research helped us identify new opportunities we hadn't considered before. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Sales Manager",
    company: "Global Enterprises",
    image: "/testimonials/emily.jpg",
    quote:
      "The team's expertise in B2B lead generation has been invaluable to our growth strategy. The quality of leads is exceptional.",
  },
  {
    name: "David Wilson",
    role: "Business Development",
    company: "StartUp Vision",
    image: "/testimonials/david.jpg",
    quote:
      "Working with this team has transformed our outreach efforts. The results speak for themselves - we've doubled our conversion rate.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear what our clients say about our services and their success
            stories
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <Quote className="h-8 w-8 text-primary mb-4" />
                      <p className="text-muted-foreground mb-6 flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
