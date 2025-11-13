import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  HeadphonesIcon,
  Calendar
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    propertyType: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      propertyType: "",
      budget: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Available 24/7 for urgent inquiries"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@aaraamproperties.com", "sales@aaraamproperties.com"],
      description: "We'll respond within 2 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      details: ["Office no. 3108, Plan S Business Park", "MIDC Industrial Area, Shiravane, Nerul", "Navi Mumbai, Maharashtra 400706"],
      description: "Visit us for personalized consultation"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: ["Monday - Saturday: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      description: "Extended hours for site visits"
    }
  ];

  const offices = [
    {
      location: "Navi Mumbai (Head Office)",
      address: "Office no. 3108, Plan S Business Park, MIDC Industrial Area, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706",
      phone: "+91 98765 43210",
      email: "navimumbai@aaraamproperties.com"
    },
    {
      location: "Mumbai Branch",
      address: "Suite 456, Commercial Complex, Andheri East, Mumbai - 400069",
      phone: "+91 98765 43211", 
      email: "mumbai@aaraamproperties.com"
    },
    {
      location: "Thane Branch",
      address: "Office 789, Business Plaza, Thane West, Thane - 400601",
      phone: "+91 98765 43212",
      email: "thane@aaraamproperties.com"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  <section className="bg-accent pt-32 lg:pt-36 pb-20 text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Get In Touch
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              Contact Aaraam Properties
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to find your dream property? Our expert team is here to help you 
              every step of the way. Get in touch for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Property Type</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select property type</option>
                      <option value="villa">Villa</option>
                      <option value="rowhouse">Row House</option>
                      <option value="plot">Plot</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="50L-1Cr">₹50 Lakh - ₹1 Cr</option>
                      <option value="1Cr-2Cr">₹1 Cr - ₹2 Cr</option>
                      <option value="2Cr-5Cr">₹2 Cr - ₹5 Cr</option>
                      <option value="5Cr+">₹5 Cr+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Inquiry about..."
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, preferred location, timeline, etc."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Multiple ways to reach us for your convenience.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                          ))}
                          <p className="text-sm text-muted-foreground/80 mt-2">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Button variant="outline" className="justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Site Visit
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <HeadphonesIcon className="h-4 w-4 mr-2" />
                    Request Callback
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Office Locations</h2>
            <p className="text-lg text-muted-foreground">
              Visit our offices for personalized consultation and property viewing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{office.location}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${office.email}`} className="text-primary hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How quickly can I expect a response to my inquiry?",
                a: "We respond to all inquiries within 2 hours during business hours and within 24 hours for inquiries received outside business hours."
              },
              {
                q: "Do you charge for property consultation?",
                a: "No, our initial consultation and property advisory services are completely free. We only earn when you find your perfect property."
              },
              {
                q: "Can I schedule weekend property visits?",
                a: "Yes, we offer property visits on weekends and even holidays to accommodate your schedule."
              },
              {
                q: "Do you assist with home loans and legal documentation?",
                a: "Yes, we provide end-to-end assistance including home loan processing, legal verification, and documentation support."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;