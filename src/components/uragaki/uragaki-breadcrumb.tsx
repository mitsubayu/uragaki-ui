import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

export function UragakiBreadcrumb(
  props: React.ComponentProps<typeof Breadcrumb>
) {
  return <Breadcrumb {...props} />;
}

export function UragakiBreadcrumbList({
  className,
  ...props
}: React.ComponentProps<typeof BreadcrumbList>) {
  return (
    <BreadcrumbList
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiBreadcrumbItem(
  props: React.ComponentProps<typeof BreadcrumbItem>
) {
  return <BreadcrumbItem {...props} />;
}

export function UragakiBreadcrumbLink({
  className,
  ...props
}: React.ComponentProps<typeof BreadcrumbLink>) {
  return (
    <BreadcrumbLink
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiBreadcrumbPage({
  className,
  ...props
}: React.ComponentProps<typeof BreadcrumbPage>) {
  return (
    <BreadcrumbPage
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiBreadcrumbSeparator(
  props: React.ComponentProps<typeof BreadcrumbSeparator>
) {
  return <BreadcrumbSeparator {...props} />;
}

export function UragakiBreadcrumbEllipsis(
  props: React.ComponentProps<typeof BreadcrumbEllipsis>
) {
  return <BreadcrumbEllipsis {...props} />;
}
