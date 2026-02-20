import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";

export function UragakiInputOTP({
  className,
  ...props
}: React.ComponentProps<typeof InputOTP>) {
  return (
    <InputOTP
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiInputOTPGroup(
  props: React.ComponentProps<typeof InputOTPGroup>
) {
  return <InputOTPGroup {...props} />;
}

export function UragakiInputOTPSlot({
  className,
  ...props
}: React.ComponentProps<typeof InputOTPSlot>) {
  return (
    <InputOTPSlot
      className={cn(
        "font-[var(--font-uragaki-body)] border-2 border-foreground/20 rounded-none",
        className
      )}
      {...props}
    />
  );
}

export function UragakiInputOTPSeparator(
  props: React.ComponentProps<typeof InputOTPSeparator>
) {
  return <InputOTPSeparator {...props} />;
}
