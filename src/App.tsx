import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/uragaki/theme-provider";
import { DocsLayout } from "@/components/docs/layout";
import { HomePage } from "@/pages/home";
import { GettingStartedPage } from "@/pages/getting-started";
import { AccordionPage } from "@/pages/components/accordion-page";
import { AlertPage } from "@/pages/components/alert-page";
import { AlertDialogPage } from "@/pages/components/alert-dialog-page";
import { AvatarPage } from "@/pages/components/avatar-page";
import { BadgePage } from "@/pages/components/badge-page";
import { ButtonPage } from "@/pages/components/button-page";
import { CardPage } from "@/pages/components/card-page";
import { CheckboxPage } from "@/pages/components/checkbox-page";
import { DialogPage } from "@/pages/components/dialog-page";
import { DropdownMenuPage } from "@/pages/components/dropdown-menu-page";
import { InputPage } from "@/pages/components/input-page";
import { LabelPage } from "@/pages/components/label-page";
import { PopoverPage } from "@/pages/components/popover-page";
import { ProgressPage } from "@/pages/components/progress-page";
import { RadioGroupPage } from "@/pages/components/radio-group-page";
import { SelectPage } from "@/pages/components/select-page";
import { SeparatorPage } from "@/pages/components/separator-page";
import { SheetPage } from "@/pages/components/sheet-page";
import { SkeletonPage } from "@/pages/components/skeleton-page";
import { SliderPage } from "@/pages/components/slider-page";
import { SwitchPage } from "@/pages/components/switch-page";
import { TablePage } from "@/pages/components/table-page";
import { TabsPage } from "@/pages/components/tabs-page";
import { TextareaPage } from "@/pages/components/textarea-page";
import { TogglePage } from "@/pages/components/toggle-page";
import { ToggleGroupPage } from "@/pages/components/toggle-group-page";
import { TooltipPage } from "@/pages/components/tooltip-page";
import { AspectRatioPage } from "@/pages/components/aspect-ratio-page";
import { BreadcrumbPage } from "@/pages/components/breadcrumb-page";
import { CalendarPage } from "@/pages/components/calendar-page";
import { CarouselPage } from "@/pages/components/carousel-page";
import { ChartPage } from "@/pages/components/chart-page";
import { CollapsiblePage } from "@/pages/components/collapsible-page";
import { CommandPage } from "@/pages/components/command-page";
import { ContextMenuPage } from "@/pages/components/context-menu-page";
import { DrawerPage } from "@/pages/components/drawer-page";
import { FormPage } from "@/pages/components/form-page";
import { HoverCardPage } from "@/pages/components/hover-card-page";
import { InputOTPPage } from "@/pages/components/input-otp-page";
import { MenubarPage } from "@/pages/components/menubar-page";
import { NavigationMenuPage } from "@/pages/components/navigation-menu-page";
import { PaginationPage } from "@/pages/components/pagination-page";
import { ResizablePage } from "@/pages/components/resizable-page";
import { ScrollAreaPage } from "@/pages/components/scroll-area-page";
import { SidebarPage } from "@/pages/components/sidebar-page";
import { SonnerPage } from "@/pages/components/sonner-page";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/docs",
    element: <DocsLayout />,
    children: [
      { index: true, element: <GettingStartedPage /> },
      { path: "components/accordion", element: <AccordionPage /> },
      { path: "components/alert", element: <AlertPage /> },
      { path: "components/alert-dialog", element: <AlertDialogPage /> },
      { path: "components/aspect-ratio", element: <AspectRatioPage /> },
      { path: "components/avatar", element: <AvatarPage /> },
      { path: "components/badge", element: <BadgePage /> },
      { path: "components/breadcrumb", element: <BreadcrumbPage /> },
      { path: "components/button", element: <ButtonPage /> },
      { path: "components/calendar", element: <CalendarPage /> },
      { path: "components/card", element: <CardPage /> },
      { path: "components/carousel", element: <CarouselPage /> },
      { path: "components/chart", element: <ChartPage /> },
      { path: "components/checkbox", element: <CheckboxPage /> },
      { path: "components/collapsible", element: <CollapsiblePage /> },
      { path: "components/command", element: <CommandPage /> },
      { path: "components/context-menu", element: <ContextMenuPage /> },
      { path: "components/dialog", element: <DialogPage /> },
      { path: "components/drawer", element: <DrawerPage /> },
      { path: "components/dropdown-menu", element: <DropdownMenuPage /> },
      { path: "components/form", element: <FormPage /> },
      { path: "components/hover-card", element: <HoverCardPage /> },
      { path: "components/input", element: <InputPage /> },
      { path: "components/input-otp", element: <InputOTPPage /> },
      { path: "components/label", element: <LabelPage /> },
      { path: "components/menubar", element: <MenubarPage /> },
      { path: "components/navigation-menu", element: <NavigationMenuPage /> },
      { path: "components/pagination", element: <PaginationPage /> },
      { path: "components/popover", element: <PopoverPage /> },
      { path: "components/progress", element: <ProgressPage /> },
      { path: "components/radio-group", element: <RadioGroupPage /> },
      { path: "components/resizable", element: <ResizablePage /> },
      { path: "components/scroll-area", element: <ScrollAreaPage /> },
      { path: "components/select", element: <SelectPage /> },
      { path: "components/separator", element: <SeparatorPage /> },
      { path: "components/sheet", element: <SheetPage /> },
      { path: "components/sidebar", element: <SidebarPage /> },
      { path: "components/skeleton", element: <SkeletonPage /> },
      { path: "components/slider", element: <SliderPage /> },
      { path: "components/sonner", element: <SonnerPage /> },
      { path: "components/switch", element: <SwitchPage /> },
      { path: "components/table", element: <TablePage /> },
      { path: "components/tabs", element: <TabsPage /> },
      { path: "components/textarea", element: <TextareaPage /> },
      { path: "components/toggle", element: <TogglePage /> },
      { path: "components/toggle-group", element: <ToggleGroupPage /> },
      { path: "components/tooltip", element: <TooltipPage /> },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
