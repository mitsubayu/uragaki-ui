import type { Meta, StoryObj } from "@storybook/react";
import {
  UragakiDialog,
  UragakiDialogTrigger,
  UragakiDialogContent,
  UragakiDialogHeader,
  UragakiDialogFooter,
  UragakiDialogTitle,
  UragakiDialogDescription,
} from "../uragaki-dialog";
import { UragakiButton } from "../uragaki-button";

const meta = {
  title: "Uragaki/Dialog",
  component: UragakiDialog,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof UragakiDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UragakiDialog>
      <UragakiDialogTrigger asChild>
        <UragakiButton>ダイアログを開く</UragakiButton>
      </UragakiDialogTrigger>
      <UragakiDialogContent>
        <UragakiDialogHeader>
          <UragakiDialogTitle>確認</UragakiDialogTitle>
          <UragakiDialogDescription>
            この操作は取り消せません。本当に削除しますか？
          </UragakiDialogDescription>
        </UragakiDialogHeader>
        <UragakiDialogFooter>
          <UragakiButton variant="outline">キャンセル</UragakiButton>
          <UragakiButton variant="destructive">削除する</UragakiButton>
        </UragakiDialogFooter>
      </UragakiDialogContent>
    </UragakiDialog>
  ),
};

export const Information: Story = {
  render: () => (
    <UragakiDialog>
      <UragakiDialogTrigger asChild>
        <UragakiButton variant="outline">詳細を見る</UragakiButton>
      </UragakiDialogTrigger>
      <UragakiDialogContent>
        <UragakiDialogHeader>
          <UragakiDialogTitle>Uragaki UIについて</UragakiDialogTitle>
          <UragakiDialogDescription>
            Uragaki UIは、shadcn/uiとrough.jsを組み合わせた手書き風UIコンポーネントライブラリです。
            プロトタイピングやワイヤーフレームの作成に最適です。
          </UragakiDialogDescription>
        </UragakiDialogHeader>
        <UragakiDialogFooter>
          <UragakiButton>閉じる</UragakiButton>
        </UragakiDialogFooter>
      </UragakiDialogContent>
    </UragakiDialog>
  ),
};
