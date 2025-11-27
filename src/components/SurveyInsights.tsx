import { motion } from "framer-motion";
import { TrendingUp, AlertCircle, ThumbsUp } from "lucide-react";

export const SurveyInsights = () => {
  const insights = [
    {
      icon: ThumbsUp,
      label: "Mostly fair",
      value: "46.7%",
      color: "bg-gold",
    },
    {
      icon: AlertCircle,
      label: "Sometimes biased",
      value: "46.7%",
      color: "bg-navy",
    },
    {
      icon: TrendingUp,
      label: "Often biased",
      value: "6.7%",
      color: "bg-purple",
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
            Survey <span className="text-gold">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How fair do you believe current court decisions are?
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto border-2 border-border rounded-lg p-8 md:p-12 bg-card">
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-32 h-32 mx-auto mb-4 ${insight.color} rounded-full flex items-center justify-center`}>
                  <insight.icon className="w-16 h-16 text-primary-foreground" />
                </div>
                <h3 className="text-4xl font-bold text-navy mb-2">{insight.value}</h3>
                <p className="text-lg text-foreground">{insight.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground text-lg">
              Over half of respondents expressed concerns about potential bias in legal decisions, 
              highlighting the need for objective, AI-assisted analysis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
