export default function OrangeCard({ 
    children, 
    className = "",
    variant = "gradient",
    showBorder = true 
  }) {
    const gradients = {
      gradient: "bg-gradient-to-bl from-[#FF4C00] via-[#FF4C00]/50 via-50% to-transparent",
      diagonal: "bg-gradient-to-bl from-[#FF4C00] from-3.34% to-transparent to-75.22%",
      horizontal: "bg-gradient-to-r from-[#FF4C00] from-10% to-transparent to-60%",
      solid: "bg-[#FF4C00]/10"
    };
  
    return (
      <div
        className={`rounded-lg p-5 lg:p-6 flex flex-col ${gradients[variant]}
          ${showBorder ? 'border border-[#FF4C00]' : ''}
          shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${className}`}
      >
        {children}
      </div>
    );
  }