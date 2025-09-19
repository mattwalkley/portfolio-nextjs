interface GridBlockProps {
  children?: React.ReactNode;
  title?: string;
  description?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function GridBlock({
  children,
  title,
  description,
  size = "md",
  className = "",
}: GridBlockProps) {
  // Size-based heading classes
  const getHeadingClass = () => {
    switch (size) {
      case "sm":
        return "text-sm mb-xs";
      case "md":
        return "text-base mb-xs";
      case "lg":
        return "text-base mb-sm";
      default:
        return "text-sm mb-xs";
    }
  };

  // Size-based text classes
  const getTextClass = () => {
    switch (size) {
      case "sm":
        return "text-sm text-gray";
      case "md":
        return "text-sm text-gray";
      case "lg":
        return "text-base text-gray";
      default:
        return "text-sm text-gray";
    }
  };

  // Size-based padding classes using CSS variables
  const getPaddingClass = () => {
    switch (size) {
      case "sm":
        return "p-sm";
      case "md":
        return "p-md";
      case "lg":
        return "p-lg";
      default:
        return "p-md";
    }
  };

  return (
    <div className={`grid-block ${getPaddingClass()} ${className}`}>
      {title && <h3 className={getHeadingClass()}>{title}</h3>}
      {description && <div className={getTextClass()}>{description}</div>}
      {children}
    </div>
  );
}
