import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

type UragakiAccordionProps = React.ComponentProps<typeof Accordion> & {
  roughness?: number;
  seed?: number;
}

export function UragakiAccordion({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiAccordionProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
      block
    >
      <Accordion
        className={cn(
          "uragaki-no-border font-[var(--font-uragaki-body)]",
          className
        )}
        {...props}
      />
    </UragakiBorder>
  );
}

export function UragakiAccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      className={cn("border-b border-border/30", className)}
      {...props}
    />
  );
}

export function UragakiAccordionTrigger({
  className,
  ...props
}: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      className={cn("font-[var(--font-uragaki-heading)] px-3", className)}
      {...props}
    />
  );
}

export function UragakiAccordionContent({
  className,
  ...props
}: React.ComponentProps<typeof AccordionContent>) {
  return (
    <AccordionContent className={cn("px-3", className)} {...props} />
  );
}
