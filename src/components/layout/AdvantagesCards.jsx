import AdvantageCard from "../shared/AdvantageCard"
import { CARDS_ADVANTAGES } from "@/constants/constants"

export default function AdvantagesCards() {
    return (
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {CARDS_ADVANTAGES.map(({ text, src }) => (
                <AdvantageCard key={src} text={text} src={src} />
            ))}
        </div>
    )
}