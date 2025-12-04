import Image from "next/image";

export default function AdvantageCard({ text, src }) {
  return (
    <div className="bg-gradient-to-bl from-[#00E4F0] from-5% to-transparent to-95%
        border border-[#00E4F0] rounded-lg px-6 py-4
        shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
    >
        <div className="mb-4 relative w-12 h-12">
            <Image
              src={src}
              fill
              className="object-contain"
              alt=""
              sizes="48px"
            />
        </div>
        
        <p className="uppercase text-white text-xl leading-tight">
            {text}
        </p>
    </div>
  );
}