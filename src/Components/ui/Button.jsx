import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";
import { cn } from "../../lib/Utils";
import Icon from "./Icon";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-150 cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        yellow:
          "group rounded-full bg-[#f3fe00] text-[#0d0d0d] border border-[#f3fe00] text-sm leading-5 hover:bg-[#e0eb00] hover:border-[#e0eb00]",
        black:
          "group rounded-full bg-[#0d0d0d] text-white border border-[#0d0d0d] text-sm leading-5 hover:bg-[#1b1b1b] hover:border-[#1b1b1b]",
        whitetrans:
          "group rounded-full bg-transparent text-white border border-white text-sm leading-5 hover:border-[#f3fe00] hover:text-[#f3fe00]",
        white:
          "group rounded-full bg-white text-black border border-white text-sm leading-5 hover:border-[#fff] hover:text-[black]",
        submit:
          "group rounded-full bg-[#f3fe00] text-[#0d0d0d] border border-[#f3fe00] text-sm leading-5 w-full hover:bg-[#e0eb00] hover:border-[#e0eb00]",
        yellowtrans:
          "group rounded-full bg-[#f3fe00] text-[#0d0d0d] border border-transparent text-sm leading-5 hover:bg-transparent hover:text-[#f3fe00] hover:border-[#f3fe00]",
        blacktrans:
          "group rounded-full bg-white text-black border border-transparent text-base leading-6 font-medium hover:bg-transparent  hover:border-[#f3fe00]",
      },
      size: {
        sm: "h-8 px-4 py-2 text-sm",
        md: "h-10 px-5 py-2.5 text-sm",
        lg: "h-12 px-6 py-3 text-base",
        xl: "h-14 px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "yellow",
      size: "md",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  icon,
  iconSize = 16,
  to,
  href,
  target,
  rel,
  children,
  ...props
}) {
  const classes = cn(buttonVariants({ variant, size, className }));

  const iconEl = icon && (
    <Icon
      name={icon}
      size={iconSize}
      className={
        variant === "white"
          ? "group-hover:text-[#f3fe00] transition-colors duration-150"
          : ""
      }
    />
  );

  const content = (
    <>
      {children}
      {iconEl}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={classes} {...props}>
      {content}
    </Comp>
  );
}

export { Button, buttonVariants };
