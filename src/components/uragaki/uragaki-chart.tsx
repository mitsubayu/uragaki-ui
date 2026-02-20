import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  type ChartConfig,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

export function UragakiChartContainer({
  className,
  ...props
}: React.ComponentProps<typeof ChartContainer>) {
  return (
    <ChartContainer
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiChartTooltipContent({
  className,
  ...props
}: React.ComponentProps<typeof ChartTooltipContent>) {
  return (
    <ChartTooltipContent
      className={cn(
        "font-[var(--font-uragaki-body)] border-2 border-foreground/20 rounded-none",
        className
      )}
      {...props}
    />
  );
}

export function UragakiChartLegendContent({
  className,
  ...props
}: React.ComponentProps<typeof ChartLegendContent>) {
  return (
    <ChartLegendContent
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export const UragakiChartTooltip = ChartTooltip;
export const UragakiChartLegend = ChartLegend;
export const UragakiChartStyle = ChartStyle;
export type { ChartConfig };
