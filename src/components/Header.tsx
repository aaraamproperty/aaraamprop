import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
// Removed unused icon imports after simplifying header styling
// Updated to use PNG logo as requested
import araamLogo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PROPERTIES", href: "/properties" },
    { name: "PLAN M", href: "/new-project" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "ARTICLES", href: "/articles" },
    { name: "CONTACT", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-primary/10">
      {/* Dynamic Navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Brand Logo (optimized sizing & accessibility) */}
          <Link to="/" className="flex items-center group" aria-label="Aaraam Properties Home">
            <div className="relative flex items-center h-12 sm:h-12 lg:h-14">
              {/* Use picture for future WebP support (can add a .webp later) */}
              <picture>
                {/* <source srcSet={logoWebp} type="image/webp" /> */}
                <img
                  src={araamLogo}
                  alt="Aaraam Properties Logo"
                  width={200}
                  height={100}
                  decoding="async"
                  fetchPriority="high"
                  draggable="false"
                  className="h-full w-auto max-h-12 sm:max-h-12 lg:max-h-16 object-contain select-none drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </picture>
            </div>
          </Link>

          {/* Dynamic Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 lg:px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-xl group ${
                  isActive(item.href) 
                    ? "text-white bg-gradient-to-r from-primary to-accent shadow-lg border-0"
                    : "text-slate-700 hover:text-primary hover:bg-primary/10"
                }`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl opacity-50"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Dynamic CTA Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919876543210">
              <Button className="relative px-4 lg:px-6 py-2 lg:py-3 text-sm font-bold shadow-2xl transition-all duration-300 rounded-full group overflow-hidden border bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white border-transparent hover:shadow-accent/25">
                <span className="relative z-10">Book Site Visit</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </Button>
            </a>
          </div>

          {/* Dynamic Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 border bg-slate-100 hover:bg-primary hover:text-white border-slate-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <span className={`absolute block h-0.5 w-5 sm:w-6 bg-slate-700 drop-shadow-lg transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2.5 sm:top-3' : 'top-1'}`}></span>
              <span className={`absolute block h-0.5 w-5 sm:w-6 bg-slate-700 drop-shadow-lg transform transition-all duration-300 top-2.5 sm:top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block h-0.5 w-5 sm:w-6 bg-slate-700 drop-shadow-lg transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2.5 sm:top-3' : 'top-4 sm:top-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Dynamic Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 sm:py-6 rounded-xl sm:rounded-2xl mt-3 sm:mt-4 border bg-white/95 backdrop-blur-xl border-slate-200">
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold transition-all duration-300 rounded-lg sm:rounded-xl mx-3 sm:mx-4 ${isActive(item.href) ? 'text-white bg-gradient-to-r from-primary to-accent shadow-lg' : 'text-slate-700 hover:text-primary hover:bg-primary/10'}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="px-3 sm:px-4 pt-3 sm:pt-4">
                <a href="tel:+919876543210" className="block">
                  <Button className="w-full py-3 sm:py-4 text-sm sm:text-base font-bold shadow-xl rounded-full border bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white border-transparent">
                    <span>Book Site Visit</span>
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;