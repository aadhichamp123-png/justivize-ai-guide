import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, CheckCircle, AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Demo = () => {
  const [showResult, setShowResult] = useState(false);

  const handleUploadDemo = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-navy">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="text-gold hover:text-gold/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Try <span className="text-gold">Justivize</span>
          </h1>
          <p className="text-xl text-gold/80 max-w-2xl mx-auto">
            Upload your case document and get AI-powered legal guidance
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Upload Section */}
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-4 border-gold/30 bg-primary-foreground">
                <CardContent className="p-12 text-center">
                  <div className="w-24 h-24 mx-auto mb-8 bg-gold/20 rounded-full flex items-center justify-center">
                    <Upload className="w-12 h-12 text-gold" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-navy">Upload Your Document</h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                    PDF, DOC, or PNG files accepted. Describe your accident, dispute, or consumer issue.
                  </p>
                  <Button 
                    size="lg"
                    onClick={handleUploadDemo}
                    className="bg-navy text-primary-foreground hover:bg-navy/90 text-lg px-8 py-6"
                    disabled={showResult}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    {showResult ? "Document Uploaded" : "Try Sample Case"}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    *This is a demonstration with pre-written example output
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Results Section */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-4 border-purple bg-primary-foreground">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b-2 border-purple/20">
                      <FileText className="w-8 h-8 text-navy" />
                      <div>
                        <h3 className="font-bold text-navy text-xl">Sample Case Document</h3>
                        <p className="text-sm text-muted-foreground">Minor car accident at intersection</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gold/10 border-l-4 border-gold rounded-r-lg p-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-bold text-navy mb-2 text-lg">Analysis Based on Lithuanian Traffic Rules</h4>
                            <p className="text-foreground mb-3">
                              According to Article 11.4 of the Lithuanian Road Traffic Rules, the driver entering the intersection 
                              from a secondary road must yield to vehicles on the main road.
                            </p>
                            <p className="text-foreground">
                              <span className="font-semibold">Likely liable party:</span> Driver entering from secondary road 
                              (unless extenuating circumstances can be proven).
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple/10 border-l-4 border-purple rounded-r-lg p-6">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-6 h-6 text-purple flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-bold text-navy mb-2 text-lg">Recommended Next Steps</h4>
                            <ul className="space-y-2 text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="text-purple font-bold mt-1">•</span>
                                <span>Document the accident scene with photos and witness statements</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple font-bold mt-1">•</span>
                                <span>Contact your insurance company within 24 hours</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple font-bold mt-1">•</span>
                                <span>Obtain a police report if injuries or significant damage occurred</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-navy/5 border-l-4 border-navy rounded-r-lg p-6">
                        <h4 className="font-bold text-navy mb-2 text-lg">Evidence You May Need</h4>
                        <p className="text-foreground">
                          Traffic camera footage, dashcam recordings, witness contact information, 
                          photos of vehicle damage and road conditions, medical reports (if applicable).
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <Button 
                        variant="outline"
                        onClick={handleReset}
                        className="border-2 border-navy text-navy hover:bg-navy hover:text-primary-foreground"
                      >
                        Try Another Case
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-center text-gold/60 mt-6 text-sm">
                  This is a demonstration with static, pre-written example output. The actual product will analyze your specific documents.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Demo;
