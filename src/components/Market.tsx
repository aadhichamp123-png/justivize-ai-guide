import { motion } from "framer-motion";
import { Users, Building2, GraduationCap } from "lucide-react";

export const Market = () => {
  const markets = [
    {
      icon: Users,
      title: "Lithuanian Citizens",
      description: "Everyday people dealing with traffic accidents, consumer disputes, and small legal matters",
    },
    {
      icon: Building2,
      title: "Courts & Law Institutions",
      description: "Legal organizations looking to streamline case intake and provide preliminary guidance",
    },
    {
      icon: GraduationCap,
      title: "Law Students",
      description: "Students learning practical application of legal principles through real-world scenarios",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Market <span className="text-gold">Research</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-navy text-primary-foreground rounded-lg p-8 hover:scale-105 transition-transform"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
              }}
            >
              <market.icon className="w-12 h-12 text-gold mb-6" />
              <h3 className="text-2xl font-bold mb-3">{market.title}</h3>
              <p className="text-primary-foreground/80">{market.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="border-4 border-purple rounded-lg overflow-hidden max-w-md">
            <div className="bg-gold p-4">
              <div className="w-32 h-32 mx-auto bg-navy/10 rounded-full flex items-center justify-center">
                <Users className="w-16 h-16 text-navy" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
