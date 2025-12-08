import ImageCard from "@/components/shared/ImageCard";

export default function GeographySection() {
    return (
        <div id="geography">
            <h1 className="uppercase text-3xl py-10">
                Подключаем к стабильному интернету по всей России
            </h1>
            
            <div className="w-full rounded-lg overflow-hidden">
                <ImageCard 
                    variant="img" 
                    imgSrc="/img/geographyCard.svg"
                    className="w-full"
                    height="auto"
                    aspectRatio=""
                    objectFit="contain"
                />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mt-6">
                <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-2 h-2">
                        <img 
                            src="/icons/we.svg" 
                            alt="Отделы продаж"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="text-sm lg:text-base font-medium">
                        Отделы продаж
                    </span>
                </div>
                
                <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-3 h-3">
                        <img 
                            src="/icons/clients.svg" 
                            alt="Наши клиенты"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="text-sm lg:text-base font-medium">
                        Наши клиенты
                    </span>
                </div>
            </div>
        </div>
    )
}