import { useState, useEffect } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookiesAccepted", "essential");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-24 left-4 right-4 md:left-auto md:right-24 md:max-w-md z-40 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 p-5"
          data-testid="cookie-banner"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-1">We use cookies</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                We use essential and analytics cookies to improve your experience. By accepting, you agree to our{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
                and{" "}
                <Link href="/terms" className="text-primary hover:underline">Terms</Link>.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={accept}
              size="sm"
              className="flex-1 h-9 text-xs"
              data-testid="button-cookie-accept"
            >
              Accept All
            </Button>
            <Button
              onClick={decline}
              size="sm"
              variant="outline"
              className="flex-1 h-9 text-xs border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800"
              data-testid="button-cookie-decline"
            >
              Essential Only
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
