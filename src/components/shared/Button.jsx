export default function Button({ 
    text, 
    isCTA = false,
    className
  }) {
    const baseStyles = "my-4 lg:my-6 py-1 px-6 lg:px-10 rounded-full uppercase text-black text-sm lg:text-base font-medium cursor-pointer hover:opacity-90 transition-opacity max-w-sm";
    
    const regularBg = "bg-[#00E4F0]";
    const ctaBg = "bg-[linear-gradient(68.23deg,#FF4C00_9.46%,#B38BCE_52.36%,#00E4F0_91.95%)]";
  
    return (
      <button className={`${baseStyles} ${className} ${isCTA ? ctaBg : regularBg}`}>
        {text}
      </button>
    );
  }