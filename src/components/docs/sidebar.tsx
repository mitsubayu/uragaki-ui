import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "はじめに",
    items: [
      { name: "イントロダクション", path: "/docs" },
    ],
  },
  {
    title: "コンポーネント",
    items: [
      { name: "アコーディオン (Accordion)", path: "/docs/components/accordion" },
      { name: "アラート (Alert)", path: "/docs/components/alert" },
      { name: "アラートダイアログ (Alert Dialog)", path: "/docs/components/alert-dialog" },
      { name: "アバター (Avatar)", path: "/docs/components/avatar" },
      { name: "バッジ (Badge)", path: "/docs/components/badge" },
      { name: "ボタン (Button)", path: "/docs/components/button" },
      { name: "カード (Card)", path: "/docs/components/card" },
      { name: "チェックボックス (Checkbox)", path: "/docs/components/checkbox" },
      { name: "ダイアログ (Dialog)", path: "/docs/components/dialog" },
      { name: "ドロップダウンメニュー (Dropdown Menu)", path: "/docs/components/dropdown-menu" },
      { name: "入力フィールド (Input)", path: "/docs/components/input" },
      { name: "ラベル (Label)", path: "/docs/components/label" },
      { name: "ポップオーバー (Popover)", path: "/docs/components/popover" },
      { name: "プログレス (Progress)", path: "/docs/components/progress" },
      { name: "ラジオグループ (Radio Group)", path: "/docs/components/radio-group" },
      { name: "セレクト (Select)", path: "/docs/components/select" },
      { name: "セパレーター (Separator)", path: "/docs/components/separator" },
      { name: "シート (Sheet)", path: "/docs/components/sheet" },
      { name: "スケルトン (Skeleton)", path: "/docs/components/skeleton" },
      { name: "スライダー (Slider)", path: "/docs/components/slider" },
      { name: "スイッチ (Switch)", path: "/docs/components/switch" },
      { name: "テーブル (Table)", path: "/docs/components/table" },
      { name: "タブ (Tabs)", path: "/docs/components/tabs" },
      { name: "テキストエリア (Textarea)", path: "/docs/components/textarea" },
      { name: "トグル (Toggle)", path: "/docs/components/toggle" },
      { name: "トグルグループ (Toggle Group)", path: "/docs/components/toggle-group" },
      { name: "ツールチップ (Tooltip)", path: "/docs/components/tooltip" },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className="w-56 shrink-0 border-r border-border/50 p-4 overflow-y-auto">
      <nav className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="font-[var(--font-uragaki-heading)] text-sm font-semibold text-muted-foreground mb-2">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end
                    className={({ isActive }) =>
                      cn(
                        "block px-2 py-1 text-sm rounded transition-colors",
                        isActive
                          ? "text-primary font-semibold bg-accent/50"
                          : "text-foreground/70 hover:text-foreground hover:bg-accent/30"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
