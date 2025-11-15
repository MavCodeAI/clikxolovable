import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:

• Personal information like name, email address, phone number, and business information
• Usage data and analytics about how you interact with our website and services
• Communications you send to us
• Payment information for billing purposes`
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, and support messages
• Communicate with you about products, services, and promotions
• Monitor usage and analyze trends
• Comply with legal obligations`
    },
    {
      title: "Information Sharing",
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:

• With service providers who assist in our operations
• When required by law or to protect our rights
• In connection with a business transfer or acquisition
• With your explicit consent`
    },
    {
      title: "Data Security",
      content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.

We regularly review and update our security practices to ensure ongoing protection of your data.`
    },
    {
      title: "Your Rights",
      content: `You have the right to:

• Access the personal information we have about you
• Correct inaccurate information
• Request deletion of your personal data
• Object to or restrict certain types of processing
• Data portability

To exercise these rights, please contact us using the information provided below.`
    },
    {
      title: "Cookies and Tracking",
      content: `We use cookies and similar technologies to enhance your experience, analyze usage, and assist in our marketing efforts. You can control cookie preferences through your browser settings. For more detailed information, see our Cookie Policy.`
    },
    {
      title: "International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your home country. We ensure appropriate safeguards are in place to protect your personal information during such transfers.`
    },
    {
      title: "Children's Privacy",
      content: `Our services are not intended for individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information.`
    },
    {
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Major changes will be communicated more prominently.`
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us:

• Email: privacy@clikxo.com
• Phone: +971 44318653
• Address: Dubai, UAE

We will respond to your inquiries within a reasonable timeframe.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-orange-glow/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: November 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ClikXo ("we," "our," or "us") respects your privacy and is committed to protecting your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website, use our services, or interact with us in other ways.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy.
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                    {expandedSections[index] ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>

                  {expandedSections[index] && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-border/50">
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
