import BlueCard from "@/components/shared/BlueCard";
import { REVIEWS } from "@/constants/constants";

export default function ReviewsSection() {
    return (
        <>
            <h2 className="uppercase text-3xl py-10">
                Более 500 клиентов выбрали <span className="lowercase">mrnet</span><br/>
                после тест-драйва
            </h2>
            
            <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth space-x-4">
                {REVIEWS.map(({ company, reviewer, review }) => (
                    <BlueCard key={company} className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[500px] 
                        snap-start snap-always">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs text-[#00E4F0]">
                                <div>
                                    <h5 className="font-bold uppercase mb-1">
                                        {company}
                                    </h5>
                                    <h5 className="font-medium">
                                        {reviewer.name}
                                    </h5>
                                </div>
                                <div className="lg:text-left">
                                    <p className="text-sm text-white">
                                        {reviewer.post}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="relative pt-4">
                                <p className="text-md leading-relaxed text-white mb-4 line-clamp-5">
                                    {review}
                                </p>
                            </div>
                    </BlueCard>
                ))}
            </div>
        </>
    );
}