import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageSquare, Clock, Code, Smartphone, Palette, TrendingUp } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20).optional().or(z.literal("")),
  serviceType: z.string().min(1, "Please select a service"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  companySize: z.string().min(1, "Please select your company/project scale"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      projectType: "",
      budget: "",
      timeline: "",
      companySize: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { data: responseData, error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "✓ Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "✗ Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden py-24">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-glow/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-primary/3 to-orange-glow/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Get In Touch</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-background mb-6 uppercase tracking-tighter leading-[1.1]">
            Let's Build <span
              className="text-background"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--orange-glow)), hsl(var(--primary)))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                filter: 'brightness(1.1)',
                textShadow: '0 0 30px hsl(var(--primary) / 0.3)',
                fontWeight: 900
              }}
            >
              Something Extraordinary
            </span> Together
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium pt-2">
            Ready to transform your digital presence? We're here to turn your vision into reality.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Connect With Us</h3>

                {/* Modern Contact Cards */}
                <div className="space-y-4">
                  {/* Email Card */}
                  <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-glow rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Mail className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Email Us</h4>
                        <a
                          href="mailto:contact@clikxo.com"
                          className="text-gray-700 hover:text-primary font-semibold text-lg transition-colors group-hover:underline block mb-1"
                        >
                          contact@clikxo.com
                        </a>
                        <p className="text-gray-500 text-sm font-medium">We typically respond within 2 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-glow rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Phone className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Call Us</h4>
                        <a
                          href="tel:+97144318653"
                          className="text-gray-700 hover:text-primary font-semibold text-lg transition-colors group-hover:underline block mb-1"
                        >
                          +971 44 318 653
                        </a>
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                          <Clock className="w-4 h-4" />
                          <span>Mon-Fri: 9AM - 6PM (GST)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-glow rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Visit Our Office</h4>
                        <p className="text-gray-700 font-semibold text-lg mb-2">Dubai, UAE</p>
                        <p className="text-gray-500 text-sm font-medium">Business Bay, Dubai</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats/Info */}
              <div className="bg-gradient-to-r from-primary/5 to-orange-glow/5 p-8 rounded-2xl border border-primary/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-primary mb-1">24h</div>
                    <div className="text-sm font-semibold text-gray-700">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-primary mb-1">500+</div>
                    <div className="text-sm font-semibold text-gray-700">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-primary mb-1">5.0</div>
                    <div className="text-sm font-semibold text-gray-700">Client Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-primary mb-1">10+</div>
                    <div className="text-sm font-semibold text-gray-700">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-200/50 shadow-2xl">
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Send a Message</h3>
                    <p className="text-gray-600 font-medium">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  placeholder="Your Full Name *"
                                  {...field}
                                  className="h-14 bg-gray-50/50 border-2 border-gray-200 text-gray-900 placeholder:text-gray-500 rounded-xl font-semibold text-base focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all duration-300 hover:border-gray-300"
                                  disabled={form.formState.isSubmitting}
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-500 font-semibold mt-2" />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Your Email *"
                                  {...field}
                                  className="h-14 bg-gray-50/50 border-2 border-gray-200 text-gray-900 placeholder:text-gray-500 rounded-xl font-semibold text-base focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all duration-300 hover:border-gray-300"
                                  disabled={form.formState.isSubmitting}
                                />
                              </FormControl>
                              <FormMessage className="text-red-500 font-semibold mt-2" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="Your Phone (Optional)"
                                  {...field}
                                  className="h-14 bg-gray-50/50 border-2 border-gray-200 text-gray-900 placeholder:text-gray-500 rounded-xl font-semibold text-base focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all duration-300 hover:border-gray-300"
                                  disabled={form.formState.isSubmitting}
                                />
                              </FormControl>
                              <FormMessage className="text-red-500 font-semibold mt-2" />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Service-Related Fields */}
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-bold text-base">Service Interest *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={form.formState.isSubmitting}>
                              <FormControl>
                                <SelectTrigger className="h-14 bg-gray-50/50 border-2 border-gray-200 text-gray-900 rounded-xl font-semibold text-base focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all duration-300 hover:border-gray-300">
                                  <SelectValue placeholder="What service are you interested in?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="web-development">
                                  <div className="flex items-center gap-3">
                                    <Code className="w-4 h-4 text-primary" />
                                    <span>Web Development</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="app-development">
                                  <div className="flex items-center gap-3">
                                    <Smartphone className="w-4 h-4 text-primary" />
                                    <span>App Development</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="graphics-designing">
                                  <div className="flex items-center gap-3">
                                    <Palette className="w-4 h-4 text-primary" />
                                    <span>Graphics Designing</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="digital-marketing">
                                  <div className="flex items-center gap-3">
                                    <TrendingUp className="w-4 h-4 text-primary" />
                                    <span>Digital Marketing</span>
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500 font-semibold mt-2" />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-bold text-base">Project Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={form.formState.isSubmitting}>
                                <FormControl>
                                  <SelectTrigger className="h-14 bg-gray-50/50 border-2 border-gray-200 text-gray-900 rounded-xl font-semibold text-base focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all duration-300 hover:border-gray-300">
                                    <SelectValue placeholder="What type of project?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="new-project">New Project</SelectItem>
                                  <SelectItem value="redesign">Redesign/Revamp</SelectItem>
                                  <SelectItem value="maintenance">Maintenance/Update</SelectItem>
                                  <SelectItem value="consultation">Consultation</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-500 font-semibold mt-2" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-bold text-base">Budget Range *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={form.formState.isSubmitting}>
                                <FormControl>
                                  <SelectTrigger className="h-14 bg-gray-50/50 border-2 border-gray-200 text-gray-900 rounded-xl font-semibold text-base focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all duration-300 hover:border-gray-300">
                                    <SelectValue placeholder="Your budget range?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                  <SelectItem value="over-100k">Over $100,000</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-500 font-semibold mt-2" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-bold text-base">Timeline *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={form.formState.isSubmitting}>
                                <FormControl>
                                  <SelectTrigger className="h-14 bg-gray-50/50 border-2 border-gray-200 text-gray-900 rounded-xl font-semibold text-base focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all duration-300 hover:border-gray-300">
                                    <SelectValue placeholder="When do you need it?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="asap">As soon as possible</SelectItem>
                                  <SelectItem value="1-month">Within 1 month</SelectItem>
                                  <SelectItem value="2-3-months">2-3 months</SelectItem>
                                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                                  <SelectItem value="6-months-plus">6+ months</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-500 font-semibold mt-2" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-bold text-base">Company/Project Scale *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={form.formState.isSubmitting}>
                                <FormControl>
                                  <SelectTrigger className="h-14 bg-gray-50/50 border-2 border-gray-200 text-gray-900 rounded-xl font-semibold text-base focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all duration-300 hover:border-gray-300">
                                    <SelectValue placeholder="Company/project size?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                                  <SelectItem value="small-business">Small Business (11-50 employees)</SelectItem>
                                  <SelectItem value="medium-business">Medium Business (51-200 employees)</SelectItem>
                                  <SelectItem value="enterprise">Enterprise (200+ employees)</SelectItem>
                                  <SelectItem value="individual">Individual/Personal Project</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-500 font-semibold mt-2" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project, goals, and timeline... *"
                                {...field}
                                rows={6}
                                className="bg-gray-50/50 border-2 border-gray-200 text-gray-900 placeholder:text-gray-500 resize-none rounded-xl font-semibold text-base focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all duration-300 hover:border-gray-300"
                                disabled={form.formState.isSubmitting}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 font-semibold mt-2" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="group relative w-full h-14 bg-gradient-to-r from-primary via-orange-glow to-primary hover:from-orange-glow hover:via-primary hover:to-orange-glow text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                        disabled={form.formState.isSubmitting}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {form.formState.isSubmitting ? (
                            <>
                              <Spinner size="sm" className="border-primary-foreground border-t-transparent" />
                              <span>Sending Message...</span>
                            </>
                          ) : (
                            <>
                              <MessageSquare className="h-5 w-5" />
                              <span>Send Message</span>
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-dim to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Button>

                      <p className="text-center text-gray-500 text-sm font-medium">
                        By submitting this form, you agree to our{' '}
                        <button type="button" className="text-primary font-bold hover:underline focus:outline-none">
                          Privacy Policy
                        </button>
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
