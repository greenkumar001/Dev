import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Fan, Hospital, Layers, Settings, Thermometer } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
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
                    Specialized Installation Services
                  </h1>
                  <p className="max-w-[600px] text-dark-blue-700 md:text-xl dark:text-sky-blue-200">
                    Professional AC duct and chamber installation for hospitals, pharmaceutical labs, and critical
                    environments.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="interactive-button bg-gradient-professional text-white hover:shadow-lg">
                    <Link href="#services">Our Services</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="interactive-button border-sky-blue-300 text-sky-blue-700 hover:bg-sky-blue-50 dark:border-sky-blue-700 dark:text-sky-blue-400 dark:hover:bg-dark-blue-800"
                  >
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                    alt="AC Duct Installation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">Professional AC duct installation by Devrath Industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900" id="services">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Installation Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive solutions for critical environments
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Fan className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AC Duct Installation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Professional installation of HVAC ductwork systems for hospitals, pharmaceutical labs, and other
                  critical environments requiring controlled air quality and temperature.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Custom ductwork design and fabrication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Anti-bacterial and anti-microbial duct options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Compliance with healthcare and pharmaceutical standards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Energy-efficient system design</span>
                  </li>
                </ul>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                    alt="AC Duct Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <Button asChild className="mt-4 interactive-button bg-gradient-professional text-white hover:shadow-lg">
                  <Link href="#ac-duct-details">Learn More</Link>
                </Button>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Chamber Installation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Specialized installation of clean rooms, isolation chambers, and controlled environment chambers for
                  healthcare facilities, research labs, and pharmaceutical manufacturing.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>ISO-certified clean room installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Negative and positive pressure chambers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Temperature and humidity controlled environments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Modular and customizable designs</span>
                  </li>
                </ul>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1581093458791-9d09c85a2a3e?q=80&w=2070&auto=format&fit=crop"
                    alt="Clean Room Chamber"
                    fill
                    className="object-cover"
                  />
                </div>
                <Button asChild className="mt-4 interactive-button bg-gradient-professional text-white hover:shadow-lg">
                  <Link href="#chamber-details">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AC Duct Installation Details */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-blue-50 dark:bg-dark-blue-800" id="ac-duct-details">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AC Duct Installation</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Precision engineering for optimal air quality and temperature control
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                    alt="Industrial AC Duct Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[150px] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop"
                      alt="AC Duct Detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[150px] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=2070&auto=format&fit=crop"
                      alt="HVAC System"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Comprehensive AC Duct Solutions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our AC duct installation services are designed to meet the stringent requirements of hospitals,
                  pharmaceutical labs, and other critical environments. We provide end-to-end solutions from design and
                  fabrication to installation and testing.
                </p>
                <h3 className="text-xl font-bold mt-4">Applications</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Hospital className="h-5 w-5 text-primary" />
                    <span>
                      <strong>Hospitals:</strong> Operating rooms, ICUs, isolation wards, and general patient areas
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <span>
                      <strong>Pharmaceutical:</strong> Manufacturing areas, clean rooms, and research labs
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-primary" />
                    <span>
                      <strong>Research Facilities:</strong> Laboratories, testing areas, and controlled environments
                    </span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold mt-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Anti-bacterial and anti-microbial duct materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>HEPA and ULPA filtration compatibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Pressure-tested and sealed systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Energy-efficient design and installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Compliance with ASHRAE, NABH, and other relevant standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chamber Installation Details */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900" id="chamber-details">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Chamber Installation</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Creating controlled environments for critical applications
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 order-2 md:order-1">
                <h3 className="text-2xl font-bold">Specialized Chamber Solutions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our chamber installation services provide controlled environments for healthcare, pharmaceutical, and
                  research applications. We specialize in clean rooms, isolation chambers, and specialized environments
                  where air quality, temperature, and pressure must be precisely controlled.
                </p>
                <h3 className="text-xl font-bold mt-4">Types of Chambers</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>
                      <strong>Clean Rooms:</strong> ISO Class 5-8 environments for pharmaceutical and medical device
                      manufacturing
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>
                      <strong>Isolation Chambers:</strong> Negative pressure rooms for infectious disease control
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>
                      <strong>Controlled Environment Chambers:</strong> Temperature and humidity controlled spaces for
                      sensitive processes
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>
                      <strong>Modular Clean Rooms:</strong> Flexible, reconfigurable clean environments
                    </span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold mt-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Seamless wall and ceiling systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Integrated HVAC and filtration systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Pressure monitoring and control systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Antimicrobial surfaces and materials</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=2070&auto=format&fit=crop"
                    alt="Clean Room Chamber"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[150px] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1581093458791-9d09c85a2a3e?q=80&w=2070&auto=format&fit=crop"
                      alt="Laboratory Chamber"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[150px] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop"
                      alt="Isolation Chamber"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-blue-50 dark:bg-dark-blue-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Recent Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Successful installations across healthcare and pharmaceutical sectors
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071&auto=format&fit=crop"
                    alt="City Hospital Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">City General Hospital</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Complete HVAC duct installation for a new 200-bed hospital, including specialized systems for
                  operating theaters and ICUs.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Location:</span>
                  <span className="ml-1">Mumbai, Maharashtra</span>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?q=80&w=2070&auto=format&fit=crop"
                    alt="Pharmaceutical Lab Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">MediPharma Research Labs</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Installation of ISO Class 6 clean rooms and specialized HVAC systems for a pharmaceutical research
                  facility.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Location:</span>
                  <span className="ml-1">Pune, Maharashtra</span>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop"
                    alt="Research Center Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">National Research Center</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Design and installation of specialized chambers and HVAC systems for a government research facility.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Location:</span>
                  <span className="ml-1">Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Installation Process
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A systematic approach to ensure quality and compliance
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="relative">
                <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-professional"></div>
                <div className="space-y-12">
                  <div className="relative grid gap-6 md:grid-cols-2">
                    <div className="flex md:justify-end">
                      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                        <h3 className="text-xl font-bold">1. Consultation & Assessment</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                          We begin with a thorough consultation to understand your requirements, followed by a site
                          assessment to evaluate technical feasibility and constraints.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex justify-center md:justify-start">
                      <div className="absolute left-1/2 top-6 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-primary md:left-0 md:translate-x-0"></div>
                      <div className="relative h-[150px] w-[200px] overflow-hidden rounded-lg shadow-lg md:ml-12">
                        <Image
                          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop"
                          alt="Consultation"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative grid gap-6 md:grid-cols-2">
                    <div className="relative flex justify-center md:justify-end">
                      <div className="absolute left-1/2 top-6 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-primary md:right-0 md:left-auto md:translate-x-0"></div>
                      <div className="relative h-[150px] w-[200px] overflow-hidden rounded-lg shadow-lg md:mr-12">
                        <Image
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                          alt="Design"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                        <h3 className="text-xl font-bold">2. Design & Engineering</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                          Our engineering team creates detailed designs and specifications for your HVAC duct or chamber
                          installation, ensuring compliance with all relevant standards.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative grid gap-6 md:grid-cols-2">
                    <div className="flex md:justify-end">
                      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                        <h3 className="text-xl font-bold">3. Fabrication & Preparation</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                          Components are fabricated to precise specifications in our facility, ensuring quality control
                          and adherence to design requirements.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex justify-center md:justify-start">
                      <div className="absolute left-1/2 top-6 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-primary md:left-0 md:translate-x-0"></div>
                      <div className="relative h-[150px] w-[200px] overflow-hidden rounded-lg shadow-lg md:ml-12">
                        <Image
                          src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=2070&auto=format&fit=crop"
                          alt="Fabrication"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative grid gap-6 md:grid-cols-2">
                    <div className="relative flex justify-center md:justify-end">
                      <div className="absolute left-1/2 top-6 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-primary md:right-0 md:left-auto md:translate-x-0"></div>
                      <div className="relative h-[150px] w-[200px] overflow-hidden rounded-lg shadow-lg md:mr-12">
                        <Image
                          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                          alt="Installation"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                        <h3 className="text-xl font-bold">4. Installation</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                          Our experienced installation team executes the project with precision, following strict
                          protocols to ensure quality and minimal disruption to your operations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative grid gap-6 md:grid-cols-2">
                    <div className="flex md:justify-end">
                      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-md dark:bg-gray-800">
                        <h3 className="text-xl font-bold">5. Testing & Commissioning</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                          Rigorous testing and commissioning procedures ensure that all systems meet performance
                          specifications and regulatory requirements before handover.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex justify-center md:justify-start">
                      <div className="absolute left-1/2 top-6 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-primary md:left-0 md:translate-x-0"></div>
                      <div className="relative h-[150px] w-[200px] overflow-hidden rounded-lg shadow-lg md:ml-12">
                        <Image
                          src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop"
                          alt="Testing"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                  Ready to Upgrade Your Facility?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss your AC duct and chamber installation requirements
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  className="interactive-button bg-white text-sky-blue-700 hover:bg-sky-blue-50 hover:shadow-lg"
                >
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="interactive-button border-white text-white hover:bg-white/10"
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
  )
}

