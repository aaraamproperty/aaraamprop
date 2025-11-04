import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PreFilterModal from "./components/PreFilterModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import BookProperty from "./pages/BookProperty";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import NewProject from "./pages/NewProject";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showPreFilter, setShowPreFilter] = useState(true);

  // Check if user has already seen the modal in this session
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('preFilterModalSeen');
    if (hasSeenModal) {
      setShowPreFilter(false);
    }
  }, []);

  const handleClosePreFilter = () => {
    setShowPreFilter(false);
    sessionStorage.setItem('preFilterModalSeen', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
          <PreFilterModal 
            isOpen={showPreFilter} 
            onClose={handleClosePreFilter} 
          />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetail />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book/:id" element={<BookProperty />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/new-project" element={<NewProject />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
