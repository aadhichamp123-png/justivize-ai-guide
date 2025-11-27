import { motion } from "framer-motion";
import { GraduationCap, Users, Share2 } from "lucide-react";

export const Distribution = () => {
  const channels = [
    {
      number: "1",
      icon: GraduationCap,
      title: "Law Universities",
      description: "Partner with legal education institutions to introduce students to practical AI-assisted legal analysis",
    },
    {
      number: "2",
      icon: Users,
      title: "Referrals",
      description: "Build trust through word-of-mouth from satisfied users and legal professionals",
    },
    {
      number: "3",
      icon: Share2,
      title: "Social Media",
      description: "Educate citizens about their legal rights and the benefits of unbiased AI analysis",
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
            Distribution <span className="text-gold">Strategy</span>
          </h2>
          <p className="text-xl text-gold/80 max-w-2xl mx-auto">
            How we plan to reach our target audience
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 bg-primary-foreground/5 border-2 border-gold/30 rounded-lg p-6 hover:border-gold transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-2xl font-bold text-gold-foreground">
                  {channel.number}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <channel.icon className="w-8 h-8 text-gold" />
                  <h3 className="text-2xl font-bold text-gold">{channel.title}</h3>
                </div>
                <p className="text-primary-foreground/80 text-lg">{channel.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
