import { PARTNERS } from "@/constants/constants";
import Image from "next/image";

export default function PartnersLine() {
    return (
        <div className="flex flex-nowrap items-center justify-between gap-4 sm:gap-6 lg:gap-8 
            overflow-x-auto scrollbar-hide">
                {PARTNERS.map(({ alt, logoSrc }) => (
                    <div key={alt} className="shrink-0">
                        <div className="relative h-10 w-20 sm:h -12 sm:w-24 md:h-14 md:w-28 lg:h-16 lg:w-32">
                            <Image
                                alt={alt}
                                fill
                                src={logoSrc}
                                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                            />
                        </div>
                    </div>
                ))}
        </div>
    )
}