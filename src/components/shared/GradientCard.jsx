export default function GradientCard({ 
    children, 
    className = "",
    showBorder = true 
  }) {
    return (
      <div
        className={`rounded-lg p-5 lg:p-6 flex flex-col 
          bg-[linear-gradient(68.23deg,#FF4C00_9.46%,#B38BCE_52.36%,#00E4F0_91.95%)]
          ${showBorder ? 'border border-[#FF4C00]' : ''}
          shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${className}`}
      >
        {children}
      </div>
    );
  }