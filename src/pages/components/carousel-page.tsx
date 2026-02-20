import {
  UragakiCarousel,
  UragakiCarouselContent,
  UragakiCarouselItem,
  UragakiCarouselPrevious,
  UragakiCarouselNext,
} from "@/components/uragaki";
import { UragakiCard, UragakiCardContent } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function CarouselPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          カルーセル (Carousel)
        </h1>
        <p className="text-muted-foreground">
          スライド式のカルーセルコンポーネントです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiCarousel className="w-full max-w-xs">
  <UragakiCarouselContent>
    {Array.from({ length: 5 }).map((_, i) => (
      <UragakiCarouselItem key={i}>
        <UragakiCard>
          <UragakiCardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{i + 1}</span>
          </UragakiCardContent>
        </UragakiCard>
      </UragakiCarouselItem>
    ))}
  </UragakiCarouselContent>
  <UragakiCarouselPrevious />
  <UragakiCarouselNext />
</UragakiCarousel>`}
      >
        <div className="px-12">
          <UragakiCarousel className="w-full max-w-xs">
            <UragakiCarouselContent>
              {Array.from({ length: 5 }).map((_, i) => (
                <UragakiCarouselItem key={i}>
                  <UragakiCard>
                    <UragakiCardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold font-[var(--font-uragaki-heading)]">
                        {i + 1}
                      </span>
                    </UragakiCardContent>
                  </UragakiCard>
                </UragakiCarouselItem>
              ))}
            </UragakiCarouselContent>
            <UragakiCarouselPrevious />
            <UragakiCarouselNext />
          </UragakiCarousel>
        </div>
      </ComponentPreview>
    </div>
  );
}
