import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-bg.jpg";
import logo from "@/assets/justice-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-navy/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <img src={logo} alt="Justivize Logo" className="w-32 h-32" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gold mb-6"
        >
          Justivize
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          AI support for fair everyday justice
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gold/90 mb-12 max-w-3xl mx-auto"
        >
          Upload your case file and get law-based guidance instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="bg-gold text-gold-foreground hover:bg-gold/90 text-lg px-8 py-6"
          >
            Try Demo
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-purple text-primary-foreground hover:bg-purple hover:text-accent-foreground text-lg px-8 py-6"
          >
            Join Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
