import BlueCard from "@/components/shared/BlueCard";
import Button from "@/components/shared/Button";
import ImageCard from "@/components/shared/ImageCard";

export default function PossibilitiesSection() {
    return (
        <>
            <h1 className="uppercase text-2xl lg:text-3xl max-w-4xl pt-10 pb-6 lg:pb-8">
                Настраивайте сеть и управляйте
                всеми устройствами через единый личный кабинет
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:items-stretch">
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <BlueCard className="grow">
                        <h4 className="text-xl lg:text-2xl mb-2 uppercase">мониторинг</h4>
                        <p className="text-sm lg:text-base leading-relaxed">
                            Графики потребления трафика
                            <br /><br />
                            Просмотр подключенных к мультироутеру сетевых устройств
                        </p>
                    </BlueCard>
                    
                    <BlueCard className="grow">
                        <h4 className="text-xl lg:text-2xl mb-2 uppercase">тонкая настройка</h4>
                        <p className="text-sm lg:text-base leading-relaxed">
                            Настройка тоннелей PPTP, L2TP, GRE, IPIP, IPSEC
                            <br /><br />
                            Настройка пробросов портов
                        </p>
                    </BlueCard>
                </div>
                
                <ImageCard
                    className="lg:col-span-2"
                    imgSrc="/img/possibilitiesCard.svg"
                    alt="Интерфейс личного кабинета mrnet"
                    height="h-[300px] sm:h-[400px] lg:h-full"
                    objectFit="contain"
                />
            </div>
            
            <div className="flex justify-center mt-6 lg:mt-8">
                <Button text="Испытать все возможности"/>
            </div>
        </>
    );
}