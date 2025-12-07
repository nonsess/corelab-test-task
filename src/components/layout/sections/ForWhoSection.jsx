import Button from "@/components/shared/Button";
import GradientCard from "@/components/shared/GradientCard";
import ImageCard from "@/components/shared/ImageCard";
import OrangeCard from "@/components/shared/OrangeCard";

export default function ForWhoSection() {
    return (
        <>
            <h1 className="uppercase text-3xl py-10">
                Решение, созданное айтишниками <br/>
                для айтишников
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <div className="h-full">
                    <OrangeCard className="h-full">
                        <h4 className="text-xl lg:text-2xl mb-2 uppercase">Ценим ваше время</h4>
                        <p className="text-sm lg:text-base leading-relaxed">
                            Подключите мультироутер с быстрым интернетом всего за 7 минут. Наши устройства работают по принципу Plug'n'Play (подключи и пользуйся). 
                            <br /><br />
                            Вы получаете надёжную связь и отсутствие головной боли в виде договоров с разными провайдерами
                        </p>
                    </OrangeCard>
                </div>
                <div className="h-full">
                    <OrangeCard className="h-full">
                        <h4 className="text-xl lg:text-2xl mb-2 uppercase">Безграничные Возможности</h4>
                        <p className="text-sm lg:text-base leading-relaxed">
                            Подберём оборудование для новых точек и оперативно подключим к интернету по любому адресу. 
                            <br /><br />
                            Всё это — без необходимости заключения дополнительных контрактов
                        </p>
                    </OrangeCard>
                </div>
                <div className="h-full">
                    <OrangeCard className="h-full">
                        <h4 className="text-xl lg:text-2xl mb-2 uppercase">Индивидуальный подход</h4>
                        <p className="text-sm lg:text-base leading-relaxed">
                            Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости решение.
                            <br /><br />
                            Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт
                        </p>
                    </OrangeCard>    
                </div>
            </div>
            
            <div className="grid grid-cols-1 my-2 lg:grid-cols-2 gap-2">
                <div className="h-full">
                    <GradientCard showBorder={false} className="h-full text-black">
                        <div className="flex flex-col h-full">
                            <h4 className="text-xl lg:text-4xl font-medium mb-2 uppercase">Попробуйте 14 дней бесплатно</h4>
                            <p className="text-xl leading-relaxed mt-auto">
                                Развивайте свою инфру с <b>mrnet</b>. Без лишних затрат и костылей.
                                Высокоскоростной интернет — удобно, эффективно!
                            </p>
                        </div>
                    </GradientCard>
                </div>
                <div className="h-full">
                    <ImageCard imgSrc="/img/forWhoCard.svg" className="h-full" />
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <Button className="py-4 font-black" isCTA text="Начать!" />
            </div>
        </>
    )
}