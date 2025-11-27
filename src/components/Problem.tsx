import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export const Problem = () => {
  const problems = [
    "Legal cases can be influenced by human bias, feelings and personal connections",
    "People can be pressured into 'scapegoating' and accepting blame unfairly",
    "Police and courts waste time on small accidents and disputes",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 rounded-full" />
              <Scale className="relative w-48 h-48 text-navy mx-auto" strokeWidth={1} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-2">
              Pro<span className="text-gold">blem</span>
            </h2>
            
            <div className="border-4 border-purple rounded-lg bg-gold/30 p-8 mt-8">
              <ul className="space-y-6">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-lg md:text-xl text-primary"
                  >
                    <span className="text-navy font-bold mt-1">•</span>
                    <span>{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
