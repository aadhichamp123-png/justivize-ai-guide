import { Hero } from "@/components/Hero";
import { Solution } from "@/components/Solution";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";
import { Ethics } from "@/components/Ethics";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Solution />
      <UseCases />
      <Testimonials />
      <Ethics />
      <Footer />
    </div>
  );
};

export default Index;
