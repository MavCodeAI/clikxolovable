import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const TermsOfService = () => {
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sections = [
    {
      title: "Acceptance of Terms",
      content: `By accessing and using ClikXo's services, you accept and agree to be bound by the terms and provision of this agreement.
      If you do not agree to abide by the above, please do not use this service.

Your use of our services constitutes your agreement to these terms. We reserve the right to modify these terms at any time,
and your continued use after such modifications constitutes acceptance of the updated terms.`
    },
    {
      title: "Description of Services",
      content: `ClikXo provides comprehensive digital marketing and web development services including but not limited to:

• Web design and development
• Digital marketing campaigns
• Search engine optimization
• Social media management
• Graphic design services
• UI/UX design consultation

Our services are provided on a project basis or through ongoing managed services agreements.`
    },
    {
      title: "User Obligations",
      content: `As a user of our services, you agree to:

• Provide accurate and complete information
• Maintain the confidentiality of your account credentials
• Use our services in compliance with applicable laws
• Respect intellectual property rights
• Not engage in fraudulent or harmful activities
• Notify us immediately of any unauthorized use of your account

You are responsible for all activities conducted through your account.`
    },
    {
      title: "Intellectual Property",
      content: `All content, features, and functionality of our services, including but not limited to text, graphics, logos, button icons,
      images, audio clips, digital downloads, and software are the exclusive property of ClikXo or its licensors.

You may not reproduce, distribute, display, or create derivative works of our proprietary materials without express written permission.

The work we create for you will be assigned according to the terms specified in your individual project agreement.`
    },
    {
      title: "Payment Terms",
      content: `Payment terms are established on a project-by-project basis and outlined in your service agreement. General terms include:

• All fees are quoted in UAE Dirhams unless otherwise specified
• 50% deposit required before project commencement
• Final payment due upon project completion
• Late payments may incur additional charges
• All services are subject to final review and client approval

We reserve the right to suspend services for non-payment.`
    },
    {
      title: "Service Deliverables",
      content: `We provide deliverables according to the specifications outlined in your project brief and initial discussions.
      Revisions are included up to the agreed limit. Additional revisions may incur extra charges.

All deliverables are subject to client approval. Once approved, we maintain a revision period of 30 days for any necessary corrections.`
    },
    {
      title: "Limitation of Liability",
      content: `ClikXo shall not be liable for indirect, incidental, special, or consequential damages including but not limited to
      loss of profits, data, or business interruption.

Our liability is limited to the amount paid for the specific service in question. We do not guarantee specific results
from our services as outcomes depend on various factors.`
    },
    {
      title: "Warranties",
      content: `We provide services with reasonable skill and care. However, we do not warrant that:

• Our services will meet all your requirements
• Services will be uninterrupted or error-free
• Results will be achieved within specific timeframes
• Third-party tools or platforms will continue to function

We provide a 30-day warranty on code quality and functionality for web development projects.`
    },
    {
      title: "Termination",
      content: `Either party may terminate services with 30 days written notice. Upon termination:

• All outstanding fees become immediately due
• We will provide copies of final deliverables
• Client retains rights to approved work
• Both parties will maintain confidentiality

We reserve the right to terminate services immediately for breach of these terms.`
    },
    {
      title: "Dispute Resolution",
      content: `Any disputes arising from these terms shall be resolved through:

• Initial informal negotiation
• Mediation by a neutral third party
• Arbitration in Dubai, UAE
• Governed by UAE law

We encourage resolving disputes amicably through direct communication.`
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Please read these terms carefully before using our services.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of ClikXo's website, services, and any related content or materials.
                By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you disagree with any part of these terms, you may not access our services. These terms apply to all visitors,
                users, and others who access or use our services.
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

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">Questions About These Terms?</h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <span>• Email: legal@clikxo.com</span>
                <span>• Phone: +971 44318653</span>
                <span>• Address: Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
