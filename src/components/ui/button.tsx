import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define the button variants using cva
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // Brand variant with gradient and inner shadow
        brand:
          "bg-[#3c3c3c] rounded-lg text-white shadow-[inset_0_0px_0_rgba(255,255,255,0.1),inset_0_2px_0_rgba(255,255,255,0.1)] hover:bg-[#3c3c3c]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-brand/50 dark:focus-visible:ring-brand/40 dark:bg-[#F4F5F5]/90 dark:text-zinc-800 dark:shadow-[inset_0_2px_0_rgba(255,255,255,0.6),inset_0_0px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.6)] dark:hover:text-zinc-800",
        // Keep color white for brandSecondary variant

        brandSecondary:
          "bg-gradient-to-b from-[#FFFFFF] to-[#F2F3F5] rounded-lg text-zinc-800 text-sm font-medium px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(0,0,0,0.08)] border border-[#DADCE0] hover:from-[#FAFAFA] hover:to-[#E5E6E9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3c3c3c]/30 focus-visible:ring-offset-2 dark:from-[#2F2F2F] dark:to-[#1F1F1F] dark:text-white dark:border-[#444] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.6)] dark:hover:from-[#3A3A3A] dark:hover:to-[#2F2F2F]",
        // Other variants
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[inset_0_0px_0_rgba(255,255,255,0.1),inset_0_2px_0_rgba(255,255,255,0.1)] hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define the Button component
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
