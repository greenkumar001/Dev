"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ProductCardProps {
  id: string
  title: string
  description: string
  imageSrc: string
  price: number
  rating: number
  features: string[]
  category: "fire-door" | "anti-bacterial" | "security" | "hardware" | "accessories"
  badge?: string
  badgeColor?: string
}

export default function ProductCard({
  id,
  title,
  description,
  imageSrc,
  price,
  rating,
  features,
  category,
  badge,
  badgeColor = "bg-primary",
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [currentRating, setCurrentRating] = useState(rating)
  const [hoverRating, setHoverRating] = useState(0)

  const categoryClasses = {
    "fire-door": "fire-door border-fire-red-200 hover:border-fire-red-400",
    "anti-bacterial": "anti-bacterial border-eco-green-200 hover:border-eco-green-400",
    security: "security border-security-blue-200 hover:border-security-blue-400",
    hardware: "hardware border-sky-blue-200 hover:border-sky-blue-400",
    accessories: "accessories border-warm-orange-200 hover:border-warm-orange-400",
  }

  const categoryBg = {
    "fire-door": "bg-fire-red-500",
    "anti-bacterial": "bg-eco-green-500",
    security: "bg-security-blue-500",
    hardware: "bg-sky-blue-500",
    accessories: "bg-warm-orange-500",
  }

  const handleRatingClick = (rating: number) => {
    setCurrentRating(rating)
  }

  return (
    <Card className={`product-card ${categoryClasses[category]} border-2 overflow-hidden`}>
      <div className="relative">
        <div className="product-image-container">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={400}
            height={300}
            className="product-image w-full h-[200px] object-cover"
          />
        </div>
        {badge && <Badge className={`absolute top-2 right-2 ${badgeColor} text-white`}>{badge}</Badge>}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition-colors"
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
        </button>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex justify-between items-center mb-3">
          <div className="font-bold text-xl">₹{price.toLocaleString()}</div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <TooltipProvider key={star}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => handleRatingClick(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-4 w-4 ${
                          star <= (hoverRating || currentRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Rate {star} star{star !== 1 ? "s" : ""}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
            <span className="text-xs ml-1 text-gray-500">({currentRating.toFixed(1)})</span>
          </div>
        </div>
        <ul className="grid gap-1 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle
                className={`h-3.5 w-3.5 ${
                  category === "fire-door"
                    ? "text-fire-red-500"
                    : category === "anti-bacterial"
                      ? "text-eco-green-500"
                      : category === "security"
                        ? "text-security-blue-500"
                        : category === "hardware"
                          ? "text-sky-blue-500"
                          : "text-warm-orange-500"
                }`}
              />
              <span className="text-gray-600 dark:text-gray-400 text-xs">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          asChild
          className="w-full interactive-button"
          variant={category === "fire-door" ? "destructive" : category === "anti-bacterial" ? "default" : "default"}
          style={{
            background:
              category === "fire-door"
                ? "linear-gradient(135deg, #f87171 0%, #b91c1c 100%)"
                : category === "anti-bacterial"
                  ? "linear-gradient(135deg, #4ade80 0%, #15803d 100%)"
                  : category === "security"
                    ? "linear-gradient(135deg, #60a5fa 0%, #1e40af 100%)"
                    : category === "hardware"
                      ? "linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)"
                      : "linear-gradient(135deg, #fb923c 0%, #c2410c 100%)",
            color: "white",
          }}
        >
          <Link href={`/products/${id}`} target="_blank">
            View Details
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={`interactive-button ${
            category === "fire-door"
              ? "hover:bg-red-100 hover:text-red-700"
              : category === "anti-bacterial"
                ? "hover:bg-green-100 hover:text-green-700"
                : category === "security"
                  ? "hover:bg-blue-100 hover:text-blue-700"
                  : category === "hardware"
                    ? "hover:bg-sky-blue-100 hover:text-sky-blue-700"
                    : "hover:bg-orange-100 hover:text-orange-700"
          }`}
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

