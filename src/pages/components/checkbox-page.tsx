import { UragakiCheckbox } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function CheckboxPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          チェックボックス (Checkbox)
        </h1>
        <p className="text-muted-foreground">
          rough.js のチェックマークを使った手書き風チェックボックスです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<label className="flex items-center gap-2">
  <UragakiCheckbox />
  <span>Unchecked</span>
</label>
<label className="flex items-center gap-2">
  <UragakiCheckbox defaultChecked />
  <span>Checked</span>
</label>`}
      >
        <label className="flex items-center gap-2 cursor-pointer">
          <UragakiCheckbox />
          <span className="text-sm">Unchecked</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <UragakiCheckbox defaultChecked />
          <span className="text-sm">Checked</span>
        </label>
      </ComponentPreview>

      <ComponentPreview
        title="無効状態"
        code={`<UragakiCheckbox disabled />`}
      >
        <label className="flex items-center gap-2">
          <UragakiCheckbox disabled />
          <span className="text-sm text-muted-foreground">Disabled</span>
        </label>
      </ComponentPreview>
    </div>
  );
}
