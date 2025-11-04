import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Home, TrendingUp, Users, School, ShoppingBag, Train, Car } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-property.jpg";
import villaImage from "@/assets/villa-property.jpg";
import officeImage from "@/assets/office-building.jpg";

const Locations = () => {
  const locations = [
    {
      id: "navi-mumbai",
      name: "Navi Mumbai",
      description: "Planned city with modern infrastructure and excellent connectivity",
      image: heroImage,
      properties: "150+ Properties",
      avgPrice: "₹85 Lakh - ₹5 Cr",
      growth: "+12% YoY",
      population: "1.2M+",
      areas: ["Kharghar", "Panvel", "Vashi", "CBD Belapur", "Airoli", "Kopar Khairane"],
      highlights: [
        "Excellent connectivity to Mumbai",
        "Planned infrastructure",
        "IT hubs and business parks",
        "Educational institutions",
        "Healthcare facilities",
        "Shopping malls and entertainment"
      ],
      transportation: [
        "Mumbai Local Trains",
        "Mumbai Metro connectivity",
        "NMMT Bus Services",
        "Close to Mumbai Airport"
      ],
      amenities: [
        "DY Patil Stadium",
        "Central Park",
        "Seawoods Grand Central Mall",
        "Fortis Hospital",
        "International Schools"
      ]
    },
    {
      id: "mumbai",
      name: "Mumbai",
      description: "The financial capital with premium residential and commercial options",
      image: officeImage,
      properties: "200+ Properties",
      avgPrice: "₹1.5 Cr - ₹15 Cr",
      growth: "+8% YoY",
      population: "12.4M+",
      areas: ["Bandra", "Andheri", "Powai", "Worli", "Lower Parel", "Malad"],
      highlights: [
        "Financial capital of India",
        "Premium lifestyle",
        "World-class amenities",
        "Business opportunities",
        "Cultural hub",
        "International connectivity"
      ],
      transportation: [
        "Mumbai Local Network",
        "Mumbai Metro Lines",
        "International Airport",
        "Western & Central Railways"
      ],
      amenities: [
        "Palladium Mall",
        "Marine Drive",
        "Film City",
        "Breach Candy Hospital",
        "Premium Schools"
      ]
    },
    {
      id: "thane",
      name: "Thane",
      description: "Emerging residential hub with affordable luxury options",
      image: villaImage,
      properties: "120+ Properties",
      avgPrice: "₹75 Lakh - ₹3.5 Cr",
      growth: "+15% YoY",
      population: "1.8M+",
      areas: ["Thane West", "Ghodbunder Road", "Kasarvadavali", "Wagle Estate", "Kolshet", "Majiwada"],
      highlights: [
        "Rapidly developing area",
        "Affordable property prices",
        "Green spaces and lakes",
        "Growing IT sector",
        "Educational institutions",
        "Healthcare facilities"
      ],
      transportation: [
        "Central Railway Line",
        "TMMT Bus Services",
        "Eastern Express Highway",
        "Mumbai connectivity"
      ],
      amenities: [
        "Viviana Mall",
        "Upvan Lake",
        "Korum Mall",
        "Jupiter Hospital",
        "Quality Schools"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
         <section className="bg-accent pt-32 lg:pt-36 pb-20 text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Our Locations
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              Prime Locations Across MMR
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover premium properties in the most sought-after locations across 
              Mumbai Metropolitan Region. Each location offers unique advantages and lifestyle benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {locations.map((location) => (
              <Card key={location.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1" style={{ color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>{location.name}</h3>
                      <p className="text-white/90">{location.properties}</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Price Range</p>
                      <p className="font-semibold">{location.avgPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Growth Rate</p>
                      <p className="font-semibold text-green-600">{location.growth}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <Link to={`/properties#${location.id}`} className="flex-1">
                  <Button variant="default" size="sm" className="w-full" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        View Properties
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Location Information */}
      {locations.map((location, index) => (
        <section 
          key={location.id} 
          className={`py-16 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Badge className="mb-4">{location.properties}</Badge>
                <h2 className="text-4xl font-bold mb-6">{location.name}</h2>
                <p className="text-lg text-muted-foreground mb-8">{location.description}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Home className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">{location.properties.split(' ')[0]}</p>
                    <p className="text-sm text-muted-foreground">Properties</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold">{location.growth}</p>
                    <p className="text-sm text-muted-foreground">Growth</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold">{location.population}</p>
                    <p className="text-sm text-muted-foreground">Population</p>
                  </div>
                </div>

                {/* Popular Areas */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Popular Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.areas.map((area) => (
                      <Badge key={area} variant="outline">{area}</Badge>
                    ))}
                  </div>
                </div>

                <Link to={`/properties#${location.id}`}>
                  <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    View Properties in {location.name}
                  </Button>
                </Link>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Additional Details */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Highlights */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {location.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Transportation */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Train className="h-5 w-5 text-primary" />
                    Transportation
                  </h3>
                  <ul className="space-y-2">
                    {location.transportation.map((transport, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Car className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        {transport}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    Nearby Amenities
                  </h3>
                  <ul className="space-y-2">
                    {location.amenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <School className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Explore These Locations?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Schedule a site visit and discover the perfect location for your dream property. 
            Our experts will guide you through each area's unique advantages.
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
    </div>
  );
};

export default Locations;