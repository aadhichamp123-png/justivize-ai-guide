import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Aleksandras Selezniovas",
      title: "Law Expert, 30+ years experience",
      quote: "This idea has great potential but it will never replace the judge",
      highlight: false,
    },
    {
      name: "Justina Lukšaitė",
      title: "Legal Professional",
      quote: "I can't see this working out in higher courts but small claims, that's another story",
      highlight: true,
    },
  ];

  return (
    <section className="py-20 bg-gold/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Expert lawyers <span className="text-gold">behind us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-navy text-primary-foreground border-4 ${
                testimonial.highlight ? 'border-purple' : 'border-transparent'
              } rounded-3xl`}>
                <CardContent className="p-8 md:p-10">
                  <Quote className="w-10 h-10 text-gold mb-6" />
                  <div className={`${testimonial.highlight ? 'border-4 border-purple' : ''} rounded-lg p-6 mb-6`}>
                    <p className="text-gold text-lg md:text-xl italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="font-bold text-xl text-primary-foreground">{testimonial.name}</p>
                    <p className="text-gold/80">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
