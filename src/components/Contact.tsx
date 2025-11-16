import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20).optional().or(z.literal("")),
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
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Submitting contact form:", data);
      
      const { data: responseData, error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        console.error("Error sending email:", error);
        throw error;
      }

      console.log("Email sent successfully:", responseData);
      
      toast({
        title: "✓ Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error: any) {
      console.error("Failed to send message:", error);
      toast({
        title: "✗ Error",
        description: error.message || "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white-section relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, hsl(var(--dark-charcoal) / 0.15) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Decorative Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/8 to-orange-glow/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-orange-dim/6 to-primary/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-black font-heading uppercase tracking-widest border-2 border-primary/20 shadow-lg shadow-primary/10">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-background mb-8 uppercase tracking-tighter leading-[1.1]">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-glow to-primary animate-gradient">Touch</span>
          </h2>
          <p className="text-gray-textDark text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Ready to take your digital marketing to the next level? Let's talk and create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6 animate-slide-in-left">
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-orange-glow/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 p-6 md:p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-textDark/10 rounded-2xl md:rounded-3xl hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-orange-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-background font-black font-heading text-lg md:text-2xl mb-2 md:mb-3 uppercase tracking-tight">Email</h3>
                  <a href="mailto:contact@clikxo.com" className="text-gray-textDark hover:text-primary transition-colors font-bold text-base md:text-lg group-hover:underline break-all">
                    contact@clikxo.com
                  </a>
                  <p className="text-gray-textDark/60 text-xs md:text-sm mt-2 font-medium">Send us an email anytime</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-orange-glow/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 p-6 md:p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-textDark/10 rounded-2xl md:rounded-3xl hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-orange-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-background font-black font-heading text-lg md:text-2xl mb-2 md:mb-3 uppercase tracking-tight">Phone</h3>
                  <a href="tel:+97144318653" className="text-gray-textDark hover:text-primary transition-colors font-bold text-base md:text-lg group-hover:underline break-all">
                    +971 44318653
                  </a>
                  <p className="text-gray-textDark/60 text-xs md:text-sm mt-2 font-medium">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-orange-glow/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 p-6 md:p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-textDark/10 rounded-2xl md:rounded-3xl hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-orange-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-background font-black font-heading text-lg md:text-2xl mb-2 md:mb-3 uppercase tracking-tight">Location</h3>
                  <p className="text-gray-textDark font-bold text-base md:text-lg">Dubai, UAE</p>
                  <p className="text-gray-textDark/60 text-xs md:text-sm mt-2 font-medium">Visit us at our office</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in">
            <div className="relative group overflow-hidden">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-glow to-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-4 md:space-y-6 bg-white/90 backdrop-blur-sm p-6 md:p-12 rounded-2xl md:rounded-3xl border-2 border-gray-textDark/10 shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-500">
                  <div className="text-center mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black font-heading text-background mb-2 md:mb-3 uppercase tracking-tight leading-tight">Send us a Message</h3>
                    <p className="text-gray-textDark font-medium text-sm md:text-base">Fill out the form below and we'll get back to you shortly</p>
                  </div>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                            <Input
                              placeholder="Your Full Name *"
                              {...field}
                              className="h-12 md:h-16 bg-white border-2 border-gray-textDark/20 text-background placeholder:text-gray-textDark/50 rounded-xl md:rounded-2xl font-bold text-base md:text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-gray-textDark/40"
                              disabled={form.formState.isSubmitting}
                            />
                        </FormControl>
                        <FormMessage className="text-destructive font-bold mt-2" />
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
                              className="h-12 md:h-16 bg-white border-2 border-gray-textDark/20 text-background placeholder:text-gray-textDark/50 rounded-xl md:rounded-2xl font-bold text-base md:text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-gray-textDark/40"
                              disabled={form.formState.isSubmitting}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive font-bold mt-2" />
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
                              className="h-12 md:h-16 bg-white border-2 border-gray-textDark/20 text-background placeholder:text-gray-textDark/50 rounded-xl md:rounded-2xl font-bold text-base md:text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-gray-textDark/40"
                              disabled={form.formState.isSubmitting}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive font-bold mt-2" />
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
                            placeholder="Tell us about your project... *"
                            {...field}
                            rows={5}
                            className="bg-white border-2 border-gray-textDark/20 text-background placeholder:text-gray-textDark/50 resize-none rounded-xl md:rounded-2xl font-bold text-base md:text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-gray-textDark/40"
                            disabled={form.formState.isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-destructive font-bold mt-2" />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="group relative w-full h-12 md:h-16 bg-gradient-to-r from-primary via-orange-glow to-primary hover:from-orange-glow hover:via-primary hover:to-orange-glow text-white font-black font-heading text-base md:text-lg uppercase tracking-widest rounded-xl md:rounded-2xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                    disabled={form.formState.isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                      {form.formState.isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 md:h-6 md:w-6 animate-spin" />
                          <span className="hidden sm:inline">Sending Message...</span>
                          <span className="sm:hidden">Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-dim to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>

                  <p className="text-center text-gray-textDark/60 text-sm font-medium mt-6">
                    By submitting this form, you agree to our <span className="text-primary font-bold cursor-pointer hover:underline">privacy policy</span>
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
