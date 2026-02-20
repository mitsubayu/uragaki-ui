import type { Meta, StoryObj } from "@storybook/react";
import {
  UragakiTabs,
  UragakiTabsList,
  UragakiTabsTrigger,
  UragakiTabsContent,
} from "../uragaki-tabs";

const meta = {
  title: "Uragaki/Tabs",
  component: UragakiTabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof UragakiTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UragakiTabs defaultValue="account" className="w-96">
      <UragakiTabsList>
        <UragakiTabsTrigger value="account">アカウント</UragakiTabsTrigger>
        <UragakiTabsTrigger value="password">パスワード</UragakiTabsTrigger>
        <UragakiTabsTrigger value="settings">設定</UragakiTabsTrigger>
      </UragakiTabsList>
      <UragakiTabsContent value="account">
        <p className="text-sm p-4 font-[var(--font-uragaki-body)]">
          アカウント情報の確認・変更ができます。
        </p>
      </UragakiTabsContent>
      <UragakiTabsContent value="password">
        <p className="text-sm p-4 font-[var(--font-uragaki-body)]">
          パスワードの変更ができます。
        </p>
      </UragakiTabsContent>
      <UragakiTabsContent value="settings">
        <p className="text-sm p-4 font-[var(--font-uragaki-body)]">
          一般設定を管理します。
        </p>
      </UragakiTabsContent>
    </UragakiTabs>
  ),
};
