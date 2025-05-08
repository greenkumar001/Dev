import Image from "next/image"

interface CustomImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function CustomImage({ src, alt, width, height, className, priority = false }: CustomImageProps) {
  // For placeholder images, we'll add a colored background based on the image type
  const getColorClass = () => {
    if (src.includes("Fire")) return "bg-gradient-fire"
    if (src.includes("Bacterial")) return "bg-gradient-eco"
    if (src.includes("Security")) return "bg-gradient-security"
    if (src.includes("Manufacturing")) return "bg-gradient-to-r from-dark-blue-700 to-dark-blue-500"
    return "bg-gradient-to-r from-sky-blue-500/30 to-sky-blue-300/10"
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${getColorClass()} opacity-20`}></div>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`relative z-10 ${className}`}
        priority={priority}
      />
    </div>
  )
}

