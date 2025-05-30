"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomInput from "./CustomInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(1),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <CustomInput
                    form={form}
                    name="name"
                    label="Name"
                    placeholder="Name"
                  />
                  <CustomInput
                    form={form}
                    name="email"
                    label="Email"
                    placeholder="Email"
                  />

                  <CustomInput
                    form={form}
                    name="service"
                    label="Service Interested In"
                    placeholder="Service Interested In"
                    variant="select"
                    options={[
                      "Lead Generation",
                      "Data Mining",
                      "Market Research",
                      "Email List Building",
                      "LinkedIn Lead Generation",
                      "Other",
                    ]}
                  />
                  <CustomInput
                    form={form}
                    name="message"
                    label="Message"
                    placeholder="Message"
                    variant="textarea"
                  />

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">contact@yourcompany.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">
                      123 Business Street, Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-sm text-muted-foreground">
                  Saturday: 10:00 AM - 4:00 PM
                </p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
