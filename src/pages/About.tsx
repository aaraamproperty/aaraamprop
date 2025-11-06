import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, MapPin, Target, Eye, Heart } from "lucide-react";
import officeImage from "@/assets/office-building.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description: "To provide exceptional real estate solutions that exceed our clients' expectations while building lasting relationships based on trust and transparency."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Our Vision",
      description: "To be the most trusted and preferred real estate partner in Mumbai Metropolitan Region, known for innovation and customer satisfaction."
    },
      {
      icon: <Heart className="h-8 w-8" />,
      title: "Our Values",
      description: "Integrity, Excellence, Innovation, and Customer-centricity form the foundation of everything we do at Aaraam Properties."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      experience: "15+ Years",
      specialization: "Luxury Properties"
    },
    {
      name: "Priya Sharma",
      position: "Head of Sales",
      experience: "12+ Years", 
      specialization: "Residential Sales"
    },
    {
      name: "Amit Patel",
      position: "Project Manager",
      experience: "10+ Years",
      specialization: "Construction & Development"
    }
  ];

  const achievements = [
    { icon: <Award className="h-6 w-6" />, text: "Best Real Estate Company 2023" },
    { icon: <Users className="h-6 w-6" />, text: "500+ Happy Families" },
    { icon: <MapPin className="h-6 w-6" />, text: "15+ Prime Locations" },
    { icon: <Award className="h-6 w-6" />, text: "Excellence in Customer Service" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  <section className="bg-accent pt-32 lg:pt-36 pb-20 text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              About Aaraam Properties
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              Building Dreams, Creating Homes
            </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
              With over 15 years of experience in the real estate industry, Aaraam Properties 
              has established itself as a trusted name in premium residential and commercial 
              real estate solutions across Mumbai, Navi Mumbai, and Thane.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Aaraam Properties is a leading real estate company specializing in premium 
                residential and commercial properties. Founded in 2008, we have been 
                instrumental in shaping the real estate landscape of Mumbai Metropolitan Region.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our commitment to excellence, integrity, and customer satisfaction has earned 
                us the trust of over 500 families and businesses. We don't just sell properties; 
                we help create communities and fulfill dreams.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary">500+</h3>
                  <p className="text-muted-foreground">Properties Sold</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">15+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={officeImage} 
                alt="Aaraam Properties Office" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                <h3 className="text-lg font-semibold">Our Office</h3>
                <p className="text-primary-foreground/80">Nerul, Navi Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-center">Our Foundation</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="service-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-center">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals leading the way
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-muted-foreground mb-1">{member.experience}</p>
                <p className="text-sm text-muted-foreground">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-white/90">Recognition for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {achievement.icon}
                </div>
                <p className="text-white font-medium">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-center">Why Choose Aaraam Properties</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart in the real estate industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Knowledge",
                description: "Deep understanding of local market trends and property values"
              },
              {
                title: "Transparent Process",
                description: "Clear communication and honest dealings throughout your journey"
              },
              {
                title: "End-to-End Service",
                description: "Complete assistance from property search to legal documentation"
              },
              {
                title: "Prime Locations",
                description: "Exclusive access to properties in the most sought-after areas"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous quality checks and verification processes"
              },
              {
                title: "After-Sales Support",
                description: "Continued support even after property purchase completion"
              }
            ].map((feature, index) => (
              <div key={index} className="service-card">
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-muted-foreground mb-8">
            Experience the Aaraam Properties difference. Let our expert team help you 
            find your perfect property or achieve the best value for your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210">
              <Button size="lg" className="btn-primary">
                Contact Us
              </Button>
            </a>
            <Button size="lg" variant="outline">
              View All Properties
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;