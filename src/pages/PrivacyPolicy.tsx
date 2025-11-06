import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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

            <h2>1. Information We Collect</h2>
            <p>
              At Aaraam Properties, we collect information that you provide directly to us, such as when you create an account, fill out a form, or contact us for support. This may include your name, email address, phone number, address, and property preferences.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Communicate with you about properties, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information in the following circumstances:
            </p>
            <ul>
              <li>With your consent or at your direction</li>
              <li>With third-party vendors, consultants, and service providers who need access to such information to carry out work on our behalf</li>
              <li>To comply with laws or respond to lawful requests and legal process</li>
              <li>To protect the rights and property of Aaraam Properties, our users, and others</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We take reasonable measures to help protect personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic storage system is completely secure.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We store the information we collect for as long as is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <p>You have several rights regarding your personal information:</p>
            <ul>
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Data portability</li>
            </ul>

            <h2>7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@araamproperties.com</li>
              <li>Phone: +91 81041 24183 / +91 9136636577</li>
              <li>Address: Office No. 123, Business Center, Navi Mumbai - 400614</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
