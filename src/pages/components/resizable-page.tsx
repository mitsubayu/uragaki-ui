import {
  UragakiResizablePanelGroup,
  UragakiResizablePanel,
  UragakiResizableHandle,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function ResizablePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          リサイズ可能 (Resizable)
        </h1>
        <p className="text-muted-foreground">
          ドラッグでサイズ変更可能なパネルグループです。rough.js の手描きボーダー付き。
        </p>
      </div>

      <ComponentPreview
        title="横方向"
        code={`<UragakiResizablePanelGroup direction="horizontal">
  <UragakiResizablePanel defaultSize={50}>左</UragakiResizablePanel>
  <UragakiResizableHandle withHandle />
  <UragakiResizablePanel defaultSize={50}>右</UragakiResizablePanel>
</UragakiResizablePanelGroup>`}
      >
        <div className="w-full max-w-[500px]">
          <UragakiResizablePanelGroup direction="horizontal" className="min-h-[150px]">
            <UragakiResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-4">
                <span className="text-sm">左パネル</span>
              </div>
            </UragakiResizablePanel>
            <UragakiResizableHandle withHandle />
            <UragakiResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-4">
                <span className="text-sm">右パネル</span>
              </div>
            </UragakiResizablePanel>
          </UragakiResizablePanelGroup>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="縦方向"
        code={`<UragakiResizablePanelGroup direction="vertical">
  <UragakiResizablePanel defaultSize={50}>上</UragakiResizablePanel>
  <UragakiResizableHandle withHandle />
  <UragakiResizablePanel defaultSize={50}>下</UragakiResizablePanel>
</UragakiResizablePanelGroup>`}
      >
        <div className="w-full max-w-[500px]">
          <UragakiResizablePanelGroup direction="vertical" className="min-h-[250px]">
            <UragakiResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-4">
                <span className="text-sm">上パネル</span>
              </div>
            </UragakiResizablePanel>
            <UragakiResizableHandle withHandle />
            <UragakiResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-4">
                <span className="text-sm">下パネル</span>
              </div>
            </UragakiResizablePanel>
          </UragakiResizablePanelGroup>
        </div>
      </ComponentPreview>
    </div>
  );
}
