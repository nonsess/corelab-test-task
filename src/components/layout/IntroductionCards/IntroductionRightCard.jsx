import ImageCard from "@/components/shared/ImageCard";

export default function IntroductionRightCard() {
    return (
        <ImageCard 
            className="lg:col-span-1"
            imgSrc="/img/routerCardImg.svg"
            alt="Роутер mrnet"
            height="h-[250px] sm:h-[350px] lg:h-auto"
            minHeight="min-h-[250px] lg:min-h-0"
            objectFit="contain"
            variant="background"
        />
    );
}