import { Outlet, Link } from "react-router-dom";
import { Sidebar } from "./sidebar";

export function DocsLayout() {
  return (
    <div className="min-h-screen flex flex-col uragaki-paper">
      {/* Header */}
      <header className="border-b border-border/50 px-6 py-3 flex items-center justify-between bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-[var(--font-uragaki-heading)] text-xl font-bold">
            Uragaki UI
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            to="/docs"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Docs
          </Link>
        </nav>
      </header>

      {/* Main */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 max-w-4xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
