import TechnologyLeftCard from "./TechnologyLeftCard";
import TechnologyRightCard from "./TechnologyRightCard";

export default function TechnologyCards() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <TechnologyLeftCard />
            <TechnologyRightCard />
        </div>
    )
}