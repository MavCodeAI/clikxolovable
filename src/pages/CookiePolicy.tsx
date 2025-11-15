import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Cookie } from "lucide-react";

const CookiePolicy = () => {
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const cookieTypes = [
    {
      type: "Essential Cookies",
      purpose: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.",
      examples: "Session management, security, remembering your cookie preferences"
    },
    {
      type: "Analytics Cookies",
      purpose: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.",
      examples: "Google Analytics, website traffic analysis"
    },
    {
      type: "Functional Cookies",
      purpose: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
      examples: "Remembering your preferences, language settings, form data"
    },
    {
      type: "Marketing Cookies",
      purpose: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts.",
      examples: "Social media pixels, targeted advertising, remarketing"
    }
  ];

  const sections = [
    {
      title: "What Are Cookies?",
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They contain information about your visit that can be used to provide a better browsing experience.

Cookies help websites remember your preferences, login information, and other customization details. They also help us analyze site traffic and understand where our visitors are coming from.`
    },
    {
      title: "How We Use Cookies",
      content: `We use cookies for several purposes:

• To provide essential website functionality
• To remember your preferences and settings
• To analyze how our website is used
• To improve user experience
• To deliver relevant advertising
• To provide social media features

We may also use web beacons, pixel tags, and other tracking technologies that work alongside cookies.`
    },
    {
      title: "Third-Party Cookies",
      content: `Some cookies on our website are set by third-party services that appear on our pages. We have no control over these cookies, and they are subject to the respective third party's privacy policy.

These include:
• Google Analytics for website analytics
• Social media platforms for sharing functionality
• Advertising networks for targeted advertising`
    },
    {
      title: "Managing Cookies",
      content: `You have control over cookies and can manage them in several ways:

• Browser settings: Most web browsers allow you to control cookies through their settings preferences
• Opt-out options: You can opt-out of interest-based advertising through industry organizations
• Cookie preferences: Use our cookie consent banner to customize your preferences

Please note that disabling certain cookies may affect website functionality.`
    },
    {
      title: "Cookie Retention",
      content: `Different types of cookies have different lifespans:

• Session cookies: Deleted when you close your browser
• Persistent cookies: Remain until deleted or expired (typically 1-24 months)
• Flash cookies: Stored in Adobe Flash player, with different deletion methods

We regularly review and update our cookie practices to ensure compliance with applicable laws.`
    },
    {
      title: "Changes to This Policy",
      content: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We will notify you of any significant changes by:

• Updating the "Last updated" date at the top of this page
• Displaying a notice on our website
• Sending an email notification if you have provided contact information

Your continued use of our website after such changes constitutes acceptance of the updated policy.`
    },
    {
      title: "Contact Information",
      content: `If you have any questions about our use of cookies or this Cookie Policy, please contact us:

• Email: privacy@clikxo.com
• Phone: +971 44318653
• Address: Dubai, UAE

We are committed to protecting your privacy and ensuring transparency in our cookie practices.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-orange-glow/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Cookie className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Learn about how we use cookies to enhance your browsing experience.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Usage at ClikXo</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar technologies to improve your experience on our website, analyze traffic,
                and provide personalized content. This Cookie Policy explains what cookies are, how we use them,
                and your options for managing cookie preferences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our website, you consent to the use of cookies in accordance with this policy.
                You can withdraw your consent or manage your preferences at any time.
              </p>
            </div>

            {/* Cookie Types */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Types of Cookies We Use</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-3">{cookie.type}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{cookie.purpose}</p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Examples:</strong> {cookie.examples}
                    </div>
                  </div>
                ))}
              </div>
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

            {/* Cookie Settings */}
            <div className="mt-12 p-6 bg-orange-glow/10 rounded-lg border border-orange-glow/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">Cookie Management</h3>
              <p className="text-muted-foreground mb-4">
                You can manage your cookie preferences and withdraw consent at any time. Here's how:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex flex-col gap-2">
                  <strong className="text-foreground">Browser Settings</strong>
                  <span className="text-muted-foreground">Modify cookie settings in your browser preferences</span>
                </div>
                <div className="flex flex-col gap-2">
                  <strong className="text-foreground">Opt-out Links</strong>
                  <span className="text-muted-foreground">Use industry opt-out tools for targeted advertising</span>
                </div>
                <div className="flex flex-col gap-2">
                  <strong className="text-foreground">Contact Us</strong>
                  <span className="text-muted-foreground">Email us to manage your cookie preferences</span>
                </div>
                <div className="flex flex-col gap-2">
                  <strong className="text-foreground">Cookie Banner</strong>
                  <span className="text-muted-foreground">Use our on-site cookie consent tool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
