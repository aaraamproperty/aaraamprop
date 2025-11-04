import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import bannerImage from "@/assets/banner.png";

const NewProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Banner Section - Fullscreen */}
      <section className="relative h-screen overflow-hidden">
        {/* Banner Image */}
        <div className="w-full h-full">
          <img
            src={bannerImage}
            alt="New Project Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Advanced Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-primary/10 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-primary to-accent px-8 py-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                Interested to buy property in Plan M Business Park?
              </h2>
              <p className="text-white/90 text-center mt-2 text-lg">
                Fill your details & our property experts will call you.
              </p>
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Full Name"
                      className="h-14 px-4 text-base border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-0 transition-all duration-300 hover:border-primary/50"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="h-14 px-4 text-base border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-0 transition-all duration-300 hover:border-primary/50"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Input
                      type="tel"
                      placeholder="Phone / Mobile"
                      className="h-14 px-4 text-base border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-0 transition-all duration-300 hover:border-primary/50"
                    />
                  </div>

                  {/* Property Type Dropdown */}
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger className="h-14 px-4 text-base border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-0 transition-all duration-300 hover:border-primary/50">
                        <SelectValue placeholder="I am looking for" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-2 border-primary/20">
                        <SelectItem value="showroom" className="text-base py-3 px-4 hover:bg-primary/5 focus:bg-primary/10">
                          Showroom
                        </SelectItem>
                        <SelectItem value="office" className="text-base py-3 px-4 hover:bg-primary/5 focus:bg-primary/10">
                          Office
                        </SelectItem>
                        <SelectItem value="commercial" className="text-base py-3 px-4 hover:bg-primary/5 focus:bg-primary/10">
                          Other Commercial Property
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <Button className="px-12 py-4 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[250px]">
                    REQUEST A CALL BACK
                  </Button>
                </div>
              </form>
            </div>

            {/* Decorative Bottom Border */}
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
          </div>
        </div>
      </section>

      {/* Promotional Offers Section */}
      <section className="relative py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8">
            
            {/* Main Headline */}
            <div className="relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-wide">
                <span className="block text-accent">FREE SITE VISIT.</span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-primary/20 p-8 md:p-12 mx-auto max-w-5xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-relaxed">
                REACH OUT TO US TO KNOW MORE FOR OFFERS AT-
              </h3>
              
              <div className="flex flex-row justify-center items-center gap-4 md:gap-6 mb-8">
                <a 
                  href="tel:+918104124183" 
                  className="group flex items-center justify-center bg-gradient-to-r from-primary to-accent px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="text-lg md:text-xl font-bold text-white">+91-81041 24183</span>
                </a>
                
                <a 
                  href="tel:+919336636577" 
                  className="group flex items-center justify-center bg-gradient-to-r from-accent to-primary px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="text-lg md:text-xl font-bold text-white">+91 93366 36577</span>
                </a>
                
                <a 
                  href="tel:+918779296362" 
                  className="group flex items-center justify-center bg-gradient-to-r from-primary to-accent px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="text-lg md:text-xl font-bold text-white">+91 87792 96362</span>
                </a>
              </div>

              {/* Booking Status */}
              <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-6 mb-8">
                <h4 className="text-3xl md:text-4xl font-black text-center animate-pulse">
                  BOOKINGS NOW OPEN !!!
                </h4>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-12">
              <a href="tel:+918104124183">
                <Button className="px-16 py-6 text-2xl font-black bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:to-primary text-white rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse">
                  CONTACT US NOW
                </Button>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Plan M Business Park Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-primary/5 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PLAN M BUSINESS PARK
              </span>
              <span className="text-slate-700"> | </span>
              <span className="text-slate-800">TURBHE</span>
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="space-y-16">
            
            {/* Top Section - Company Overview with Image */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              
              {/* Company Info - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-2xl border-2 border-primary/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-accent p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                      ABOUT PLAN M BUSINESS PARK
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    <div className="space-y-6 text-slate-700 leading-relaxed">
                      <p className="text-lg">
                        <strong>Vishwa Green Realtors Pvt. Ltd</strong> is an established real estate company of 
                        Mumbai and known for Quality Living and Working Spaces, timely delivery and 
                        superior customer support services.
                      </p>
                      
                      <p className="text-lg">
                        The Company has grown as one of the leading and most dependable names in 
                        real estate and property development in Mumbai. Vishwa Green Realtors Pvt. Ltd 
                        is backed by decades of professional experience in delivering the best in 
                        residential and commercial projects ensuring <strong>Trust, Quality and Value for money</strong> 
                        offerings to its customers and successfully delivered the projects every time on 
                        schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Building Image - Takes 1 column */}
              <div className="lg:col-span-1">
                <div className="relative group">
                  <div className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-accent/20 transform hover:scale-105 transition-all duration-500">
                    <img
                      src="https://planmproject.com/images/Picture1-min.jpg"
                      alt="Plan M Business Park Building"
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-6 bg-gradient-to-t from-primary/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-12 left-12 right-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <h4 className="text-xl font-bold mb-2">Modern Architecture</h4>
                      <p className="text-sm">Commercial Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              AMENITIES
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              MOVE ALL A NOTCH HIGHER
            </h3>
            <div className="max-w-5xl mx-auto text-center mb-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                Experience the difference of a workspace that prioritizes your well-being and fosters a healthy work-life balance.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-2">
                We understand that achieving work-life balance is essential for both personal well-being and professional success. That's why we're committed for creating commercial and retail spaces.
              </p>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            
            {/* First Row - Taller Cards without tags */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                <img
                  src="https://planmbusinesspark.com/assets/images/resources/apartment-1-1.jpg"
                  alt="Cafeteria"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                <img
                  src="https://planmbusinesspark.com/assets/images/resources/apartment-1-2.jpg"
                  alt="Gymnasium"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                <img
                  src="https://planmbusinesspark.com/assets/images/resources/apartment-1-3.jpg"
                  alt="Food Court"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                <img
                  src="https://planmbusinesspark.com/assets/images/resources/apartment-1-4.jpg"
                  alt="Spa"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Walk Through Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                WALK THROUGH
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-slate-700 mt-6 max-w-3xl mx-auto leading-relaxed">
              Take a virtual tour of Plan M Business Park and experience the excellence of modern commercial architecture
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-primary/20 overflow-hidden transform hover:scale-105 transition-all duration-500">
              
              {/* Video Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Plan M Business Park, Navi Mumbai - Walkthrough
                </h3>
              </div>

              {/* Video Content */}
              <div className="p-6 md:p-8">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/D9KejXdC59k"
                    title="Plan M Business Park, Navi Mumbai - Walkthrough"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video Description */}
                <div className="mt-8 text-center">
                  <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                    Explore the state-of-the-art facilities, modern architecture, and premium amenities that make 
                    Plan M Business Park the ideal choice for your commercial venture in Navi Mumbai.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bg-gradient-to-r from-slate-50 to-primary/5 p-8">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a href="tel:+918104124183">
                    <Button className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                      Schedule Your Visit
                    </Button>
                  </a>
                  <a href="tel:+919336636577">
                    <Button 
                      variant="outline" 
                      className="px-8 py-4 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-300"
                    >
                      Get More Details
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-primary/20 p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Modern Architecture</h3>
              <p className="text-slate-600 leading-relaxed">
                Experience cutting-edge design and contemporary commercial spaces
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border-2 border-accent/20 p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📍</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Prime Location</h3>
              <p className="text-slate-600 leading-relaxed">
                Strategically located in Navi Mumbai with excellent connectivity
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border-2 border-primary/20 p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Premium Amenities</h3>
              <p className="text-slate-600 leading-relaxed">
                World-class facilities and amenities for modern businesses
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Location Advantage Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-accent/5 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                LOCATION ADVANTAGE
              </span>
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-slate-700 mt-6 max-w-4xl mx-auto leading-relaxed">
              Strategically positioned in the heart of Navi Mumbai, Plan M Business Park offers unparalleled connectivity 
              and access to key commercial and residential hubs.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column - Key Benefits */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-primary/20 p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Strategic Benefits
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: '🚇',
                      title: 'Metro Connectivity',
                      description: 'Direct access to Mumbai Metro network for seamless city travel'
                    },
                    {
                      icon: '✈️',
                      title: 'Airport Proximity',
                      description: 'Close to Navi Mumbai International Airport for business convenience'
                    },
                    {
                      icon: '🏢',
                      title: 'Business Hub',
                      description: 'Surrounded by major corporate offices and commercial centers'
                    },
                    {
                      icon: '🛣️',
                      title: 'Highway Access',
                      description: 'Easy connectivity to Mumbai-Pune Expressway and major highways'
                    },
                    {
                      icon: '🏥',
                      title: 'Essential Services',
                      description: 'Healthcare, education, and retail facilities in close proximity'
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl">{benefit.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">{benefit.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column - Location Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-accent/20 overflow-hidden transform hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-r from-accent to-primary p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                    Prime Location Map
                  </h3>
                  <p className="text-white/90 text-center mt-2">
                    Discover the strategic advantage of our location
                  </p>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="relative">
                    <img
                      src="https://planmproject.com/images/location-min.jpg"
                      alt="Plan M Business Park Location Advantage Map"
                      className="w-full h-auto rounded-2xl shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong>Plan M Business Park</strong> is strategically located at the intersection of major 
                      transportation networks, offering unmatched accessibility to Mumbai's key business districts, 
                      residential areas, and essential infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statistics Grid */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '15',
                unit: 'min',
                label: 'To Mumbai Airport',
                color: 'from-primary to-accent'
              },
              {
                number: '10',
                unit: 'min',
                label: 'To Metro Station',
                color: 'from-accent to-primary'
              },
              {
                number: '25',
                unit: 'min',
                label: 'To South Mumbai',
                color: 'from-primary to-accent'
              },
              {
                number: '5',
                unit: 'min',
                label: 'To Highway',
                color: 'from-accent to-primary'
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border-2 border-primary/10 p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className="text-center">
                    <div className="text-2xl font-black text-white">{stat.number}</div>
                    <div className="text-sm font-bold text-white/90">{stat.unit}</div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-800">{stat.label}</h4>
              </div>
            ))}
          </div>



        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              VISIT THE PROPERTY
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              CONTACT US
            </h3>
          </div>

          {/* Contact Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Left Side - Contact Information & Map */}
            <div className="space-y-6">
              
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <div className="space-y-4">
                  
                  {/* Location */}
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">ADDRESS</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Next to IKEA Road, Turbhe, Navi Mumbai<br />
                        Maharashtra 400706
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">📞</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">CALL US NOW</h4>
                      <div className="space-y-1">
                        <a href="tel:+918104124183" className="text-primary hover:text-accent font-medium block transition-colors">
                          +91 81041 24183
                        </a>
                        <a href="tel:+919336636577" className="text-primary hover:text-accent font-medium block transition-colors">
                          +91 93366 36577
                        </a>
                        <a href="tel:+918779296362" className="text-primary hover:text-accent font-medium block transition-colors">
                          +91 87792 96362
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">WRITE TO US</h4>
                      <a href="mailto:info@planmproject.com" className="text-primary hover:text-accent font-medium transition-colors">
                        info@planmproject.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  WRITE US
                </h3>
                <p className="text-slate-300">
                  Get in touch with our property experts
                </p>
              </div>

              <form className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 px-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>

                {/* Additional Contact Options */}
                <div className="pt-4 border-t border-slate-600">
                  <p className="text-slate-300 text-sm text-center mb-4">
                    Prefer to call? Reach us directly
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="tel:+918104124183"
                      className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium py-3 px-4 rounded-lg text-center transition-all duration-300 border border-slate-600"
                    >
                      📞 Call Now
                    </a>
                    <a 
                      href="https://wa.me/918104124183"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-all duration-300"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default NewProject;