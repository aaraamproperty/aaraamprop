import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calendar, Clock, ArrowRight, Eye, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import villaImage from "@/assets/villa-property.jpg";
import officeImage from "@/assets/office-building.jpg";
import plotImage from "@/assets/plot-property.jpg";
import heroImage from "@/assets/hero-property.jpg";
import rowhouseImage from "@/assets/rowhouse-property.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

const Articles = () => {
  const blogPosts = [
    {
      id: "emerging-areas-navi-mumbai",
      title: "Top 10 Emerging Areas in Navi Mumbai for Real Estate Investment",
      excerpt: "Discover the most promising locations for property investment in Navi Mumbai with high growth potential and excellent connectivity.",
      image: villaImage,
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Investment Guide",
      views: "2.1k",
      featured: true
    },
    {
      id: "rera-guidelines-buyers",
      title: "Understanding RERA Guidelines for Property Buyers",
      excerpt: "Complete guide to Real Estate Regulation Act and how it protects your property investment with detailed compliance information.",
      image: officeImage,
      date: "March 12, 2024", 
      readTime: "6 min read",
      category: "Legal Guide",
      views: "1.8k",
      featured: true
    },
    {
      id: "home-loan-rates-2024",
      title: "Home Loan Interest Rates: What to Expect in 2024",
      excerpt: "Latest trends in home loan rates and expert tips to get the best deal for your property purchase this year.",
      image: plotImage,
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Finance",
      views: "1.5k",
      featured: true
    },
    {
      id: "mumbai-property-trends-2024",
      title: "Mumbai Real Estate Market Trends and Predictions for 2024",
      excerpt: "Comprehensive analysis of Mumbai's property market trends, price movements, and future growth prospects for savvy investors.",
      image: heroImage,
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Market Analysis",
      views: "2.3k",
      featured: false
    },
    {
      id: "first-time-buyer-guide",
      title: "Complete Guide for First-Time Property Buyers in Mumbai",
      excerpt: "Everything first-time buyers need to know about purchasing property in Mumbai, from budget planning to legal procedures.",
      image: rowhouseImage,
      date: "March 5, 2024",
      readTime: "12 min read",
      category: "Buyer's Guide",
      views: "1.9k",
      featured: false
    },
    {
      id: "commercial-property-investment",
      title: "Commercial Real Estate Investment: Office Spaces vs Retail",
      excerpt: "Detailed comparison of commercial property investment options and which type offers better returns in today's market.",
      image: property1,
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "Commercial",
      views: "1.2k",
      featured: false
    },
    {
      id: "property-documentation-checklist",
      title: "Essential Property Documentation Checklist for Buyers",
      excerpt: "Complete list of documents required for property purchase and verification to ensure a safe and legal transaction.",
      image: property2,
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "Legal Guide",
      views: "1.7k",
      featured: false
    },
    {
      id: "luxury-property-trends",
      title: "Luxury Property Market in Mumbai: Trends and Opportunities",
      excerpt: "Explore the luxury real estate segment in Mumbai, from high-end apartments to premium villas and their investment potential.",
      image: property3,
      date: "February 28, 2024",
      readTime: "9 min read",
      category: "Luxury Market",
      views: "1.4k",
      featured: false
    },
    {
      id: "rental-yield-calculator",
      title: "How to Calculate Rental Yield and ROI on Property Investment",
      excerpt: "Learn the formulas and factors for calculating rental yield, ROI, and other key metrics for property investment analysis.",
      image: property4,
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Investment Guide",
      views: "2.0k",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Investment Guide", count: blogPosts.filter(post => post.category === "Investment Guide").length },
    { name: "Legal Guide", count: blogPosts.filter(post => post.category === "Legal Guide").length },
    { name: "Finance", count: blogPosts.filter(post => post.category === "Finance").length },
    { name: "Market Analysis", count: blogPosts.filter(post => post.category === "Market Analysis").length },
    { name: "Buyer's Guide", count: blogPosts.filter(post => post.category === "Buyer's Guide").length }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-accent pt-32 lg:pt-36 pb-20 text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <TrendingUp className="h-4 w-4 mr-1" />
              Real Estate Insights
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              Property Investment
              <span className="block">Articles & Guides</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest trends, legal guidelines, and investment opportunities 
              in Mumbai's dynamic real estate market.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} className="rounded-full">
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <Badge variant="secondary" className="px-3 py-1">
              <BookOpen className="h-4 w-4 mr-1" />
              Editor's Pick
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      <Eye className="h-3 w-3 mr-1" />
                      {post.views}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to={`/articles/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">All Articles</h2>
            <p className="text-muted-foreground">
              {regularPosts.length} articles available
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                    <Link to={`/articles/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Real Estate Insights</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest property market trends, investment tips, and exclusive deals delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button className="sm:w-auto">
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Articles;