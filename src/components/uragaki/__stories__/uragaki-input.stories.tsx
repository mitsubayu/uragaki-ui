import type { Meta, StoryObj } from "@storybook/react";
import { UragakiInput } from "../uragaki-input";

const meta = {
  title: "Uragaki/Input",
  component: UragakiInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    borderStyle: {
      control: "select",
      options: ["underline", "box"],
    },
    roughness: { control: { type: "range", min: 0, max: 4, step: 0.1 } },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof UragakiInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underline: Story = {
  args: { placeholder: "お名前を入力...", className: "w-64" },
};

export const Box: Story = {
  args: {
    placeholder: "メールアドレス...",
    borderStyle: "box",
    className: "w-64",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "無効な入力...",
    disabled: true,
    className: "w-64",
  },
};

export const BothStyles: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <UragakiInput placeholder="下線スタイル" />
      <UragakiInput placeholder="ボックススタイル" borderStyle="box" />
    </div>
  ),
};
