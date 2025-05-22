import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-blue-50 to-sky-blue-100 dark:from-dark-blue-900 dark:to-dark-blue-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-dark-blue-900 dark:text-sky-blue-100">
                    Contact Devrath Industries
                  </h1>
                  <p className="max-w-[600px] text-dark-blue-700 md:text-xl dark:text-sky-blue-200">
                    Get in touch with our team to discuss your specialized door
                    requirements or request a quote.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    className="interactive-button bg-gradient-professional text-white hover:shadow-lg"
                  >
                    <a href="#contact-form">Contact Form</a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="interactive-button border-sky-blue-300 text-sky-blue-700 hover:bg-sky-blue-50 dark:border-sky-blue-700 dark:text-sky-blue-400 dark:hover:bg-dark-blue-800"
                  >
                    <a href="#locations">Our Locations</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2874&auto=format&fit=crop"
                    alt="Devrath Industries Contact"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 right-4 glass-effect p-3 rounded-lg text-xs z-20">
                    We're here to help with your specialized door needs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get In Touch
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Multiple ways to reach our team
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Our customer service team is available Monday to Saturday, 9am
                  to 6pm IST.
                </p>
                <div className="mt-2">
                  <p className="font-medium">Sales & Inquiries:</p>
                  <p className="text-primary">+91 XXXX XXX XXX</p>
                </div>
                <div className="mt-2">
                  <p className="font-medium">Technical Support:</p>
                  <p className="text-primary">+91 XXXX XXX XXX</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Send us an email and we'll get back to you within 24 hours on
                  business days.
                </p>
                <div className="mt-2">
                  <p className="font-medium">General Inquiries:</p>
                  <p className="text-primary">info@devrathindustries.com</p>
                </div>
                <div className="mt-2">
                  <p className="font-medium">Sales Department:</p>
                  <p className="text-primary">info@devrathindustries.com</p>
                </div>
                <div className="mt-2">
                  <p className="font-medium">Support:</p>
                  <p className="text-primary">info@devrathindsutries.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Business Hours</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Our office and manufacturing facility operating hours.
                </p>
                <div className="mt-2 w-full">
                  <div className="flex justify-between py-1 border-b">
                    <p className="font-medium">Monday - Friday:</p>
                    <p>9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <p className="font-medium">Saturday:</p>
                    <p>9:00 AM - 2:00 PM</p>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <p className="font-medium">Sunday:</p>
                    <p>Closed</p>
                  </div>
                  <div className="flex justify-between py-1">
                    <p className="font-medium">Holidays:</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-sky-blue-50 dark:bg-dark-blue-800"
          id="contact-form"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Send Us a Message
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols">
              <div className="space-y-4">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2940&auto=format&fit=crop"
                    alt="Contact Us"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <h3 className="text-xl font-bold">Connect With Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Follow us on social media for the latest updates, product
                    announcements, and industry insights.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-sky-blue-600 hover:text-sky-blue-800 dark:text-sky-blue-400 dark:hover:text-sky-blue-300"
                    >
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="text-sky-blue-600 hover:text-sky-blue-800 dark:text-sky-blue-400 dark:hover:text-sky-blue-300"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="text-sky-blue-600 hover:text-sky-blue-800 dark:text-sky-blue-400 dark:hover:text-sky-blue-300"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="#"
                      className="text-sky-blue-600 hover:text-sky-blue-800 dark:text-sky-blue-400 dark:hover:text-sky-blue-300"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="space-y-4">
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors focus:border-primary"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors focus:border-primary"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors focus:border-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors focus:border-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors focus:border-primary"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors focus:border-primary"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button className="interactive-button bg-gradient-professional text-white hover:shadow-lg">
                    Send Message
                  </Button>
                </form>
              </div> */}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section
          className="flex items-center justify-center min-h-screen w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900"
          id="locations"
        >
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Locations
                </h2>
                <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Visit our offices and manufacturing facilities
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols">
              <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                <h3 className="text-xl font-bold">
                  Headquarters & Manufacturing Facility
                </h3>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Plot No. 123, MIDC Industrial Area, Hingna Road, Nagpur,
                      Maharashtra 440016, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      +91 XXXX XXX XXX
                    </p>
                  </div>
                </div>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg mt-4">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.5006184345918!2d78.9758883988015!3d21.11246755275419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495004465866d%3A0xfc933142fc70f990!2sDEVRATH%20INDUSTRIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1747898436559!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-blue-50 dark:bg-dark-blue-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find answers to common questions about our products and
                  services
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="products">Products</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        What are your business hours?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our office and manufacturing facility are open Monday to
                        Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00
                        AM to 2:00 PM. We are closed on Sundays and public
                        holidays.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        How can I request a quote?
                      </AccordionTrigger>
                      <AccordionContent>
                        You can request a quote by filling out our contact form,
                        sending an email to sales@devrathind.com, or calling our
                        sales team at +91 XXXX XXX XXX. Please provide as much
                        detail as possible about your requirements to help us
                        provide an accurate quote.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Do you offer site visits for consultations?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer site visits for consultations to better
                        understand your requirements and provide tailored
                        solutions. Our technical team can visit your location to
                        assess the site conditions and provide recommendations.
                        Please contact our sales team to schedule a site visit.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="products" className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        What types of doors do you manufacture?
                      </AccordionTrigger>
                      <AccordionContent>
                        We specialize in manufacturing anti-fire doors,
                        anti-bacterial doors, and high-security doors for
                        pharmaceutical labs, clean rooms, defense facilities,
                        and other critical environments. Our doors are
                        customizable to meet specific requirements for size,
                        security features, and finishes.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        What certifications do your doors have?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our doors are certified to meet various industry
                        standards, including fire resistance ratings (IS 3614,
                        BS 476 Part 22), anti-bacterial properties (ISO 22196,
                        JIS Z 2801), and security ratings (EN 1627-1630, EN
                        1522-1523). We also hold ISO 9001:2015 and ISO
                        14001:2015 certifications for our quality and
                        environmental management systems.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Can you customize doors to our specific requirements?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer fully customizable door solutions to meet
                        your specific requirements. We can customize the
                        dimensions, materials, finishes, security features, and
                        other aspects of our doors to suit your needs. Our
                        technical team works closely with clients to design and
                        manufacture doors that meet their exact specifications.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="services" className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Do you provide installation services?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, we provide professional installation services for
                        all our doors. Our trained technicians ensure proper
                        installation according to industry standards and our
                        quality guidelines. Installation is a critical part of
                        ensuring the performance and longevity of our doors,
                        especially for fire-rated and security doors.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        What warranty do you offer on your products?
                      </AccordionTrigger>
                      <AccordionContent>
                        We offer a standard 5-year warranty on our
                        fire-resistant and anti-bacterial doors, and a 10-year
                        warranty on our security doors. The warranty covers
                        manufacturing defects and material failures under normal
                        use conditions. Extended warranty options are also
                        available. Please note that proper installation by our
                        certified technicians is required to maintain the
                        warranty.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Do you offer maintenance services?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer comprehensive maintenance services for all
                        our doors. Regular maintenance is essential to ensure
                        the proper functioning and longevity of specialized
                        doors, especially fire-rated and security doors. We
                        recommend annual professional inspection and
                        maintenance. We offer maintenance contracts that include
                        scheduled inspections, servicing, and priority response
                        for repairs.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-sky-blue-500 to-dark-blue-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Secure Your Facility?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss your specialized door requirements
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  className="interactive-button bg-white text-sky-blue-700 hover:bg-sky-blue-50 hover:shadow-lg"
                >
                  <a href="#contact-form">Contact Us Now</a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="interactive-button border-white text-black hover:bg-white/10"
                >
                  <Link href="/products">View Our Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
