import { defineConfig } from "tsup";
import { copyFileSync } from "fs";

export default defineConfig({
  entry: ["src/components/uragaki/index.ts"],
  format: ["esm"],
  tsconfig: "tsconfig.lib.json",
  dts: true,
  external: [
    "react",
    "react-dom",
    "roughjs",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "radix-ui",
    "lucide-react",
    "cmdk",
    "date-fns",
    "embla-carousel-react",
    "input-otp",
    "next-themes",
    "react-day-picker",
    "react-hook-form",
    "react-resizable-panels",
    "recharts",
    "sonner",
    "vaul",
    "zod",
    "@hookform/resolvers",
  ],
  outDir: "dist",
  clean: true,
  treeshake: true,
  sourcemap: true,
  esbuildOptions(options) {
    options.alias = {
      "@/components": "./src/components",
      "@/lib": "./src/lib",
      "@/hooks": "./src/hooks",
    };
  },
  onSuccess: async () => {
    copyFileSync("src/uragaki-styles.css", "dist/uragaki-styles.css");
  },
});
