import type { Meta, StoryObj } from "@storybook/react";
import { UragakiTextarea } from "../uragaki-textarea";

const meta = {
  title: "Uragaki/Textarea",
  component: UragakiTextarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    roughness: { control: { type: "range", min: 0, max: 4, step: 0.1 } },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof UragakiTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "メッセージを入力してください...",
    className: "w-80",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "無効なテキストエリア...",
    disabled: true,
    className: "w-80",
  },
};
