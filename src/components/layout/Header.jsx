import Container from "./Container";
import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky z-100 left-0 top-0 text-white py-4 bg-black">
            <Container className="flex justify-between items-end">
                <div className="flex items-end">
                    <Image
                        src="/logotype.svg"
                        alt="Логотип"
                        width={0}
                        height={0}
                        style={{ width: 'auto', height: 'auto' }}
                    />
                    <a href="tel:+78006003538" className="text-[#00E4F0] ml-6 hover:opacity-80 transition-opacity">
                        + 7 (800) 600-35-38
                    </a>
                </div>
                <ul className="uppercase flex items-end space-x-4">
                    <li><a href="#" className="hover:text-[#00E4F0] transition-colors">Технология</a></li>
                    <li><a href="#" className="hover:text-[#00E4F0] transition-colors">Платформа управления</a></li>
                    <li><a href="#" className="hover:text-[#00E4F0] transition-colors">Тест-драйв</a></li>
                    <li><a href="#" className="hover:text-[#00E4F0] transition-colors">Наша сеть</a></li>
                    <li><a href="#" className="text-[#00E4F0] hover:opacity-80 transition-opacity">Оставить заявку</a></li>
                </ul>
            </Container>
        </header>
    )
}