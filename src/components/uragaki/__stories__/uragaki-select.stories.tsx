import type { Meta, StoryObj } from "@storybook/react";
import {
  UragakiSelect,
  UragakiSelectTrigger,
  UragakiSelectContent,
  UragakiSelectItem,
  UragakiSelectValue,
} from "../uragaki-select";

const meta = {
  title: "Uragaki/Select",
  component: UragakiSelect,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof UragakiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UragakiSelect>
      <UragakiSelectTrigger className="w-48">
        <UragakiSelectValue placeholder="果物を選択..." />
      </UragakiSelectTrigger>
      <UragakiSelectContent>
        <UragakiSelectItem value="apple">りんご</UragakiSelectItem>
        <UragakiSelectItem value="banana">バナナ</UragakiSelectItem>
        <UragakiSelectItem value="cherry">さくらんぼ</UragakiSelectItem>
        <UragakiSelectItem value="grape">ぶどう</UragakiSelectItem>
      </UragakiSelectContent>
    </UragakiSelect>
  ),
};

export const Prefecture: Story = {
  render: () => (
    <UragakiSelect>
      <UragakiSelectTrigger className="w-48">
        <UragakiSelectValue placeholder="都道府県..." />
      </UragakiSelectTrigger>
      <UragakiSelectContent>
        <UragakiSelectItem value="tokyo">東京都</UragakiSelectItem>
        <UragakiSelectItem value="osaka">大阪府</UragakiSelectItem>
        <UragakiSelectItem value="kyoto">京都府</UragakiSelectItem>
        <UragakiSelectItem value="fukuoka">福岡県</UragakiSelectItem>
      </UragakiSelectContent>
    </UragakiSelect>
  ),
};
