import { useState } from "react";
import { UragakiCalendar } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function CalendarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          カレンダー (Calendar)
        </h1>
        <p className="text-muted-foreground">
          日付選択用のカレンダーコンポーネントです。rough.js の手描きボーダー付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`const [date, setDate] = useState<Date | undefined>(new Date());

<UragakiCalendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`}
      >
        <CalendarDemo />
      </ComponentPreview>
    </div>
  );
}

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <UragakiCalendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  );
}
