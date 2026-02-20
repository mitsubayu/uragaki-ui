import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

interface UragakiAvatarProps extends React.ComponentProps<typeof Avatar> {
  roughness?: number;
  seed?: number;
}

export function UragakiAvatar({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiAvatarProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
      shape="ellipse"
    >
      <Avatar
        className={cn("uragaki-no-border", className)}
        {...props}
      />
    </UragakiBorder>
  );
}

export function UragakiAvatarImage(
  props: React.ComponentProps<typeof AvatarImage>
) {
  return <AvatarImage {...props} />;
}

export function UragakiAvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarFallback>) {
  return (
    <AvatarFallback
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}
