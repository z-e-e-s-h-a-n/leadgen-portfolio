import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with businesses of all sizes across various industries, from startups to enterprise-level companies. Our services are particularly valuable for B2B companies, marketing agencies, and sales teams looking to expand their reach.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Typically, you can expect to see initial results within 2-4 weeks. However, the exact timeline depends on your specific requirements, the scope of the project, and the type of service you've chosen.",
  },
  {
    question: "What makes your lead generation different?",
    answer:
      "Our lead generation process combines advanced technology with human expertise. We use sophisticated tools for data collection and analysis, but our team also manually verifies leads to ensure quality and relevance.",
  },
  {
    question: "How do you ensure data quality?",
    answer:
      "We implement a rigorous quality control process that includes multiple verification steps, data validation, and regular audits. Our team manually checks a sample of the data to ensure accuracy and relevance.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 customer support through multiple channels including email, phone, and live chat. Our dedicated account managers ensure you receive personalized attention and quick responses to your queries.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our services and processes.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-md flex gap-2">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
