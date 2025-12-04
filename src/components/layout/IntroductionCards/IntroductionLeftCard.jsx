import Button from "../../shared/Button"

export default function IntroductionLeftCard() {
    return (
        <div
            className="lg:col-span-2 bg-gradient-to-bl from-[#FF4C00] via-[#FF4C00]/50 via-50% to-transparent
            border border-[#FF4C00] shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            rounded-lg p-5 lg:p-6 flex flex-col"
        >
            <div className="uppercase">
                <h1 className="text-5xl sm:text-3xl lg:text-5xl pb-4">
                    Беспроводной<br />
                    интернет для бизнеса
                </h1>
                <h2 className="text-base sm:text-lg lg:text-2xl">
                    от 2 990 рублей* в месяц!<br />
                    Установка по любому адресу в РФ!
                </h2>
            </div>
        
            <Button text="Попробовать" />
            
            <ul className="list-disc pl-5 mb-4 space-y-1.5 flex-grow">
                <li className="text-xs sm:text-sm lg:text-base leading-tight">Мультироутер с технологией суммирования нескольких каналов связи в один</li>
                <li className="text-xs sm:text-sm lg:text-base leading-tight">Высокая скорость и отказоустойчивость интернет-соединения</li>
                <li className="text-xs sm:text-sm lg:text-base leading-tight">Единый договор на ПО, оборудование и связь</li>
                <li className="text-xs sm:text-sm lg:text-base leading-tight">Простое подключение за 7 минут</li>
                <li className="text-xs sm:text-sm lg:text-base leading-tight">Моментальная техподдержка 24/7 в Telegram</li>
            </ul>
        
            <p className="text-[10px] sm:text-[11px]">
                * Без учета стоимости оборудования, возможен выкуп оборудования или аренда, стоимость будет зависеть от модели мультироутера
            </p>
        </div>
    )
}