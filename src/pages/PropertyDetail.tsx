import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Wifi, 
  Shield, 
  Zap, 
  Phone, 
  Mail,
  Calendar,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import villaImage from "@/assets/villa-property.jpg";
import rowhouseImage from "@/assets/rowhouse-property.jpg";
import plotImage from "@/assets/plot-property.jpg";
import heroImage from "@/assets/hero-property.jpg";

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock property data - in real app, this would come from API
  const property = {
    id: id,
    title: "Luxury Villa in Kharghar",
    price: "₹3.5 Cr",
    originalPrice: "₹3.8 Cr",
    location: "Kharghar, Navi Mumbai",
    address: "Plot No. 123, Sector 20, Kharghar, Navi Mumbai - 410210",
    bedrooms: 4,
    bathrooms: 3,
    area: "2500 sq ft",
    type: "Villa",
    status: "Available",
    yearBuilt: "2022",
    furnishing: "Semi-Furnished",
    parking: 2,
    description: "This stunning luxury villa offers contemporary living with premium finishes throughout. Located in the heart of Kharghar, it features spacious rooms, modern amenities, and beautiful landscaping. Perfect for families seeking comfort and elegance.",
    images: [villaImage, rowhouseImage, heroImage, plotImage],
    features: [
      "24x7 Security",
      "Power Backup", 
      "Lift Available",
      "Covered Parking",
      "Landscaped Garden",
      "Club House",
      "Swimming Pool",
      "Gym & Fitness Center",
      "Children's Play Area",
      "Jogging Track"
    ],
    specifications: {
      "Built-up Area": "2500 sq ft",
      "Carpet Area": "2200 sq ft",
      "Floor": "Ground + 2",
      "Total Floors": "3",
      "Facing": "North-East",
      "Age of Property": "2 Years",
      "Furnishing": "Semi-Furnished",
      "Parking": "2 Covered"
    },
    agent: {
      name: "Rajesh Kumar",
      phone: "+91 81041 24183",
      email: "rajesh@aaraamproperties.com",
      experience: "15+ Years"
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Image Gallery */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img 
            src={property.images[currentImageIndex]} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Property Status */}
          <div className="absolute top-4 left-4">
            <Badge variant="default">
              {property.status}
            </Badge>
          </div>

          {/* Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/90 hover:bg-white"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/90 hover:bg-white"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Basic Info */}
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{property.location}</span>
                </div>
                <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-primary">{property.price}</span>
                  {property.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {property.originalPrice}
                    </span>
                  )}
                  <Badge variant="outline">{property.type}</Badge>
                </div>

                {/* Property Stats */}
                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  {property.bedrooms && (
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Square className="h-5 w-5" />
                    <span>{property.area}</span>
                  </div>
                  {property.parking && (
                    <div className="flex items-center gap-2">
                      <Car className="h-5 w-5" />
                      <span>{property.parking} Parking</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">About This Property</h2>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p><strong>Address:</strong> {property.address}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Property Specifications</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(property.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features & Amenities */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Features & Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Agent */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-primary">
                        {property.agent.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="font-semibold">{property.agent.name}</h4>
                    <p className="text-sm text-muted-foreground">{property.agent.experience}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <a 
                      href={`tel:${property.agent.phone}`}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                    <a 
                      href={`mailto:${property.agent.email}`}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link to={`/book/${property.id}`} className="block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      <Button className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Site Visit
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      Get EMI Calculator
                    </Button>
                    <Button variant="outline" className="w-full">
                      Request Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Property Highlights */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Property Highlights</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Verified Property</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-yellow-600" />
                      <span className="text-sm">Ready to Move</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Wifi className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">High-Speed Internet</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Similar property cards would go here */}
            <div className="text-center py-12 col-span-full">
              <p className="text-muted-foreground">Similar properties will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;