import type { Meta, StoryObj } from "@storybook/react";
import {
  UragakiCard,
  UragakiCardHeader,
  UragakiCardTitle,
  UragakiCardDescription,
  UragakiCardContent,
  UragakiCardFooter,
} from "../uragaki-card";
import { UragakiButton } from "../uragaki-button";

const meta = {
  title: "Uragaki/Card",
  component: UragakiCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    roughness: { control: { type: "range", min: 0, max: 4, step: 0.1 } },
  },
} satisfies Meta<typeof UragakiCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <UragakiCard {...args} className="w-80">
      <UragakiCardHeader>
        <UragakiCardTitle>プロジェクト設定</UragakiCardTitle>
        <UragakiCardDescription>
          プロジェクトの基本情報を設定します
        </UragakiCardDescription>
      </UragakiCardHeader>
      <UragakiCardContent>
        <p className="text-sm">ここにコンテンツが入ります。</p>
      </UragakiCardContent>
      <UragakiCardFooter>
        <UragakiButton size="sm">保存</UragakiButton>
      </UragakiCardFooter>
    </UragakiCard>
  ),
};

export const Rough: Story = {
  render: () => (
    <UragakiCard roughness={3} className="w-80">
      <UragakiCardHeader>
        <UragakiCardTitle>ラフなカード</UragakiCardTitle>
        <UragakiCardDescription>roughness=3</UragakiCardDescription>
      </UragakiCardHeader>
      <UragakiCardContent>
        <p className="text-sm">手書き感を強くしたバージョンです。</p>
      </UragakiCardContent>
    </UragakiCard>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <UragakiCard className="w-60">
        <UragakiCardHeader>
          <UragakiCardTitle>タスク管理</UragakiCardTitle>
        </UragakiCardHeader>
        <UragakiCardContent>
          <p className="text-sm text-muted-foreground">12件のタスク</p>
        </UragakiCardContent>
      </UragakiCard>
      <UragakiCard className="w-60">
        <UragakiCardHeader>
          <UragakiCardTitle>ドキュメント</UragakiCardTitle>
        </UragakiCardHeader>
        <UragakiCardContent>
          <p className="text-sm text-muted-foreground">5件の文書</p>
        </UragakiCardContent>
      </UragakiCard>
    </div>
  ),
};
