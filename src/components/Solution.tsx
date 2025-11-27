import { motion } from "framer-motion";
import { Upload, Search, FileCheck, AlertCircle } from "lucide-react";

export const Solution = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Document",
      description: "Users upload a short document describing their accident, dispute, or consumer issue",
    },
    {
      icon: Search,
      title: "AI Analysis",
      description: "The AI reads it and checks against Lithuanian law datasets uploaded by our legal experts",
    },
    {
      icon: FileCheck,
      title: "Get Guidance",
      description: "Receive neutral suggestions on likely liability, your rights, and possible next steps",
    },
  ];

  return (
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Justivize <span className="text-gold">Works</span>
          </h2>
          <p className="text-xl text-gold/80 max-w-3xl mx-auto">
            Our AI assistant analyzes your case documents and provides unbiased guidance based on Lithuanian law
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/5 border-2 border-gold/30 rounded-lg p-8 text-center hover:border-gold transition-colors"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gold/20 rounded-full flex items-center justify-center">
                <step.icon className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">{step.title}</h3>
              <p className="text-primary-foreground/80">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gold/10 border-2 border-border rounded-lg p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-gold">Ethics & Transparency</h3>
              <p className="text-primary-foreground/90">
                Justivize provides information and analysis based on legal frameworks, not legal advice. 
                Our AI is designed to support decision-making while maintaining the importance of human judgment 
                and professional legal counsel when needed.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
