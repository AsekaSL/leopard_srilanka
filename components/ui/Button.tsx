import { ReactNode } from "react";

interface ButtonProps {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: string;
    iconPosition?: "left" | "right";
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    className = "",
    children,
    onClick,
    disabled = false,
    type = "button",
}: ButtonProps) {
    const baseStyles = "font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2";

    const variantStyles = {
        primary: "bg-primary hover:bg-yellow-500 text-[#181611] shadow-[0_0_20px_rgba(236,178,19,0.3)] hover:scale-105 transform",
        secondary: "bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white",
        outline: "border border-border-dark bg-[#27241c] text-white hover:bg-primary hover:text-black hover:border-primary",
        ghost: "text-primary hover:text-white",
    };

    const sizeStyles = {
        sm: "text-sm py-2 px-4",
        md: "text-base py-3 px-6",
        lg: "text-lg py-4 px-8",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
            {icon && iconPosition === "left" && (
                <span className="material-symbols-outlined">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
                <span className="material-symbols-outlined">{icon}</span>
            )}
        </button>
    );
}
