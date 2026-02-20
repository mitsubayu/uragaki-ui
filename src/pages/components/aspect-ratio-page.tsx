import { UragakiAspectRatio } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function AspectRatioPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          アスペクト比 (Aspect Ratio)
        </h1>
        <p className="text-muted-foreground">
          指定した縦横比を維持するコンテナです。rough.js の手描きボーダー付き。
        </p>
      </div>

      <ComponentPreview
        title="16:9"
        code={`<UragakiAspectRatio ratio={16 / 9}>
  <img src="..." className="object-cover w-full h-full" />
</UragakiAspectRatio>`}
      >
        <div className="w-[300px]">
          <UragakiAspectRatio ratio={16 / 9}>
            <div className="flex items-center justify-center w-full h-full bg-muted text-muted-foreground text-sm">
              16:9
            </div>
          </UragakiAspectRatio>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="4:3"
        code={`<UragakiAspectRatio ratio={4 / 3}>
  <img src="..." className="object-cover w-full h-full" />
</UragakiAspectRatio>`}
      >
        <div className="w-[300px]">
          <UragakiAspectRatio ratio={4 / 3}>
            <div className="flex items-center justify-center w-full h-full bg-muted text-muted-foreground text-sm">
              4:3
            </div>
          </UragakiAspectRatio>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="1:1"
        code={`<UragakiAspectRatio ratio={1}>
  <img src="..." className="object-cover w-full h-full" />
</UragakiAspectRatio>`}
      >
        <div className="w-[200px]">
          <UragakiAspectRatio ratio={1}>
            <div className="flex items-center justify-center w-full h-full bg-muted text-muted-foreground text-sm">
              1:1
            </div>
          </UragakiAspectRatio>
        </div>
      </ComponentPreview>
    </div>
  );
}
