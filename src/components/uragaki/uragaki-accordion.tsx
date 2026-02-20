import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

type UragakiAccordionProps = React.ComponentProps<typeof Accordion> & {
  roughness?: number;
  seed?: number;
}

export function UragakiAccordion({
  className,
  roughness = 1.8,
  seed,
  ...props
}: UragakiAccordionProps) {
  const colors = useUragakiColors();
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke={colors.border}
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
