import {
  UragakiDialog,
  UragakiDialogTrigger,
  UragakiDialogContent,
  UragakiDialogHeader,
  UragakiDialogFooter,
  UragakiDialogTitle,
  UragakiDialogDescription,
  UragakiButton,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function DialogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ダイアログ (Dialog)
        </h1>
        <p className="text-muted-foreground">
          rough.js のボーダーを使った手書き風モーダルダイアログです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiDialog>
  <UragakiDialogTrigger asChild>
    <UragakiButton>Open Dialog</UragakiButton>
  </UragakiDialogTrigger>
  <UragakiDialogContent>
    <UragakiDialogHeader>
      <UragakiDialogTitle>Are you sure?</UragakiDialogTitle>
      <UragakiDialogDescription>
        This action cannot be undone.
      </UragakiDialogDescription>
    </UragakiDialogHeader>
    <UragakiDialogFooter>
      <UragakiButton variant="outline">Cancel</UragakiButton>
      <UragakiButton>Confirm</UragakiButton>
    </UragakiDialogFooter>
  </UragakiDialogContent>
</UragakiDialog>`}
      >
        <UragakiDialog>
          <UragakiDialogTrigger asChild>
            <UragakiButton>Open Dialog</UragakiButton>
          </UragakiDialogTrigger>
          <UragakiDialogContent>
            <UragakiDialogHeader>
              <UragakiDialogTitle>Are you sure?</UragakiDialogTitle>
              <UragakiDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </UragakiDialogDescription>
            </UragakiDialogHeader>
            <UragakiDialogFooter>
              <UragakiButton variant="outline">Cancel</UragakiButton>
              <UragakiButton>Confirm</UragakiButton>
            </UragakiDialogFooter>
          </UragakiDialogContent>
        </UragakiDialog>
      </ComponentPreview>
    </div>
  );
}
