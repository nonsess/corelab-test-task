import Image from "next/image";

export default function TechnologyExplanationSection() {
    return (
        <div className="pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="lg:col-span-1 flex flex-col">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase mb-4 lg:mb-6">
                        не балансируем
                    </h2>
                    <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                        <Image
                            src="/img/techExplLeftCard.svg"
                            fill
                            alt="Балансировка интернета"
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
                
                <div className="lg:col-span-1 flex flex-col">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase mb-4 lg:mb-6">
                        а суммируем
                    </h2>
                    <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                        <Image
                            src="/img/techExplRightCard.svg"
                            fill
                            alt="Суммирование каналов связи"
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}