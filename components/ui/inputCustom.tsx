"use client";

import * as React from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputCustom = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    const [hidePassword, setShowPassword] = React.useState<boolean>(true);
    return (
      <div className="relative">
        {label && <Label>{label}</Label>}
        <input
          type={type === "password" && !hidePassword ? "" : type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 bg-[#DDE1E6]",
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          onClick={() => setShowPassword(!hidePassword)}
          className="absolute right-5 bottom-[20%]"
        >
          {hidePassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
    );
  }
);
InputCustom.displayName = "InputCustom";

export { InputCustom };
