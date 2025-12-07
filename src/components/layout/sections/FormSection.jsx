import BlueCard from "@/components/shared/BlueCard";
import GradientCard from "@/components/shared/GradientCard";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";

export default function FormSection() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-20">
                <GradientCard className="lg:col-span-1">
                    <h4 className="uppercase text-black font-medium text-4xl">
                        Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?
                    </h4>
                </GradientCard>
                
                <BlueCard className="lg:col-span-2">
                    <div className="h-full flex flex-col">
                        <h4 className="uppercase text-lg mb-6">Услуга доступна только для юридических лиц</h4>
                        
                        <form className="flex flex-col h-full">
                            <div className="mb-4">
                                <Input 
                                    name="name"
                                    placeholder="Ваше имя*"
                                    required
                                />
                            </div>
                            
                            <h5 className="text-white font-medium mb-4">
                                Оставьте ваши контакты
                            </h5>
                            
                            <div className="space-y-4">
                                <Input 
                                    name="phone"
                                    type="tel"
                                    placeholder="Ваш телефон +7 (___)___-__-__ *"
                                    required
                                />
                                
                                <Input 
                                    name="telegram"
                                    placeholder="Ваш ник в тг"
                                />
                            </div>
                            
                            <div className="mt-6 mb-4">
                                <label className="flex items-start space-x-3 cursor-pointer group">
                                    <div className="shrink-0 mt-0.5">
                                        <input 
                                            type="checkbox" 
                                            id="privacy-checkbox"
                                            name="privacy"
                                            required
                                            className="sr-only peer"
                                        />
                                        <div className="w-5 h-5 border border-[#00E4F0] rounded-sm 
                                            flex items-center justify-center peer-checked:bg-[#00E4F0] 
                                            transition-colors group-hover:border-[#00B4C0]">
                                            <svg 
                                                className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="3" 
                                                    d="M5 13l4 4L19 7" 
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-sm text-white leading-relaxed">
                                            Я даю{' '}
                                            <a 
                                                className="text-[#00E4F0] hover:text-[#00B4C0] underline transition-colors"
                                            >
                                                согласие
                                            </a>{' '}
                                            на обработку моих персональных данных в форме обращения на странице сайта. 
                                            Ознакомиться с условиями{' '}
                                            <a 
                                                className="text-[#00E4F0] hover:text-[#00B4C0] underline transition-colors"
                                            >
                                                политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»
                                            </a>
                                        </span>
                                    </div>
                                </label>
                            </div>
                            
                            <div className="mt-auto">
                                <Button 
                                    text="Начать!" 
                                    isCTA={true}
                                    type="submit"
                                    className="w-[40%] py-4"
                                />
                            </div>
                            
                            <div id="error-message" className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg hidden">
                                <p className="text-sm text-red-300 text-center">
                                    Пожалуйста, попробуйте ещё раз! Не все поля формы заполнены корректно.
                                </p>
                            </div>
                        </form>
                    </div>
                </BlueCard>
            </div>
        </>
    )
}