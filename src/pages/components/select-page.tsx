import {
  UragakiSelect,
  UragakiSelectTrigger,
  UragakiSelectContent,
  UragakiSelectItem,
  UragakiSelectValue,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function SelectPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          セレクト (Select)
        </h1>
        <p className="text-muted-foreground">
          手書き風のセレクトドロップダウンです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiSelect>
  <UragakiSelectTrigger>
    <UragakiSelectValue placeholder="Select a fruit..." />
  </UragakiSelectTrigger>
  <UragakiSelectContent>
    <UragakiSelectItem value="apple">Apple</UragakiSelectItem>
    <UragakiSelectItem value="banana">Banana</UragakiSelectItem>
    <UragakiSelectItem value="cherry">Cherry</UragakiSelectItem>
  </UragakiSelectContent>
</UragakiSelect>`}
      >
        <UragakiSelect>
          <UragakiSelectTrigger>
            <UragakiSelectValue placeholder="Select a fruit..." />
          </UragakiSelectTrigger>
          <UragakiSelectContent>
            <UragakiSelectItem value="apple">Apple</UragakiSelectItem>
            <UragakiSelectItem value="banana">Banana</UragakiSelectItem>
            <UragakiSelectItem value="cherry">Cherry</UragakiSelectItem>
            <UragakiSelectItem value="grape">Grape</UragakiSelectItem>
          </UragakiSelectContent>
        </UragakiSelect>
      </ComponentPreview>
    </div>
  );
}
