import type { Meta, StoryObj } from "@storybook/react";
import { UragakiButton } from "../uragaki-button";

const meta = {
  title: "Uragaki/Button",
  component: UragakiButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "destructive", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg"],
    },
    roughness: { control: { type: "range", min: 0, max: 4, step: 0.1 } },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof UragakiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "ボタン" },
};

export const Outline: Story = {
  args: { children: "キャンセル", variant: "outline" },
};

export const Secondary: Story = {
  args: { children: "下書き保存", variant: "secondary" },
};

export const Destructive: Story = {
  args: { children: "削除する", variant: "destructive" },
};

export const Ghost: Story = {
  args: { children: "ゴースト", variant: "ghost" },
};

export const Link: Story = {
  args: { children: "リンク", variant: "link" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <UragakiButton>送信</UragakiButton>
      <UragakiButton variant="outline">キャンセル</UragakiButton>
      <UragakiButton variant="secondary">下書き</UragakiButton>
      <UragakiButton variant="destructive">削除</UragakiButton>
      <UragakiButton variant="ghost">ゴースト</UragakiButton>
      <UragakiButton variant="link">リンク</UragakiButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <UragakiButton size="xs">極小</UragakiButton>
      <UragakiButton size="sm">小</UragakiButton>
      <UragakiButton>通常</UragakiButton>
      <UragakiButton size="lg">大</UragakiButton>
    </div>
  ),
};

export const Roughness: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <UragakiButton roughness={0.3}>なめらか</UragakiButton>
      <UragakiButton roughness={1.5}>通常</UragakiButton>
      <UragakiButton roughness={3}>ラフ</UragakiButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: { children: "無効", disabled: true },
};
