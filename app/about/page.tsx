import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building,
  Calendar,
  CheckCircle,
  FileText,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutPage() {
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
                    About Devrath Industries
                  </h1>
                  <p className="max-w-[600px] text-dark-blue-700 md:text-xl dark:text-sky-blue-200">
                    A legacy of excellence in manufacturing specialized doors
                    with 22 Years of Technical Expertise.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    className="interactive-button bg-gradient-professional text-white hover:shadow-lg"
                  >
                    <Link href="#our-story">Our Story</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="interactive-button border-sky-blue-300 text-sky-blue-700 hover:bg-sky-blue-50 dark:border-sky-blue-700 dark:text-sky-blue-400 dark:hover:bg-dark-blue-800"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
                    alt="Devrath Industries Headquarters"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">
                      Devrath Industries Headquarters - Hingna, Nagpur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900"
          id="our-story"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Story
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  From humble beginnings to industry leadership
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Founded in 2024</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Devrath Industries has been at the forefront of innovation
                    and manufacturing excellence for over two decades. With 22
                    years of experience, we have continuously evolved to meet
                    industry standards and customer demands.
                  </p>

                  <div className="flex items-center gap-2 mt-6">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">
                      Recognition & Certification
                    </h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our commitment to quality has earned us ISO 9001:2015
                    certification and numerous industry awards. We're proud to
                    be recognized as one of the leading manufacturers of
                    specialized doors in India, with our products installed in
                    critical facilities across the country.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=2940&auto=format&fit=crop"
                    alt="Devrath Industries Early Days"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">
                      Our early years in manufacturing
                    </p>
                  </div>
                </div>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop"
                    alt="Devrath Industries Modern Facility"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">
                      Our current state-of-the-art facility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-blue-50 dark:bg-dark-blue-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mission & Vision
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Guiding principles that drive our innovation and excellence
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  To provide innovative, high-quality door solutions that
                  enhance safety, security, and hygiene in critical
                  environments, while delivering exceptional value and service
                  to our customers.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Commitment to quality and innovation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Customer-centric approach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Continuous improvement in manufacturing</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  To be the leading manufacturer of specialized doors in Asia,
                  recognized for our technical excellence, innovative solutions,
                  and commitment to sustainability and social responsibility.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Expand our presence across Asia by 2030</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Develop eco-friendly manufacturing processes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>
                      Invest in R&D for next-generation door solutions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Leadership Team
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Meet the experts behind our success
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop"
                    alt="Devendra Rathod"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">
                    Talendra Harinkhede and Vasu Nair
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Founder & CEO
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    With over 30 years of experience in industrial
                    manufacturing, Devendra leads our company with vision and
                    expertise.
                  </p>
                </div>
              </div> */}
        {/* <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2876&auto=format&fit=crop"
                    alt="Priya Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Priya Sharma</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Chief Technical Officer
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    A mechanical engineer with expertise in door systems, Priya
                    oversees all technical aspects of our products.
                  </p>
                </div>
              </div> */}
        {/* <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop"
                    alt="Rajiv Mehta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Rajiv Mehta</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Head of Operations
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Rajiv ensures our manufacturing processes run smoothly and
                    efficiently, maintaining our high quality standards.
                  </p>
                </div>
              </div> */}
        {/* </div>
          </div>
        </section> */}

        {/* Manufacturing Facility Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-professional-light dark:bg-dark-blue-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Manufacturing Facility
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Where innovation meets precision
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop"
                    alt="Manufacturing Facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[150px] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2940&auto=format&fit=crop"
                      alt="Manufacturing Process"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[150px] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1565514020179-026b92b2d70b?q=80&w=2940&auto=format&fit=crop"
                      alt="Quality Testing"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">
                  State-of-the-Art Equipment
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our 10,000 sq. ft. facility in Hingna, Nagpur is equipped with
                  the latest technology for precision manufacturing of
                  specialized doors. We've invested in advanced CNC machines,
                  automated welding systems, and computerized testing equipment
                  to ensure the highest quality standards.
                </p>
                <h3 className="text-2xl font-bold mt-4">Quality Control</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Every door undergoes rigorous testing in our dedicated quality
                  control lab. We test for fire resistance, bacterial growth
                  inhibition, security features, and durability to ensure our
                  products meet or exceed industry standards.
                </p>
                <h3 className="text-2xl font-bold mt-4">
                  Sustainable Practices
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We're committed to reducing our environmental footprint
                  through energy-efficient manufacturing processes, waste
                  reduction, and responsible material sourcing. Our facility
                  includes solar panels that provide 30% of our energy needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Certifications & Awards
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Recognition of our commitment to quality and excellence
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center">ISO 9001:2015</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Quality Management System Certification
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center">
                  ISO 14001:2015
                </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Environmental Management System Certification
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center">
                  Best Manufacturer Award
                </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Maharashtra Industrial Development Association, 2019
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center">
                  Innovation Excellence
                </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  CII Industrial Innovation Awards, 2021
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-sky-blue-500 to-dark-blue-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Work With Us?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact our team to discuss your specialized door requirements
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  className="interactive-button bg-white text-sky-blue-700 hover:bg-sky-blue-50 hover:shadow-lg"
                >
                  <Link href="/contact">Contact Us</Link>
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
