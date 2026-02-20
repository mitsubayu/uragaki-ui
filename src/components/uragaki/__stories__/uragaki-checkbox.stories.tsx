import type { Meta, StoryObj } from "@storybook/react";
import { UragakiCheckbox } from "../uragaki-checkbox";

const meta = {
  title: "Uragaki/Checkbox",
  component: UragakiCheckbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    roughness: { control: { type: "range", min: 0, max: 4, step: 0.1 } },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof UragakiCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  render: () => (
    <label className="flex items-center gap-2 cursor-pointer">
      <UragakiCheckbox />
      <span className="text-sm font-[var(--font-uragaki-body)]">
        利用規約に同意する
      </span>
    </label>
  ),
};

export const Checked: Story = {
  render: () => (
    <label className="flex items-center gap-2 cursor-pointer">
      <UragakiCheckbox defaultChecked />
      <span className="text-sm font-[var(--font-uragaki-body)]">
        ログイン状態を保持する
      </span>
    </label>
  ),
};

export const MultipleOptions: Story = {
  render: () => (
    <div className="space-y-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <UragakiCheckbox defaultChecked />
        <span className="text-sm font-[var(--font-uragaki-body)]">メール通知</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <UragakiCheckbox />
        <span className="text-sm font-[var(--font-uragaki-body)]">プッシュ通知</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <UragakiCheckbox defaultChecked />
        <span className="text-sm font-[var(--font-uragaki-body)]">SMS通知</span>
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <label className="flex items-center gap-2">
      <UragakiCheckbox disabled />
      <span className="text-sm text-muted-foreground font-[var(--font-uragaki-body)]">
        無効
      </span>
    </label>
  ),
};
