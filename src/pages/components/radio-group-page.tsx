import {
  UragakiRadioGroup,
  UragakiRadioGroupItem,
  UragakiLabel,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function RadioGroupPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ラジオグループ (Radio Group)
        </h1>
        <p className="text-muted-foreground">
          rough.js の楕円ボーダーを使った手書き風ラジオボタンです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiRadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <UragakiRadioGroupItem value="option-1" id="option-1" />
    <UragakiLabel htmlFor="option-1">オプション 1</UragakiLabel>
  </div>
  <div className="flex items-center gap-2">
    <UragakiRadioGroupItem value="option-2" id="option-2" />
    <UragakiLabel htmlFor="option-2">オプション 2</UragakiLabel>
  </div>
  <div className="flex items-center gap-2">
    <UragakiRadioGroupItem value="option-3" id="option-3" />
    <UragakiLabel htmlFor="option-3">オプション 3</UragakiLabel>
  </div>
</UragakiRadioGroup>`}
      >
        <UragakiRadioGroup defaultValue="option-1">
          <div className="flex items-center gap-2">
            <UragakiRadioGroupItem value="option-1" id="option-1" />
            <UragakiLabel htmlFor="option-1">オプション 1</UragakiLabel>
          </div>
          <div className="flex items-center gap-2">
            <UragakiRadioGroupItem value="option-2" id="option-2" />
            <UragakiLabel htmlFor="option-2">オプション 2</UragakiLabel>
          </div>
          <div className="flex items-center gap-2">
            <UragakiRadioGroupItem value="option-3" id="option-3" />
            <UragakiLabel htmlFor="option-3">オプション 3</UragakiLabel>
          </div>
        </UragakiRadioGroup>
      </ComponentPreview>
    </div>
  );
}
