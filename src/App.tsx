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
      { path: "components/avatar", element: <AvatarPage /> },
      { path: "components/badge", element: <BadgePage /> },
      { path: "components/button", element: <ButtonPage /> },
      { path: "components/card", element: <CardPage /> },
      { path: "components/checkbox", element: <CheckboxPage /> },
      { path: "components/dialog", element: <DialogPage /> },
      { path: "components/dropdown-menu", element: <DropdownMenuPage /> },
      { path: "components/input", element: <InputPage /> },
      { path: "components/label", element: <LabelPage /> },
      { path: "components/popover", element: <PopoverPage /> },
      { path: "components/progress", element: <ProgressPage /> },
      { path: "components/radio-group", element: <RadioGroupPage /> },
      { path: "components/select", element: <SelectPage /> },
      { path: "components/separator", element: <SeparatorPage /> },
      { path: "components/sheet", element: <SheetPage /> },
      { path: "components/skeleton", element: <SkeletonPage /> },
      { path: "components/slider", element: <SliderPage /> },
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
