import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
  <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-accent-foreground/10 rounded-lg flex items-center justify-center shadow-md border border-accent-foreground/20">
                <span className="text-accent-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Araam Properties</h2>
                <p className="text-primary-foreground/80">Premium Real Estate Solutions</p>
              </div>
            </div>
            <p className="text-accent-foreground/80 mb-6 max-w-md">
              Your trusted partner in finding the perfect property. We specialize in premium 
              residential and commercial real estate across Mumbai, Navi Mumbai, and Thane.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">About Us</Link></li>
              <li><Link to="/properties" onClick={() => window.scrollTo(0, 0)} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Properties</Link></li>
              <li><Link to="/locations" onClick={() => window.scrollTo(0, 0)} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Locations</Link></li>
              <li><Link to="/articles" onClick={() => window.scrollTo(0, 0)} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Articles</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-foreground" />
                <span className="text-accent-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-foreground" />
                <span className="text-accent-foreground/80">info@araamproperties.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-foreground mt-1" />
                <span className="text-accent-foreground/80">
                  Office no. 3108, Plan S Business Park<br />
                  MIDC Industrial Area, Shiravane, Nerul<br />
                  Navi Mumbai, Maharashtra 400706
                </span>
              </div>
            </div>
          </div>
        </div>

  <div className="border-t border-accent-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-foreground/70 text-sm">
              © 2025 Araam Properties. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-accent-foreground/70 hover:text-accent-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-accent-foreground/70 hover:text-accent-foreground text-sm transition-colors">
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