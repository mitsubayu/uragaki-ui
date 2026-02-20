import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

interface UragakiAvatarProps extends React.ComponentProps<typeof Avatar> {
  roughness?: number;
  seed?: number;
}

export function UragakiAvatar({
  className,
  roughness = 2.6,
  seed,
  ...props
}: UragakiAvatarProps) {
  const colors = useUragakiColors();
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke={colors.border}
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
