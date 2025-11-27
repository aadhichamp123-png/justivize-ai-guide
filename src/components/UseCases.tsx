import { motion } from "framer-motion";
import { Car, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const UseCases = () => {
  const cases = [
    {
      icon: Car,
      title: "Traffic Accidents",
      description: "Get clarity on liability, insurance claims, and required documentation for traffic incidents",
      color: "from-gold/20 to-gold/5",
    },
    {
      icon: ShoppingCart,
      title: "Consumer Protection",
      description: "Understand your rights in disputes with retailers, service providers, and faulty products",
      color: "from-purple/20 to-purple/5",
    },
    {
      icon: Users,
      title: "Small Civil Disputes",
      description: "Navigate neighbor conflicts, contract disagreements, and minor property issues",
      color: "from-gold/20 to-purple/5",
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
            Use <span className="text-gold">Cases</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Justivize supports various types of legal situations requiring quick, unbiased analysis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-purple/30 hover:border-purple hover:shadow-xl transition-all overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${useCase.color}`} />
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 bg-navy/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-navy">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
