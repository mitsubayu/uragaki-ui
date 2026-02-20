import {
  UragakiAlertDialog,
  UragakiAlertDialogTrigger,
  UragakiAlertDialogContent,
  UragakiAlertDialogHeader,
  UragakiAlertDialogFooter,
  UragakiAlertDialogTitle,
  UragakiAlertDialogDescription,
  UragakiAlertDialogAction,
  UragakiAlertDialogCancel,
  UragakiButton,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function AlertDialogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          アラートダイアログ (Alert Dialog)
        </h1>
        <p className="text-muted-foreground">
          ユーザーの確認を求める手書き風モーダルダイアログです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiAlertDialog>
  <UragakiAlertDialogTrigger asChild>
    <UragakiButton variant="destructive">削除する</UragakiButton>
  </UragakiAlertDialogTrigger>
  <UragakiAlertDialogContent>
    <UragakiAlertDialogHeader>
      <UragakiAlertDialogTitle>本当に削除しますか？</UragakiAlertDialogTitle>
      <UragakiAlertDialogDescription>
        この操作は取り消せません。
      </UragakiAlertDialogDescription>
    </UragakiAlertDialogHeader>
    <UragakiAlertDialogFooter>
      <UragakiAlertDialogCancel>キャンセル</UragakiAlertDialogCancel>
      <UragakiAlertDialogAction>削除</UragakiAlertDialogAction>
    </UragakiAlertDialogFooter>
  </UragakiAlertDialogContent>
</UragakiAlertDialog>`}
      >
        <UragakiAlertDialog>
          <UragakiAlertDialogTrigger asChild>
            <UragakiButton variant="destructive">削除する</UragakiButton>
          </UragakiAlertDialogTrigger>
          <UragakiAlertDialogContent>
            <UragakiAlertDialogHeader>
              <UragakiAlertDialogTitle>本当に削除しますか？</UragakiAlertDialogTitle>
              <UragakiAlertDialogDescription>
                この操作は取り消せません。データは完全に削除され、復元できなくなります。
              </UragakiAlertDialogDescription>
            </UragakiAlertDialogHeader>
            <UragakiAlertDialogFooter>
              <UragakiAlertDialogCancel>キャンセル</UragakiAlertDialogCancel>
              <UragakiAlertDialogAction>削除</UragakiAlertDialogAction>
            </UragakiAlertDialogFooter>
          </UragakiAlertDialogContent>
        </UragakiAlertDialog>
      </ComponentPreview>
    </div>
  );
}
