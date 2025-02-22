import {
  ButtonHTMLAttributes,
  createContext,
  ReactNode,
  useContext,
} from "react";

type ButtonContextType = {
  size: "sm" | "md" | "lg";
  disabled: boolean;
};

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

type ButtonProps = {
  children: ReactNode;
  size?: ButtonContextType["size"];
  disabled?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonRoot({
  children,
  size = "md",
  disabled = false,
  className = "",
  ...props
}: ButtonProps) {
  // Add size-specific padding to base styles
  const sizeStyles = {
    sm: "py-1.5 px-3",
    md: "py-2 px-4",
    lg: "py-2.5 px-5"
  };

  const baseStyles = `inline-flex items-center justify-center w-full rounded-md transition-colors cursor-pointer ${sizeStyles[size]}`;

  return (
    <ButtonContext.Provider value={{ size, disabled }}>
      <button
        className={`${baseStyles} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  );
}

type IconProps = {
  children: ReactNode;
  className?: string;
};

function Icon({ children, className }: IconProps) {
  const context = useContext(ButtonContext);

  if (!context) throw new Error("Icon must be within button");

  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-8 h-8",
  };

  return (
    <span className={`${sizes[context.size]} ${className} mr-2 flex items-center`}>{children}</span>
  );
}

type TextProps = {
  children: ReactNode;
  className?: string;
};

function Text({ children, className }: TextProps) {
  const context = useContext(ButtonContext);
  if (!context) throw new Error("Button.Text must be used within Button");

  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <span className={`${sizes[context.size]} ${className}`}>{children}</span>
  );
}

const Button = Object.assign(ButtonRoot, {
  Icon,
  Text,
});

export default Button;