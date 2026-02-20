import { useState } from "react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({
  title,
  description,
  code,
  children,
  className,
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className={cn("space-y-2", className)}>
      <div>
        <h3 className="font-[var(--font-uragaki-heading)] text-lg font-semibold">
          {title}
        </h3>
        {description && (
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        )}
      </div>

      <div className="border border-border/50 rounded-lg overflow-hidden">
        {/* Preview Area */}
        <div className="p-8 flex flex-wrap items-center gap-4 bg-background uragaki-paper">
          {children}
        </div>

        {/* Toggle */}
        <div className="border-t border-border/50 bg-muted/30">
          <button
            onClick={() => setShowCode(!showCode)}
            className="px-4 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors font-[var(--font-uragaki-body)] cursor-pointer"
          >
            {showCode ? "Hide Code" : "Show Code"}
          </button>
        </div>

        {/* Code */}
        {showCode && (
          <div className="border-t border-border/50 bg-muted/20 p-4 overflow-x-auto">
            <pre className="text-xs leading-relaxed">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
