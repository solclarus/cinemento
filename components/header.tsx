import { SidebarTrigger } from "./ui/sidebar";
import HeaderAuth from "./header-auth";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between border-b border-b-foreground/10 h-16 p-6">
      <SidebarTrigger />
      <div className="flex gap-3">
        <HeaderAuth />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
