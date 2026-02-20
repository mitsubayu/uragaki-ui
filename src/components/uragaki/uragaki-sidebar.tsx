import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function UragakiSidebarProvider({
  className,
  ...props
}: React.ComponentProps<typeof SidebarProvider>) {
  return (
    <SidebarProvider
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return <Sidebar {...props} />;
}

export function UragakiSidebarHeader({
  className,
  ...props
}: React.ComponentProps<typeof SidebarHeader>) {
  return (
    <SidebarHeader
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiSidebarContent(
  props: React.ComponentProps<typeof SidebarContent>
) {
  return <SidebarContent {...props} />;
}

export function UragakiSidebarFooter(
  props: React.ComponentProps<typeof SidebarFooter>
) {
  return <SidebarFooter {...props} />;
}

export function UragakiSidebarGroup(
  props: React.ComponentProps<typeof SidebarGroup>
) {
  return <SidebarGroup {...props} />;
}

export function UragakiSidebarGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof SidebarGroupLabel>) {
  return (
    <SidebarGroupLabel
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiSidebarGroupAction(
  props: React.ComponentProps<typeof SidebarGroupAction>
) {
  return <SidebarGroupAction {...props} />;
}

export function UragakiSidebarGroupContent(
  props: React.ComponentProps<typeof SidebarGroupContent>
) {
  return <SidebarGroupContent {...props} />;
}

export function UragakiSidebarMenu(
  props: React.ComponentProps<typeof SidebarMenu>
) {
  return <SidebarMenu {...props} />;
}

export function UragakiSidebarMenuItem(
  props: React.ComponentProps<typeof SidebarMenuItem>
) {
  return <SidebarMenuItem {...props} />;
}

export function UragakiSidebarMenuButton({
  className,
  ...props
}: React.ComponentProps<typeof SidebarMenuButton>) {
  return (
    <SidebarMenuButton
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiSidebarMenuAction(
  props: React.ComponentProps<typeof SidebarMenuAction>
) {
  return <SidebarMenuAction {...props} />;
}

export function UragakiSidebarMenuBadge(
  props: React.ComponentProps<typeof SidebarMenuBadge>
) {
  return <SidebarMenuBadge {...props} />;
}

export function UragakiSidebarMenuSkeleton(
  props: React.ComponentProps<typeof SidebarMenuSkeleton>
) {
  return <SidebarMenuSkeleton {...props} />;
}

export function UragakiSidebarMenuSub(
  props: React.ComponentProps<typeof SidebarMenuSub>
) {
  return <SidebarMenuSub {...props} />;
}

export function UragakiSidebarMenuSubItem(
  props: React.ComponentProps<typeof SidebarMenuSubItem>
) {
  return <SidebarMenuSubItem {...props} />;
}

export function UragakiSidebarMenuSubButton({
  className,
  ...props
}: React.ComponentProps<typeof SidebarMenuSubButton>) {
  return (
    <SidebarMenuSubButton
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiSidebarInput(
  props: React.ComponentProps<typeof SidebarInput>
) {
  return <SidebarInput {...props} />;
}

export function UragakiSidebarInset(
  props: React.ComponentProps<typeof SidebarInset>
) {
  return <SidebarInset {...props} />;
}

export function UragakiSidebarRail(
  props: React.ComponentProps<typeof SidebarRail>
) {
  return <SidebarRail {...props} />;
}

export function UragakiSidebarSeparator(
  props: React.ComponentProps<typeof SidebarSeparator>
) {
  return <SidebarSeparator {...props} />;
}

export function UragakiSidebarTrigger(
  props: React.ComponentProps<typeof SidebarTrigger>
) {
  return <SidebarTrigger {...props} />;
}

export { useSidebar as useUragakiSidebar };
