import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is Justivize?",
      answer: "Justivize is an AI-powered legal assistant that helps people in Lithuania understand their rights by analyzing case documents related to traffic accidents, consumer protection issues, and small disputes. It provides unbiased guidance based on Lithuanian law.",
    },
    {
      question: "Is Justivize a replacement for a lawyer?",
      answer: "No. Justivize provides information and analysis based on legal frameworks, not legal advice. While our AI can help you understand your situation and rights, it does not replace professional legal counsel. Always consult with a qualified attorney for matters requiring legal representation.",
    },
    {
      question: "What types of cases does Justivize support?",
      answer: "Justivize currently supports three main categories: traffic accidents (liability and insurance claims), consumer protection disputes (faulty products, service issues), and small civil disputes (neighbor conflicts, minor property issues, contract disagreements).",
    },
    {
      question: "How does Justivize work?",
      answer: "Simply upload a document describing your case (accident report, dispute details, or consumer issue). Our AI analyzes it against Lithuanian law datasets and provides neutral suggestions on likely liability, your rights, and possible next steps.",
    },
    {
      question: "What file formats can I upload?",
      answer: "Justivize accepts PDF, DOC, DOCX, and PNG file formats. You can upload accident reports, written case descriptions, photos of documents, or any relevant paperwork related to your case.",
    },
    {
      question: "Is my information secure and private?",
      answer: "Yes. We take data security seriously. All uploaded documents are encrypted and processed securely. We follow strict privacy protocols and do not share your information with third parties without your explicit consent.",
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI is trained on Lithuanian legal frameworks and regularly updated by legal experts. While it provides reliable information based on current laws, legal situations can be complex and outcomes may vary based on specific circumstances. This is why we always recommend consulting a qualified attorney for important legal matters.",
    },
    {
      question: "How much does Justivize cost?",
      answer: "We're currently in development and building our waitlist. Join our waitlist to be notified when we launch and to receive information about pricing plans.",
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
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="text-xl text-gold/80 max-w-2xl mx-auto">
            Everything you need to know about Justivize
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-primary-foreground/5 border-2 border-gold/30 rounded-lg px-6 data-[state=open]:border-gold"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gold hover:text-gold/80 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground/90 text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
