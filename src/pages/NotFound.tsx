import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The property you're looking for seems to have moved to a different address. 
            Don't worry, we'll help you find your way back to our amazing properties!
          </p>
        </div>

        {/* Property-themed illustration */}
        <div className="mb-12">
          <div className="inline-block p-8 bg-white rounded-3xl shadow-2xl border-2 border-primary/20">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-slate-700">Looking for Your Dream Home?</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[200px]">
                🏠 Back to Home
              </Button>
            </Link>
            <Link to="/properties">
              <Button 
                variant="outline" 
                className="px-8 py-4 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-300 min-w-[200px]"
              >
                🏢 View Properties
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/new-project">
              <Button 
                variant="outline" 
                className="px-8 py-4 text-lg font-bold border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-full transition-all duration-300 min-w-[200px]"
              >
                ✨ Plan M
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="px-8 py-4 text-lg font-bold border-2 border-slate-400 text-slate-600 hover:bg-slate-600 hover:text-white rounded-full transition-all duration-300 min-w-[200px]"
              >
                📞 Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-primary/20 p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Home", path: "/", icon: "🏠" },
              { name: "About", path: "/about", icon: "ℹ️" },
              { name: "Properties", path: "/properties", icon: "🏢" },
              { name: "Locations", path: "/locations", icon: "📍" },
              { name: "Articles", path: "/articles", icon: "📰" },
              { name: "Plan M", path: "/new-project", icon: "✨" },
              { name: "Contact", path: "/contact", icon: "📞" },
              { name: "Privacy", path: "/privacy-policy", icon: "🔒" }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="group p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 border border-slate-200 hover:border-primary/30"
              >
                <div className="text-2xl mb-2">{link.icon}</div>
                <div className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Need help finding what you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+918104124183" 
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors font-medium"
            >
              <span>📞</span>
              <span>+91 81041 24183</span>
            </a>
            <span className="hidden sm:block text-slate-400">|</span>
            <a 
              href="mailto:info@aaraamproperties.com" 
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors font-medium"
            >
              <span>📧</span>
              <span>info@aaraamproperties.com</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
