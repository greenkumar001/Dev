import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Download,
  Star,
  Truck,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";

// This would normally come from a database
const getProductData = (id: string) => {
  const products = {
    // Clean Room Doors
    "clean-room-single-gi": {
      id: "clean-room-single-gi",
      title: "Single Leaf Shutter Clean Room Door: GI Powder Coated",
      description: "GI powder-coated single leaf clean room door.",
      longDescription:
        "This single leaf clean room door is powder-coated with GI for maximum durability and corrosion resistance. It ensures an airtight seal for controlled environments.",
      imageSrc: "/Images/product2.png",
      additionalImages: [],
      price: 55000,
      rating: 4.7,
      reviews: 18,
      features: [
        "Single leaf design",
        "GI Powder Coated",
        "Corrosion-resistant",
      ],
      specifications: {
        Material: "GI Powder Coated",
        Type: "Single Leaf Shutter",
        Application: "Clean rooms and controlled environments",
      },
      category: "clean-room-doors",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
      inStock: true,
      deliveryTime: "3 weeks",
      warranty: "5 years",
    },
    "clean-room-double-gi": {
      id: "clean-room-double-gi",
      title: "Double Leaf Shutter Clean Room Door: GI Powder Coated",
      description: "GI powder-coated double leaf clean room door.",
      longDescription:
        "This double leaf clean room door is designed to provide durability and an airtight seal for clean environments. It features a GI powder-coated finish for corrosion resistance.",
      imageSrc: "/Images/clean-room-double-gi.png",
      additionalImages: [],
      price: 75000,
      rating: 4.8,
      reviews: 20,
      features: [
        "Double leaf design",
        "GI Powder Coated",
        "Corrosion-resistant",
      ],
      specifications: {
        Material: "GI Powder Coated",
        Type: "Double Leaf Shutter",
        Application: "Clean rooms and controlled environments",
      },
      category: "clean-room-doors",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
      inStock: true,
      deliveryTime: "3-4 weeks",
      warranty: "5 years",
    },
    "clean-room-single-ss": {
      id: "clean-room-single-ss",
      title: "Single Leaf Shutter Clean Room Door: SS 304 Sheet",
      description: "Stainless steel 304 single leaf clean room door.",
      longDescription:
        "Made from SS 304, this single leaf clean room door provides excellent durability, hygiene, and resistance to corrosion, making it ideal for sensitive environments.",
      imageSrc: "/Images/clean-room-single-ss.png",
      additionalImages: [],
      price: 70000,
      rating: 4.9,
      reviews: 22,
      features: ["Single leaf design", "SS 304 Sheet", "Hygienic and durable"],
      specifications: {
        Material: "SS 304 Sheet",
        Type: "Single Leaf Shutter",
        Application: "Clean rooms, laboratories, and medical facilities",
      },
      category: "clean-room-doors",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
      inStock: true,
      deliveryTime: "4 weeks",
      warranty: "5 years",
    },
    "clean-room-double-ss": {
      id: "clean-room-double-ss",
      title: "Double Leaf Shutter Clean Room Door: SS 304 Sheet",
      description: "Stainless steel 304 double leaf clean room door.",
      longDescription:
        "This double leaf clean room door is constructed from SS 304, ensuring high durability, easy maintenance, and hygienic properties for controlled environments.",
      imageSrc: "/Images/clean-room-double-ss.png",
      additionalImages: [],
      price: 95000,
      rating: 4.8,
      reviews: 19,
      features: ["Double leaf design", "SS 304 Sheet", "Hygienic and durable"],
      specifications: {
        Material: "SS 304 Sheet",
        Type: "Double Leaf Shutter",
        Application: "Clean rooms, laboratories, and medical facilities",
      },
      category: "clean-room-doors",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
      inStock: true,
      deliveryTime: "4 weeks",
      warranty: "5 years",
    },
  "clean-room-single-prepainted": {
    id: "clean-room-single-prepainted",
    title: "Single Leaf Shutter Clean Room Door: Prepainted GI Sheet",
    description: "Prepainted GI single leaf clean room door.",
    longDescription:
      "This single leaf clean room door features a prepainted GI sheet for enhanced durability and corrosion resistance. Ideal for clean rooms, it ensures a secure and efficient seal for controlled environments.",
    imageSrc: "/Images/clean-room-single-prepainted.png",
    additionalImages: [],
    price: 60000,
    rating: 4.6,
    reviews: 15,
    features: [
      "Single leaf design",
      "Prepainted GI Sheet",
      "Corrosion-resistant",
    ],
    specifications: {
      Material: "Prepainted GI Sheet",
      Type: "Single Leaf Shutter",
      Application: "Clean rooms and controlled environments",
    },
    category: "clean-room-doors",
    badge: "Clean Room",
    badgeColor: "bg-green-500",
    inStock: true,
    deliveryTime: "3 weeks",
    warranty: "3 years",
  },
  "clean-room-double-prepainted": {
    id: "clean-room-double-prepainted",
    title: "Double Leaf Shutter Clean Room Door: Prepainted GI Sheet",
    description: "Prepainted GI double leaf clean room door.",
    longDescription:
      "This double leaf clean room door is built with prepainted GI sheets, providing exceptional durability and resistance to corrosion. Designed for larger openings, it ensures an airtight seal suitable for controlled environments.",
    imageSrc: "/Images/product3.png",
    additionalImages: [],
    price: 85000,
    rating: 4.7,
    reviews: 22,
    features: [
      "Double leaf design",
      "Prepainted GI Sheet",
      "Corrosion-resistant",
    ],
    specifications: {
      Material: "Prepainted GI Sheet",
      Type: "Double Leaf Shutter",
      Application: "Clean rooms and controlled environments",
    },
    category: "clean-room-doors",
    badge: "Clean Room",
    badgeColor: "bg-green-500",
    inStock: true,
    deliveryTime: "4 weeks",
    warranty: "3 years",
  }
,
    "fire-door-single-30mm": {
      id: "fire-door-single-30mm",
      title: "Single Leaf Shutter Fire Door: 20 mm",
      description: "60mm single leaf shutter fire-resistant door.",
      longDescription:
        "Engineered for advanced fire safety, this 60mm single leaf fire door provides enhanced fire resistance, suitable for high-risk environments.",
      imageSrc: "/Images/fire-door-single-30mm.png",
      additionalImages: [],
      price: 50000,
      rating: 4.7,
      reviews: 22,
      features: ["Single leaf design", "30mm thickness", "Fire-resistant"],
      specifications: {
        Material: "Steel",
        Thickness: "30 mm",
        Type: "Single Leaf Shutter",
        FireRating: "60 minutes",
      },
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
      inStock: true,
      deliveryTime: "3-4 weeks",
      warranty: "5 years",
    },
    "fire-door-double-30mm": {
      id: "fire-door-double-30mm",
      title: "Double Leaf Shutter Fire Door: 30 mm",
      description: "30mm double leaf shutter fire-resistant door.",
      longDescription:
        "This 30mm double leaf fire door ensures maximum fire safety and compliance with industry standards. Its durable construction makes it suitable for industrial and commercial use.",
      imageSrc: "/Images/fire-door-double-30mm.png",
      additionalImages: [],
      price: 70000,
      rating: 4.7,
      reviews: 20,
      features: ["Double leaf design", "30mm thickness", "Fire-resistant"],
      specifications: {
        Material: "Steel",
        Thickness: "30 mm",
        Type: "Double Leaf Shutter",
        FireRating: "60 minutes",
      },
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
      inStock: true,
      deliveryTime: "3-4 weeks",
      warranty: "5 years",
    },
    "fire-door-single-60mm": {
      id: "fire-door-single-60mm",
      title: "Single Leaf Shutter Fire Door: 60 mm",
      description: "60mm single leaf shutter fire-resistant door.",
      longDescription:
        "Engineered for advanced fire safety, this 60mm single leaf fire door provides enhanced fire resistance, suitable for high-risk environments.",
      imageSrc: "/Images/fire-door-single-60mm.png",
      additionalImages: [],
      price: 60000,
      rating: 4.7,
      reviews: 22,
      features: ["Single leaf design", "60mm thickness", "Fire-resistant"],
      specifications: {
        Material: "Steel",
        Thickness: "60 mm",
        Type: "Single Leaf Shutter",
        FireRating: "90 minutes",
      },
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
      inStock: true,
      deliveryTime: "3-4 weeks",
      warranty: "5 years",
    },
    "fire-door-double-60mm": {
      id: "fire-door-double-60mm",
      title: "Double Leaf Shutter Fire Door: 60 mm",
      description: "60mm double leaf shutter fire-resistant door.",
      longDescription:
        "Designed for industrial and commercial fire safety, this 60mm double leaf fire door ensures superior fire protection and durability.",
      imageSrc: "/Images/fire-door-double-60mm.png",
      additionalImages: [],
      price: 85000,
      rating: 4.8,
      reviews: 25,
      features: ["Double leaf design", "60mm thickness", "Fire-resistant"],
      specifications: {
        Material: "Steel",
        Thickness: "60 mm",
        Type: "Double Leaf Shutter",
        FireRating: "90 minutes",
      },
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
      inStock: true,
      deliveryTime: "4 weeks",
      warranty: "5 years",
    },
    "fire-door-single-90mm": {
      id: "fire-door-single-90mm",
      title: "Single Leaf Shutter Fire Door: 90 mm",
      description: "90mm single leaf shutter fire-resistant door.",
      longDescription:
        "This 90mm single leaf fire door is designed to withstand extended fire exposure, providing reliable safety for critical areas.",
      imageSrc: "/Images/fire-door-single-90mm.png",
      additionalImages: [],
      price: 70000,
      rating: 4.8,
      reviews: 24,
      features: ["Single leaf design", "90mm thickness", "Fire-resistant"],
      specifications: {
        Material: "Steel",
        Thickness: "90 mm",
        Type: "Single Leaf Shutter",
        FireRating: "120 minutes",
      },
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
      inStock: true,
      deliveryTime: "4 weeks",
      warranty: "5 years",
    },
    "fire-door-double-90mm": {
      id: "fire-door-double-90mm",
      title: "Double Leaf Shutter Fire Door: 90 mm",
      description: "90mm double leaf shutter fire-resistant door.",
      longDescription:
        "This 90mm double leaf fire door is crafted to provide extended fire resistance for larger spaces, ensuring safety in high-risk areas.",
      imageSrc: "/Images/fire-door-double-90mm.png",
      additionalImages: [],
      price: 90000,
      rating: 4.9,
      reviews: 26,
      features: ["Double leaf design", "90mm thickness", "Fire-resistant"],
      specifications: {
        Material: "Steel",
        Thickness: "90 mm",
        Type: "Double Leaf Shutter",
        FireRating: "120 minutes",
      },
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
      inStock: true,
      deliveryTime: "4-6 weeks",
      warranty: "5 years",
    },
    "fire-door-single-120mm": {
      id: "fire-door-single-120mm",
      title: "Single Leaf Shutter Fire Door: 120 mm",
      description: "120mm single leaf shutter fire-resistant door.",
      longDescription:
        "Crafted for maximum fire protection, this 120mm single leaf fire door provides top-tier fire resistance for critical infrastructure.",
      imageSrc: "/Images/fire-door-single-120mm.png",
      additionalImages: [],
      price: 85000,
      rating: 4.9,
      reviews: 28,
      features: ["Single leaf design", "120mm thickness", "Fire-resistant"],
      specifications: {
        Material: "Steel",
        Thickness: "120 mm",
        Type: "Single Leaf Shutter",
        FireRating: "180 minutes",
      },
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
      inStock: true,
      deliveryTime: "5 weeks",
      warranty: "5 years",
    },
    "fire-door-double-120mm": {
      id: "fire-door-double-120mm",
      title: "Double Leaf Shutter Fire Door: 120 mm",
      description: "120mm double leaf shutter fire-resistant door.",
      longDescription:
        "This 120mm double leaf fire door is engineered for unparalleled fire safety, offering extended protection for large industrial or commercial spaces.",
      imageSrc: "/Images/fire-door-double-120mm.png",
      additionalImages: [],
      price: 100000,
      rating: 5.0,
      reviews: 30,
      features: ["Double leaf design", "120mm thickness", "Fire-resistant"],
      specifications: {
        Material: "Steel",
        Thickness: "120 mm",
        Type: "Double Leaf Shutter",
        FireRating: "180 minutes",
      },
      category: "fire-doors",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
      inStock: true,
      deliveryTime: "5-6 weeks",
      warranty: "5 years",
    },
    "sandwich-panel-modular": {
      id: "sandwich-panel-modular",
      title: "Modular Type Clean Room Panels",
      description:
        "Clean room panels available in PPGI / GI, PPGL / GI, SS / GI, SS / SS.",
      longDescription:
        "Modular type clean room panels are designed for maximum efficiency and hygiene. Available in PPGI / GI, PPGL / GI, SS / GI, and SS / SS, these panels provide excellent insulation and durability. They are suitable for a wide range of clean room applications.",
      imageSrc: "/Images/sandwich-panel-modular.png",
      additionalImages: [],
      price: 120000,
      rating: 4.8,
      reviews: 25,
      features: [
        "Modular construction",
        "PPGI / GI, PPGL / GI, SS / GI, SS / SS options",
        "High durability and versatility",
      ],
      specifications: {
        Type: "Modular Panels",
        Material: "PPGI / GI, PPGL / GI, SS / GI, SS / SS",
        Usage: "Clean rooms and controlled environments",
      },
      category: "clean-room-panels",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
      inStock: true,
      deliveryTime: "4-6 weeks",
      warranty: "10 years",
    },
    "sandwich-panel-tongue-groove": {
      id: "sandwich-panel-tongue-groove",
      title: "Tongue and Groove Type Clean Room Panels",
      description:
        "Tongue and groove type clean room panels in PPGI / GI, PPGL / GI, SS / GI, SS / SS.",
      longDescription:
        "Tongue and groove type clean room panels ensure a seamless fit for clean room environments. These panels, made from PPGI / GI, PPGL / GI, SS / GI, and SS / SS, are robust and easy to assemble, making them ideal for various controlled spaces.",
      imageSrc: "/Images/sandwich-panel-tongue-groove.png",
      additionalImages: [],
      price: 125000,
      rating: 4.9,
      reviews: 30,
      features: [
        "Tongue and groove joint system",
        "PPGI / GI, PPGL / GI, SS / GI, SS / SS options",
        "Seamless and sturdy design",
      ],
      specifications: {
        Type: "Tongue and Groove Panels",
        Material: "PPGI / GI, PPGL / GI, SS / GI, SS / SS",
        Usage: "Clean rooms and modular environments",
      },
      category: "clean-room-panels",
      badge: "Clean Room",
      badgeColor: "bg-green-500",
      inStock: true,
      deliveryTime: "4-6 weeks",
      warranty: "10 years",
    },
    "panic-bar-1": {
      id: "panic-bar-1",
      title: "Panic Bar and External Trim",
      description:
        "Single and double point panic bars for emergency exit doors",
      longDescription:
        "We deal in all kinds of panic bars which come in single point and double point to meet the requirement of door size. Push bar comes with one point press type locking. Panic bar latch set consisting of main panic latch component, end component, striker kit, end caps with silver finishing. It is corrosion resistant and as per need to meet NBC requirement for exit door evacuation. We also deal in different brands of panic bar like: DORMA, GEZE, YALE, ASSA-ABLOY, BRITON, HAFELE.",
      imageSrc: "/Images/panic_bars.jpeg",
      // additionalImages: [],
      price: 12000,
      rating: 4.7,
      reviews: 15,
      features: [
        "Single and double point locking options",
        "Corrosion resistant construction",
        "NBC compliant for exit door evacuation",
        "Press type locking mechanism",
        "Silver finish with quality components",
        "Compatible with various door types",
      ],
      specifications: {
        Type: "Single/Double point panic bar",
        Material: "Stainless steel with silver finish",
        Components: "Main panic latch, end component, striker kit, end caps",
        Compliance: "NBC requirements for exit door evacuation",
        Compatibility: "Compatible with fire doors and emergency exits",
        "Brands Available": "DORMA, GEZE, YALE, ASSA-ABLOY, BRITON, HAFELE",
      },
      category: "hardware",
      badge: "Safety Hardware",
      badgeColor: "bg-blue-500",
      inStock: true,
      deliveryTime: "1-2 weeks",
      warranty: "3 years",
    },
    "door-closer-1": {
      id: "door-closer-1",
      title: "Door Closer",
      description:
        "Fire rated door closers for automatic door closing in emergency situations",
      longDescription:
        "Door closer is used for the movement of doors to settle down the door again to that place from where it has been moved. It is used on fire rated doors so that doors can be closed every time to eradicate the emergency situation of fire case which help doors to resist fire to enter that another place. We are involved in offering our clients a wide array of Fire Rated Door Closers that are manufactured using high grade and durable ingredients. The range of fire rated door closers includes various types such as concealed type and hold open type.",
      imageSrc: "/Images/Door-Closer.png",
      additionalImages: [],
      price: 5000,
      rating: 4.5,
      reviews: 22,
      features: [
        "Fire rated for emergency situations",
        "Automatic door closing mechanism",
        "Concealed and hold open types available",
        "High-grade durable construction",
        "Adjustable closing speed",
        "Compatible with various door weights",
      ],
      specifications: {
        Type: "Concealed/Hold open",
        Material: "High-grade metal",
        "Fire Rating": "Up to 120 minutes",
        "Door Weight": "Various capacities available",
        "Closing Speed": "Adjustable",
        Installation: "Surface mounted or concealed",
        Finish: "Multiple finishes available",
      },
      category: "hardware",
      badge: "Safety Hardware",
      badgeColor: "bg-blue-500",
      inStock: true,
      deliveryTime: "1-2 weeks",
      warranty: "2 years",
    },
    "dead-lock-1": {
      id: "dead-lock-1",
      title: "Dead Lock",
      description:
        "High-grade corrosion-free dead locks for wooden and metal doors",
      longDescription:
        "Dead lock is used for both wooden and metal doors with a size of 160mm length of lock body. We provide you dead lock with 304 grade which makes it corrosion free. It comes with 70mm and 80mm cylinder with 2 side key and 1 side key and one side knob.",
      imageSrc: "/Images/deadlock.jpg",
      additionalImages: [],
      price: 3500,
      rating: 4.6,
      reviews: 19,
      features: [
        "304 grade stainless steel construction",
        "Corrosion-free design",
        "160mm lock body length",
        "70mm and 80mm cylinder options",
        "2 side key, 1 side key, and one side knob options",
        "Compatible with wooden and metal doors",
      ],
      specifications: {
        Material: "304 grade stainless steel",
        "Lock Body Length": "160mm",
        "Cylinder Size": "70mm or 80mm",
        "Key Options": "2 side key, 1 side key, one side knob",
        Compatibility: "Wooden and metal doors",
        "Corrosion Resistance": "High",
      },
      category: "hardware",
      badge: "Security Hardware",
      badgeColor: "bg-blue-500",
      inStock: true,
      deliveryTime: "1 week",
      warranty: "3 years",
    },
    "d-handle-1": {
      id: "d-handle-1",
      title: "D Handle",
      description:
        "Heavy-duty stainless steel D handles for fire doors and metal doors",
      longDescription:
        "D handle is used on fire doors and on any other kind of metal doors for making easy access of doors by using handle to pull or push the doors. Our D handle comes with 304 grade & 202 grade with heavy duty steel so to make it fire rated its comes in different sizes as to meet customer requirement.",
      imageSrc: "/Images/D-Handle.png",
      additionalImages: [],
      price: 2000,
      rating: 4.4,
      reviews: 16,
      features: [
        "304 & 202 grade stainless steel options",
        "Heavy-duty construction",
        "Fire rated design",
        "Multiple size options",
        "Easy installation",
        "Compatible with fire doors and metal doors",
      ],
      specifications: {
        Material: "304 or 202 grade stainless steel",
        Construction: "Heavy-duty steel",
        "Fire Rating": "Up to 120 minutes",
        Sizes: "Multiple options available",
        Finish: "Polished stainless steel",
        Compatibility: "Fire doors and metal doors",
      },
      category: "hardware",
      badge: "Door Hardware",
      badgeColor: "bg-blue-500",
      inStock: true,
      deliveryTime: "1 week",
      warranty: "5 years",
    },
    "ss-hinges-1": {
      id: "ss-hinges-1",
      title: "SS Ball Bearing Hinges",
      description:
        "Fire rated stainless steel ball bearing hinges for heavy-duty applications",
      longDescription:
        "SS Ball bearing hinges are used in fire rated doors and in metal door and also in wooden fire rated and heavy duty doors. They come with a size of 4*3*3mm which is 2 hour fire rated and high durable product (304 grade).",
      imageSrc: "/Images/SS-Ball-Bearing-Hinges.png",
      additionalImages: [],
      price: 1800,
      rating: 4.7,
      reviews: 21,
      features: [
        "304 grade stainless steel",
        "Ball bearing mechanism for smooth operation",
        "4*3*3mm size",
        "2 hour fire rated",
        "High durability",
        "Compatible with fire rated doors, metal doors, and wooden doors",
      ],
      specifications: {
        Material: "304 grade stainless steel",
        Size: "4*3*3mm",
        Type: "Ball bearing",
        "Fire Rating": "2 hours",
        Durability: "High",
        Compatibility: "Fire rated doors, metal doors, wooden doors",
      },
      category: "hardware",
      badge: "Door Hardware",
      badgeColor: "bg-blue-500",
      inStock: true,
      deliveryTime: "1 week",
      warranty: "5 years",
    },
    "mortise-lock-1": {
      id: "mortise-lock-1",
      title: "Mortise & Sash Lock",
      description: "Combination latch and deadlock for secure door operation",
      longDescription:
        "Mortise lock is combination of latch and deadlock. They are used to open and close the doors and can also be locked with key from both side. The latch can be operated by a door knob or a handle. The only difference between sash lock and mortise lock is that mortise lock plate has a provision for cylinder whereas sash lock does not have provision of cylinder in its plate.",
      imageSrc: "/Images/Mortise&Sash-Lock.png",
      additionalImages: [""],
      price: 4500,
      rating: 4.6,
      reviews: 18,
      features: [
        "Combination of latch and deadlock",
        "Key operation from both sides",
        "Compatible with door knob or handle",
        "Mortise lock has cylinder provision",
        "Sash lock without cylinder provision",
        "Secure locking mechanism",
      ],
      specifications: {
        Type: "Mortise or Sash",
        Material: "Stainless steel",
        Operation: "Latch and deadlock combination",
        "Key Access": "Both sides",
        "Handle Compatibility": "Door knob or lever handle",
        Cylinder: "Mortise lock has provision, Sash lock does not",
      },
      category: "hardware",
      badge: "Security Hardware",
      badgeColor: "bg-blue-500",
      inStock: true,
      deliveryTime: "1-2 weeks",
      warranty: "3 years",
    },
    "fire-glass-1": {
      id: "fire-glass-1",
      title: "Fire Rated Glass",
      description:
        "Specially laminated glass that withstands high heat and prevents fire spread",
      longDescription:
        "Fire resistant glass is a specially laminated glass that helps the product withstand high amounts of heat. As a result, they can prevent fire from spreading from one side of the glass to another.",
      imageSrc: "/Images/fire-rated-glass.jpeg",
      additionalImages: [],
      price: 8000,
      rating: 4.8,
      reviews: 14,
      features: [
        "Specially laminated construction",
        "Withstands high heat",
        "Prevents fire spread",
        "Maintains visibility during fire",
        "Various sizes available",
        "Compatible with fire rated doors and windows",
      ],
      specifications: {
        Type: "Laminated fire resistant glass",
        "Fire Rating": "Up to 120 minutes",
        Thickness: "Various options available",
        Visibility: "Clear",
        "Heat Resistance": "High",
        Compatibility: "Fire rated doors and windows",
      },
      category: "accessories",
      badge: "Fire Resistant",
      badgeColor: "bg-red-500",
      inStock: true,
      deliveryTime: "2-3 weeks",
      warranty: "5 years",
    },
    "flush-bolt-1": {
      id: "flush-bolt-1",
      title: "Flush Bolt",
      description:
        "Secure the inactive leaf of door pairs with these quality flush bolts",
      longDescription:
        "Flush bolts are used to secure the inactive leaf of a pair of doors, projecting into the frame head and into a door strike. In this application, the active leaf would typically have a lockset which latches into a strike mounted on the edge of the inactive leaf.",
      imageSrc: "/Images/Flush-Bolt.png",
      additionalImages: [],
      price: 1500,
      rating: 4.5,
      reviews: 17,
      features: [
        "Secures inactive door leaf",
        "Projects into frame head and door strike",
        "Stainless steel construction",
        "Easy operation",
        "Compatible with double door setups",
        "Various sizes available",
      ],
      specifications: {
        Material: "Stainless steel",
        Application: "Inactive leaf of door pairs",
        Operation: "Manual",
        Projection: "Into frame head and door strike",
        Compatibility: "Double door setups",
        Sizes: "Various options available",
      },
      category: "hardware",
      badge: "Door Hardware",
      badgeColor: "bg-blue-500",
      inStock: true,
      deliveryTime: "1 week",
      warranty: "3 years",
    },
    "tower-bolt-1": {
      id: "tower-bolt-1",
      title: "Tower Bolt",
      description:
        "Simple and popular basic door security device made of stainless steel",
      longDescription:
        "Tower Bolt is simple and popular basic door security device. Standard straight tower bolt. The bolt is slid into the staple and the finger knob is rotated to engage in the housing slot thus locking it in position. Our Tower Bolt is made of stainless steel.",
      imageSrc: "/Images/Tower-Bolt.png",
      additionalImages: [],
      price: 1200,
      rating: 4.3,
      reviews: 20,
      features: [
        "Stainless steel construction",
        "Standard straight design",
        "Slide and rotate locking mechanism",
        "Basic door security",
        "Easy installation",
        "Various sizes available",
      ],
      specifications: {
        Material: "Stainless steel",
        Type: "Standard straight tower bolt",
        Operation: "Slide and rotate",
        "Security Level": "Basic",
        Installation: "Surface mounted",
        Sizes: "Various options available",
      },
      category: "hardware",
      badge: "Door Hardware",
      badgeColor: "bg-blue-500",
      inStock: true,
      deliveryTime: "1 week",
      warranty: "2 years",
    }, // HVAC Ducting Solutions
    "hvac-industrial": {
      id: "hvac-industrial",
      title: "Industrial AC Ducting",
      description:
        "Efficient HVAC ducting solutions for industrial facilities.",
      longDescription:
        "Industrial AC ducting is designed to optimize airflow and cooling in large-scale facilities. Built from durable materials, these ducts ensure long-lasting performance and energy efficiency.",
      imageSrc: "/Images/hvac-industrial.png",
      additionalImages: [],
      price: 90000,
      rating: 4.8,
      reviews: 22,
      features: [
        "Custom ducting for industrial setups",
        "High airflow efficiency",
        "Durable construction",
      ],
      specifications: {
        Material: "Galvanized Iron",
        Application: "Industrial HVAC systems",
        Durability: "High",
      },
      category: "hvac-ducting",
      badge: "HVAC",
      badgeColor: "bg-blue-500",
      inStock: true,
      deliveryTime: "4-6 weeks",
      warranty: "3 years",
    },
    "hvac-commercial": {
      id: "hvac-commercial",
      title: "Commercial AC Ducting",
      description: "Professional-grade AC ducting for commercial buildings.",
      longDescription:
        "Commercial AC ducting provides reliable and efficient airflow solutions for office buildings, malls, and other commercial spaces.",
      imageSrc: "/Images/hvac-commercial.png",
      additionalImages: [],
      price: 85000,
      rating: 4.7,
      reviews: 20,
      features: [
        "Optimized for commercial use",
        "High durability",
        "Custom installation options",
      ],
      specifications: {
        Material: "Galvanized Iron",
        Application: "Commercial HVAC systems",
        Efficiency: "High",
      },
      category: "hvac-ducting",
      badge: "HVAC",
      badgeColor: "bg-blue-500",
      inStock: true,
      deliveryTime: "4 weeks",
      warranty: "3 years",
    },
  "hvac-air-cooling": {
    id: "hvac-air-cooling",
    title: "Air Cooling Ducting Solutions",
    description: "Advanced air cooling ducting solutions for cooling systems.",
    longDescription:
      "Air cooling ducting solutions provide energy-efficient and durable systems for residential and commercial cooling needs. These solutions ensure optimal airflow, minimal energy consumption, and a customizable design tailored to specific requirements.",
    imageSrc: "/Images/hvac-air-cooling.png",
    additionalImages: [],
    price: 95000,
    rating: 4.9,
    reviews: 25,
    features: [
      "Efficient cooling",
      "Customizable solutions",
      "High durability",
    ],
    specifications: {
      Material: "Aluminum",
      Application: "Residential and Commercial Cooling",
      Efficiency: "High",
    },
    category: "hvac-ducting",
    badge: "HVAC",
    badgeColor: "bg-blue-500",
    inStock: true,
    deliveryTime: "3 weeks",
    warranty: "2 years",
  },
  "hvac-kitchen-ventilation": {
    id: "hvac-kitchen-ventilation",
    title: "Kitchen Ventilation Solutions",
    description: "Premium kitchen ventilation ducting for optimal airflow.",
    longDescription:
      "Kitchen ventilation ducting solutions provide high-efficiency airflow systems for residential and commercial kitchens. These solutions are designed to remove smoke, odors, and grease particles effectively while ensuring a clean and safe cooking environment.",
    imageSrc: "/Images/hvac-kitchen-ventilation.png",
    additionalImages: [],
    price: 80000,
    rating: 4.6,
    reviews: 18,
    features: ["Efficient ventilation", "Durable material", "Custom designs"],
    specifications: {
      Material: "Stainless Steel",
      Application: "Residential and Commercial Kitchens",
      Efficiency: "High",
    },
    category: "hvac-ducting",
    badge: "HVAC",
    badgeColor: "bg-blue-500",
    inStock: true,
    deliveryTime: "2 weeks",
    warranty: "1 year",
  },
  };

  return products[id as keyof typeof products] || null;
};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductData(params.id);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Button asChild className="mt-4">
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const categoryColors = {
    "fire-door": "text-fire-red-600",
    "anti-bacterial": "text-eco-green-600",
    security: "text-security-blue-600",
    hardware: "text-sky-blue-600",
    accessories: "text-warm-orange-600",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border bg-white">
                <Image
                  src={product.imageSrc || "/placeholder.svg"}
                  alt={product.title}
                  width={700}
                  height={500}
                  className="w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.additionalImages.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-md border bg-white cursor-pointer"
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.title} view ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-24 object-cover transition-transform hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className={`${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>
                <h1 className="mt-2 text-3xl font-bold">{product.title}</h1>
                <div className="mt-2 flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : i < product.rating
                            ? "fill-yellow-400/50 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating.toFixed(1)} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div>
                <p className="text-4xl font-bold">
                  ₹{product.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  Price includes GST & installation
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Description:</h3>
                <p className="text-gray-600">{product.longDescription}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Key Features:</h3>
                <ul className="grid gap-1.5">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle
                        className={`h-4 w-4 ${
                          categoryColors[
                            product.category as keyof typeof categoryColors
                          ]
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      product.inStock ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="h-4 w-4 text-gray-500" />
                  <span>Delivery: {product.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-gray-500" />
                  <span>Warranty: {product.warranty}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full interactive-button bg-gradient-professional text-white hover:shadow-lg"
                  >
                    Request Quote
                  </Button>
                </Link>
                <a href="/Devrath Comapany.pdf" download="Devrath Comapany.pdf">
                  <Button
                    size="lg"
                    variant="outline"
                    className="interactive-button border-sky-blue-300 text-sky-blue-700 hover:bg-sky-blue-50 dark:border-sky-blue-700 dark:text-sky-blue-400 dark:hover:bg-dark-blue-800"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Brochure
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <Tabs defaultValue="specifications" className="mt-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="mt-6">
              <div className="rounded-lg border bg-card">
                <div className="grid divide-y">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="grid grid-cols-2 p-4">
                        <div className="font-medium">{key}</div>
                        <div>{value}</div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="installation" className="mt-6">
              <div className="rounded-lg border bg-card p-6 space-y-4">
                <h3 className="text-lg font-medium">Installation Guidelines</h3>
                <p>
                  Our professional installation team will handle the complete
                  installation process. Here's what to expect:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Site assessment and measurement verification</li>
                  <li>Preparation of the door opening</li>
                  <li>Frame installation and anchoring</li>
                  <li>Door hanging and hardware installation</li>
                  <li>Sealing and finishing</li>
                  <li>Testing and quality check</li>
                </ol>
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                  <h4 className="font-medium text-blue-800">Important Note</h4>
                  <p className="text-blue-700 text-sm">
                    For optimal performance, our doors must be installed by
                    certified technicians. DIY installation will void the
                    warranty.
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium">Maintenance Requirements</h4>
                  <p className="text-sm text-gray-600">
                    Regular maintenance is essential to ensure the longevity and
                    proper functioning of your door. We recommend:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>
                        Quarterly inspection of hinges and locking mechanisms
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Biannual lubrication of moving parts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>
                        Annual professional inspection and certification
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="rounded-lg border bg-card p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-sky-blue-300 text-sky-blue-700 hover:bg-sky-blue-50 dark:border-sky-blue-700 dark:text-sky-blue-400 dark:hover:bg-dark-blue-800"
                  >
                    Write a Review
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">Dr. Rajesh Sharma</div>
                      <div className="text-sm text-gray-500">2 months ago</div>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= 5
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      Excellent quality product that perfectly meets our
                      requirements. The installation was professional and the
                      team was knowledgeable. Highly recommended for facilities
                      requiring high security and safety standards.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">Maj. Vikram Singh</div>
                      <div className="text-sm text-gray-500">3 months ago</div>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= 4
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      The security features are impressive. We've installed
                      these in our facility and they've performed exceptionally
                      well during security audits. The only improvement could be
                      in the delivery time.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">Dr. Priya Mehta</div>
                      <div className="text-sm text-gray-500">1 month ago</div>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= 5
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      The quality and durability of this product have been
                      crucial for our environment. We've seen a significant
                      improvement in security and safety since installation.
                      Customer service was also excellent throughout the
                      process.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {Object.values(
                getProductData("metal-fire-door-1")
                  ? {
                      "wooden-fire-door-1":
                        getProductData("wooden-fire-door-1"),
                      "panic-bar-1": getProductData("panic-bar-1"),
                    }
                  : getProductData("wooden-fire-door-1")
                  ? {
                      "metal-fire-door-1": getProductData("metal-fire-door-1"),
                      "door-closer-1": getProductData("door-closer-1"),
                    }
                  : {
                      "metal-fire-door-1": getProductData("metal-fire-door-1"),
                      "wooden-fire-door-1":
                        getProductData("wooden-fire-door-1"),
                    }
              ).map(
                (relatedProduct) =>
                  relatedProduct && (
                    <div
                      key={relatedProduct.id}
                      className="group relative overflow-hidden rounded-lg border"
                    >
                      <Link
                        href={`/products/${relatedProduct.id}`}
                        className="absolute inset-0 z-10"
                      >
                        <span className="sr-only">View product</span>
                      </Link>
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={relatedProduct.imageSrc || "/placeholder.svg"}
                          alt={relatedProduct.title}
                          width={300}
                          height={300}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{relatedProduct.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {relatedProduct.description}
                        </p>
                        <p className="mt-2 font-bold">
                          ₹{relatedProduct.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
