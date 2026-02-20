import {
  UragakiTable,
  UragakiTableHeader,
  UragakiTableBody,
  UragakiTableHead,
  UragakiTableRow,
  UragakiTableCell,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function TablePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          テーブル (Table)
        </h1>
        <p className="text-muted-foreground">
          rough.js のボーダーを使った手書き風データテーブルです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiTable>
  <UragakiTableHeader>
    <UragakiTableRow>
      <UragakiTableHead>名前</UragakiTableHead>
      <UragakiTableHead>メール</UragakiTableHead>
      <UragakiTableHead>役割</UragakiTableHead>
    </UragakiTableRow>
  </UragakiTableHeader>
  <UragakiTableBody>
    <UragakiTableRow>
      <UragakiTableCell>田中太郎</UragakiTableCell>
      <UragakiTableCell>tanaka@example.com</UragakiTableCell>
      <UragakiTableCell>管理者</UragakiTableCell>
    </UragakiTableRow>
  </UragakiTableBody>
</UragakiTable>`}
      >
        <UragakiTable>
          <UragakiTableHeader>
            <UragakiTableRow>
              <UragakiTableHead>名前</UragakiTableHead>
              <UragakiTableHead>メール</UragakiTableHead>
              <UragakiTableHead>役割</UragakiTableHead>
            </UragakiTableRow>
          </UragakiTableHeader>
          <UragakiTableBody>
            <UragakiTableRow>
              <UragakiTableCell>田中太郎</UragakiTableCell>
              <UragakiTableCell>tanaka@example.com</UragakiTableCell>
              <UragakiTableCell>管理者</UragakiTableCell>
            </UragakiTableRow>
            <UragakiTableRow>
              <UragakiTableCell>佐藤花子</UragakiTableCell>
              <UragakiTableCell>sato@example.com</UragakiTableCell>
              <UragakiTableCell>編集者</UragakiTableCell>
            </UragakiTableRow>
            <UragakiTableRow>
              <UragakiTableCell>鈴木一郎</UragakiTableCell>
              <UragakiTableCell>suzuki@example.com</UragakiTableCell>
              <UragakiTableCell>閲覧者</UragakiTableCell>
            </UragakiTableRow>
          </UragakiTableBody>
        </UragakiTable>
      </ComponentPreview>
    </div>
  );
}
