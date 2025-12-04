import Button from "@/components/shared/Button"
import OrangeCard from "@/components/shared/OrangeCard"

export default function TechnologyRightCard() {
    return (
        <OrangeCard className="lg:col-span-1">
            <h2 className="text-2xl">
                Прокачайте свой интернет с высокоскоростными технологиями mrnet.
                Наш мультироутер суммирует несколько каналов связи в один (технология бондинг),
                значительно повышая устойчивость и скорость соединения!
            </h2>
            <Button text="Узнать больше"/>
        </OrangeCard>
    )
}