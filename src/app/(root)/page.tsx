import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
