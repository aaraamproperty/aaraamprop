import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCard from "@/components/PropertyCard";
import EMICalculator from "@/components/EMICalculator";
import BudgetCalculator from "@/components/BudgetCalculator";
import ScrollToTop from "@/components/ScrollToTop";
import { 
  Search, Shield, Award, Users, ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, 
  Calculator, TrendingUp, Clock, Zap, Target, Trophy, FileText, Video, Play, 
  BarChart3, Home as HomeIcon, Car, Wifi, Dumbbell, Trees, Camera, Building2,
  Waves, Baby, Heart, Sun, Moon, Coffee, ChevronDown, ChevronUp, Quote, Key
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-property.jpg";
import villaImage from "@/assets/villa-property.jpg";
import rowhouseImage from "@/assets/rowhouse-property.jpg";
import plotImage from "@/assets/plot-property.jpg";
import officeImage from "@/assets/office-building.jpg";
import araamLogo from "@/assets/logo.svg";

const Home = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const featuredProperties = [
    {
      id: "1",
      title: "Luxury Villa in Navi Mumbai",
      price: "₹3.5 Cr",
      location: "Kharghar, Navi Mumbai",
      bedrooms: 4,
      bathrooms: 3,
      area: "2500 sq ft",
      type: "Villa",
      status: "Available" as const,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop&crop=entropy",
      featured: true,
    },
    {
      id: "2",
      title: "Modern Row House",
      price: "₹2.8 Cr",
      location: "Panvel, Navi Mumbai",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000 sq ft",
      type: "Row House",
      status: "Available" as const,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy",
    },
    {
      id: "3",
      title: "Premium Plot",
      price: "₹85 Lakh",
      location: "Thane West",
      area: "1200 sq ft",
      type: "Plot",
      status: "Available" as const,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&crop=entropy",
    },
  ];

  // Enhanced listings data for the carousel
  const allListings = [
    {
      id: "carousel-1",
      title: "Modern 4-Bedroom Villa in Bandra",
      price: "₹4.5 Cr",
      location: "Bandra West, Mumbai",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&crop=entropy",
      specs: "4 Beds | 3 Baths | 3,200 Sq. Ft.",
      badges: [
        { text: "Hot", color: "bg-red-500" },
        { text: "Price: ₹4.5 Cr", bg: "bg-black/50 backdrop-blur-sm" },
        { text: "Place: Bandra, Mumbai", bg: "bg-black/50 backdrop-blur-sm" }
      ]
    },
    {
      id: "carousel-2", 
      title: "Commercial Spaces",
      price: "₹2.8 Cr",
      location: "Business District, Mumbai",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy",
      specs: "Functional, Inspiring Environments For Businesses To Thrive",
      badges: [
        { text: "Commercial", color: "bg-blue-500" },
        { text: "Ready to Move", bg: "bg-black/50 backdrop-blur-sm" }
      ]
    },
    {
      id: "carousel-3",
      title: "Interior Architecture",
      price: "₹3.2 Cr", 
      location: "Andheri East, Mumbai",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&crop=entropy",
      specs: "Seamlessly Integrating Form And Function",
      badges: [
        { text: "Luxury", color: "bg-purple-500" },
        { text: "Premium Design", bg: "bg-black/50 backdrop-blur-sm" }
      ]
    },
    {
      id: "carousel-4",
      title: "Luxury Villa in Navi Mumbai",
      price: "₹3.5 Cr",
      location: "Kharghar, Navi Mumbai", 
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop&crop=entropy",
      specs: "4 Beds | 3 Baths | 2500 Sq. Ft.",
      badges: [
        { text: "Villa", color: "bg-green-500" },
        { text: "Garden View", bg: "bg-black/50 backdrop-blur-sm" }
      ]
    },
    {
      id: "carousel-5",
      title: "Premium Penthouse",
      price: "₹6.8 Cr",
      location: "Worli, Mumbai",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy",
      specs: "5 Beds | 4 Baths | 4500 Sq. Ft.",
      badges: [
        { text: "Penthouse", color: "bg-yellow-500" },
        { text: "Sea View", bg: "bg-black/50 backdrop-blur-sm" }
      ]
    },
    {
      id: "carousel-6",
      title: "Modern Row House",
      price: "₹2.8 Cr", 
      location: "Panvel, Navi Mumbai",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy",
      specs: "3 Beds | 2 Baths | 2000 Sq. Ft.",
      badges: [
        { text: "Row House", color: "bg-indigo-500" },
        { text: "Gated Community", bg: "bg-black/50 backdrop-blur-sm" }
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Business Owner",
      location: "Navi Mumbai",
      rating: 5,
      content: "Aaraam Properties made our home buying journey incredibly smooth. Their team was professional, transparent, and helped us find the perfect villa in Kharghar. The legal verification process was thorough, and they assisted us till the very end.",
      image: "/api/placeholder/80/80",
      purchaseYear: "2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Software Engineer",
      location: "Mumbai",
      rating: 5,
      content: "Exceptional service from start to finish! They understood our requirements perfectly and found us a great apartment in Andheri. The home loan process was seamless with their banking partners. Highly recommended!",
      image: "/api/placeholder/80/80",
      purchaseYear: "2023"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Marketing Manager",
      location: "Thane",
      rating: 5,
      content: "Professional team with deep market knowledge. They helped us invest in a commercial property with excellent ROI potential. Their market insights and transparent dealings make them stand out in the industry.",
      image: "/api/placeholder/80/80",
      purchaseYear: "2024"
    },
    {
      id: 4,
      name: "Sneha Desai",
      role: "Doctor",
      location: "Panvel",
      rating: 5,
      content: "Found my dream home within budget! The team was patient with our numerous site visits and always available for queries. The legal formalities were handled efficiently. Great experience overall.",
      image: "/api/placeholder/80/80",
      purchaseYear: "2023"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Entrepreneur",
      location: "CBD Belapur",
      rating: 5,
      content: "Aaraam Properties exceeded our expectations. Their attention to detail, market expertise, and customer service is outstanding. They helped us get the best deal for our office space purchase.",
      image: "/api/placeholder/80/80",
      purchaseYear: "2024"
    }
  ];

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === allListings.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [allListings.length]);

  // Pause auto-slide on hover
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-slide functionality for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Auto-slide functionality for carousel with pause on hover
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === allListings.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [allListings.length, isPaused]);

  // FAQ toggle function
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Contact form handlers
  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted:", contactForm);
    
    // Reset form after submission
    setContactForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
    
    // Show success message (you can implement toast/notification here)
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev === allListings.length - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev === 0 ? allListings.length - 1 : prev - 1));
    }
  };

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Complete 24/7 Security",
      description: "Round-the-clock security with modern surveillance systems for complete peace of mind.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Smart Home Design",
      description: "Modern architecture with smart home features and contemporary design elements.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Beautiful Scene Around",
      description: "Properties located in scenic locations with beautiful landscapes and greenery.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Exceptional Lifestyle",
      description: "Premium amenities and facilities for an exceptional living experience.",
    },
  ];

  const locations = [
    { name: "Navi Mumbai", properties: "150+ Properties", image: heroImage, route: "/properties#navi-mumbai" },
    { name: "Mumbai", properties: "200+ Properties", image: officeImage, route: "/properties#mumbai" },
    { name: "Thane", properties: "120+ Properties", image: villaImage, route: "/properties#thane" },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "470+", label: "Properties Sold" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Awards Won" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Choose Property",
      description: "Browse through our extensive collection of premium properties across Mumbai, Navi Mumbai, and Thane.",
      icon: <Search className="h-8 w-8" />
    },
    {
      step: "02", 
      title: "Site Visit",
      description: "Schedule a guided site visit with our expert team to explore the property and surrounding amenities.",
      icon: <MapPin className="h-8 w-8" />
    },
    {
      step: "03",
      title: "Documentation",
      description: "Complete all legal documentation with our assistance for a smooth and hassle-free property transaction.",
      icon: <FileText className="h-8 w-8" />
    },
    {
      step: "04",
      title: "Get Keys",
      description: "Receive your property keys and start your new journey in your dream home with complete satisfaction.",
      icon: <Key className="h-8 w-8" />
    }
  ];

  const whyChooseUs = [
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Wide Range of Properties",
      description: "From budget apartments to luxury villas across Mumbai, Navi Mumbai & Thane."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trusted by Thousands",
      description: "High client satisfaction with 500+ happy families and growing community trust."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Best Market Prices",
      description: "No hidden costs with transparent deals and competitive pricing in the market."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Fast & Secure Process",
      description: "Smooth transactions from start to finish with verified legal documentation."
    }
  ];

  const propertyFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance and trained guards"
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Covered Parking",
      description: "Dedicated parking spaces with weather protection for every unit"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "High-Speed Internet",
      description: "Fiber optic connectivity for seamless work from home experience"
    },
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Modern Gym",
      description: "Fully equipped fitness center with latest exercise equipment"
    },
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Swimming Pool",
      description: "Resort-style swimming pool with separate kids and adult areas"
    },
    {
      icon: <Trees className="h-6 w-6" />,
      title: "Landscaped Gardens",
      description: "Beautiful green spaces with walking paths and seating areas"
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Children's Play Area",
      description: "Safe and fun playground designed for kids of all ages"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Club House",
      description: "Community center for events, meetings, and social gatherings"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Power Backup",
      description: "Uninterrupted power supply with diesel generator backup"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "CCTV Monitoring",
      description: "Advanced surveillance system covering all common areas"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Cafeteria",
      description: "On-site dining options and convenience store for residents"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Healthcare Center",
      description: "Medical facility with qualified staff for emergency care"
    }
  ];

  const partners = [
    "HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Kotak Mahindra", "LIC Housing"
  ];

  const faqs = [
    {
      question: "What documents are required for property registration?",
      answer: "You'll need Aadhaar card, PAN card, passport-size photos, income proof (salary slips/ITR), bank statements for last 6 months, and property-related documents. Our expert team will provide a complete checklist and assist you throughout the documentation process to ensure everything is in order."
    },
    {
      question: "How long does the property buying process take?",
      answer: "The complete property buying process typically takes 45-60 days from agreement signing to final registration. This includes home loan approval (20-30 days), legal verification (7-10 days), and registration formalities (2-3 days). We ensure a smooth and timely process with regular updates."
    },
    {
      question: "Do you provide home loan assistance and what are the rates?",
      answer: "Yes, we have partnerships with 15+ leading banks including HDFC, ICICI, SBI, and Axis Bank. We provide complete home loan assistance including pre-approval, documentation, and processing. Current rates start from 8.5% onwards, and we help you get the best rates based on your profile."
    },
    {
      question: "What are the additional costs involved in property purchase?",
      answer: "Additional costs include stamp duty (5-6% of property value), registration fees (1%), legal charges (₹15,000-25,000), home loan processing fees (0.5-1%), and brokerage charges. We provide a transparent cost breakdown upfront so there are no surprises later."
    },
    {
      question: "Is the property legally verified and what about RERA compliance?",
      answer: "All our properties undergo rigorous legal verification including title clearance, RERA compliance check, and approval verification. We provide complete legal due diligence reports and ensure all properties have clear titles and necessary approvals from local authorities."
    },
    {
      question: "What is your after-sales support and property maintenance service?",
      answer: "We provide comprehensive after-sales support including property handover assistance, connection of utilities, and ongoing maintenance services. Our dedicated support team is available 24/7 for any property-related queries even after the purchase is complete."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Background Video */}
      <section className="relative min-h-screen h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={heroImage}
          >
            <source src="/videos/hero-property.mp4" type="video/mp4" />
            <source src="/videos/hero-property.webm" type="video/webm" />
            {/* Fallback image for browsers that block autoplay */}
            <img 
              src={heroImage}
              alt="Luxury property exterior showcasing modern architecture and premium amenities - Aaraam Properties featured development"
              className="w-full h-full object-cover"
            />
          </video>
          
          {/* Dark overlay for better text readability and WCAG AA compliance */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Additional animated background elements for depth */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
            <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-primary/25 to-accent/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }}></div>
          </div>
        </div>

        {/* Main Content - positioned above video with proper z-index */}
        <div className="relative z-10 h-full flex items-start pt-24 sm:pt-28 md:pt-24 lg:items-center lg:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center h-full py-6 sm:py-10 lg:py-20">
              
              {/* Left Side - Content */}
              <div className="space-y-3 sm:space-y-5 lg:space-y-8 text-center lg:text-left mt-4 sm:mt-6">
                {/* Trust Badge - Enhanced for accessibility */}
               
                {/* Main Heading - Improved contrast */}
                <div className="space-y-2 sm:space-y-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <span className="text-white block drop-shadow-2xl">Your Dream</span>
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x block drop-shadow-lg">
                      Property Awaits
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-white/90 max-w-2xl leading-relaxed drop-shadow-lg px-4 sm:px-0">
                    Experience luxury living with premium properties across Mumbai, Navi Mumbai & Thane. 
                    Where your aspirations meet reality.
                  </p>
                </div>

                {/* Unified CTA Buttons - Same height and styling */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start animate-fade-in px-4 sm:px-0" style={{ animationDelay: "0.4s" }}>
                  <Link to="/properties" className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 shadow-2xl hover:shadow-primary/25 focus:ring-4 focus:ring-primary/30 group rounded-full border-0"
                    >
                      <Search className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                      Explore Properties
                      <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 backdrop-blur-md transition-all duration-500 shadow-2xl hover:shadow-white/25 focus:ring-4 focus:ring-white/30 rounded-full"
                    >
                      <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                      Book Site Visit
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators - Updated copy and improved spacing */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 drop-shadow-lg">2000+</div>
                    <div className="text-xs sm:text-sm text-white/80 drop-shadow">Happy Families</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 drop-shadow-lg">₹500 Cr+</div>
                    <div className="text-xs sm:text-sm text-white/80 drop-shadow">Worth Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 drop-shadow-lg">15+</div>
                    <div className="text-xs sm:text-sm text-white/80 drop-shadow">Years of Trust</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Interactive Property Showcase */}
              <div className="relative lg:pl-8 xl:pl-12 mt-8 lg:mt-0">
                <div className="relative">
                  {/* Main Featured Property */}
                  <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-700 animate-fade-in" style={{ animationDelay: "1s" }}>
                    <img 
                      src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop&crop=entropy"
                      alt="Featured luxury villa in Kharghar with modern architecture and premium amenities"
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Property Info Overlay - Enhanced for readability */}
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-white">
                      <Badge className="mb-2 sm:mb-3 bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg">
                        Featured Property
                      </Badge>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 drop-shadow-lg text-white">Luxury Villa in Kharghar</h3>
                      <p className="text-white/90 mb-3 sm:mb-4 text-sm sm:text-base drop-shadow">4 BHK • 2500 Sq.Ft • Premium Location</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                        <div>
                          <span className="text-xs sm:text-sm text-white/80 drop-shadow">Starting from</span>
                          <div className="text-2xl sm:text-3xl font-bold text-primary drop-shadow-lg">₹3.5 Cr</div>
                        </div>
                        <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-300 text-sm sm:text-base">
                          <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Virtual Tour
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Cards - Enhanced visibility */}
                  <div className="hidden lg:block absolute -top-6 xl:-top-8 -right-6 xl:-right-8 animate-fade-in animate-float" style={{ animationDelay: "1.2s" }}>
                    <Card className="bg-white backdrop-blur-md border-2 border-white/20 shadow-2xl hover:shadow-3xl transition-all w-44 xl:w-48">
                      <CardContent className="p-3 xl:p-4">
                        <div className="flex items-center gap-2 xl:gap-3">
                          <div className="h-10 w-10 xl:h-12 xl:w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle className="h-5 w-5 xl:h-6 xl:w-6 text-white drop-shadow" />
                          </div>
                          <div>
                            <div className="text-base xl:text-lg font-bold text-gray-900 drop-shadow-sm">RERA</div>
                            <div className="text-xs text-gray-600 font-medium">Approved Projects</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden lg:block absolute -bottom-6 xl:-bottom-8 -left-6 xl:-left-8 animate-fade-in animate-float" style={{ animationDelay: "1.4s" }}>
                    <Card className="bg-white backdrop-blur-md border-2 border-white/20 shadow-2xl hover:shadow-3xl transition-all w-44 xl:w-48">
                      <CardContent className="p-3 xl:p-4">
                        <div className="flex items-center gap-2 xl:gap-3">
                          <div className="h-10 w-10 xl:h-12 xl:w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <Shield className="h-5 w-5 xl:h-6 xl:w-6 text-white drop-shadow" />
                          </div>
                          <div>
                            <div className="text-base xl:text-lg font-bold text-gray-900 drop-shadow-sm">100%</div>
                            <div className="text-xs text-gray-600 font-medium">Legal Verified</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Decorative Elements */}
                  <div className="hidden lg:block absolute top-1/2 -right-8 xl:-right-12 w-20 h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg 
            viewBox="0 0 1200 120" 
            className="relative block w-full h-8 sm:h-10 md:h-12 lg:h-14 fill-background"
            preserveAspectRatio="none"
          >
            <path d="M0,0V120H1200V0C1200,0 600,120 0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="pt-32 lg:pt-36 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Your Trusted Partner in{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Real Estate
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Exclusive listings, competitive prices, and expert guidance—all in one place.
                </p>
              </div>
              
              {/* Interior Design Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cmVhbCxlc3RhdGUsb2ZmaWNlLHRlYW18fHx8fDE2ODM1MzI4NTY&ixlib=rb-4.0.3&q=80&w=800" 
                  alt="Real estate office team consultation" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            {/* Right Content - Property Images Grid */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlsbGEsZXh0ZXJpb3IsaG91c2V8fHx8fDE2ODM1MzI4NTY&ixlib=rb-4.0.3&q=80&w=800" 
                    alt="Modern villa exterior" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bHV4dXJ5LGFwYXJ0bWVudCx8fHx8fDE2ODM1MzI4NTY&ixlib=rb-4.0.3&q=80&w=800" 
                    alt="Luxury apartment" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              
              {/* About Us Section */}
              <div className="bg-muted/50 rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">About Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    At Aaraam Properties, we believe that finding your dream home should be an exciting and seamless journey. With 15+ years of experience, we have helped thousands of buyers, sellers, and investors navigate the dynamic Mumbai real estate market.
                  </p>
                  <p>
                    Whether you're looking for a cozy apartment, a luxury villa, or a prime commercial space, our team is committed to providing expert guidance and personalized service every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties - Enhanced Carousel Design */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-4 carousel-slide-in">
                Explore Our Best Listings
              </h2>
              <p className="text-xl text-muted-foreground">
                ({allListings.length}) Premium Properties
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <div className="hidden md:flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary transition-all carousel-transition"
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? allListings.length - 1 : prev - 1))}
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary transition-all carousel-transition"
                onClick={() => setCurrentSlide((prev) => (prev === allListings.length - 1 ? 0 : prev + 1))}
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Enhanced Carousel Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex carousel-transition carousel-slider-animate"
              style={{ 
                transform: `translateX(-${currentSlide * 25}%)`,
                width: `${allListings.length * 25}%`,
                opacity: 1
              }}
            >
              {allListings.map((property, index) => {
                const isCenter = index === currentSlide + 1;
                const isVisible = index >= currentSlide && index <= currentSlide + 3;
                
                return (
                  <div
                    key={property.id}
                    className={`
                      flex-shrink-0 px-6 carousel-card-slide
                      ${isCenter ? 'z-30' : isVisible ? 'z-20' : 'z-10'}
                    `}
                    style={{ 
                      width: `${100 / 4}%`,
                      filter: isCenter ? 'brightness(1.05) saturate(1.15)' : isVisible ? 'brightness(0.9) saturate(1)' : 'brightness(0.7) saturate(0.8)',
                      opacity: isVisible ? 1 : 0.4,
                      transform: isCenter ? 'scale(1.02)' : isVisible ? 'scale(0.98)' : 'scale(0.95)'
                    }}
                  >
                    <Card className={`
                      group overflow-hidden border-0 transition-all duration-700 rounded-3xl
                      ${isCenter 
                        ? 'shadow-3xl hover:shadow-4xl carousel-card-center' 
                        : 'shadow-xl hover:shadow-2xl'
                      }
                    `}>
                      <div className={`
                        relative overflow-hidden carousel-transition h-80
                      `}>
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-800 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        {/* Property Tags */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          {property.badges?.map((badge, badgeIndex) => (
                            <Badge 
                              key={badgeIndex}
                              className={`
                                ${badge.color} text-white text-xs px-3 py-1 rounded-full 
                                ${badge.bg ? badge.bg : 'bg-black/50 backdrop-blur-sm'}
                                ${isCenter ? 'property-badge-shimmer' : ''}
                                transition-all duration-300
                              `}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </div>

                        {/* Floating Action Button */}
                        <div className={`
                          absolute top-4 right-4 transition-all duration-600 ease-in-out
                          ${isCenter ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'}
                        `}>
                          <Button 
                            size="icon" 
                            className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110 transition-all duration-300 ease-out"
                            asChild
                          >
                            <Link to={`/property/${property.id}`}>
                              <ArrowRight className="h-4 w-4 text-white" />
                            </Link>
                          </Button>
                        </div>
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="h-4 w-4 text-white" />
                            <span className="text-sm text-white/95 font-medium">{property.location}</span>
                          </div>
                          <h3 className="font-bold mb-2 transition-all duration-400 ease-out text-2xl text-white drop-shadow-lg">
                            {property.title}
                          </h3>
                          {property.specs && (
                            <p className="text-white/95 mb-3 transition-all duration-400 ease-out text-sm font-medium drop-shadow-md">
                              {property.specs}
                            </p>
                          )}
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-white/95 text-sm font-medium">Starting from</p>
                              <p className="font-bold text-white transition-all duration-400 ease-out text-2xl drop-shadow-lg">
                                {property.price}
                              </p>
                            </div>
                            {isCenter && (
                              <Button 
                                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
                                asChild
                              >
                                <Link to={`/property/${property.id}`}>
                                  View Details
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>

                        {/* Overlay effects for center card */}
                        {isCenter && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-50" />
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary animate-pulse" />
                          </>
                        )}
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Progress Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {allListings.map((_, index) => (
              <button
                key={index}
                className={`
                  h-3 rounded-full transition-all duration-600 ease-out hover:scale-110
                  ${index === currentSlide
                    ? 'w-12 bg-primary shadow-lg transform scale-110' 
                    : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }
                `}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* View All Properties Button */}
          <div className="text-center mt-16">
            <Link to="/properties">
              <Button size="lg" className="px-12 py-4 text-lg group hover:scale-105 transition-all rounded-full shadow-xl">
                View All Properties
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-center">Our Locations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We operate in prime locations across Mumbai Metropolitan Region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Link key={index} to={location.route} className="block">
                <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-1 text-white">{location.name}</h3>
                      <p className="text-white">{location.properties}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-32 lg:pt-36 pb-20 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              The Leading Real Estate<br />Marketplace in Country
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Over 30,000+ people work for us in more than 70 countries all over the. 
              This breadth of global coverage, combined with specialist services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-center">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple and transparent process to find and purchase your dream property
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Updated Layout */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Aaraam Properties?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience excellence in real estate with our proven track record and customer-first approach
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Property Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bHV4dXJ5LHByb3BlcnR5LGhvdXNlfHx8fHwxNjgzNTMyODU2&ixlib=rb-4.0.3&q=80&w=800" 
                  alt="Modern Luxury Property"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">24/7 Expert Support</h4>
                      <p className="text-sm text-muted-foreground">Always here when you need us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - 2x2 Grid of Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Premium Property Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience luxury living with world-class amenities and facilities designed for your comfort and convenience
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {propertyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Property Showcase */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Image */}
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJlbWl1bSxhcGFydG1lbnQsZmVhdHVyZXN8fHx8fDE2ODM1MzI4NTY&ixlib=rb-4.0.3&q=80&w=800" 
                  alt="Premium Property Features"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-bold text-lg text-foreground mb-1">Modern Living Spaces</h4>
                    <p className="text-muted-foreground text-sm">Thoughtfully designed for contemporary lifestyle</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                    Premium Amenities
                  </Badge>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Luxury Redefined with Every Detail
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our properties feature state-of-the-art amenities and facilities that enhance your 
                    daily living experience. From modern fitness centers to serene landscaped gardens, 
                    every aspect is designed with your comfort in mind.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">20+</div>
                    <div className="text-sm text-muted-foreground">Premium Amenities</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Security & Support</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Power Backup</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">5★</div>
                    <div className="text-sm text-muted-foreground">Rated Facilities</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link to="/properties">
                    <Button className="flex-1 lg:flex-none">
                      Explore Properties
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1 lg:flex-none">
                    <Video className="mr-2 h-4 w-4" />
                    Virtual Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMI & Budget Calculator Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-center">Financial Calculators</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plan your property purchase with our comprehensive financial planning tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <EMICalculator />
            <BudgetCalculator />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-center">Our Banking Partners</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading financial institutions for seamless home loan processing
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-lg font-semibold text-muted-foreground">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Got Questions?
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about the property buying process and our services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className={`
                    p-2 rounded-full bg-primary/10 text-primary transition-all duration-300
                    ${openFAQ === index ? 'rotate-180 bg-primary text-white' : ''}
                  `}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>
                
                <div className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-muted/30 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our expert team is here to help you with personalized guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918104124183">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now: +91 81041 24183
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Our Experts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced Layout */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Customer Stories
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from over 500+ satisfied customers who found their dream homes with us
            </p>
          </div>
          
          <div className="relative">
            {/* Main Featured Testimonial */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <Quote className="h-12 w-12 text-primary/20 mr-4" />
                    <div className="flex items-center">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl text-foreground leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-xl">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        Property purchased in {testimonials[currentTestimonial].purchaseYear}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image/Visual Side */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFwcHksY3VzdG9tZXIscHJvcGVydHl8fHx8fDE2ODM1MzI4NTY&ixlib=rb-4.0.3&q=80&w=800" 
                      alt="Happy Customer Property"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent"></div>
                    
                    {/* Floating Stats */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">500+</div>
                            <div className="text-xs text-muted-foreground">Happy Clients</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">4.9</div>
                            <div className="text-xs text-muted-foreground">Rating</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">15+</div>
                            <div className="text-xs text-muted-foreground">Years</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center items-center gap-4 mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`
                    h-3 rounded-full transition-all duration-300
                    ${index === currentTestimonial 
                      ? 'w-12 bg-primary' 
                      : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                    }
                  `}
                />
              ))}
            </div>

            {/* Secondary Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    "{testimonial.content.substring(0, 120)}..."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <div className="bg-primary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Join Our Happy Customers
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Ready to find your dream property? Our expert team is here to make your property buying journey as smooth as possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/properties">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Search className="h-5 w-5 mr-2" />
                      Find Your Dream Home
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <Phone className="h-5 w-5 mr-2" />
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get in touch with our experts and let us help you find the perfect property 
            that matches your requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Contact Us
              </Button>
            </a>
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 border-green-600">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section - Let's Build Something Extraordinary */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
                  (07) Contact
                </Badge>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Let's Build Something 
                <span className="block text-primary">Extraordinary</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Ready To Start Your Property Journey? Fill Out The Form Below, And 
                Our Team Will Reach Out Within 24 Hours.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Call Us</p>
                    <a href="tel:+918104124183" className="text-muted-foreground hover:text-primary transition-colors">+91 81041 24183</a>
                    <br />
                    <a href="tel:+919136636577" className="text-muted-foreground hover:text-primary transition-colors">+91 9136636577</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email Us</p>
                    <p className="text-muted-foreground">info@aaraamproperties.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Visit Us</p>
                    <p className="text-muted-foreground">Office no. 3108, Plan S Business Park, MIDC Industrial Area, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              <div className="contact-form-glass rounded-3xl p-8 shadow-2xl border">
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground opacity-90">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={contactForm.firstName}
                        onChange={handleContactInputChange}
                        placeholder="First Name"
                        className="contact-input w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border/30 focus:border-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground/60 text-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground opacity-90">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={contactForm.lastName}
                        onChange={handleContactInputChange}
                        placeholder="Last Name"
                        className="contact-input w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border/30 focus:border-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground/60 text-lg"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground opacity-90">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactInputChange}
                      placeholder="you@example.com"
                      className="contact-input w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border/30 focus:border-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground/60 text-lg"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground opacity-90">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactInputChange}
                      placeholder="+91 81041 24183"
                      className="contact-input w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border/30 focus:border-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground/60 text-lg"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground opacity-90">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactInputChange}
                      placeholder="Write A Message..."
                      rows={4}
                      className="contact-input w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border/30 focus:border-primary outline-none transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground/60 text-lg"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      className="contact-submit-btn w-full bg-foreground text-background hover:bg-foreground/90 rounded-full py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                      type="submit"
                    >
                      Submit
                      <div className="ml-3 w-8 h-8 bg-background/20 rounded-full flex items-center justify-center group-hover:bg-background/30 transition-all">
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Component */}
      <ScrollToTop />
    </div>
  );
};

export default Home;