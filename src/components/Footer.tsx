import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
  <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                AA
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Aaraam Properties</h2>
            </div>
            <p className="text-sm sm:text-base text-accent-foreground/80 mb-4 sm:mb-6 max-w-md">
              Your trusted partner in finding the perfect property. We specialize in premium 
              residential and commercial real estate across Mumbai, Navi Mumbai, and Thane.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-sm sm:text-base text-accent-foreground/80 hover:text-accent-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-sm sm:text-base text-accent-foreground/80 hover:text-accent-foreground transition-colors">About Us</Link></li>
              <li><Link to="/properties" onClick={() => window.scrollTo(0, 0)} className="text-sm sm:text-base text-accent-foreground/80 hover:text-accent-foreground transition-colors">Properties</Link></li>
              <li><Link to="/locations" onClick={() => window.scrollTo(0, 0)} className="text-sm sm:text-base text-accent-foreground/80 hover:text-accent-foreground transition-colors">Locations</Link></li>
              <li><Link to="/articles" onClick={() => window.scrollTo(0, 0)} className="text-sm sm:text-base text-accent-foreground/80 hover:text-accent-foreground transition-colors">Articles</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-sm sm:text-base text-accent-foreground/80 hover:text-accent-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground flex-shrink-0" />
                <span className="text-xs sm:text-sm text-accent-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground flex-shrink-0" />
                <span className="text-xs sm:text-sm text-accent-foreground/80 break-all">info@araamproperties.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-accent-foreground/80">
                  Office no. 3108, Plan S Business Park<br />
                  MIDC Industrial Area, Shiravane, Nerul<br />
                  Navi Mumbai, Maharashtra 400706
                </span>
              </div>
            </div>
          </div>
        </div>

  <div className="border-t border-accent-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent-foreground/70 text-xs sm:text-sm text-center md:text-left">
              © 2025 Aaraam Properties. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link to="/privacy-policy" className="text-accent-foreground/70 hover:text-accent-foreground text-xs sm:text-sm transition-colors text-center">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-accent-foreground/70 hover:text-accent-foreground text-xs sm:text-sm transition-colors text-center">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;