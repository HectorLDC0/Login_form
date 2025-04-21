function Buttons({ text, bgColor, textColor, onClick, className, icon }) {
    return (
      <button
        className={`rounded-3xl p-4 w-120 border ${className} flex items-center cursor-pointer justify-center`}
        style={{
          backgroundColor: bgColor,
          color: textColor
        }}
        onClick={onClick}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </button>
    );
  }
  
  export default Buttons;