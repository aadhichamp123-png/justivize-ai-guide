import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { UseCases } from "@/components/UseCases";
import { DemoSection } from "@/components/DemoSection";
import { Market } from "@/components/Market";
import { Testimonials } from "@/components/Testimonials";
import { SurveyInsights } from "@/components/SurveyInsights";
import { Distribution } from "@/components/Distribution";
import { Ethics } from "@/components/Ethics";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <UseCases />
      <DemoSection />
      <Market />
      <Testimonials />
      <SurveyInsights />
      <Distribution />
      <Ethics />
      <Footer />
    </div>
  );
};

export default Index;
