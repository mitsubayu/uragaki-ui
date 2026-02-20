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
      { name: "アスペクト比 (Aspect Ratio)", path: "/docs/components/aspect-ratio" },
      { name: "アバター (Avatar)", path: "/docs/components/avatar" },
      { name: "バッジ (Badge)", path: "/docs/components/badge" },
      { name: "パンくずリスト (Breadcrumb)", path: "/docs/components/breadcrumb" },
      { name: "ボタン (Button)", path: "/docs/components/button" },
      { name: "カレンダー (Calendar)", path: "/docs/components/calendar" },
      { name: "カード (Card)", path: "/docs/components/card" },
      { name: "カルーセル (Carousel)", path: "/docs/components/carousel" },
      { name: "チャート (Chart)", path: "/docs/components/chart" },
      { name: "チェックボックス (Checkbox)", path: "/docs/components/checkbox" },
      { name: "コラプシブル (Collapsible)", path: "/docs/components/collapsible" },
      { name: "コマンド (Command)", path: "/docs/components/command" },
      { name: "コンテキストメニュー (Context Menu)", path: "/docs/components/context-menu" },
      { name: "ダイアログ (Dialog)", path: "/docs/components/dialog" },
      { name: "ドロワー (Drawer)", path: "/docs/components/drawer" },
      { name: "ドロップダウンメニュー (Dropdown Menu)", path: "/docs/components/dropdown-menu" },
      { name: "フォーム (Form)", path: "/docs/components/form" },
      { name: "ホバーカード (Hover Card)", path: "/docs/components/hover-card" },
      { name: "入力フィールド (Input)", path: "/docs/components/input" },
      { name: "ワンタイムパスワード入力 (Input OTP)", path: "/docs/components/input-otp" },
      { name: "ラベル (Label)", path: "/docs/components/label" },
      { name: "メニューバー (Menubar)", path: "/docs/components/menubar" },
      { name: "ナビゲーションメニュー (Navigation Menu)", path: "/docs/components/navigation-menu" },
      { name: "ページネーション (Pagination)", path: "/docs/components/pagination" },
      { name: "ポップオーバー (Popover)", path: "/docs/components/popover" },
      { name: "プログレス (Progress)", path: "/docs/components/progress" },
      { name: "ラジオグループ (Radio Group)", path: "/docs/components/radio-group" },
      { name: "リサイズ可能 (Resizable)", path: "/docs/components/resizable" },
      { name: "スクロールエリア (Scroll Area)", path: "/docs/components/scroll-area" },
      { name: "セレクト (Select)", path: "/docs/components/select" },
      { name: "セパレーター (Separator)", path: "/docs/components/separator" },
      { name: "シート (Sheet)", path: "/docs/components/sheet" },
      { name: "サイドバー (Sidebar)", path: "/docs/components/sidebar" },
      { name: "スケルトン (Skeleton)", path: "/docs/components/skeleton" },
      { name: "スライダー (Slider)", path: "/docs/components/slider" },
      { name: "ソナー (Sonner)", path: "/docs/components/sonner" },
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
