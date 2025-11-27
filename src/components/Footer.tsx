import logo from "@/assets/justice-logo.png";
import { Scale } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Justivize" className="w-16 h-16" />
            <div>
              <h3 className="text-2xl font-bold text-gold">Justivize</h3>
              <p className="text-sm text-primary-foreground/70">AI support for fair everyday justice</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
              About
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
              How It Works
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
              Use Cases
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Justivize. Information only, not legal advice. Consult a qualified attorney for legal matters.
          </p>
        </div>
      </div>
    </footer>
  );
};
