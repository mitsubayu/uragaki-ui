import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function UragakiNavigationMenu({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenu>) {
  return (
    <NavigationMenu
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiNavigationMenuList(
  props: React.ComponentProps<typeof NavigationMenuList>
) {
  return <NavigationMenuList {...props} />;
}

export function UragakiNavigationMenuItem(
  props: React.ComponentProps<typeof NavigationMenuItem>
) {
  return <NavigationMenuItem {...props} />;
}

export function UragakiNavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuContent>) {
  return (
    <NavigationMenuContent
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiNavigationMenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuTrigger>) {
  return (
    <NavigationMenuTrigger
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiNavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink>) {
  return (
    <NavigationMenuLink
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiNavigationMenuIndicator(
  props: React.ComponentProps<typeof NavigationMenuIndicator>
) {
  return <NavigationMenuIndicator {...props} />;
}

export function UragakiNavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuViewport>) {
  return (
    <NavigationMenuViewport
      className={cn("border-2 border-foreground/20", className)}
      {...props}
    />
  );
}

export { navigationMenuTriggerStyle };
