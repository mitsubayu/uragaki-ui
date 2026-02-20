import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function UragakiCarousel({
  className,
  ...props
}: React.ComponentProps<typeof Carousel>) {
  return (
    <Carousel
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiCarouselContent(
  props: React.ComponentProps<typeof CarouselContent>
) {
  return <CarouselContent {...props} />;
}

export function UragakiCarouselItem(
  props: React.ComponentProps<typeof CarouselItem>
) {
  return <CarouselItem {...props} />;
}

export function UragakiCarouselPrevious({
  className,
  ...props
}: React.ComponentProps<typeof CarouselPrevious>) {
  return (
    <CarouselPrevious
      className={cn("border-2 border-foreground/20 rounded-none", className)}
      {...props}
    />
  );
}

export function UragakiCarouselNext({
  className,
  ...props
}: React.ComponentProps<typeof CarouselNext>) {
  return (
    <CarouselNext
      className={cn("border-2 border-foreground/20 rounded-none", className)}
      {...props}
    />
  );
}

export type { CarouselApi };
