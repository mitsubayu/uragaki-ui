import { UragakiSwitch, UragakiLabel } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function SwitchPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          スイッチ (Switch)
        </h1>
        <p className="text-muted-foreground">
          rough.js の楕円ボーダーを使った手書き風トグルスイッチです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<div className="flex items-center gap-2">
  <UragakiSwitch id="airplane" />
  <UragakiLabel htmlFor="airplane">機内モード</UragakiLabel>
</div>`}
      >
        <div className="flex items-center gap-2">
          <UragakiSwitch id="airplane" />
          <UragakiLabel htmlFor="airplane">機内モード</UragakiLabel>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="無効状態"
        code={`<UragakiSwitch disabled />`}
      >
        <div className="flex items-center gap-2">
          <UragakiSwitch disabled id="disabled-switch" />
          <UragakiLabel htmlFor="disabled-switch">無効</UragakiLabel>
        </div>
      </ComponentPreview>
    </div>
  );
}
