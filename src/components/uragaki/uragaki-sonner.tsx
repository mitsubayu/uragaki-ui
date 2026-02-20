import { Toaster, type ToasterProps } from "sonner";

export function UragakiSonner(props: ToasterProps) {
  return (
    <Toaster
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "font-[var(--font-uragaki-body)] border-2 border-foreground/20 rounded-none shadow-none bg-background",
          title: "font-[var(--font-uragaki-heading)]",
          description: "font-[var(--font-uragaki-body)]",
          actionButton: "font-[var(--font-uragaki-body)]",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}
