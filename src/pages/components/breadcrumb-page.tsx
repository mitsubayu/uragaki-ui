import {
  UragakiBreadcrumb,
  UragakiBreadcrumbList,
  UragakiBreadcrumbItem,
  UragakiBreadcrumbLink,
  UragakiBreadcrumbPage,
  UragakiBreadcrumbSeparator,
  UragakiBreadcrumbEllipsis,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function BreadcrumbPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          パンくずリスト (Breadcrumb)
        </h1>
        <p className="text-muted-foreground">
          ナビゲーション用のパンくずリストです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiBreadcrumb>
  <UragakiBreadcrumbList>
    <UragakiBreadcrumbItem>
      <UragakiBreadcrumbLink href="/">ホーム</UragakiBreadcrumbLink>
    </UragakiBreadcrumbItem>
    <UragakiBreadcrumbSeparator />
    <UragakiBreadcrumbItem>
      <UragakiBreadcrumbPage>現在のページ</UragakiBreadcrumbPage>
    </UragakiBreadcrumbItem>
  </UragakiBreadcrumbList>
</UragakiBreadcrumb>`}
      >
        <UragakiBreadcrumb>
          <UragakiBreadcrumbList>
            <UragakiBreadcrumbItem>
              <UragakiBreadcrumbLink href="/">ホーム</UragakiBreadcrumbLink>
            </UragakiBreadcrumbItem>
            <UragakiBreadcrumbSeparator />
            <UragakiBreadcrumbItem>
              <UragakiBreadcrumbLink href="/docs">ドキュメント</UragakiBreadcrumbLink>
            </UragakiBreadcrumbItem>
            <UragakiBreadcrumbSeparator />
            <UragakiBreadcrumbItem>
              <UragakiBreadcrumbPage>パンくずリスト</UragakiBreadcrumbPage>
            </UragakiBreadcrumbItem>
          </UragakiBreadcrumbList>
        </UragakiBreadcrumb>
      </ComponentPreview>

      <ComponentPreview
        title="省略記号付き"
        code={`<UragakiBreadcrumb>
  <UragakiBreadcrumbList>
    <UragakiBreadcrumbItem>
      <UragakiBreadcrumbLink href="/">ホーム</UragakiBreadcrumbLink>
    </UragakiBreadcrumbItem>
    <UragakiBreadcrumbSeparator />
    <UragakiBreadcrumbItem>
      <UragakiBreadcrumbEllipsis />
    </UragakiBreadcrumbItem>
    <UragakiBreadcrumbSeparator />
    <UragakiBreadcrumbItem>
      <UragakiBreadcrumbPage>現在のページ</UragakiBreadcrumbPage>
    </UragakiBreadcrumbItem>
  </UragakiBreadcrumbList>
</UragakiBreadcrumb>`}
      >
        <UragakiBreadcrumb>
          <UragakiBreadcrumbList>
            <UragakiBreadcrumbItem>
              <UragakiBreadcrumbLink href="/">ホーム</UragakiBreadcrumbLink>
            </UragakiBreadcrumbItem>
            <UragakiBreadcrumbSeparator />
            <UragakiBreadcrumbItem>
              <UragakiBreadcrumbEllipsis />
            </UragakiBreadcrumbItem>
            <UragakiBreadcrumbSeparator />
            <UragakiBreadcrumbItem>
              <UragakiBreadcrumbLink href="/docs">ドキュメント</UragakiBreadcrumbLink>
            </UragakiBreadcrumbItem>
            <UragakiBreadcrumbSeparator />
            <UragakiBreadcrumbItem>
              <UragakiBreadcrumbPage>パンくずリスト</UragakiBreadcrumbPage>
            </UragakiBreadcrumbItem>
          </UragakiBreadcrumbList>
        </UragakiBreadcrumb>
      </ComponentPreview>
    </div>
  );
}
