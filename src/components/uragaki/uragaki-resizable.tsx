import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function UragakiResizablePanelGroup({
  className,
  roughness = 3.5,
  seed,
  children,
  ...props
}: {
  className?: string;
  roughness?: number;
  seed?: number;
  children?: React.ReactNode;
  direction: "horizontal" | "vertical";
  [key: string]: unknown;
}) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
      block
    >
      <ResizablePanelGroup
        className={cn("font-[var(--font-uragaki-body)]", className)}
        {...(props as React.ComponentProps<typeof ResizablePanelGroup>)}
      >
        {children}
      </ResizablePanelGroup>
    </UragakiBorder>
  );
}

export function UragakiResizablePanel(
  props: React.ComponentProps<typeof ResizablePanel>
) {
  return <ResizablePanel {...props} />;
}

export function UragakiResizableHandle(
  props: React.ComponentProps<typeof ResizableHandle>
) {
  return <ResizableHandle {...props} />;
}
