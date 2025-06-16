import { cn } from "@/lib/utils";
import * as React from "react";
// import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost" | "secondary";
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size = "md", variant = "default", asChild = false, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const sizeStyles = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    }[size];

    const variantStyles = {
      default: "bg-primary text-white hover:bg-primary/90",
      outline:
        "border border-input hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    }[variant];

    if (asChild) {
      return (
        <span className={cn(baseStyles, sizeStyles, variantStyles, className)}>
          {props.children}
        </span>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles, variantStyles, className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
