import type { Meta, StoryObj } from "@storybook/react";
import { UragakiBadge } from "../uragaki-badge";

const meta = {
  title: "Uragaki/Badge",
  component: UragakiBadge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "destructive"],
    },
    roughness: { control: { type: "range", min: 0, max: 4, step: 0.1 } },
  },
} satisfies Meta<typeof UragakiBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "新着" },
};

export const Secondary: Story = {
  args: { children: "下書き", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "レビュー中", variant: "outline" },
};

export const Destructive: Story = {
  args: { children: "エラー", variant: "destructive" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <UragakiBadge>新着</UragakiBadge>
      <UragakiBadge variant="secondary">下書き</UragakiBadge>
      <UragakiBadge variant="outline">レビュー中</UragakiBadge>
      <UragakiBadge variant="destructive">エラー</UragakiBadge>
    </div>
  ),
};
