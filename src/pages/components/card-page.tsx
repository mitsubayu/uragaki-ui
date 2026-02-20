import {
  UragakiCard,
  UragakiCardHeader,
  UragakiCardTitle,
  UragakiCardDescription,
  UragakiCardContent,
  UragakiCardFooter,
  UragakiButton,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function CardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          カード (Card)
        </h1>
        <p className="text-muted-foreground">
          rough.js の手書き風ボーダーを持つ紙のようなコンテナです。
        </p>
      </div>

      <ComponentPreview
        title="基本のカード"
        code={`<UragakiCard>
  <UragakiCardHeader>
    <UragakiCardTitle>Card Title</UragakiCardTitle>
    <UragakiCardDescription>Card description here</UragakiCardDescription>
  </UragakiCardHeader>
  <UragakiCardContent>
    <p>Card content goes here.</p>
  </UragakiCardContent>
  <UragakiCardFooter>
    <UragakiButton size="sm">Action</UragakiButton>
  </UragakiCardFooter>
</UragakiCard>`}
      >
        <UragakiCard className="w-full max-w-sm">
          <UragakiCardHeader>
            <UragakiCardTitle>Card Title</UragakiCardTitle>
            <UragakiCardDescription>Card description here</UragakiCardDescription>
          </UragakiCardHeader>
          <UragakiCardContent>
            <p className="text-sm">Card content goes here.</p>
          </UragakiCardContent>
          <UragakiCardFooter>
            <UragakiButton size="sm">Action</UragakiButton>
          </UragakiCardFooter>
        </UragakiCard>
      </ComponentPreview>

      <ComponentPreview
        title="ラフネス"
        description="ボーダーの手書き感を調整できます。"
        code={`<UragakiCard roughness={0.5}>Smooth</UragakiCard>
<UragakiCard roughness={3}>Rough</UragakiCard>`}
      >
        <UragakiCard className="w-48">
          <UragakiCardContent>
            <p className="text-sm text-center">Smooth (0.5)</p>
          </UragakiCardContent>
        </UragakiCard>
        <UragakiCard roughness={3} className="w-48">
          <UragakiCardContent>
            <p className="text-sm text-center">Rough (3)</p>
          </UragakiCardContent>
        </UragakiCard>
      </ComponentPreview>
    </div>
  );
}
