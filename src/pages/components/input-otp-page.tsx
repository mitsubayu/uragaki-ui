import {
  UragakiInputOTP,
  UragakiInputOTPGroup,
  UragakiInputOTPSlot,
  UragakiInputOTPSeparator,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function InputOTPPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ワンタイムパスワード入力 (Input OTP)
        </h1>
        <p className="text-muted-foreground">
          OTP（ワンタイムパスワード）入力コンポーネントです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="6桁"
        code={`<UragakiInputOTP maxLength={6}>
  <UragakiInputOTPGroup>
    <UragakiInputOTPSlot index={0} />
    <UragakiInputOTPSlot index={1} />
    <UragakiInputOTPSlot index={2} />
  </UragakiInputOTPGroup>
  <UragakiInputOTPSeparator />
  <UragakiInputOTPGroup>
    <UragakiInputOTPSlot index={3} />
    <UragakiInputOTPSlot index={4} />
    <UragakiInputOTPSlot index={5} />
  </UragakiInputOTPGroup>
</UragakiInputOTP>`}
      >
        <UragakiInputOTP maxLength={6}>
          <UragakiInputOTPGroup>
            <UragakiInputOTPSlot index={0} />
            <UragakiInputOTPSlot index={1} />
            <UragakiInputOTPSlot index={2} />
          </UragakiInputOTPGroup>
          <UragakiInputOTPSeparator />
          <UragakiInputOTPGroup>
            <UragakiInputOTPSlot index={3} />
            <UragakiInputOTPSlot index={4} />
            <UragakiInputOTPSlot index={5} />
          </UragakiInputOTPGroup>
        </UragakiInputOTP>
      </ComponentPreview>

      <ComponentPreview
        title="4桁"
        code={`<UragakiInputOTP maxLength={4}>
  <UragakiInputOTPGroup>
    <UragakiInputOTPSlot index={0} />
    <UragakiInputOTPSlot index={1} />
    <UragakiInputOTPSlot index={2} />
    <UragakiInputOTPSlot index={3} />
  </UragakiInputOTPGroup>
</UragakiInputOTP>`}
      >
        <UragakiInputOTP maxLength={4}>
          <UragakiInputOTPGroup>
            <UragakiInputOTPSlot index={0} />
            <UragakiInputOTPSlot index={1} />
            <UragakiInputOTPSlot index={2} />
            <UragakiInputOTPSlot index={3} />
          </UragakiInputOTPGroup>
        </UragakiInputOTP>
      </ComponentPreview>
    </div>
  );
}
