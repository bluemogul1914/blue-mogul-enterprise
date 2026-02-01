import { Link, useLocation } from "wouter";
import { Menu, X, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary rounded-lg text-white group-hover:bg-blue-700 transition-colors">
            <Shield className="h-6 w-6" />
          </div>
          <span className={cn(
            "text-xl font-display font-bold tracking-tight",
            scrolled ? "text-slate-900" : "text-slate-900 lg:text-slate-900"
          )}>
            Blue Mogul
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href
                  ? "text-primary font-semibold"
                  : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/client-portal">
            <Button className="font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30">
              Client Portal
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50",
                  location === item.href
                    ? "text-primary bg-primary/5"
                    : "text-slate-600"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/client-portal" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Client Portal</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
