const VARIANTS = {
  primary: "bg-primary hover:bg-black text-black",
  "outline-primary": "bg-transparent hover:text-black text-black",
  default: "bg-black hover:bg-black/20 text-white",
};

const getVariant = (variant) => VARIANTS[variant] || VARIANTS.default;

export const Button = ({
  className = "",
  children,
  variant,
  square = false,
  paddingLess = false,
  type = "button",
  onClick,
  icon,
  ...props
}) => {
  const baseStyles =
    "flex gap-3 items-center transition duration-75 tracking-widest";
  const paddingStyles = !paddingLess
    ? "px-10 py-5 font-bold text-sm font-mono"
    : "";
  const shapeStyles = !square ? "rounded-xl" : "";
  const activeStyles = "active:scale-95";

  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className={`${getVariant(
        variant
      )} ${baseStyles} ${paddingStyles} ${shapeStyles} ${activeStyles} ${className}`}
    >
      {children}
      {icon && <span className="text-[20px]">{icon}</span>}
    </button>
  );
};
