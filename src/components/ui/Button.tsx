import {
  ButtonHTMLAttributes,
  createContext,
  ReactNode,
  useContext,
} from "react";

//1. Creating context for sharing button state

type ButtonContextType = {
  size: "sm" | "md" | "lg";
  disabled: boolean;
};

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

// button root props

type ButtonProps = {
  children: ReactNode;
  size?: ButtonContextType["size"];
  disabled?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

//2. main button component

function ButtonRoot({
  children,
  size = "md",
  disabled = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex rounded-md transition-colors cursor-pointer";

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
    sm: "w-4 h-5",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <span className={`${sizes[context.size]} ${className}`}>{children}</span>
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
    sm: "text-sm px-1",
    md: "text-base px-2",
    lg: "text-lg px-3",
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
