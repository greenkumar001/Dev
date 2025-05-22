"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Filter } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(
    null
  );

  useEffect(() => {
    // Get category from URL if present
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setSearchParams(params);
      const category = params.get("category");
      if (category) {
        setSelectedCategory(category);
      }
    }
  }, []);

  const allProducts = [
    {
      id: "clean-room-single-gi",
      title: "Single Leaf Shutter Clean Room Door: GI Powder Coated",
      description: "GI powder-coated single leaf clean room door.",
      imageSrc: "/Images/product2.png",
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
      id: "clean-room-double-gi",
      title: "Double Leaf Shutter Clean Room Door: GI Powder Coated",
      description: "GI powder-coated double leaf clean room door.",
      imageSrc: "/Images/product.png",
      price: 75000,
      rating: 4.8,
      features: [
        "Double leaf design",
        "GI Powder Coated",
        "Corrosion-resistant",
      ],
      category: "clean-room-doors",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
    },
    {
      id: "clean-room-single-ss",
      title: "Single Leaf Shutter Clean Room Door: SS 304 Sheet",
      description: "Stainless steel 304 single leaf clean room door.",
      imageSrc: "/Images/clean-room-single-ss.png",
      price: 70000,
      rating: 4.9,
      features: ["Single leaf design", "SS 304 Sheet", "Hygienic and durable"],
      category: "clean-room-doors",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
    },
    {
      id: "clean-room-double-ss",
      title: "Double Leaf Shutter Clean Room Door: SS 304 Sheet",
      description: "Stainless steel 304 double leaf clean room door.",
      imageSrc: "/Images/clean-room-double-ss.png",
      price: 95000,
      rating: 4.8,
      features: ["Double leaf design", "SS 304 Sheet", "Hygienic and durable"],
      category: "clean-room-doors",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
    },
    {
      id: "clean-room-single-prepainted",
      title: "Single Leaf Shutter Clean Room Door: Prepainted GI Sheet",
      description: "Prepainted GI single leaf clean room door.",
      imageSrc: "/Images/clean-room-single-prepainted.png",
      price: 60000,
      rating: 4.6,
      features: [
        "Single leaf design",
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
      imageSrc: "/Images/product3.png",
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

    // Fire Doors
    {
      id: "fire-door-single-30mm",
      title: "Single Leaf Shutter Fire Door: 30 mm",
      description: "30mm single leaf shutter fire-resistant door.",
      imageSrc: "/Images/fire-door-single-30mm.png",
      price: 50000,
      rating: 4.6,
      features: ["Single leaf design", "30mm thickness", "Fire-resistant"],
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
    },
    {
      id: "fire-door-double-30mm",
      title: "Double Leaf Shutter Fire Door: 30 mm",
      description: "30mm double leaf shutter fire-resistant door.",
      imageSrc: "/Images/fire-door-double-30mm.png",
      price: 70000,
      rating: 4.7,
      features: ["Double leaf design", "30mm thickness", "Fire-resistant"],
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
    },
    {
      id: "fire-door-single-60mm",
      title: "Single Leaf Shutter Fire Door: 60 mm",
      description: "60mm single leaf shutter fire-resistant door.",
      imageSrc: "/Images/fire-door-single-60mm.png",
      price: 60000,
      rating: 4.7,
      features: ["Single leaf design", "60mm thickness", "Fire-resistant"],
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
    },
    {
      id: "fire-door-double-60mm",
      title: "Double Leaf Shutter Fire Door: 60 mm",
      description: "60mm double leaf shutter fire-resistant door.",
      imageSrc: "/Images/fire-door-double-60mm.png",
      price: 80000,
      rating: 4.8,
      features: ["Double leaf design", "60mm thickness", "Fire-resistant"],
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
    },
    {
      id: "fire-door-single-90mm",
      title: "Single Leaf Shutter Fire Door: 90 mm",
      description: "90mm single leaf shutter fire-resistant door.",
      imageSrc: "/Images/fire-door-single-90mm.png",
      price: 70000,
      rating: 4.8,
      features: ["Single leaf design", "90mm thickness", "Fire-resistant"],
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
    },
    {
      id: "fire-door-double-90mm",
      title: "Double Leaf Shutter Fire Door: 90 mm",
      description: "90mm double leaf shutter fire-resistant door.",
      imageSrc: "/Images/fire-door-double-90mm.png",
      price: 90000,
      rating: 4.9,
      features: ["Double leaf design", "90mm thickness", "Fire-resistant"],
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
    },
    {
      id: "fire-door-single-120mm",
      title: "Single Leaf Shutter Fire Door: 120 mm",
      description: "120mm single leaf shutter fire-resistant door.",
      imageSrc: "/Images/fire-door-single-120mm.png",
      price: 85000,
      rating: 4.9,
      features: ["Single leaf design", "120mm thickness", "Fire-resistant"],
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
    },
    {
      id: "fire-door-double-120mm",
      title: "Double Leaf Shutter Fire Door: 120 mm",
      description: "120mm double leaf shutter fire-resistant door.",
      imageSrc: "/Images/fire-door-double-120mm.png",
      price: 100000,
      rating: 5.0,
      features: ["Double leaf design", "120mm thickness", "Fire-resistant"],
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
    },
    // Clean Room Sandwich Panels
    {
      id: "sandwich-panel-modular",
      title: "Modular Type Clean Room Panels",
      description:
        "Clean room panels available in PPGI / GI, PPGL / GI, SS / GI, SS / SS.",
      imageSrc: "/Images/sandwich-panel-modular.png",
      price: 120000,
      rating: 4.8,
      features: [
        "Modular construction",
        "Available in PPGI / GI, PPGL / GI, SS / GI, SS / SS",
        "High durability and versatility",
      ],
      category: "clean-room-panels",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
    },
    {
      id: "sandwich-panel-tongue-groove",
      title: "Tongue and Groove Type Clean Room Panels",
      description:
        "Tongue and groove type clean room panels in PPGI / GI, PPGL / GI, SS / GI, SS / SS.",
      imageSrc: "/Images/sandwich-panel-tongue-groove.png",
      price: 125000,
      rating: 4.9,
      features: [
        "Tongue and groove joint system",
        "Available in PPGI / GI, PPGL / GI, SS / GI, SS / SS",
        "Seamless and sturdy design",
      ],
      category: "clean-room-panels",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
    },
    // Emergency Exit Doors

    {
      id: "panic-bar-1",
      title: "Panic Bar and External Trim",
      description:
        "Single and double point panic bars for emergency exit doors",
      imageSrc: "/Images/panic_bars.jpeg",
      price: 12000,
      rating: 4.7,
      features: [
        "Single/Double point locking",
        "Corrosion resistant",
        "NBC compliant for exit door evacuation",
      ],
      category: "accessories",
      badge: "Safety Hardware",
      badgeColor: "bg-blue-500",
    },
    {
      id: "door-closer-1",
      title: "Door Closer",
      description:
        "Fire rated door closers for automatic door closing in emergency situations",
      imageSrc: "/Images/Door-Closer.png",
      price: 5000,
      rating: 4.5,
      features: [
        "Fire rated",
        "Concealed and hold open types",
        "Durable construction",
      ],
      category: "accessories",
      badge: "Safety Hardware",
      badgeColor: "bg-blue-500",
    },
    {
      id: "dead-lock-1",
      title: "Dead Lock",
      description:
        "High-grade corrosion-free dead locks for wooden and metal doors",
      imageSrc: "/Images/deadlock.jpg",
      price: 3500,
      rating: 4.6,
      features: [
        "304 grade stainless steel",
        "160mm lock body",
        "70mm/80mm cylinder options",
      ],
      category: "accessories",
      badge: "Security Hardware",
      badgeColor: "bg-blue-500",
    },
    {
      id: "d-handle-1",
      title: "D Handle",
      description:
        "Heavy-duty stainless steel D handles for fire doors and metal doors",
      imageSrc: "/Images/D-Handle.png",
      price: 2000,
      rating: 4.4,
      features: [
        "304/202 grade stainless steel",
        "Heavy duty construction",
        "Multiple size options",
      ],
      category: "accessories",
      badge: "Door Hardware",
      badgeColor: "bg-blue-500",
    },
    {
      id: "ss-hinges-1",
      title: "SS Ball Bearing Hinges",
      description:
        "Fire rated stainless steel ball bearing hinges for heavy-duty applications",
      imageSrc: "/Images/SS-Ball-Bearing-Hinges.png",
      price: 1800,
      rating: 4.7,
      features: [
        "304 grade stainless steel",
        "4*3*3mm size",
        "2 hour fire rated",
      ],
      category: "accessories",
      badge: "Door Hardware",
      badgeColor: "bg-blue-500",
    },
    {
      id: "mortise-lock-1",
      title: "Mortise & Sash Lock",
      description: "Combination latch and deadlock for secure door operation",
      imageSrc: "/Images/Mortise&Sash-Lock.png",
      price: 4500,
      rating: 4.6,
      features: [
        "Latch and deadlock combination",
        "Key operation from both sides",
        "Handle/knob compatible",
      ],
      category: "accessories",
      badge: "Security Hardware",
      badgeColor: "bg-blue-500",
    },
    {
      id: "fire-glass-1",
      title: "Fire Rated Glass",
      description:
        "Specially laminated glass that withstands high heat and prevents fire spread",
      imageSrc: "/Images/fire-rated-glass.jpeg",
      price: 8000,
      rating: 4.8,
      features: [
        "High heat resistance",
        "Prevents fire spread",
        "Laminated construction",
      ],
      category: "accessories",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
    },
    {
      id: "flush-bolt-1",
      title: "Flush Bolt",
      description:
        "Secure the inactive leaf of door pairs with these quality flush bolts",
      imageSrc: "/Images/Flush-Bolt.png",
      price: 1500,
      rating: 4.5,
      features: [
        "Secures inactive door leaf",
        "Projects into frame head",
        "Stainless steel construction",
      ],
      category: "accessories",
      badge: "Door Hardware",
      badgeColor: "bg-blue-500",
    },
    {
      id: "tower-bolt-1",
      title: "Tower Bolt",
      description:
        "Simple and popular basic door security device made of stainless steel",
      imageSrc: "/Images/Tower-Bolt.png",
      price: 1200,
      rating: 4.3,
      features: [
        "Stainless steel construction",
        "Straight tower bolt design",
        "Basic door security",
      ],
      category: "accessories",
      badge: "Door Hardware",
      badgeColor: "bg-blue-500",
    }, // HVAC Ducting Solutions
    {
      id: "hvac-industrial",
      title: "Industrial AC Ducting",
      description:
        "Efficient HVAC ducting solutions for industrial facilities.",
      imageSrc: "/Images/hvac-industrial.png",
      price: 90000,
      rating: 4.8,
      features: [
        "Custom ducting for industrial setups",
        "High airflow efficiency",
        "Durable construction",
      ],
      category: "hvac-ducting",
      badge: "HVAC",
      badgeColor: "bg-blue-500",
    },
    {
      id: "hvac-commercial",
      title: "Commercial AC Ducting",
      description: "Professional-grade AC ducting for commercial buildings.",
      imageSrc: "/Images/hvac-commercial.png",
      price: 85000,
      rating: 4.7,
      features: [
        "Optimized for commercial use",
        "High durability",
        "Custom installation options",
      ],
      category: "hvac-ducting",
      badge: "HVAC",
      badgeColor: "bg-blue-500",
    },
    {
      id: "hvac-air-cooling",
      title: "Air Cooling Ducting Solutions",
      description:
        "Advanced air cooling ducting solutions for cooling systems.",
      imageSrc: "/Images/hvac-air-cooling.png",
      price: 95000,
      rating: 4.9,
      features: [
        "Efficient cooling",
        "Customizable solutions",
        "High durability",
      ],
      category: "hvac-ducting",
      badge: "HVAC",
      badgeColor: "bg-blue-500",
    },
    {
      id: "hvac-kitchen-ventilation",
      title: "Kitchen Ventilation Solutions",
      description: "Premium kitchen ventilation ducting for optimal airflow.",
      imageSrc: "/Images/hvac-kitchen-ventilation.png",
      price: 80000,
      rating: 4.6,
      features: ["Efficient ventilation", "Durable material", "Custom designs"],
      category: "hvac-ducting",
      badge: "HVAC",
      badgeColor: "bg-blue-500",
    },
  ];

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-sky-blue-600 hover:text-sky-blue-800 dark:text-sky-blue-400 dark:hover:text-sky-blue-300 hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="mt-4 text-3xl font-bold text-dark-blue-900 dark:text-sky-blue-100">
              Our Products
            </h1>
            <p className="mt-2 text-dark-blue-700 dark:text-sky-blue-300">
              Browse our complete range of specialized doors and hardware for
              critical environments
            </p>
          </div>

          <div className="mb-8">
            <Tabs
              defaultValue={selectedCategory || "all"}
              onValueChange={(value) =>
                setSelectedCategory(value === "all" ? null : value)
              }
              className="w-full"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">Filter by Category</h2>
                <Filter className="h-10 w-10 text-gray-500 mb-2" />
              </div>
              <TabsList className="grid w-full grid-cols-4 ">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="clean-room-doors">
                  Clean-room-doors
                </TabsTrigger>
                <TabsTrigger value="fire-doors">fire-door</TabsTrigger>

                <TabsTrigger value="clean-room-panels">
                  Clean Rooms Panel
                </TabsTrigger>
                <TabsTrigger value="accessories">Accessories</TabsTrigger>
                <TabsTrigger value="hvac-ducting">HVAC-Ducting</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-24">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
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
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">
                Try selecting a different category or clearing filters
              </p>
              <Button
                onClick={() => setSelectedCategory(null)}
                className="interactive-button bg-gradient-professional text-white hover:shadow-lg"
              >
                View All Products
              </Button>
            </div>
          )}

          <div className="mt-16 p-8 rounded-lg bg-sky-blue-50 dark:bg-dark-blue-800">
            <h2 className="text-2xl font-bold mb-4">Custom Door Solutions</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Can't find exactly what you're looking for? We specialize in
              custom door solutions tailored to your specific requirements. Our
              engineering team can design and manufacture doors to meet your
              unique specifications for size, security features, fire
              resistance, and more.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Custom Features Available:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Custom dimensions and configurations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Specialized security features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Enhanced fire resistance ratings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Advanced anti-bacterial properties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Specialized finishes and materials</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Contact our team to discuss your custom door requirements.
                  We'll work with you to design and manufacture a solution that
                  meets your exact specifications.
                </p>
                <Button
                  asChild
                  className="interactive-button bg-gradient-professional text-white hover:shadow-lg w-fit"
                >
                  <Link href="/contact">Request Custom Solution</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
