import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, MapPin, Bed, Bath, Square, Calendar, ChevronLeft, ChevronRight, Play, Phone, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
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
    additionalInfo?: any;
    mediaGallery?: Array<{
      type: 'image' | 'video';
      src: string;
      alt: string;
      poster?: string;
    }>;
  };
}

const PropertyModal = ({ isOpen, onClose, property }: PropertyModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const navigate = useNavigate();

  if (!isOpen || !property) return null;

  // Use property's media gallery if available, otherwise use default images
  const mediaItems = property.mediaGallery || [
    { type: 'image', src: property.image, alt: 'Property exterior' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=entropy', alt: 'Living room' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&crop=entropy', alt: 'Bedroom' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&crop=entropy', alt: 'Kitchen' },
    { type: 'video', src: '/properties/videos/property-tour.mp4', poster: property.image, alt: 'Property video tour' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl h-[85vh] max-h-[700px] bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-[9999] p-1.5 rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 transition-all duration-300 shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex h-full">
          {/* Left Side - Property Details */}
          <div className="w-1/2 p-6 overflow-hidden">
            <div className="space-y-4 h-full flex flex-col">
              {/* Header */}
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  {property.featured && (
                    <Badge className="bg-gradient-to-r from-accent to-accent/80 text-white text-xs">
                      ⭐ Featured
                    </Badge>
                  )}
                  <Badge className={`text-xs
                    ${property.status === "Available" 
                      ? "bg-green-500 text-white" 
                      : property.status === "Sold" 
                      ? "bg-red-500 text-white" 
                      : "bg-yellow-500 text-white"
                    }
                  `}>
                    {property.status}
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-700 text-xs">
                    {property.type}
                  </Badge>
                </div>
                
                <h1 className="text-2xl font-bold text-gray-900 mb-2 break-words">{property.title}</h1>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="text-2xl font-bold text-primary">{property.price}</div>
              </div>

              {/* Property Specifications */}
              <div className="bg-gray-50 rounded-lg p-4 flex-shrink-0">
                <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                <div className="flex items-center gap-6">
                  {property.bedrooms && property.bedrooms > 0 && (
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">{property.bedrooms} Bed</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">{property.bathrooms} Bath</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Square className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold">{property.area}</span>
                  </div>
                </div>
              </div>

              {/* Additional Information - Compact */}
              {property.additionalInfo && (
                <div className={`bg-gray-50 rounded-lg p-4 ${showMoreDetails ? 'flex-1 min-h-0' : 'flex-shrink-0'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">Additional Details</h3>
                    {Object.entries(property.additionalInfo).length > 3 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowMoreDetails(!showMoreDetails)}
                        className="text-xs h-6 px-2 text-primary hover:text-primary"
                      >
                        {showMoreDetails ? 'View Less' : 'View More'}
                      </Button>
                    )}
                  </div>
                  <div className={`space-y-2 ${showMoreDetails ? 'max-h-40 overflow-y-auto' : ''}`}>
                    {Object.entries(property.additionalInfo)
                      .slice(0, showMoreDetails ? undefined : 3)
                      .map(([key, value]) => (
                        <div key={key} className="flex justify-between items-start text-sm gap-2">
                          <span className="text-gray-600 capitalize flex-shrink-0">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                          <span className="font-medium text-gray-800 text-right break-words">{String(value)}</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Visit Note - Compact */}
              {property.visitNote && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex-shrink-0">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-blue-800 mb-1">Visit Schedule</h3>
                      <p className="text-xs text-blue-700 break-words">{property.visitNote}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2 flex-shrink-0">
                <Button 
                  onClick={() => navigate('/contact')}
                  className="flex-1 h-10 text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    onClose();
                    navigate('/');
                  }}
                  className="flex-1 h-10 text-sm"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Video Slider */}
          <div className="w-1/2 relative bg-gray-100">
            <div className="relative h-full">
              {/* Current Media */}
              <div className="h-full flex items-center justify-center">
                {mediaItems[currentSlide].type === 'image' ? (
                  <img
                    src={mediaItems[currentSlide].src}
                    alt={mediaItems[currentSlide].alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={mediaItems[currentSlide].src}
                      poster={mediaItems[currentSlide].poster}
                      muted
                      className="w-full h-full object-cover"
                      style={{ pointerEvents: 'none' }}
                      ref={el => {
                        if (el) {
                          el.onplay = () => {
                            const btn = el.nextElementSibling as HTMLButtonElement;
                            if (btn) btn.style.display = 'none';
                          };
                          el.onpause = () => {
                            const btn = el.nextElementSibling as HTMLButtonElement;
                            if (btn) btn.style.display = '';
                          };
                        }
                      }}
                    />
                    <button
                      className="absolute inset-0 flex items-center justify-center z-10"
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      onClick={e => {
                        e.stopPropagation();
                        const video = (e.currentTarget.previousSibling as HTMLVideoElement);
                        if (video.paused) video.play();
                      }}
                    >
                      <div className="bg-black/50 rounded-full p-3">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </button>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-black/50 rounded-full p-3">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {mediaItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

              {/* Media Type Indicator */}
              <div className="absolute top-3 left-3">
                <Badge className="bg-black/50 text-white backdrop-blur-sm text-xs">
                  {currentSlide + 1} / {mediaItems.length}
                  {mediaItems[currentSlide].type === 'video' && ' • Video'}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;