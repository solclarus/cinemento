import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import HeaderAuth from "./header-auth";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between border-b border-b-foreground/10 h-16 p-6">
      <SidebarTrigger />
      <HeaderAuth />
    </header>
  );
}
