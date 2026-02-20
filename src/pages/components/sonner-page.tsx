import { UragakiSonner } from "@/components/uragaki";
import { UragakiButton } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";
import { toast } from "sonner";

export function SonnerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ソナー (Sonner)
        </h1>
        <p className="text-muted-foreground">
          トースト通知コンポーネントです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiSonner />
<UragakiButton onClick={() => toast("通知が表示されました")}>
  トーストを表示
</UragakiButton>`}
      >
        <UragakiSonner position="bottom-right" />
        <div className="flex gap-2 flex-wrap">
          <UragakiButton onClick={() => toast("通知が表示されました")}>
            デフォルト
          </UragakiButton>
          <UragakiButton
            variant="outline"
            onClick={() => toast.success("成功しました！")}
          >
            成功
          </UragakiButton>
          <UragakiButton
            variant="destructive"
            onClick={() => toast.error("エラーが発生しました")}
          >
            エラー
          </UragakiButton>
          <UragakiButton
            variant="secondary"
            onClick={() =>
              toast("操作を実行しますか？", {
                action: { label: "実行", onClick: () => {} },
              })
            }
          >
            アクション付き
          </UragakiButton>
        </div>
      </ComponentPreview>
    </div>
  );
}
