import { useTheme } from "@/components/uragaki/theme-provider";

const colorMap = {
  light: {
    border: "oklch(0.65 0.01 70)",
    primary: "oklch(0.45 0.15 250)",
    primaryForeground: "oklch(0.98 0.005 90)",
    destructive: "oklch(0.55 0.2 25)",
    secondaryFill: "oklch(0.88 0.01 80)",
    secondaryBorder: "oklch(0.65 0.01 70)",
    background: "oklch(0.97 0.005 90)",
    muted: "oklch(0.55 0.01 60)",
  },
  dark: {
    border: "oklch(0.40 0.01 70)",
    primary: "oklch(0.70 0.15 250)",
    primaryForeground: "oklch(0.15 0.01 70)",
    destructive: "oklch(0.60 0.2 25)",
    secondaryFill: "oklch(0.30 0.015 70)",
    secondaryBorder: "oklch(0.40 0.01 70)",
    background: "oklch(0.22 0.015 70)",
    muted: "oklch(0.60 0.01 70)",
  },
} as const;

export type UragakiColors = (typeof colorMap)["light"] | (typeof colorMap)["dark"];

export function useUragakiColors(): UragakiColors {
  const { resolvedTheme } = useTheme();
  return colorMap[resolvedTheme];
}
