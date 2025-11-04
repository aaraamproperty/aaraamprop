import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import PropertyModal from "./PropertyModal";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  type: string;
  status: "Available" | "Sold" | "Under Construction";
  image: string;
  featured?: boolean;
  visitNote?: string;
  additionalInfo?: {
    buildingAge?: string;
    totalFloors?: string;
    parking?: string;
    furnished?: string;
    [key: string]: any;
  };
  mediaGallery?: Array<{
    type: 'image' | 'video';
    src: string;
    alt: string;
    poster?: string;
  }>;
}

const PropertyCard = ({ 
  id, 
  title, 
  price, 
  location, 
  bedrooms, 
  bathrooms, 
  area, 
  type, 
  status, 
  image, 
  featured = false,
  visitNote,
  additionalInfo,
  mediaGallery
}: PropertyCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const propertyData = {
    id, title, price, location, bedrooms, bathrooms, area, type, status, image, featured, visitNote, additionalInfo, mediaGallery
  };

  return (
    <>
      <div className="property-card group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20 hover:-translate-y-2">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {featured && (
              <Badge className="bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg border-0 px-3 py-1 text-xs font-semibold">
                ⭐ Featured
              </Badge>
            )}
            <Badge 
              className={`
                px-3 py-1 text-xs font-semibold shadow-lg border-0
                ${status === "Available" 
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white" 
                  : status === "Sold" 
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white" 
                  : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                }
              `}
            >
              {status}
            </Badge>
          </div>
          
          {/* Property Type Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/95 text-gray-700 backdrop-blur-sm shadow-lg border-0 px-3 py-1 text-xs font-semibold">
              {type}
            </Badge>
          </div>

          {/* Wishlist Button */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Button 
              size="icon" 
              className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Heart className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Content Section - Simplified */}
        <div className="p-6 space-y-4">
          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{location}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
            {title}
          </h3>
          
          {/* Price */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Price</p>
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={() => setIsModalOpen(true)}
              variant="outline" 
              className="flex-1 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
            <a href="tel:+919876543210" className="flex-1">
              <Button className="w-full rounded-xl bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group">
                Book Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Property Modal */}
      <PropertyModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={propertyData}
      />
    </>
  );
};

export default PropertyCard;