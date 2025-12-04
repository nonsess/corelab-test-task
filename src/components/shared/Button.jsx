export default function Button({ text }) {
    return (
        <button className="my-4 lg:my-6 bg-[#00E4F0] py-1 px-6 lg:px-10 rounded-full
            uppercase text-black text-sm lg:text-base font-medium cursor-pointer
            hover:opacity-90 transition-opacity max-w-sm"
        >
            {text}
        </button>
    )
}