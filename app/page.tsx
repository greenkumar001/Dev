"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Mail, MapPin, Phone, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    products: false,
    features: false,
    manufacturing: false,
    clients: false,
    contact: false,
  });

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    products: useRef<HTMLElement>(null),
    features: useRef<HTMLElement>(null),
    manufacturing: useRef<HTMLElement>(null),
    clients: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observers = Object.entries(sectionRefs).map(([key, ref]) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        });
      }, observerOptions);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return { key, observer };
    });

    return () => {
      observers.forEach(({ key, observer }) => {
        if (sectionRefs[key as keyof typeof sectionRefs].current) {
          observer.unobserve(
            sectionRefs[key as keyof typeof sectionRefs].current!
          );
        }
      });
    };
  }, []);

  const products = [
    {
      id: "clean-room-single-gi",
      title: "Single Leaf Shutter Clean Room Door: GI Powder Coated",
      description: "GI powder-coated single leaf clean room door.",
      imageSrc: "/Images/clean-room-single-gi.png",
      price: 55000,
      rating: 4.7,
      features: [
        "Single leaf design",
        "GI Powder Coated",
        "Corrosion-resistant",
      ],
      category: "clean-room-doors",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
    },
    {
      id: "clean-room-double-prepainted",
      title: "Double Leaf Shutter Clean Room Door: Prepainted GI Sheet",
      description: "Prepainted GI double leaf clean room door.",
      imageSrc: "/Images/clean-room-double-prepainted.png",
      price: 85000,
      rating: 4.7,
      features: [
        "Double leaf design",
        "Prepainted GI Sheet",
        "Corrosion-resistant",
      ],
      category: "clean-room-doors",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
    },
    {
      id: "clean-room-double-prepainted",
      title: "Double Leaf Shutter Clean Room Door: Prepainted GI Sheet",
      description: "Prepainted GI double leaf clean room door.",
      imageSrc: "/Images/clean-room-double-prepainted.png",
      price: 85000,
      rating: 4.7,
      features: [
        "Double leaf design",
        "Prepainted GI Sheet",
        "Corrosion-resistant",
      ],
      category: "clean-room-doors",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
    },
  ];

  const hardwareProducts = [
    {
      id: "door-closer-1",
      title: "Door Closer",
      imageSrc: "/Images/Door-Closer.png",
    },
    {
      id: "dead-lock-1",
      title: "Dead Lock",
      imageSrc: "/Images/deadlock.jpg",
    },
    {
      id: "d-handle-1",
      title: "D Handle",
      imageSrc: "/Images/D-Handle.png",
    },
    {
      id: "ss-hinges-1",
      title: "SS Ball Bearing Hinges",
      imageSrc: "/Images/SS-Ball-Bearing-Hinges.png",
    },
    {
      id: "mortise-lock-1",
      title: "Mortise & Sash Lock",
      imageSrc: "/Images/Mortise&Sash-Lock.png",
    },
    {
      id: "fire-glass-1",
      title: "Fire Rated Glass",
      imageSrc: "/Images/fire-rated-glass.jpeg",
    },
    {
      id: "flush-bolt-1",
      title: "Flush Bolt",
      imageSrc: "/Images/Flush-Bolt.png",
    },
    {
      id: "tower-bolt-1",
      title: "Tower Bolt",
      imageSrc: "/Images/Tower-Bolt.png",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-blue-50 to-sky-blue-100 dark:from-dark-blue-900 dark:to-dark-blue-800 transition-opacity duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-dark-blue-900 dark:text-sky-blue-100">
                  Securing Facilities with Advanced Door Solutions
                </h1>
                <p className="max-w-[600px] text-dark-blue-700 md:text-xl dark:text-sky-blue-200">
                  Specialized fire-rated doors and hardware for pharmaceutical
                  labs, defense facilities, and critical environments.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  className="interactive-button bg-gradient-professional text-white hover:shadow-lg"
                >
                  <Link href="/products">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-blue-500/20 to-transparent z-10"></div>
                <Image
                  src="/Untitled design.png"
                  alt="Devrath Industries Security Door"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 right-4 glass-effect p-3 rounded-lg text-xs z-20">
                  Fire-Rated & Security Doors for Critical Environments
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.about}
        className={`w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900 transition-opacity duration-1000 ${
          isVisible.about ? "opacity-100" : "opacity-0"
        }`}
        id="about"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Devrath Industries
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Established in Hingna, Nagpur, Devrath Industries Pvt Ltd is a
                leading manufacturer of specialized security doors designed for
                critical environments.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6 stagger-animation">
                <li
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible.about ? "animate-fade-in" : "opacity-0"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                    <Factory className="h-5 w-5 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      State-of-the-art Manufacturing
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our facility utilizes advanced technology to produce
                      high-quality security doors and hardware.
                    </p>
                  </div>
                </li>
                <li
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible.about ? "animate-fade-in" : "opacity-0"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Quality Assurance</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Every door undergoes rigorous testing to ensure it meets
                      the highest standards of safety and security.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2940&auto=format&fit=crop"
                  alt="Devrath Industries Manufacturing Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    State-of-the-art manufacturing facility in Hingna, Nagpur
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              className="interactive-button bg-gradient-professional text-white hover:shadow-lg"
            >
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        ref={sectionRefs.products}
        className={`w-full py-12 md:py-24 lg:py-32 bg-sky-blue-50 dark:bg-dark-blue-800 transition-opacity duration-1000 ${
          isVisible.products ? "opacity-100" : "opacity-0"
        }`}
        id="products"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Specialized Doors
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Engineered for critical environments where safety, security, and
                hygiene are paramount.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-500 ${
                  isVisible.products ? "animate-fade-in" : "opacity-0"
                }`}
              >
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  imageSrc={product.imageSrc}
                  price={product.price}
                  rating={product.rating}
                  features={product.features}
                  category={
                    product.category as
                      | "clean-room-door"
                      | "fire-doors"
                      | "clean-room-panels"
                      | "accessories"
                      | "hvac-ducting"
                  }
                  badge={product.badge}
                  badgeColor={product.badgeColor}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="interactive-button bg-gradient-professional text-white hover:shadow-lg"
            >
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hardware Products Section */}
      <section
        className={`w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900 transition-opacity duration-1000 ${
          isVisible.products ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Door Hardware & Accessories
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Complete your door system with our high-quality hardware and
                accessories
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {hardwareProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.imageSrc || "/placeholder.svg"}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-dark-blue-900">
                    {product.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button
              asChild
              variant="outline"
              className="interactive-button border-sky-blue-300 text-sky-blue-700 hover:bg-sky-blue-50 dark:border-sky-blue-700 dark:text-sky-blue-400 dark:hover:bg-dark-blue-800"
            >
              <Link href="/products?category=accessories">
                View All Accessories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={sectionRefs.features}
        className={`w-full py-12 md:py-24 lg:py-32 bg-sky-blue-50 dark:bg-dark-blue-800 transition-opacity duration-1000 ${
          isVisible.features ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Our Doors
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our doors are engineered to provide maximum security, safety,
                and hygiene for critical environments.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
            <div
              className={`flex flex-col items-center space-y-2 text-center transition-all duration-500 ${
                isVisible.features ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Enhanced Security</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Multi-point locking systems and reinforced construction for
                maximum security.
              </p>
            </div>
            <div
              className={`flex flex-col items-center space-y-2 text-center transition-all duration-500 ${
                isVisible.features ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-red-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-red-500"
                >
                  <path d="M9 6v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2z" />
                  <path d="M4 14h4" />
                  <path d="M2 9h6" />
                  <path d="M6 19h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Fire Resistance</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Tested and certified to withstand fire for up to 120 minutes,
                protecting lives and assets.
              </p>
            </div>
            <div
              className={`flex flex-col items-center space-y-2 text-center transition-all duration-500 ${
                isVisible.features ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-green-500"
                >
                  <path d="M19 7h.01" />
                  <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z" />
                  <path d="M9 3v18" />
                  <path d="M9 9h6" />
                  <path d="M9 15h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Anti-Bacterial Properties</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Special coatings and materials that inhibit bacterial growth,
                ideal for clean environments.
              </p>
            </div>
            <div
              className={`flex flex-col items-center space-y-2 text-center transition-all duration-500 ${
                isVisible.features ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-blue-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m14.5 9-5 5" />
                  <path d="m9.5 9 5 5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Durability</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Built to last with high-quality materials that withstand heavy
                use and harsh environments.
              </p>
            </div>
            <div
              className={`flex flex-col items-center space-y-2 text-center transition-all duration-500 ${
                isVisible.features ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-purple-500"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Customization</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Tailored solutions to meet specific requirements for size,
                security features, and finishes.
              </p>
            </div>
            <div
              className={`flex flex-col items-center space-y-2 text-center transition-all duration-500 ${
                isVisible.features ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-amber-500"
                >
                  <path d="M12 22v-5" />
                  <path d="M9 8V2" />
                  <path d="M15 8V2" />
                  <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Compliance</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Meets industry standards and regulations for pharmaceutical,
                healthcare, and defense sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities Section */}
      <section
        ref={sectionRefs.manufacturing}
        className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-professional-light dark:bg-dark-blue-900 transition-opacity duration-1000 ${
          isVisible.manufacturing ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Manufacturing Excellence
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our state-of-the-art facility in Hingna, Nagpur is equipped with
                the latest technology to produce high-quality security doors.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
            <div
              className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${
                isVisible.manufacturing ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10"></div>
              <div className="relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-primary mb-4"
                >
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M17 18h1" />
                  <path d="M12 18h1" />
                  <path d="M7 18h1" />
                </svg>
                <h3 className="text-xl font-bold mb-2">
                  Precision Engineering
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Computer-aided design and manufacturing ensures precise
                  specifications for every door.
                </p>
              </div>
            </div>
            <div
              className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${
                isVisible.manufacturing ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10"></div>
              <div className="relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-primary mb-4"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m14.5 9-5 5" />
                  <path d="m9.5 9 5 5" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Quality Testing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Rigorous testing for fire resistance, bacterial growth
                  inhibition, and security features.
                </p>
              </div>
            </div>
            <div
              className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${
                isVisible.manufacturing ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10"></div>
              <div className="relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-primary mb-4"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M9 13h6" />
                  <path d="M9 17h3" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Certification</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  All products are certified to meet industry standards and
                  regulatory requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <div
              className={`relative w-full max-w-4xl overflow-hidden rounded-lg shadow-xl transition-all duration-1000 ${
                isVisible.manufacturing
                  ? "animate-scale-in"
                  : "opacity-0 scale-95"
              }`}
            >
              <div className="aspect-[16/9] bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Manufacturing Facility
                  </h3>
                  <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
                    Our 10,000 sq. ft. manufacturing facility is equipped with
                    the latest technology and staffed by skilled technicians to
                    produce doors that meet the highest standards of quality and
                    performance.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 max-w-md mx-auto">
                    <div className="bg-background/80 backdrop-blur-sm p-3 rounded-lg hover:bg-background/90 transition-colors">
                      <p className="font-bold text-2xl text-primary">10K</p>
                      <p className="text-xs text-gray-500">sq. ft. facility</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-3 rounded-lg hover:bg-background/90 transition-colors">
                      <p className="font-bold text-2xl text-primary">20+</p>
                      <p className="text-xs text-gray-500">skilled workers</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-3 rounded-lg hover:bg-background/90 transition-colors">
                      <p className="font-bold text-2xl text-primary">22+</p>
                      <p className="text-xs text-gray-500">
                        years of Technical Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        className={`w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark-blue-900 transition-opacity duration-1000 ${
          isVisible.contact ? "opacity-100" : "opacity-0"
        }`}
        id="contact"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get in touch with our team to discuss your specific
                requirements.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
            <div
              className={`space-y-4 transition-all duration-500 ${
                isVisible.contact ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Devrath Industries Pvt Ltd, Hingna, Nagpur, Maharashtra,
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    +91 XXXX XXX XXX
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    info@devrathind.com
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`space-y-4 transition-all duration-500 ${
                isVisible.contact ? "animate-fade-in" : "opacity-0"
              }`}
            >
              {/* <div className="grid gap-4">
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
              </div> */}
            </div>
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              className="interactive-button bg-gradient-professional text-white hover:shadow-lg"
            >
              <Link href="/contact">
                View Detailed Contact Information{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
