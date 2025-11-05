import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PropertyCard from "@/components/PropertyCard";
import ScrollToTop from "@/components/ScrollToTop";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    priceRange: "",
    status: "",
    category: ""
  });

  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Handle URL parameters from pre-filter modal and hash for categories
  useEffect(() => {
    const locationParam = searchParams.get('location');
    const typeParam = searchParams.get('type');
    
    if (locationParam || typeParam) {
      setFilters(prev => ({
        ...prev,
        location: locationParam || "",
        type: typeParam ? mapPropertyType(typeParam) : ""
      }));
    }

    // Handle hash-based category navigation
    const hash = window.location.hash.substring(1);
    if (hash && ['mumbai', 'navi-mumbai', 'thane', 'outskirts'].includes(hash)) {
      setActiveCategory(hash);
    }
  }, [searchParams]);

  const mapPropertyType = (type: string): string => {
    const typeMap: { [key: string]: string } = {
      'plot': 'Plot',
      'villa': 'Villa', 
      'flats': 'Flats',
      'commercials': 'Commercial'
    };
    return typeMap[type] || type;
  };

  const allProperties = [
    // Mumbai Properties (10 properties)
    {
      id: "mumbai-1",
      title: "Delta Khargar 3BHK Higher Floor",
      price: "₹4.30 Cr (Negotiable)",
      location: "Delta, Kharghar, Navi Mumbai",
      bedrooms: 3,
      bathrooms: 2,
      area: "1840 sq ft built-up",
      type: "Flats",
      status: "Available" as const,
      image: "/properties/images/mumbai-1/main.jpg", // Main image for property card
      featured: true,
      visitNote: "Visit Saturday or Sunday only. Please confirm for a visit.",
      // Add multiple images and videos for the modal slider
      mediaGallery: [
        { type: 'image' as const, src: '/properties/images/mumbai-1/main.jpg', alt: 'Property exterior' },
        { type: 'image' as const, src: '/properties/images/mumbai-1/living-room.jpg', alt: 'Living room' },
        { type: 'image' as const, src: '/properties/images/mumbai-1/bedroom.jpg', alt: 'Master bedroom' },
        { type: 'image' as const, src: '/properties/images/mumbai-1/kitchen.jpg', alt: 'Kitchen' },
        { type: 'image' as const, src: '/properties/images/mumbai-1/bathroom.jpg', alt: 'Bathroom' },
        { type: 'video' as const, src: '/properties/videos/mumbai-1-tour.mp4', poster: '/properties/images/mumbai-1/main.jpg', alt: 'Property video tour' }
      ]
    },
    {
      id: "mumbai-2",
      title: "Fully Decorated Commercial Office Space",
      price: "₹1.18 Cr",
      location: "2nd Floor, Nr Juhu Circle, Mumbai",
      bedrooms: 0,
      bathrooms: 1,
      area: "219 sq ft carpet area",
      type: "Commercial",
      status: "Available" as const,
      image: "/properties/images/mumbai-2/main.jpg", // Replace with your image
      featured: true,
      // Add your own images and videos here
      mediaGallery: [
        { type: 'image' as const, src: '/properties/images/mumbai-2/main.jpg', alt: 'Office exterior' },
        { type: 'image' as const, src: '/properties/images/mumbai-2/workspace.jpg', alt: 'Office workspace' },
        { type: 'image' as const, src: '/properties/images/mumbai-2/meeting-room.jpg', alt: 'Meeting room' },
        { type: 'image' as const, src: '/properties/images/mumbai-2/reception.jpg', alt: 'Reception area' },
        { type: 'video' as const, src: '/properties/videos/mumbai-2-office-tour.mp4', poster: '/properties/images/mumbai-2/main.jpg', alt: 'Office tour video' }
      ],
      additionalInfo: {
        buildingAge: "1.5 years",
        totalFloors: "10th",
        parking: "Common Car Parking",
        furnished: "Fully Decorated"
      }
    },
    {
      id: "mumbai-3",
      title: "Kamote Prime Location Lodging & Ground Shops",
      price: "₹12 Cr",
      location: "Kamote, Prime Location",
      bedrooms: 16,
      bathrooms: 16,
      area: "2 Guntha+ Plot",
      type: "Commercial",
      status: "Available" as const,
  image: "/properties/images/property 3/1.jpg",
      additionalInfo: {
        buildingType: "G+4 Building",
        totalRooms: "16 Rooms",
        specialFeatures: "50 Person Capacity Banquet Hall",
        groundFloor: "2 Shops at Ground Floor",
      },
      monthlyRent: "₹4 Lakhs from Day 1",
      priceNegotiable: "Yes",
      mediaGallery: [
        { type: 'image' as const, src: '/properties/images/property 3/1.jpg', alt: 'Lodging Exterior' },
        { type: 'image' as const, src: '/properties/images/property 3/2.jpg', alt: 'Ground Shops' },
        { type: 'image' as const, src: '/properties/images/property 3/3.jpg', alt: 'Banquet Hall' }
      ]
    },
    {
      id: "mumbai-4",
        title: "Khargar Sector 35 2BHK Fully Furnished",
        price: "₹1.20 Cr",
        location: "Sector 35, Kharghar, Navi Mumbai",
        bedrooms: 2,
        bathrooms: 2,
        area: "650 sq ft (Carpet)",
        type: "Flat",
        status: "Available" as const,
        image: "/properties/images/property 4/1.jpg",
        mediaGallery: [
          { type: 'image' as const, src: '/properties/images/property 4/1.jpg', alt: 'Living Room' },
          { type: 'image' as const, src: '/properties/images/property 4/2.jpg', alt: 'Bedroom' },
          { type: 'image' as const, src: '/properties/images/property 4/3.jpg', alt: 'Kitchen' },
          { type: 'image' as const, src: '/properties/images/property 4/4.jpg', alt: 'Bathroom' },
          { type: 'image' as const, src: '/properties/images/property 4/5.jpg', alt: 'Balcony' }
        ],
        additionalInfo: {
          furnished: "Fully Furnished",
          parking: "Stilt Car Parking",
          carpetArea: "650 sq ft",
          saleType: "For Sale"
        },
    },
    {
      id: "mumbai-5",
        title: "2BHK Furnished Flat for Sale – Kharghar",
        price: "₹1.40 Cr",
        location: "Sector 35G, Kharghar, Navi Mumbai",
        area: "700 sq ft (Carpet)",
        type: "Flat",
        status: "Available" as const,
        image: "/properties/images/property 5/1.jpg",
        featured: true,
        bedrooms: 2,
        bathrooms: 2,
        mediaGallery: [
          { type: 'image' as const, src: '/properties/images/property 5/1.jpg', alt: 'Living Room' },
          { type: 'image' as const, src: '/properties/images/property 5/2.jpg', alt: 'Bedroom' },
          { type: 'image' as const, src: '/properties/images/property 5/3.jpg', alt: 'Kitchen' },
          { type: 'image' as const, src: '/properties/images/property 5/4.jpg', alt: 'Bathroom' },
          { type: 'image' as const, src: '/properties/images/property 5/5.jpg', alt: 'Balcony' },
          { type: 'image' as const, src: '/properties/images/property 5/6.jpg', alt: 'Complex Exterior' }
        ],
        additionalInfo: {
          furnished: "Fully Furnished",
          openDirection: "East–West Open",
          building: "G+22, 7-Wing Big Complex",
          floor: "Middle Floor",
          amenities: "Security, Gym, Pool, Clubhouse, Garden, Kids Play Area",
          parking: "1 Open Car Parking Included",
          highlights: "Spacious, Well-Ventilated & Ready-to-Move",
          saleType: "For Sale"
        },
    },
    {
  id: "navi-mumbai-karjat-resort",
        title: "Running Resort at Karjat – 12 AC Rooms, Pool & Garden",
        price: "Deposit ₹20 Lakhs, Rent ₹2.5 Lakhs (Negotiable)",
        location: "Karjat, Navi Mumbai",
        bedrooms: 12,
        bathrooms: 12,
        area: "Resort Property",
        type: "Resort",
        status: "Available" as const,
        image: "/properties/images/property 6/1.jpg",
        mediaGallery: [
          { type: 'image' as const, src: '/properties/images/property 6/1.jpg', alt: 'Resort Exterior' },
          { type: 'video' as const, src: '/properties/videos/property 6 video.mp4', poster: '/properties/images/property 6/1.jpg', alt: 'Resort Video Tour' },
          { type: 'image' as const, src: '/properties/images/property 6/2.jpg', alt: 'Swimming Pool' },
          { type: 'image' as const, src: '/properties/images/property 6/3.jpg', alt: 'Garden Area' },
          { type: 'image' as const, src: '/properties/images/property 6/4.jpg', alt: 'AC Room' },
          { type: 'image' as const, src: '/properties/images/property 6/5.jpg', alt: 'Dining Area' },
          { type: 'image' as const, src: '/properties/images/property 6/6.jpg', alt: 'Resort Facilities' }
        ],
        additionalInfo: {
          highlights: "Swimming Pool, Garden, Running Condition",
          deposit: "₹20 Lakhs",
          rent: "₹2.5 Lakhs (Negotiable)",
          rooms: "12 AC Rooms",
          amenities: "Pool, Garden, Resort Facilities"
        },
    },
    {
      id: "mumbai-7",
      title: "Premium Villa in Versova",
      price: "₹11.2 Cr",
      location: "Versova Beach Road, Mumbai",
      bedrooms: 4,
      bathrooms: 5,
      area: "3800 sq ft",
      type: "Villa",
      status: "Under Construction" as const,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKsmT4mcfpKlNeoJtd4Jk1h_F5FXnUiy8nQ&s",
    },
    {
      id: "mumbai-8",
      title: "High-Rise Apartment in Malad West",
      price: "₹6.5 Cr",
      location: "Mindspace, Malad West, Mumbai",
      bedrooms: 3,
      bathrooms: 3,
      area: "1950 sq ft",
      type: "Flats",
      status: "Available" as const,
      image: "https://img.staticmb.com/mbimages/project/Photo_h470_w1080/Photo_h310_w462/Project-Photo-10-Celestia-Heights-Mumbai-5059589_1224_1632_310_462_470_1080.JPEG",
    },
    {
      id: "mumbai-9",
      title: "Duplex in Khar West",
      price: "₹14.8 Cr",
      location: "Carter Road, Khar West, Mumbai",
      bedrooms: 4,
      bathrooms: 5,
      area: "3600 sq ft",
      type: "Flats",
      status: "Available" as const,
      image: "https://is1-3.housingcdn.com/01c16c28/EC48FF5F854D42EEB9E0062AB3D782C3/v0/medium/5_bhk_duplex-for-rent-khar_west-Mumbai-living_room.jpg",
      featured: true,
    },
    {
      id: "mumbai-10",
      title: "Premium Plot in Goregaon East",
      price: "₹4.2 Cr",
      location: "Film City Road, Goregaon East, Mumbai",
      area: "2500 sq ft",
      type: "Plot",
      status: "Available" as const,
      image: "https://www.nanubhaiproperty.com/images/thumbs/property/476693_2052-sq-ft-residential-plot-land-for-sale-goregaon-east-in-mumbai_800.jpeg",
    },


    // Navi Mumbai Properties (10 properties)
    {
      id: "navi-1",
        title: "STAR HOTEL FOR RENT",
        price: "Rent ₹18 Lakhs, Deposit ₹2 Cr",
        location: "Navi Mumbai",
        bedrooms: 36,
        bathrooms: 36,
        area: "G+4 Building, 36 Rooms, Banquet, Bar, Restaurant, Rooftop",
        type: "Hotel",
        status: "Available" as const,
        image: "/properties/images/property 11/1.jpg",
        featured: true,
        mediaGallery: [
          { type: 'image' as const, src: '/properties/images/property 11/1.jpg', alt: 'Hotel Exterior' },
          { type: 'image' as const, src: '/properties/images/property 11/2.jpg', alt: 'Hotel Lobby' },
          { type: 'image' as const, src: '/properties/images/property 11/3.jpg', alt: 'Banquet Hall' },
          { type: 'image' as const, src: '/properties/images/property 11/4.jpg', alt: 'Bar Area' },
          { type: 'image' as const, src: '/properties/images/property 11/5.jpg', alt: 'Rooftop Restaurant' }
        ],
        additionalInfo: {
          basement: "Lounge Bar",
          groundFloor: "Restaurant / Reception",
          firstFloor: "Dining Area",
          secondFloor: "12 Rooms",
          thirdFloor: "12 Rooms",
          fourthFloor: "12 Rooms",
          terrace: "Roof Top",
          banquet: "Banquet Hall",
          bar: "Bar & Restaurant",
          furnished: "Fully Furnished with All Licences & Equipment's",
          contact: "JAI GURU ENTERPRISES 8104124183 / 8779296362"
        },
    },
    {
      id: "navi-2",
        title: "Pre Leased Property – Running Spa",
        price: "₹1.60 Cr",
        location: "Prime Location, CBD Belapur, Sector 15, Navi Mumbai",
        bedrooms: 0,
        bathrooms: 1,
        area: "930 sq ft",
        type: "Commercial",
        status: "Available" as const,
        image: "/properties/images/property 12/1.webp",
        additionalInfo: {
          leaseType: "Pre Leased",
          business: "Running Spa",
          rentIncome: "₹1 Lakh/month",
          highlights: "Prime location, ready business, stable rental income"
        },
        mediaGallery: [
          { type: 'image' as const, src: '/properties/images/property 12/1.webp', alt: 'Spa Exterior' },
          { type: 'image' as const, src: '/properties/images/property 12/2.webp', alt: 'Spa Interior' },
          { type: 'image' as const, src: '/properties/images/property 12/3.webp', alt: 'Spa Room' },
          { type: 'video' as const, src: '/properties/videos/property 12 video .mp4', alt: 'Spa Walkthrough' }
        ],
    },
    {
      id: "navi-3",
      title: "Row House in CBD Belapur",
      price: "₹5.8 Cr",
      location: "Sector 8, CBD Belapur, Navi Mumbai",
      bedrooms: 4,
      bathrooms: 4,
      area: "2800 sq ft",
      type: "Row House",
      status: "Available" as const,
      image: "https://housing-images.n7net.in/01c16c28/35db9b17e27a98972be207d36664002b/v0/medium/3_bhk_independent_house-for-sale-cbd_belapur-Navi+Mumbai-bedroom.jpg",
    },
    {
      id: "navi-4",
      title: "Commercial Complex in Airoli",
      price: "₹8.5 Cr",
      location: "Sector 8, Airoli, Navi Mumbai",
      area: "3500 sq ft",
      type: "Commercial",
      status: "Available" as const,
      image: "https://www.floortap.com/_next/image?url=https%3A%2F%2Fcreleasing-images.s3.ap-south-1.amazonaws.com%2Fwm%2Flease%2F3772%2F9151d2d0-aa4c-46ac-8c0b-a4b32e294bc5.jpg%3F1708582202.4253674&w=2048&q=75",
      featured: true,
    },
    {
      id: "navi-5",
      title: "Luxury Villa in Panvel",
      price: "₹3.8 Cr",
      location: "New Panvel East, Navi Mumbai",
      bedrooms: 4,
      bathrooms: 4,
      area: "2900 sq ft",
      type: "Villa",
      status: "Under Construction" as const,
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop&crop=entropy",
    },
    {
      id: "navi-6",
      title: "Premium Plot in Ulwe",
      price: "₹1.8 Cr",
      location: "Sector 19, Ulwe, Navi Mumbai",
      area: "1500 sq ft",
      type: "Plot",
      status: "Available" as const,
      image: "https://is1-2.housingcdn.com/012c1500/281f00403be55659ece4434269174eed/v0/medium.jpeg",
    },
    {
      id: "navi-7",
      title: "High-Rise Apartment in Nerul",
      price: "₹4.2 Cr",
      location: "Sector 23, Nerul, Navi Mumbai",
      bedrooms: 3,
      bathrooms: 3,
      area: "2000 sq ft",
      type: "Flats",
      status: "Available" as const,
      image: "https://imagecdn.99acres.com/media1/29153/8/583068751M-1743667701309.webp",
    },
    {
      id: "navi-8",
      title: "Row House in Kopar Khairane",
      price: "₹3.5 Cr",
      location: "Sector 3, Kopar Khairane, Navi Mumbai",
      bedrooms: 3,
      bathrooms: 3,
      area: "2200 sq ft",
      type: "Row House",
      status: "Available" as const,
      image: "https://images.nobroker.in/images/ff80818164556c05016455e03f035dc3/ff80818164556c05016455e03f035dc3_8516_large.jpg",
    },
    {
      id: "navi-9",
      title: "Penthouse in Seawoods",
      price: "₹6.8 Cr",
      location: "Seawoods Grand Central, Navi Mumbai",
      bedrooms: 4,
      bathrooms: 5,
      area: "3200 sq ft",
      type: "Flats",
      status: "Available" as const,
      image: "https://imagecdn.99acres.com/media1/32033/13/640673935M-1756550154452.jpg",
      featured: true,
    },
    {
      id: "navi-10",
      title: "Villa in Kamothe",
      price: "₹4.0 Cr",
      location: "Sector 35, Kamothe, Navi Mumbai",
      bedrooms: 4,
      bathrooms: 4,
      area: "2700 sq ft",
      type: "Villa",
      status: "Available" as const,
      image: "https://content.jdmagicbox.com/v2/comp/mumbai/e6/022pxx22.xx22.250130163236.e4e6/catalogue/apxz9odijkov8j9-cvz9mqts8j.jpg",
    },

    // Thane Properties (10 properties)
    {
      id: "thane-1",
      title: "Luxury Villa in Hiranandani Estate",
      price: "₹8.5 Cr",
      location: "Hiranandani Estate, Thane West",
      bedrooms: 5,
      bathrooms: 5,
      area: "4000 sq ft",
      type: "Villa",
      status: "Available" as const,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&crop=entropy",
      featured: true,
    },
    {
      id: "thane-2",
      title: "Premium Apartment in Ghodbunder Road",
      price: "₹3.8 Cr",
      location: "Ghodbunder Road, Thane West",
      bedrooms: 3,
      bathrooms: 3,
      area: "1900 sq ft",
      type: "Flats",
      status: "Available" as const,
      image: "https://www.hiranandani.com/img/skylark-enclave/banner1.jpg",
    },
    {
      id: "thane-3",
      title: "Row House in Kasarvadavali",
      price: "₹5.2 Cr",
      location: "Kasarvadavali, Thane West",
      bedrooms: 4,
      bathrooms: 4,
      area: "2800 sq ft",
      type: "Row House",
      status: "Available" as const,
      image: "https://housing-images.n7net.in/4f2250e8/606404a7b01ca396bba74d9a32cc4738/v5/medium/cosmos_hawaiian-thane_west-thane-cosmos_group.jpg",
    },
    {
      id: "thane-4",
      title: "Commercial Complex in Majiwada",
      price: "₹12.5 Cr",
      location: "Majiwada, Thane West",
      area: "5000 sq ft",
      type: "Commercial",
      status: "Available" as const,
      image: "https://newprojects.99acres.com/projects/sheth_developers_mumbai/sheth_cnergy/images/la39n097_med.webp",
      featured: true,
    },
    {
      id: "thane-5",
      title: "Modern Villa in Wagle Estate",
      price: "₹6.8 Cr",
      location: "Wagle Estate, Thane West",
      bedrooms: 4,
      bathrooms: 4,
      area: "3200 sq ft",
      type: "Villa",
      status: "Under Construction" as const,
      image: "https://content.jdmagicbox.com/v2/comp/thane/j3/022pxx22.xx22.230401020738.i7j3/catalogue/omkar-villa-thane-west-thane-villas-9th7196hcg-250.jpg",
    },
    {
      id: "thane-6",
      title: "Plot in Kalyan East",
      price: "₹1.2 Cr",
      location: "Kalyan East, Thane",
      area: "1000 sq ft",
      type: "Plot",
      status: "Available" as const,
      image: "https://img.squareyards.com/secondaryPortal/IN_638812143108181703-2504250945104510.jpg?aio=w-360;h-150;crop;",
    },
    {
      id: "thane-7",
      title: "High-Rise Apartment in Thane West",
      price: "₹4.5 Cr",
      location: "Pokhran Road No 2, Thane West",
      bedrooms: 3,
      bathrooms: 3,
      area: "2100 sq ft",
      type: "Flats",
      status: "Available" as const,
      image: "https://www.piramalrealty.com/_next/image?url=%2Fimages%2Fluxury-apartments-in-Thane-at-Piramal-Vaikunth.jpg&w=3840&q=75",
    },
    {
      id: "thane-8",
      title: "Row House in Dombivli East",
      price: "₹2.8 Cr",
      location: "Dombivli East, Thane",
      bedrooms: 3,
      bathrooms: 3,
      area: "2000 sq ft",
      type: "Row House",
      status: "Available" as const,
      image: "https://housing-images.n7net.in/4f2250e8/bfc2912a159bda844485d40f95f367d7/v0/medium/lodha_golflinks_villas-dombivli_east-thane-lodha_group.jpeg",
    },
    {
      id: "thane-9",
      title: "Penthouse in Naupada",
      price: "₹7.2 Cr",
      location: "Naupada, Thane West",
      bedrooms: 4,
      bathrooms: 5,
      area: "3500 sq ft",
      type: "Flats",
      status: "Available" as const,
      image: "https://img.squareyards.com/secondaryPortal/IN_638797949495907024-090425112909299.jpg?aio=w-360;h-150;crop;",
      featured: true,
    },
    {
      id: "thane-10",
      title: "Villa in Kolshet Road",
      price: "₹5.8 Cr",
      location: "Kolshet Road, Thane West",
      bedrooms: 4,
      bathrooms: 4,
      area: "3000 sq ft",
      type: "Villa",
      status: "Available" as const,
      image: "https://r-xx.bstatic.com/xdata/images/xphoto/608x352/45450059.webp?k=8a9a29e142fe0ffcdffe3cc546b9d5d984486f44a103bb17b63d238888b19364&o=",
    },

    // Outskirts Properties (0 properties - to be added in future)
    // Properties with id starting with "outskirts-" will be shown in Outskirts category
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Update URL hash for deep linking
    if (category === "all") {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } else {
      window.history.replaceState(null, '', window.location.pathname + window.location.search + '#' + category);
    }
  };

  const filteredProperties = allProperties.filter(property => {
    // Category filter
    let categoryMatch = true;
    if (activeCategory !== "all") {
      if (activeCategory === "mumbai") {
        categoryMatch = property.location.toLowerCase().includes("mumbai") && !property.location.toLowerCase().includes("navi");
      } else if (activeCategory === "navi-mumbai") {
        categoryMatch = property.location.toLowerCase().includes("navi mumbai");
      } else if (activeCategory === "thane") {
        categoryMatch = property.location.toLowerCase().includes("thane");
      } else if (activeCategory === "outskirts") {
        categoryMatch = property.id.startsWith("outskirts-");
      }
    }

    return (
      categoryMatch &&
      (!filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.type || property.type === filters.type) &&
      (!filters.status || property.status === filters.status)
    );
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  <section className="bg-accent pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <Badge className="mb-3 sm:mb-4 bg-white/20 text-white border-white/30 text-xs sm:text-sm">
              Our Properties
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Find Your Perfect Property
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
              Explore our extensive collection of premium properties across Mumbai, 
              Navi Mumbai, and Thane. From luxury villas to modern row houses and prime plots.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 sm:py-8 bg-background/50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Browse by Location</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              Explore properties in your preferred location
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="flex flex-wrap sm:flex-nowrap bg-muted rounded-lg p-1 sm:p-2 gap-1 sm:gap-2 max-w-full overflow-x-auto">
              <Button
                variant={activeCategory === "all" ? "default" : "ghost"}
                onClick={() => handleCategoryChange("all")}
                className="rounded-md text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap"
              >
                All Properties
              </Button>
              <Button
                variant={activeCategory === "mumbai" ? "default" : "ghost"}
                onClick={() => handleCategoryChange("mumbai")}
                className="rounded-md text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap"
              >
                Mumbai
              </Button>
              <Button
                variant={activeCategory === "navi-mumbai" ? "default" : "ghost"}
                onClick={() => handleCategoryChange("navi-mumbai")}
                className="rounded-md text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap"
              >
                Navi Mumbai
              </Button>
              <Button
                variant={activeCategory === "thane" ? "default" : "ghost"}
                onClick={() => handleCategoryChange("thane")}
                className="rounded-md text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap"
              >
                Thane
              </Button>
              <Button
                variant={activeCategory === "outskirts" ? "default" : "ghost"}
                onClick={() => handleCategoryChange("outskirts")}
                className="rounded-md"
              >
                Outskirts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-6 sm:py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full sm:w-auto"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex gap-4">
              <select 
                className="px-3 sm:px-4 py-2 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option value="">All Types</option>
                <option value="Villa">Villa</option>
                <option value="Flats">Flats</option>
                <option value="Plot">Plot</option>
                <option value="Commercial">Commercial</option>
              </select>

              <select 
                className="px-3 sm:px-4 py-2 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
              >
                <option value="">All Status</option>
                <option value="Available">Available</option>
                <option value="Under Construction">Under Construction</option>
              </select>

              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="text-xs sm:text-sm text-muted-foreground text-center lg:text-left">
              {filteredProperties.length} properties found 
              {activeCategory !== "all" && (
                <span className="capitalize"> in {activeCategory.replace("-", " ")}</span>
              )}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 p-3 sm:p-4 bg-muted/30 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <select 
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value})}
                >
                  <option value="">All Types</option>
                  <option value="Villa">Villa</option>
                  <option value="Flats">Flats</option>
                  <option value="Plot">Plot</option>
                  <option value="Commercial">Commercial</option>
                </select>

                <select 
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={filters.status}
                  onChange={(e) => setFilters({...filters, status: e.target.value})}
                >
                  <option value="">All Status</option>
                  <option value="Available">Available</option>
                  <option value="Under Construction">Under Construction</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">No properties found</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
                Try adjusting your search criteria or browse all properties
              </p>
              <Button onClick={() => setFilters({location: "", type: "", priceRange: "", status: "", category: ""})}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More */}
      {filteredProperties.length > 0 && (
        <section className="py-6 sm:py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Load More Properties
            </Button>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Didn't Find What You're Looking For?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 px-4">
            Our expert team can help you find the perfect property that matches 
            your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a href="tel:+919876543210" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                Contact Us
              </Button>
            </a>
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 border-green-600">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Component */}
      <ScrollToTop />
    </div>
  );
};

export default Properties;