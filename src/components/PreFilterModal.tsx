import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Building, Home, TreePine, Store, ArrowRight } from "lucide-react";

// Import location images
import mumbaiImage from "@/assets/locations/mumbai-skyline.jpg";
import naviMumbaiImage from "@/assets/locations/navi-mumbai.jpg";
import thaneImage from "@/assets/locations/thane-city.jpg";

// Import property type images
import plotImage from "@/assets/plot-property.jpg";
import villaImage from "@/assets/villa-property.jpg";
import commercialImage from "@/assets/office-building.jpg";
import apartmentImage from "@/assets/hero-property.jpg";
import rowhouseImage from "@/assets/rowhouse-property.jpg";

interface PreFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreFilterModal = ({ isOpen, onClose }: PreFilterModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [hoveredLocation, setHoveredLocation] = useState("mumbai");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [hoveredPropertyType, setHoveredPropertyType] = useState("plot");
  const navigate = useNavigate();

  const locations = [
    { 
      id: "mumbai", 
      name: "Mumbai", 
      description: "Prime locations in the heart of the financial capital",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=entropy"
    },
    { 
      id: "navi-mumbai", 
      name: "Navi Mumbai", 
      description: "Modern developments with excellent connectivity",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop&crop=entropy"
    },
    { 
      id: "thane", 
      name: "Thane", 
      description: "Growing suburban area with great infrastructure",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy"
    },
    { 
      id: "outskirts", 
      name: "Outskirts", 
      description: "Emerging areas with great potential and value",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&crop=entropy"
    }
  ];

  const propertyTypes = [
    { 
      id: "plot", 
      name: "Plot", 
      icon: TreePine, 
      description: "Residential & Commercial plots",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&crop=entropy"
    },
    { 
      id: "villa", 
      name: "Villa", 
      icon: Home, 
      description: "Luxury independent villas",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&crop=entropy"
    },
    { 
      id: "flats", 
      name: "Flats", 
      icon: Building, 
      description: "Modern apartment complexes",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=entropy"
    },
    { 
      id: "commercials", 
      name: "Commercial", 
      icon: Store, 
      description: "Commercial spaces & offices",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy"
    }
  ];

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setTimeout(() => setStep(2), 300);
  };

  const handlePropertyTypeSelect = (type: string) => {
    setSelectedPropertyType(type);
    setTimeout(() => {
      // Map location IDs to proper location names for filtering
      const locationMap: { [key: string]: string } = {
        'mumbai': 'Mumbai',
        'navi-mumbai': 'Navi Mumbai',
        'thane': 'Thane',
        'outskirts': 'Outskirts'
      };
      
      const locationName = locationMap[selectedLocation] || selectedLocation;
      
      // Redirect to properties page with selected location and property type
      navigate(`/properties?location=${encodeURIComponent(locationName)}&type=${type}`);
      onClose();
    }, 500);
  };

  if (!isOpen) return null;

  const currentLocationImage = locations.find(loc => loc.id === hoveredLocation)?.image || "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&h=600&fit=crop&crop=entropy";
  const currentPropertyImage = propertyTypes.find(type => type.id === hoveredPropertyType)?.image || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&crop=entropy";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-2 sm:p-4 pt-16 sm:pt-20 lg:pt-24">
      {/* Main Modal Container */}
      <div className="relative w-full max-w-4xl h-[80vh] sm:h-[70vh] max-h-[600px] sm:max-h-[500px] min-h-[400px] sm:min-h-[450px] bg-card rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
        
        {step === 1 && (
          <div className="flex flex-col lg:flex-row h-full animate-fade-in">
            {/* Left Side - Location Grid */}
            <div className="w-full lg:w-1/2 p-3 sm:p-4 lg:p-6 flex flex-col justify-center">
              <div className="mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">
                  Welcome to Aaraam Properties
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Step 1 of 2</p>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2">Choose Your Location</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Select your preferred area to discover amazing properties
                </p>
              </div>

              {/* 2x2 Grid Layout */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onMouseEnter={() => setHoveredLocation(location.id)}
                    onClick={() => handleLocationSelect(location.id)}
                    className={`text-center p-2 sm:p-3 rounded-lg border-2 transition-all duration-300 group ${
                      hoveredLocation === location.id 
                        ? 'border-primary bg-primary/5 shadow-md' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <h4 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {location.name}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-tight line-clamp-2 hidden sm:block">
                        {location.description}
                      </p>
                      <ArrowRight className={`w-3 h-3 mt-1 transition-all duration-300 ${
                        hoveredLocation === location.id ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Location Image */}
            <div className="w-full lg:w-1/2 h-48 lg:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
              <img
                src={currentLocationImage}
                alt="Location preview"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                  <h4 className="text-foreground text-sm font-bold mb-1">
                    {locations.find(loc => loc.id === hoveredLocation)?.name}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-tight">
                    {locations.find(loc => loc.id === hoveredLocation)?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col lg:flex-row h-full animate-fade-in">
            {/* Left Side - Property Type Grid */}
            <div className="w-full lg:w-1/2 p-4 lg:p-6 flex flex-col justify-center">
              <div className="mb-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
                >
                  <ArrowRight className="w-4 h-4 rotate-180 mr-2" />
                  Back to locations
                </button>
                
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Step 2 of 2</p>
                <h3 className="text-sm sm:text-base lg:text-xl font-semibold mb-2">Choose Property Type</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  What type of property are you looking for?
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {propertyTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      onMouseEnter={() => setHoveredPropertyType(type.id)}
                      onClick={() => handlePropertyTypeSelect(type.id)}
                      className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-300 group ${
                        hoveredPropertyType === type.id 
                          ? 'border-primary bg-primary/5 shadow-lg' 
                          : 'border-border hover:border-primary/50'
                      } ${selectedPropertyType === type.id ? 'bg-primary text-primary-foreground' : ''}`}
                    >
                      <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-2 transition-colors ${
                        hoveredPropertyType === type.id ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <h4 className="font-semibold text-xs sm:text-sm mb-1">{type.name}</h4>
                      <p className="text-xs text-muted-foreground hidden sm:block">{type.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Property Type Image */}
            <div className="w-full lg:w-1/2 h-48 lg:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/20 z-10" />
              <img
                src={currentPropertyImage}
                alt="Property type preview"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3">
                  <h4 className="text-white text-lg font-semibold">
                    {propertyTypes.find(type => type.id === hoveredPropertyType)?.name}
                  </h4>
                  <p className="text-white/80 text-xs">
                    {propertyTypes.find(type => type.id === hoveredPropertyType)?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default PreFilterModal;