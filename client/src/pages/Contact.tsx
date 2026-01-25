import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, serviceOptions, type InsertMessage } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Contact() {
  const { mutate: sendMessage, isPending } = useCreateMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      service: undefined,
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    sendMessage(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-padding text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4 text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Get in touch with our team to discuss how we can support your IT needs.
          </motion.p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-slate-50">
        <div className="container-padding">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Have an urgent issue or prefer to speak directly? Use the contact information below to reach our team during business hours (8am-6pm CT, Monday through Friday). Emergency support available 24/7."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Phone</h3>
                  <a href="tel:+13463095514" className="text-primary font-semibold text-lg hover:underline block mb-2">
                    346.309.5514
                  </a>
                  <p className="text-sm text-slate-500">Monday-Friday: 8 AM - 6 PM CST</p>
                  <p className="text-sm text-slate-500">Emergency support available 24/7</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Email */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Email</h3>
                  <a href="mailto:contact@bluemogul.biz" className="text-primary font-semibold text-lg hover:underline block mb-2">
                    contact@bluemogul.biz
                  </a>
                  <p className="text-sm text-slate-500">Response within 4 business hours</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Location</h3>
                  <p className="text-slate-700 font-medium mb-2">Houston, Texas</p>
                  <p className="text-sm text-slate-500">Serving Texas, Louisiana, North Carolina</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Demo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Try Our Demo</h3>
                  <p className="text-sm text-slate-500 mb-3">Experience our Nextcloud private cloud solution firsthand</p>
                  <a 
                    href="https://demo.bluemogul.us/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Access Live Demo
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto">
            <SectionHeading 
              title="Send Us a Message" 
              subtitle="Fill out the form below and one of our IT specialists will get back to you promptly to discuss your technology needs."
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Card className="shadow-xl">
                <CardContent className="p-8 md:p-10">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John Doe" 
                                  {...field} 
                                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" 
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="john@company.com" 
                                  {...field} 
                                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" 
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What services are you inquiring about?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger 
                                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                                  data-testid="select-service"
                                >
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-50">
                                {serviceOptions.map((service) => (
                                  <SelectItem key={service} value={service} className="py-3 px-4" data-testid={`option-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="How can we help you?" 
                                className="min-h-[180px] bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none" 
                                {...field} 
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full h-12 text-lg" 
                        size="lg"
                        disabled={isPending}
                        data-testid="button-submit"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Veteran Badge */}
      <section className="py-12 bg-slate-50">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 text-center"
          >
            <Shield className="w-10 h-10 text-primary" />
            <div className="text-left">
              <h3 className="font-bold text-slate-900">Veteran-Owned Business</h3>
              <p className="text-slate-600 text-sm">Blue Mogul MSP is 100% veteran-owned and operated, bringing military precision and reliability to business technology solutions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your IT needs and discover how Blue Mogul MSP can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13463095514">
              <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-blue-50 font-bold">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
            <a href="mailto:contact@bluemogul.biz">
              <Button size="lg" variant="outline" className="h-12 px-8 text-white border-white/30 hover:bg-white/10 font-bold">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
