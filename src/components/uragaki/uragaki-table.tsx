import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

interface UragakiTableProps extends React.ComponentProps<"table"> {
  roughness?: number;
  seed?: number;
}

export function UragakiTable({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiTableProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
      block
    >
      <Table
        className={cn(
          "uragaki-no-border font-[var(--font-uragaki-body)]",
          className
        )}
        {...props}
      />
    </UragakiBorder>
  );
}

export function UragakiTableHeader(
  props: React.ComponentProps<typeof TableHeader>
) {
  return <TableHeader {...props} />;
}

export function UragakiTableBody(
  props: React.ComponentProps<typeof TableBody>
) {
  return <TableBody {...props} />;
}

export function UragakiTableFooter(
  props: React.ComponentProps<typeof TableFooter>
) {
  return <TableFooter {...props} />;
}

export function UragakiTableHead({
  className,
  ...props
}: React.ComponentProps<typeof TableHead>) {
  return (
    <TableHead
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiTableRow(
  props: React.ComponentProps<typeof TableRow>
) {
  return <TableRow {...props} />;
}

export function UragakiTableCell(
  props: React.ComponentProps<typeof TableCell>
) {
  return <TableCell {...props} />;
}

export function UragakiTableCaption(
  props: React.ComponentProps<typeof TableCaption>
) {
  return <TableCaption {...props} />;
}
