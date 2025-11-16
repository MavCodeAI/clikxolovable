import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "✓ Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "✗ Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--dark-charcoal) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--dark-charcoal) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-glow/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider border border-primary/20">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-background mb-6 uppercase tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-text-dark text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to take your digital marketing to the next level? Let's talk and create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-in-left">
            <div className="group flex items-start space-x-5 p-6 bg-background/50 border-2 border-border rounded-2xl hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-background" />
              </div>
              <div>
                <h3 className="text-background font-black text-xl mb-2 uppercase">Email</h3>
                <a href="mailto:contact@clikxo.com" className="text-gray-text-dark hover:text-primary transition-colors font-semibold">
                  contact@clikxo.com
                </a>
              </div>
            </div>

            <div className="group flex items-start space-x-5 p-6 bg-background/50 border-2 border-border rounded-2xl hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-background" />
              </div>
              <div>
                <h3 className="text-background font-black text-xl mb-2 uppercase">Phone</h3>
                <a href="tel:+97144318653" className="text-gray-text-dark hover:text-primary transition-colors font-semibold">
                  +971 44318653
                </a>
              </div>
            </div>

            <div className="group flex items-start space-x-5 p-6 bg-background/50 border-2 border-border rounded-2xl hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-background" />
              </div>
              <div>
                <h3 className="text-background font-black text-xl mb-2 uppercase">Location</h3>
                <p className="text-gray-text-dark font-semibold">Dubai, UAE</p>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 animate-fade-in bg-background/50 p-8 rounded-2xl border-2 border-border shadow-xl">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Your Name *"
                        {...field}
                        className="h-14 bg-white border-2 border-border text-background placeholder:text-gray-text-dark/60 rounded-xl font-semibold focus:border-primary transition-colors"
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive font-semibold" />
                  </FormItem>
                )}
              />
              
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
                        className="h-14 bg-white border-2 border-border text-background placeholder:text-gray-text-dark/60 rounded-xl font-semibold focus:border-primary transition-colors"
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive font-semibold" />
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
                        className="h-14 bg-white border-2 border-border text-background placeholder:text-gray-text-dark/60 rounded-xl font-semibold focus:border-primary transition-colors"
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive font-semibold" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message *"
                        {...field}
                        rows={6}
                        className="bg-white border-2 border-border text-background placeholder:text-gray-text-dark/60 resize-none rounded-xl font-semibold focus:border-primary transition-colors"
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive font-semibold" />
                  </FormItem>
                )}
              />
              
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-gradient-to-r from-primary via-orange-glow to-primary text-background hover:shadow-[0_0_30px_rgba(255,140,0,0.4)] transition-all duration-300 font-black uppercase text-base tracking-wider rounded-xl border-2 border-primary/20 hover:scale-[1.02]"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
