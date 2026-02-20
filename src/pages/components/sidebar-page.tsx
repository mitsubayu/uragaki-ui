import {
  UragakiSidebarProvider,
  UragakiSidebar,
  UragakiSidebarHeader,
  UragakiSidebarContent,
  UragakiSidebarGroup,
  UragakiSidebarGroupLabel,
  UragakiSidebarGroupContent,
  UragakiSidebarMenu,
  UragakiSidebarMenuItem,
  UragakiSidebarMenuButton,
  UragakiSidebarFooter,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function SidebarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          サイドバー (Sidebar)
        </h1>
        <p className="text-muted-foreground">
          アプリケーション用のサイドバーナビゲーションです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiSidebarProvider>
  <UragakiSidebar>
    <UragakiSidebarHeader>
      <h2>アプリ名</h2>
    </UragakiSidebarHeader>
    <UragakiSidebarContent>
      <UragakiSidebarGroup>
        <UragakiSidebarGroupLabel>メニュー</UragakiSidebarGroupLabel>
        <UragakiSidebarGroupContent>
          <UragakiSidebarMenu>
            <UragakiSidebarMenuItem>
              <UragakiSidebarMenuButton>ホーム</UragakiSidebarMenuButton>
            </UragakiSidebarMenuItem>
          </UragakiSidebarMenu>
        </UragakiSidebarGroupContent>
      </UragakiSidebarGroup>
    </UragakiSidebarContent>
  </UragakiSidebar>
</UragakiSidebarProvider>`}
      >
        <div className="w-full h-[300px] border border-border/50 rounded-lg overflow-hidden">
          <UragakiSidebarProvider defaultOpen={true}>
            <UragakiSidebar collapsible="none">
              <UragakiSidebarHeader>
                <span className="text-lg font-semibold">Uragaki App</span>
              </UragakiSidebarHeader>
              <UragakiSidebarContent>
                <UragakiSidebarGroup>
                  <UragakiSidebarGroupLabel>メニュー</UragakiSidebarGroupLabel>
                  <UragakiSidebarGroupContent>
                    <UragakiSidebarMenu>
                      <UragakiSidebarMenuItem>
                        <UragakiSidebarMenuButton isActive>ホーム</UragakiSidebarMenuButton>
                      </UragakiSidebarMenuItem>
                      <UragakiSidebarMenuItem>
                        <UragakiSidebarMenuButton>設定</UragakiSidebarMenuButton>
                      </UragakiSidebarMenuItem>
                      <UragakiSidebarMenuItem>
                        <UragakiSidebarMenuButton>プロフィール</UragakiSidebarMenuButton>
                      </UragakiSidebarMenuItem>
                    </UragakiSidebarMenu>
                  </UragakiSidebarGroupContent>
                </UragakiSidebarGroup>
              </UragakiSidebarContent>
              <UragakiSidebarFooter>
                <span className="text-xs text-muted-foreground">v1.0.0</span>
              </UragakiSidebarFooter>
            </UragakiSidebar>
          </UragakiSidebarProvider>
        </div>
      </ComponentPreview>
    </div>
  );
}
