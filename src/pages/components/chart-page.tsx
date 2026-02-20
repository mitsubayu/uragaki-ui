import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  UragakiChartContainer,
  UragakiChartTooltip,
  UragakiChartTooltipContent,
  type ChartConfig,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

const chartData = [
  { month: "1月", desktop: 186 },
  { month: "2月", desktop: 305 },
  { month: "3月", desktop: 237 },
  { month: "4月", desktop: 73 },
  { month: "5月", desktop: 209 },
  { month: "6月", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "デスクトップ",
    color: "oklch(0.45 0.15 250)",
  },
} satisfies ChartConfig;

export function ChartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          チャート (Chart)
        </h1>
        <p className="text-muted-foreground">
          recharts ベースのチャートコンポーネントです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="バーチャート"
        code={`<UragakiChartContainer config={chartConfig}>
  <BarChart data={chartData}>
    <XAxis dataKey="month" />
    <YAxis />
    <UragakiChartTooltip content={<UragakiChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
  </BarChart>
</UragakiChartContainer>`}
      >
        <div className="w-full max-w-[500px] h-[300px]">
          <UragakiChartContainer config={chartConfig}>
            <BarChart data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <UragakiChartTooltip content={<UragakiChartTooltipContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            </BarChart>
          </UragakiChartContainer>
        </div>
      </ComponentPreview>
    </div>
  );
}
