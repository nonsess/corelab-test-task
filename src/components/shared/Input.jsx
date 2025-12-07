export default function Input({ 
    placeholder,
    className = "",
    type = "text",
    ...props
  }) {
    const baseStyles = "w-full bg-black border border-[#00E4F0] rounded-full py-3 px-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E4F0] focus:border-transparent transition-all";
    
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`${baseStyles} ${className}`}
        {...props}
      />
    );
  }