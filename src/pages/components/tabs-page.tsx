import {
  UragakiTabs,
  UragakiTabsList,
  UragakiTabsTrigger,
  UragakiTabsContent,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function TabsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          タブ (Tabs)
        </h1>
        <p className="text-muted-foreground">
          手書き風のアクティブインジケーター付きスケッチスタイルのタブです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiTabs defaultValue="tab1">
  <UragakiTabsList>
    <UragakiTabsTrigger value="tab1">Tab 1</UragakiTabsTrigger>
    <UragakiTabsTrigger value="tab2">Tab 2</UragakiTabsTrigger>
    <UragakiTabsTrigger value="tab3">Tab 3</UragakiTabsTrigger>
  </UragakiTabsList>
  <UragakiTabsContent value="tab1">Content 1</UragakiTabsContent>
  <UragakiTabsContent value="tab2">Content 2</UragakiTabsContent>
  <UragakiTabsContent value="tab3">Content 3</UragakiTabsContent>
</UragakiTabs>`}
      >
        <UragakiTabs defaultValue="tab1" className="w-full">
          <UragakiTabsList>
            <UragakiTabsTrigger value="tab1">Account</UragakiTabsTrigger>
            <UragakiTabsTrigger value="tab2">Password</UragakiTabsTrigger>
            <UragakiTabsTrigger value="tab3">Settings</UragakiTabsTrigger>
          </UragakiTabsList>
          <UragakiTabsContent value="tab1">
            <p className="text-sm p-4">Account settings go here.</p>
          </UragakiTabsContent>
          <UragakiTabsContent value="tab2">
            <p className="text-sm p-4">Password settings go here.</p>
          </UragakiTabsContent>
          <UragakiTabsContent value="tab3">
            <p className="text-sm p-4">General settings go here.</p>
          </UragakiTabsContent>
        </UragakiTabs>
      </ComponentPreview>
    </div>
  );
}
