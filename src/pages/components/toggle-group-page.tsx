import {
  UragakiToggleGroup,
  UragakiToggleGroupItem,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from "lucide-react";

export function ToggleGroupPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          トグルグループ (Toggle Group)
        </h1>
        <p className="text-muted-foreground">
          rough.js のボーダーを使った手書き風のトグルボタングループです。
        </p>
      </div>

      <ComponentPreview
        title="単一選択"
        code={`<UragakiToggleGroup type="single">
  <UragakiToggleGroupItem value="left">
    <AlignLeftIcon className="size-4" />
  </UragakiToggleGroupItem>
  <UragakiToggleGroupItem value="center">
    <AlignCenterIcon className="size-4" />
  </UragakiToggleGroupItem>
  <UragakiToggleGroupItem value="right">
    <AlignRightIcon className="size-4" />
  </UragakiToggleGroupItem>
</UragakiToggleGroup>`}
      >
        <UragakiToggleGroup type="single" defaultValue="center">
          <UragakiToggleGroupItem value="left" aria-label="左揃え">
            <AlignLeftIcon className="size-4" />
          </UragakiToggleGroupItem>
          <UragakiToggleGroupItem value="center" aria-label="中央揃え">
            <AlignCenterIcon className="size-4" />
          </UragakiToggleGroupItem>
          <UragakiToggleGroupItem value="right" aria-label="右揃え">
            <AlignRightIcon className="size-4" />
          </UragakiToggleGroupItem>
        </UragakiToggleGroup>
      </ComponentPreview>

      <ComponentPreview
        title="複数選択"
        code={`<UragakiToggleGroup type="multiple">
  <UragakiToggleGroupItem value="a">A</UragakiToggleGroupItem>
  <UragakiToggleGroupItem value="b">B</UragakiToggleGroupItem>
  <UragakiToggleGroupItem value="c">C</UragakiToggleGroupItem>
</UragakiToggleGroup>`}
      >
        <UragakiToggleGroup type="multiple">
          <UragakiToggleGroupItem value="a">A</UragakiToggleGroupItem>
          <UragakiToggleGroupItem value="b">B</UragakiToggleGroupItem>
          <UragakiToggleGroupItem value="c">C</UragakiToggleGroupItem>
        </UragakiToggleGroup>
      </ComponentPreview>
    </div>
  );
}
