import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, MoreHorizontal, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "@/components/uragaki/theme-provider";
import {
  UragakiCard,
  UragakiCardHeader,
  UragakiCardTitle,
  UragakiCardContent,
  UragakiCardFooter,
  UragakiButton,
  UragakiBadge,
  UragakiInput,
  UragakiTextarea,
  UragakiDialog,
  UragakiDialogContent,
  UragakiDialogHeader,
  UragakiDialogTitle,
  UragakiDialogFooter,
  UragakiDropdownMenu,
  UragakiDropdownMenuTrigger,
  UragakiDropdownMenuContent,
  UragakiDropdownMenuItem,
  UragakiDropdownMenuSeparator,
  UragakiSeparator,
  UragakiAvatar,
  UragakiAvatarFallback,
  UragakiLabel,
  UragakiAlertDialog,
  UragakiAlertDialogContent,
  UragakiAlertDialogHeader,
  UragakiAlertDialogTitle,
  UragakiAlertDialogDescription,
  UragakiAlertDialogFooter,
  UragakiAlertDialogAction,
  UragakiAlertDialogCancel,
} from "@/components/uragaki";

// --- Types ---

type Priority = "high" | "medium" | "low";
type ColumnId = "todo" | "in-progress" | "done";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  assignee: string;
  columnId: ColumnId;
  createdAt: number;
}

interface Column {
  id: ColumnId;
  title: string;
}

// --- Constants ---

const COLUMNS: Column[] = [
  { id: "todo", title: "Todo" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "ログイン画面のワイヤーフレーム作成",
    description: "ログイン・新規登録フローのローファイワイヤーフレームを作成する",
    priority: "high",
    assignee: "YI",
    columnId: "todo",
    createdAt: Date.now() - 60000,
  },
  {
    id: "2",
    title: "CI/CDパイプラインの構築",
    description: "GitHub Actionsで自動テスト・デプロイを設定する",
    priority: "medium",
    assignee: "TK",
    columnId: "todo",
    createdAt: Date.now() - 50000,
  },
  {
    id: "3",
    title: "ユニットテストの追加",
    description: "日付フォーマットとバリデーション関数のテストを書く",
    priority: "low",
    assignee: "YI",
    columnId: "todo",
    createdAt: Date.now() - 40000,
  },
  {
    id: "4",
    title: "ユーザー認証の実装",
    description: "JWTベースの認証（ログイン・ログアウト・トークンリフレッシュ）を構築する",
    priority: "high",
    assignee: "SA",
    columnId: "in-progress",
    createdAt: Date.now() - 30000,
  },
  {
    id: "5",
    title: "APIドキュメントの作成",
    description: "全RESTエンドポイントのOpenAPI仕様書を書く",
    priority: "low",
    assignee: "YI",
    columnId: "in-progress",
    createdAt: Date.now() - 20000,
  },
  {
    id: "6",
    title: "データベーススキーマ設計",
    description: "ユーザー・プロジェクト・タスクテーブルの定義とインデックス設計",
    priority: "high",
    assignee: "TK",
    columnId: "done",
    createdAt: Date.now() - 10000,
  },
  {
    id: "7",
    title: "リポジトリの初期セットアップ",
    description: "モノレポの初期化、ESLint・Prettierの設定",
    priority: "medium",
    assignee: "SA",
    columnId: "done",
    createdAt: Date.now() - 5000,
  },
];

// --- Helpers ---

function getPriorityBadgeVariant(priority: Priority) {
  switch (priority) {
    case "high":
      return "destructive" as const;
    case "medium":
      return "default" as const;
    case "low":
      return "secondary" as const;
  }
}

function getPriorityLabel(priority: Priority) {
  switch (priority) {
    case "high":
      return "High";
    case "medium":
      return "Medium";
    case "low":
      return "Low";
  }
}

const PRIORITY_OPTIONS: {
  value: Priority;
  label: string;
  activeClass: string;
}[] = [
  { value: "high", label: "High", activeClass: "bg-red-500/90 text-white border-red-600" },
  { value: "medium", label: "Medium", activeClass: "bg-yellow-500/90 text-white border-yellow-600" },
  { value: "low", label: "Low", activeClass: "bg-blue-400/90 text-white border-blue-500" },
];

let nextId = 100;

// --- Theme Toggle ---

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer"
      aria-label="テーマ切替"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </button>
  );
}

// --- Main Page ---

export function KanbanPage() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  // Drag & drop state
  const [draggingTaskId, setDraggingTaskId] = useState<string | null>(null);
  const [dragOverColumnId, setDragOverColumnId] = useState<ColumnId | null>(
    null
  );

  // Dialog state
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deletingTask, setDeletingTask] = useState<Task | null>(null);
  const [targetColumnId, setTargetColumnId] = useState<ColumnId>("todo");

  // Form state
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formPriority, setFormPriority] = useState<Priority>("medium");
  const [formAssignee, setFormAssignee] = useState("");

  const isDialogOpen = isAddDialogOpen || editingTask !== null;

  function resetForm() {
    setFormTitle("");
    setFormDescription("");
    setFormPriority("medium");
    setFormAssignee("");
  }

  function openAddDialog(columnId: ColumnId) {
    resetForm();
    setTargetColumnId(columnId);
    setIsAddDialogOpen(true);
  }

  function openEditDialog(task: Task) {
    setFormTitle(task.title);
    setFormDescription(task.description);
    setFormPriority(task.priority);
    setFormAssignee(task.assignee);
    setEditingTask(task);
  }

  function closeDialog() {
    setIsAddDialogOpen(false);
    setEditingTask(null);
    resetForm();
  }

  function saveTask() {
    if (!formTitle.trim()) return;

    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTask.id
            ? {
                ...t,
                title: formTitle.trim(),
                description: formDescription.trim(),
                priority: formPriority,
                assignee: formAssignee.trim() || "??",
              }
            : t
        )
      );
    } else {
      const newTask: Task = {
        id: String(nextId++),
        title: formTitle.trim(),
        description: formDescription.trim(),
        priority: formPriority,
        assignee: formAssignee.trim() || "??",
        columnId: targetColumnId,
        createdAt: Date.now(),
      };
      setTasks((prev) => [...prev, newTask]);
    }
    closeDialog();
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setDeletingTask(null);
  }

  function moveTask(id: string, newColumnId: ColumnId) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, columnId: newColumnId } : t))
    );
  }

  // Drag & drop handlers
  function handleDragStart(e: React.DragEvent, taskId: string) {
    setDraggingTaskId(taskId);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", taskId);
  }

  function handleDragEnd() {
    setDraggingTaskId(null);
    setDragOverColumnId(null);
  }

  function handleDragOver(e: React.DragEvent, columnId: ColumnId) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverColumnId !== columnId) {
      setDragOverColumnId(columnId);
    }
  }

  function handleDragLeave(e: React.DragEvent) {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDragOverColumnId(null);
    }
  }

  function handleDrop(e: React.DragEvent, columnId: ColumnId) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    if (taskId) {
      moveTask(taskId, columnId);
    }
    setDraggingTaskId(null);
    setDragOverColumnId(null);
  }

  return (
    <div className="min-h-screen uragaki-paper">
      {/* Header */}
      <header className="border-b border-border/50 px-6 py-3 flex items-center justify-between bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-[var(--font-uragaki-heading)] text-xl font-bold">
            uragaki-ui
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            to="/docs"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Docs
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      {/* Board */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="font-[var(--font-uragaki-heading)] text-4xl font-bold mb-2">
            Kanban Board
          </h1>
          <p className="font-[var(--font-uragaki-body)] text-muted-foreground">
            手書き風カンバンでプロジェクトを管理するデモ。タスクの追加・編集・移動・削除ができます。
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLUMNS.map((column) => {
            const columnTasks = tasks
              .filter((t) => t.columnId === column.id)
              .sort((a, b) => a.createdAt - b.createdAt);

            const isDropTarget = dragOverColumnId === column.id;

            return (
              <UragakiCard
                key={column.id}
                seed={column.id}
                className={`h-full transition-shadow ${isDropTarget ? "ring-2 ring-primary/50 shadow-lg" : ""}`}
              >
                <UragakiCardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UragakiCardTitle className="text-lg">
                        {column.title}
                      </UragakiCardTitle>
                      <UragakiBadge variant="outline">
                        {columnTasks.length}
                      </UragakiBadge>
                    </div>
                    <UragakiButton
                      size="icon"
                      variant="ghost"
                      onClick={() => openAddDialog(column.id)}
                    >
                      <Plus className="size-4" />
                    </UragakiButton>
                  </div>
                </UragakiCardHeader>
                <UragakiSeparator />
                <UragakiCardContent className="pt-4 flex-1">
                  <div
                    className="space-y-3 h-full min-h-[200px] rounded-md p-1 transition-colors"
                    onDragOver={(e: React.DragEvent) =>
                      handleDragOver(e, column.id)
                    }
                    onDragLeave={handleDragLeave}
                    onDrop={(e: React.DragEvent) =>
                      handleDrop(e, column.id)
                    }
                  >
                    {columnTasks.map((task) => (
                      <UragakiCard
                        key={task.id}
                        roughness={1.8}
                        seed={task.id}
                        draggable
                        onDragStart={(e: React.DragEvent) =>
                          handleDragStart(e, task.id)
                        }
                        onDragEnd={handleDragEnd}
                        className={`cursor-grab active:cursor-grabbing transition-opacity ${draggingTaskId === task.id ? "opacity-40" : ""}`}
                      >
                        <UragakiCardHeader className="pb-2">
                          <div className="flex items-start justify-between gap-2">
                            <UragakiCardTitle className="text-sm font-medium leading-snug">
                              {task.title}
                            </UragakiCardTitle>
                            <UragakiDropdownMenu>
                              <UragakiDropdownMenuTrigger asChild>
                                <button className="p-1 rounded hover:bg-accent/50 transition-colors shrink-0 cursor-pointer">
                                  <MoreHorizontal className="size-4" />
                                </button>
                              </UragakiDropdownMenuTrigger>
                              <UragakiDropdownMenuContent align="end">
                                <UragakiDropdownMenuItem
                                  onClick={() => openEditDialog(task)}
                                >
                                  編集
                                </UragakiDropdownMenuItem>
                                <UragakiDropdownMenuSeparator />
                                {COLUMNS.filter(
                                  (c) => c.id !== task.columnId
                                ).map((c) => (
                                  <UragakiDropdownMenuItem
                                    key={c.id}
                                    onClick={() => moveTask(task.id, c.id)}
                                  >
                                    {c.title} に移動
                                  </UragakiDropdownMenuItem>
                                ))}
                                <UragakiDropdownMenuSeparator />
                                <UragakiDropdownMenuItem
                                  className="text-destructive"
                                  onClick={() => setDeletingTask(task)}
                                >
                                  削除
                                </UragakiDropdownMenuItem>
                              </UragakiDropdownMenuContent>
                            </UragakiDropdownMenu>
                          </div>
                        </UragakiCardHeader>
                        {task.description && (
                          <UragakiCardContent className="pb-2">
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {task.description}
                            </p>
                          </UragakiCardContent>
                        )}
                        <UragakiCardFooter className="pt-0 pb-3 flex items-center justify-between">
                          <UragakiBadge
                            variant={getPriorityBadgeVariant(task.priority)}
                          >
                            {getPriorityLabel(task.priority)}
                          </UragakiBadge>
                          <UragakiAvatar className="size-6 text-[10px]">
                            <UragakiAvatarFallback>
                              {task.assignee}
                            </UragakiAvatarFallback>
                          </UragakiAvatar>
                        </UragakiCardFooter>
                      </UragakiCard>
                    ))}
                    {columnTasks.length === 0 && (
                      <p className="text-sm text-muted-foreground text-center py-8">
                        タスクがありません
                      </p>
                    )}
                  </div>
                </UragakiCardContent>
              </UragakiCard>
            );
          })}
        </div>
      </div>

      {/* Add / Edit Dialog */}
      <UragakiDialog open={isDialogOpen} onOpenChange={() => closeDialog()}>
        <UragakiDialogContent>
          <UragakiDialogHeader>
            <UragakiDialogTitle>
              {editingTask ? "タスクを編集" : "新しいタスク"}
            </UragakiDialogTitle>
          </UragakiDialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <UragakiLabel>タイトル</UragakiLabel>
              <UragakiInput
                borderStyle="box"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                placeholder="タスク名を入力..."
              />
            </div>
            <div className="space-y-2">
              <UragakiLabel>説明</UragakiLabel>
              <UragakiTextarea
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                placeholder="タスクの詳細..."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <UragakiLabel>優先度</UragakiLabel>
              <div className="flex gap-2">
                {PRIORITY_OPTIONS.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setFormPriority(p.value)}
                    className={`flex-1 py-2 px-3 rounded-md border-2 text-sm font-medium transition-all cursor-pointer ${
                      formPriority === p.value
                        ? p.activeClass
                        : "border-border bg-background text-muted-foreground hover:border-foreground/30"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <UragakiLabel>担当者（イニシャル）</UragakiLabel>
              <UragakiInput
                borderStyle="box"
                value={formAssignee}
                onChange={(e) => setFormAssignee(e.target.value.toUpperCase())}
                placeholder="例: YI"
                maxLength={2}
              />
            </div>
          </div>
          <UragakiDialogFooter>
            <UragakiButton variant="outline" onClick={closeDialog}>
              キャンセル
            </UragakiButton>
            <UragakiButton onClick={saveTask} disabled={!formTitle.trim()}>
              {editingTask ? "保存" : "追加"}
            </UragakiButton>
          </UragakiDialogFooter>
        </UragakiDialogContent>
      </UragakiDialog>

      {/* Delete Confirmation */}
      <UragakiAlertDialog
        open={deletingTask !== null}
        onOpenChange={() => setDeletingTask(null)}
      >
        <UragakiAlertDialogContent>
          <UragakiAlertDialogHeader>
            <UragakiAlertDialogTitle>タスクを削除</UragakiAlertDialogTitle>
            <UragakiAlertDialogDescription>
              「{deletingTask?.title}」を削除しますか？この操作は取り消せません。
            </UragakiAlertDialogDescription>
          </UragakiAlertDialogHeader>
          <UragakiAlertDialogFooter>
            <UragakiAlertDialogCancel>キャンセル</UragakiAlertDialogCancel>
            <UragakiAlertDialogAction
              onClick={() => deletingTask && deleteTask(deletingTask.id)}
            >
              削除
            </UragakiAlertDialogAction>
          </UragakiAlertDialogFooter>
        </UragakiAlertDialogContent>
      </UragakiAlertDialog>
    </div>
  );
}
