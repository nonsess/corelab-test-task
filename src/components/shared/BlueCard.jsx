export default function BlueCard({ 
    children, 
    className = "",
    variant = "gradient",
    showBorder = true,
    compact = false
  }) {
    const gradients = {
      gradient: "bg-gradient-to-bl from-[#00E4F0] via-[#00E4F0]/50 via-50% to-transparent",
      diagonal: "bg-gradient-to-bl from-[#00E4F0] from-3.34% to-transparent to-75.22%",
      horizontal: "bg-gradient-to-r from-[#00E4F0] from-10% to-transparent to-60%",
      solid: "bg-[#00E4F0]/10"
    };
  
    return (
      <div
        className={`rounded-lg ${compact ? 'p-4' : 'p-5 lg:p-6'} flex flex-col ${gradients[variant]}
          ${showBorder ? 'border border-[#00E4F0]' : ''}
          shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${className}`}
      >
        {children}
      </div>
    );
  }