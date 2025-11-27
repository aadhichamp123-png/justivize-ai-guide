import { motion } from "framer-motion";
import { Shield, AlertCircle, Scale } from "lucide-react";

export const Ethics = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Ethics & <span className="text-gold">Disclaimer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">Information Only</h3>
              <p className="text-muted-foreground">Not legal advice</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">Human Oversight</h3>
              <p className="text-muted-foreground">Professional counsel recommended</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-navy/20 rounded-full flex items-center justify-center">
                <Scale className="w-10 h-10 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2 text-lg">Transparency</h3>
              <p className="text-muted-foreground">Open about limitations</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-navy text-primary-foreground border-2 border-gold/30 rounded-lg p-8"
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              <span className="font-bold text-gold">Important:</span> Justivize offers information and 
              analysis based on Lithuanian legal frameworks, <span className="font-bold">not legal advice</span>. 
              Our AI is designed to support decision-making and understanding of legal situations, but it does 
              not replace professional legal counsel.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Always consult with a qualified attorney for matters requiring legal representation. 
              Justivize maintains transparency about its capabilities and limitations, ensuring users understand 
              the role of AI as a supportive tool rather than a replacement for human legal expertise.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
