import Image from "next/image";

export default function ImageCard({ 
  imgSrc, 
  alt = "Изображение", 
  className = "",
  variant = "background", // "background", "img", "next-image"
  objectFit = "cover", // "cover", "contain", "fill"
  height = "h-[200px] sm:h-[250px] lg:h-[300px]",
  aspectRatio = "aspect-auto", // "aspect-square", "aspect-video", etc.
  priority = false
}) {
    if (variant === "background") {
        return (
        <div 
            className={`${className} rounded-lg overflow-hidden
            bg-center bg-no-repeat bg-${objectFit}
            ${aspectRatio} ${height}`}
            style={{
            backgroundImage: `url(${imgSrc})`
            }}
            role="img"
            aria-label={alt}
        >
            <img 
            src={imgSrc} 
            alt={alt}
            className="sr-only"
            />
        </div>
        );
    }
  
  if (variant === "next-image") {
    return (
      <div className={`${className} rounded-lg overflow-hidden relative ${height} ${aspectRatio}`}>
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className={`object-${objectFit}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>
    );
  }
  
  return (
    <div className={`${className} rounded-lg overflow-hidden`}>
      <img 
        src={imgSrc}
        alt={alt}
        className={`w-full ${height} ${aspectRatio} object-${objectFit}`}
      />
    </div>
  );
}