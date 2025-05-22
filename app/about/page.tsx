"use client"
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building,
  Calendar,
  CheckCircle,
  ExternalLink,
  FileText,
  Shield,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
const certifications = [
  {
    id: 1,
    name: "ISO 45001:2018",
    description: "Occupational Health and Safety Management Certification",
    img: "/Images/ISO-2018.png",
    year: "2025",
    issuer: "International Organization for Standardization",
    verified: true,
  },
  {
    id: 2,
    name: "ISO 14001:2015",
    description: "Environmental Management System Certification",
    img: "/Images/ISO-14001-2015.png",
    year: "2025",
    issuer: "International Organization for Standardization",
    verified: true,
  },
  {
    id: 3,
    name: "ISO 9001:2015",
    description: "Quality Management System Certification",
    img: "/Images/DEVRATH_INDUSTRIES_QMS.png",
    year: "2025",
    issuer: "International Organization for Standardization",
    verified: true,
  },
  {
    id: 4,
    name: "NQCAB CE",
    description: "European Conformity Certification",
    img: "/Images/Certificate_18.png",
    year: "2025",
    issuer: "NQCAB Certification Board",
    verified: true,
  },
  {
    id: 5,
    name: "GMP",
    description: "Good Manufacturing Practices Certification",
    img: "/Images/Certificate _GMP.png",
    year: "2025",
    issuer: "World Health Organization",
    verified: true,
  },
]


export default function AboutPage() {
const [fullscreenCert, setFullscreenCert] = useState(null)

  const openFullscreen = (cert :any) => {
    setFullscreenCert(cert)
    document.body.style.overflow = "hidden"
  }

  const closeFullscreen = () => {
    setFullscreenCert(null)
    document.body.style.overflow = "auto"
  }
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
  <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full dark:bg-blue-900/20 mb-4">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200">
              Certifications & Awards
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our commitment to excellence has been recognized by leading industry organizations. Each certification
              represents our dedication to quality, security, and customer satisfaction.
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <Badge
              variant="outline"
              className="text-sm bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-800 px-3 py-1"
            >
              <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-green-500" />
              All certifications verified
            </Badge>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative flex flex-col items-center space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900"
            >
              <div className="absolute top-3 right-3">
                {cert.verified && (
                  <div className="text-green-500 dark:text-green-400" title="Verified">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
              </div>

              <div className="relative w-24 h-24 overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 p-2 flex items-center justify-center">
                <img
                  src={cert.img || "/placeholder.svg"}
                  alt={cert.name}
                  className="cursor-pointer object-contain transition-transform duration-500 group-hover:scale-110"
                  onClick={() => openFullscreen(cert)}
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 rounded-lg"></div>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {cert.name}
                </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">{cert.description}</p>
                <div className="pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    onClick={() => openFullscreen(cert)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal with Enhanced Details */}
      {fullscreenCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={closeFullscreen}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={closeFullscreen}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-lg p-2 flex items-center justify-center">
                <img
                  src={fullscreenCert.img || "/placeholder.svg"}
                  alt={fullscreenCert.name}
                  className="object-contain"
                />
              </div>

              <div className="flex-1 space-y-4 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{fullscreenCert.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{fullscreenCert.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">Issued by:</span>
                      <span className="text-sm text-gray-900 dark:text-white">{fullscreenCert.issuer}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">Year:</span>
                      <span className="text-sm text-gray-900 dark:text-white">{fullscreenCert.year}</span>
                    </div>
                  </div>

                  {fullscreenCert.verified && (
                    <div className="flex items-center justify-center md:justify-start mt-2">
                      <Badge className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                        <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                        Verified Certification
                      </Badge>
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  This certification demonstrates our commitment to maintaining the highest standards in our industry.
                  It is awarded after a rigorous evaluation process and represents our dedication to excellence.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      )}
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
