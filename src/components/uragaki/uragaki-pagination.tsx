import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export function UragakiPagination({
  className,
  ...props
}: React.ComponentProps<typeof Pagination>) {
  return (
    <Pagination
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiPaginationContent(
  props: React.ComponentProps<typeof PaginationContent>
) {
  return <PaginationContent {...props} />;
}

export function UragakiPaginationItem(
  props: React.ComponentProps<typeof PaginationItem>
) {
  return <PaginationItem {...props} />;
}

export function UragakiPaginationLink({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiPaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationPrevious>) {
  return (
    <PaginationPrevious
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiPaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationNext>) {
  return (
    <PaginationNext
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiPaginationEllipsis(
  props: React.ComponentProps<typeof PaginationEllipsis>
) {
  return <PaginationEllipsis {...props} />;
}
