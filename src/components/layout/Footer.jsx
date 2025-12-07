import Container from "./Container";

export default function Footer() {
    return (
        <footer className="text-white py-8 lg:py-12">
            <Container>
                <h5 className="sr-only">Дефолтный подвал</h5>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="lg:col-span-2">
                        <div className="space-y-4">
                            <p className="text-sm leading-relaxed">
                                Общество с ограниченной ответственностью «Ньюком Дистрибьюшн»<br />
                                ИНН 9702025274<br />
                                ОГРН 1207700420784<br />
                                ОКВЭД 62.09<br />
                                Коды видов деятельности по перечню Минцифры от 11.05.2023 №449: 2.01, 4.01, 27.01
                                <br />
                                Юридический адрес: 119017,
                                Российская Федерация, г. Москва,
                                ул. Большая Ордынка, д. 54 стр. 2
                            </p>

                            <div className="lg:hidden mt-6">
                                <p className="text-sm">
                                    Почта: <a href="mailto:info@mrnet.ru" className="text-[#00E4F0] hover:text-[#00B4C0] underline">info@mrnet.ru</a><br />
                                    График работы: по будням<br />
                                    с 9:00 до 19:00 по Москве
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="hidden lg:block mb-6">
                            <p className="text-sm">
                                Почта: <a href="mailto:info@mrnet.ru" className="text-[#00E4F0] hover:text-[#00B4C0] underline">info@mrnet.ru</a><br />
                                График работы: по будням<br />
                                с 9:00 до 19:00 по Москве
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <p className="text-sm">
                                Служба поддержки:<br />
                                Тел: <a href="tel:8(495)308-41-51" className="text-[#00E4F0] hover:text-[#00B4C0] underline">8 (495) 308-41-51</a><br />
                                Тел: <a href="tel:8(800)600-35-38" className="text-[#00E4F0] hover:text-[#00B4C0] underline">8 (800) 600-35-38</a><br />
                                Почта: <a href="mailto:helpdesk@mrnet.ru" className="text-[#00E4F0] hover:text-[#00B4C0] underline">helpdesk@mrnet.ru</a><br />
                                График работы: 24/7
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-sm space-y-1">
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Пользовательское соглашение
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Политика в отношении обработки персональных данных
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Соглашение об обработке персональных данных
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Соглашение о порядке оказания услуг
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Соглашение о технической поддержке
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Соглашение о технической поддержке ПО
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Требования по эксплуатации оборудования mrnet
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Требования к серверным ресурсам для установки ПО
                            </a>
                            
                            <br />
                            
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Инструкция по работе с личным кабинетом
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Инструкция по эксплуатации мультироутера 04
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Инструкция по эксплуатации мультироутера 05
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Инструкция по эксплуатации мультироутера 06
                            </a>
                            <a className="block text-[#00E4F0] hover:text-[#00B4C0] underline">
                                Инструкция по эксплуатации мультироутера 07
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex justify-center lg:justify-start">
                        <img 
                            src="/logotype.svg" 
                            alt="mrnet логотип" 
                            className="h-8 lg:h-10"
                        />
                    </div>
                    <div className="text-center lg:text-right text-sm text-gray-400">
                        ©2025 mrnet.ru Все права защищены
                    </div>
                </div>
            </Container>
        </footer>
    );
}