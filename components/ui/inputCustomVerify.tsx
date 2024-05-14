"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputCustomVerify = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    const [verify, setVerify] = React.useState<boolean>(false);
    const [count, setCount] = React.useState<number>(60);

    setTimeout(() => {
      if (verify) {
        if (count == 0) {
          setVerify(false);
          setCount(60);
        } else {
          setCount(count - 1);
        }
      }
    }, 1000);

    return (
      <div className="relative w-full">
        {label && <Label>{label}</Label>}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background pl-3 pr-[45%] py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-[#DDE1E6] ",
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          disabled={verify}
          onClick={() => setVerify(true)}
          className={`absolute right-2 bottom-[16%] text-xs text-[#F8664F] ${
            verify && "opacity-60"
          }`}
        >
          {verify && count != 0 ? `Gửi lại mã (${count}s)` : "Gửi mã xác thực"}
        </button>
      </div>
    );
  }
);
InputCustomVerify.displayName = "InputCustomVerify";

export { InputCustomVerify };
