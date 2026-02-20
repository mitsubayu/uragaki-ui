import type { Meta, StoryObj } from "@storybook/react";
import {
  UragakiAlert,
  UragakiAlertTitle,
  UragakiAlertDescription,
} from "../uragaki-alert";

const meta = {
  title: "Uragaki/Alert",
  component: UragakiAlert,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
    roughness: { control: { type: "range", min: 0, max: 4, step: 0.1 } },
  },
} satisfies Meta<typeof UragakiAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <UragakiAlert {...args} className="w-96">
      <UragakiAlertTitle>お知らせ</UragakiAlertTitle>
      <UragakiAlertDescription>
        新しいバージョンが利用可能です。アップデートをお勧めします。
      </UragakiAlertDescription>
    </UragakiAlert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <UragakiAlert variant="destructive" className="w-96">
      <UragakiAlertTitle>エラー</UragakiAlertTitle>
      <UragakiAlertDescription>
        データの保存に失敗しました。もう一度お試しください。
      </UragakiAlertDescription>
    </UragakiAlert>
  ),
};
