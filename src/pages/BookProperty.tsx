import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  Home,
  CheckCircle,
  ArrowLeft,
  CreditCard,
  Shield,
  FileText
} from "lucide-react";
import villaImage from "@/assets/villa-property.jpg";

const BookProperty = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    alternatePhone: "",
    
    // Visit Details
    visitDate: "",
    visitTime: "",
    visitType: "site-visit", // site-visit, virtual-tour, office-consultation
    numberOfPeople: "1",
    
    // Requirements
    financingNeeded: "",
    budget: "",
    timeline: "",
    additionalRequests: "",
    
    // Contact Preferences
    preferredContact: "phone",
    contactTime: "anytime"
  });

  // Mock property data
  const property = {
    id: id,
    title: "Luxury Villa in Kharghar",
    price: "₹3.5 Cr",
    location: "Kharghar, Navi Mumbai",
    type: "Villa",
    image: villaImage,
    agent: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      email: "rajesh@aaraamproperties.com"
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submission
      toast({
        title: "Booking Confirmed!",
        description: "Your property visit has been scheduled. You'll receive a confirmation email shortly.",
      });
      // In real app, this would submit to backend
    }
  };

  const visitTypes = [
    {
      id: "site-visit",
      title: "Site Visit",
      description: "Visit the property in person",
      icon: <Home className="h-6 w-6" />,
      duration: "45-60 minutes"
    },
    {
      id: "virtual-tour",
      title: "Virtual Tour",
      description: "Online property walkthrough",
      icon: <Calendar className="h-6 w-6" />,
      duration: "30-40 minutes"
    },
    {
      id: "office-consultation",
      title: "Office Consultation",
      description: "Discuss at our office",
      icon: <User className="h-6 w-6" />,
      duration: "60-90 minutes"
    }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to={`/properties/${id}`}>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Property
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Book Property Visit</h1>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNum 
                    ? 'bg-white text-primary' 
                    : 'bg-white/20 text-white'
                }`}>
                  {step > stepNum ? <CheckCircle className="h-5 w-5" /> : stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step > stepNum ? 'bg-white' : 'bg-white/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-sm opacity-90">
            Step {step} of 3: {
              step === 1 ? 'Personal Information' :
              step === 2 ? 'Visit Details' :
              'Confirmation'
            }
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          name="fullName"
                          value={bookingData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address *</label>
                          <Input
                            type="email"
                            name="email"
                            value={bookingData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number *</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={bookingData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Alternate Phone (Optional)</label>
                        <Input
                          type="tel"
                          name="alternatePhone"
                          value={bookingData.alternatePhone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43211"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Budget Range</label>
                          <select
                            name="budget"
                            value={bookingData.budget}
                            onChange={handleInputChange}
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
                          <label className="block text-sm font-medium mb-2">Purchase Timeline</label>
                          <select
                            name="timeline"
                            value={bookingData.timeline}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select timeline</option>
                            <option value="immediate">Immediate (within 1 month)</option>
                            <option value="3months">Within 3 months</option>
                            <option value="6months">Within 6 months</option>
                            <option value="1year">Within 1 year</option>
                            <option value="exploring">Just exploring</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full mt-8">
                      Continue to Visit Details
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Visit Details */}
              {step === 2 && (
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-6">Schedule Your Visit</h2>
                    
                    <div className="space-y-6">
                      {/* Visit Type */}
                      <div>
                        <label className="block text-sm font-medium mb-4">Visit Type *</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {visitTypes.map((type) => (
                            <div
                              key={type.id}
                              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                                bookingData.visitType === type.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-border hover:border-primary/50'
                              }`}
                              onClick={() => setBookingData({...bookingData, visitType: type.id})}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`${
                                  bookingData.visitType === type.id ? 'text-primary' : 'text-muted-foreground'
                                }`}>
                                  {type.icon}
                                </div>
                                <h3 className="font-semibold">{type.title}</h3>
                              </div>
                              <p className="text-sm text-muted-foreground mb-1">{type.description}</p>
                              <p className="text-xs text-muted-foreground">{type.duration}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Date and Time */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                          <Input
                            type="date"
                            name="visitDate"
                            value={bookingData.visitDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                          <select
                            name="visitTime"
                            value={bookingData.visitTime}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          >
                            <option value="">Select time slot</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Number of People</label>
                          <select
                            name="numberOfPeople"
                            value={bookingData.numberOfPeople}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="1">Just me</option>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5+">5+ people</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Financing Needed?</label>
                          <select
                            name="financingNeeded"
                            value={bookingData.financingNeeded}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select option</option>
                            <option value="yes">Yes, need assistance</option>
                            <option value="no">No, self-funded</option>
                            <option value="maybe">Maybe, want to explore</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Additional Requests</label>
                        <Textarea
                          name="additionalRequests"
                          value={bookingData.additionalRequests}
                          onChange={handleInputChange}
                          placeholder="Any specific requirements, questions, or areas you'd like to focus on during the visit..."
                          rows={3}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button type="submit" className="flex-1">
                        Review & Confirm
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-semibold mb-2">Booking Confirmed!</h2>
                        <p className="text-muted-foreground">
                          Your property visit has been successfully scheduled
                        </p>
                      </div>

                      {/* Booking Summary */}
                      <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                        <h3 className="font-semibold mb-4">Booking Summary</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Name:</span>
                            <span className="ml-2 font-medium">{bookingData.fullName}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Email:</span>
                            <span className="ml-2 font-medium">{bookingData.email}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Phone:</span>
                            <span className="ml-2 font-medium">{bookingData.phone}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Visit Type:</span>
                            <span className="ml-2 font-medium">
                              {visitTypes.find(t => t.id === bookingData.visitType)?.title}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Date:</span>
                            <span className="ml-2 font-medium">{bookingData.visitDate}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Time:</span>
                            <span className="ml-2 font-medium">{bookingData.visitTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Next Steps */}
                      <div className="mt-8">
                        <h3 className="font-semibold mb-4">What's Next?</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-semibold text-primary">1</span>
                            </div>
                            <div>
                              <p className="font-medium">Confirmation Email</p>
                              <p className="text-sm text-muted-foreground">
                                You'll receive a confirmation email with all details within 15 minutes
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-semibold text-primary">2</span>
                            </div>
                            <div>
                              <p className="font-medium">Agent Contact</p>
                              <p className="text-sm text-muted-foreground">
                                Our agent will call you 24 hours before the visit to confirm details
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-semibold text-primary">3</span>
                            </div>
                            <div>
                              <p className="font-medium">Property Visit</p>
                              <p className="text-sm text-muted-foreground">
                                Meet our expert at the scheduled time for your property visit
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-8">
                        <Link to="/properties" className="flex-1">
                          <Button variant="outline" className="w-full">
                            Browse More Properties
                          </Button>
                        </Link>
                        <Link to="/contact" className="flex-1">
                          <Button className="w-full">
                            Contact Support
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </form>
          </div>

          {/* Property Summary Sidebar */}
          <div className="space-y-6">
            {/* Property Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Property Details</h3>
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold mb-2">{property.title}</h4>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{property.type}</Badge>
                  <span className="font-bold text-primary">{property.price}</span>
                </div>
              </CardContent>
            </Card>

            {/* Agent Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Your Agent</h3>
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary">
                      {property.agent.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold">{property.agent.name}</h4>
                  <p className="text-sm text-muted-foreground">Senior Property Consultant</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${property.agent.phone}`} className="text-primary hover:underline">
                      {property.agent.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${property.agent.email}`} className="text-primary hover:underline">
                      {property.agent.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm">100% Verified Properties</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">No Hidden Charges</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">Legal Documentation Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="text-sm">24/7 Customer Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProperty;