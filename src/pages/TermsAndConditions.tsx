import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              <strong>Last updated:</strong> March 2024
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Aaraam Properties website and services, you accept and agree to be bound by the terms and provision of this agreement. These terms constitute a legally binding agreement between you and Aaraam Properties.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Aaraam Properties's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2>3. Property Information Disclaimer</h2>
            <p>
              While we strive to provide accurate and up-to-date information about properties, Aaraam Properties makes no representations or warranties regarding the accuracy, completeness, or suitability of the information provided. Property details, prices, and availability are subject to change without notice.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when requested</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Use our services only for lawful purposes</li>
              <li>Respect the intellectual property rights of others</li>
            </ul>

            <h2>5. Booking and Transactions</h2>
            <p>
              All property bookings and transactions are subject to verification and approval. Aaraam Properties reserves the right to cancel or refuse any booking at its discretion. Payment terms and conditions will be clearly communicated at the time of booking.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall Aaraam Properties or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if Aaraam Properties or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>7. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services. By using our services, you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>

            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold Aaraam Properties harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our services, your violation of these terms, or your violation of any rights of another.
            </p>

            <h2>9. Modifications to Terms</h2>
            <p>
              Aaraam Properties may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <ul>
              <li>Email: legal@araamproperties.com</li>
              <li>Phone: +91 81041 24183 / +91 9136636577</li>
              <li>Address: Office No. 123, Business Center, Navi Mumbai - 400614</li>
            </ul>

            <h2>12. Severability</h2>
            <p>
              If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;