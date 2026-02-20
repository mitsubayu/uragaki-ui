import {
  UragakiAlert,
  UragakiAlertTitle,
  UragakiAlertDescription,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function AlertPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          アラート (Alert)
        </h1>
        <p className="text-muted-foreground">
          重要なメッセージのための手書き風アラートボックスです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiAlert>
  <UragakiAlertTitle>Note</UragakiAlertTitle>
  <UragakiAlertDescription>
    This is a uragaki-style alert message.
  </UragakiAlertDescription>
</UragakiAlert>`}
      >
        <UragakiAlert className="w-full">
          <UragakiAlertTitle>Note</UragakiAlertTitle>
          <UragakiAlertDescription>
            This is a uragaki-style alert message.
          </UragakiAlertDescription>
        </UragakiAlert>
      </ComponentPreview>

      <ComponentPreview
        title="エラー表示"
        code={`<UragakiAlert variant="destructive">
  <UragakiAlertTitle>Error</UragakiAlertTitle>
  <UragakiAlertDescription>
    Something went wrong!
  </UragakiAlertDescription>
</UragakiAlert>`}
      >
        <UragakiAlert variant="destructive" className="w-full">
          <UragakiAlertTitle>Error</UragakiAlertTitle>
          <UragakiAlertDescription>
            Something went wrong!
          </UragakiAlertDescription>
        </UragakiAlert>
      </ComponentPreview>
    </div>
  );
}
