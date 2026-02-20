import {
  UragakiAvatar,
  UragakiAvatarFallback,
  UragakiAvatarImage,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function AvatarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          アバター (Avatar)
        </h1>
        <p className="text-muted-foreground">
          rough.js の楕円ボーダーを使った手書き風ユーザーアバターです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiAvatar>
  <UragakiAvatarImage src="https://github.com/shadcn.png" />
  <UragakiAvatarFallback>CN</UragakiAvatarFallback>
</UragakiAvatar>`}
      >
        <UragakiAvatar>
          <UragakiAvatarImage src="https://github.com/shadcn.png" />
          <UragakiAvatarFallback>CN</UragakiAvatarFallback>
        </UragakiAvatar>
      </ComponentPreview>

      <ComponentPreview
        title="フォールバック"
        description="画像が読み込めない場合にイニシャルを表示します。"
        code={`<UragakiAvatar>
  <UragakiAvatarFallback>AB</UragakiAvatarFallback>
</UragakiAvatar>`}
      >
        <UragakiAvatar>
          <UragakiAvatarFallback>AB</UragakiAvatarFallback>
        </UragakiAvatar>
        <UragakiAvatar>
          <UragakiAvatarFallback>YZ</UragakiAvatarFallback>
        </UragakiAvatar>
      </ComponentPreview>
    </div>
  );
}
