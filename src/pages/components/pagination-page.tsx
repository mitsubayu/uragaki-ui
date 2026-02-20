import {
  UragakiPagination,
  UragakiPaginationContent,
  UragakiPaginationItem,
  UragakiPaginationLink,
  UragakiPaginationPrevious,
  UragakiPaginationNext,
  UragakiPaginationEllipsis,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function PaginationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ページネーション (Pagination)
        </h1>
        <p className="text-muted-foreground">
          ページナビゲーション用のコンポーネントです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiPagination>
  <UragakiPaginationContent>
    <UragakiPaginationItem>
      <UragakiPaginationPrevious href="#" />
    </UragakiPaginationItem>
    <UragakiPaginationItem>
      <UragakiPaginationLink href="#">1</UragakiPaginationLink>
    </UragakiPaginationItem>
    <UragakiPaginationItem>
      <UragakiPaginationLink href="#" isActive>2</UragakiPaginationLink>
    </UragakiPaginationItem>
    <UragakiPaginationItem>
      <UragakiPaginationLink href="#">3</UragakiPaginationLink>
    </UragakiPaginationItem>
    <UragakiPaginationItem>
      <UragakiPaginationEllipsis />
    </UragakiPaginationItem>
    <UragakiPaginationItem>
      <UragakiPaginationNext href="#" />
    </UragakiPaginationItem>
  </UragakiPaginationContent>
</UragakiPagination>`}
      >
        <UragakiPagination>
          <UragakiPaginationContent>
            <UragakiPaginationItem>
              <UragakiPaginationPrevious href="#" />
            </UragakiPaginationItem>
            <UragakiPaginationItem>
              <UragakiPaginationLink href="#">1</UragakiPaginationLink>
            </UragakiPaginationItem>
            <UragakiPaginationItem>
              <UragakiPaginationLink href="#" isActive>2</UragakiPaginationLink>
            </UragakiPaginationItem>
            <UragakiPaginationItem>
              <UragakiPaginationLink href="#">3</UragakiPaginationLink>
            </UragakiPaginationItem>
            <UragakiPaginationItem>
              <UragakiPaginationEllipsis />
            </UragakiPaginationItem>
            <UragakiPaginationItem>
              <UragakiPaginationNext href="#" />
            </UragakiPaginationItem>
          </UragakiPaginationContent>
        </UragakiPagination>
      </ComponentPreview>
    </div>
  );
}
