import IntroductionLeftCard from "./IntroductionLeftCard";
import IntroductionRightCard from "./IntroductionRightCard";

export default function IntroductionCards() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <IntroductionLeftCard />
            <IntroductionRightCard />
        </div>
    )
}