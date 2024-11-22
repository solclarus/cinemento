import { ThemeSwitcher } from "./theme-switcher";
import { AppMenu } from "./app-menu";
import { SearchBox } from "./search-box";

export const Header = () => {
  return (
    <header className="flex h-16 items-center justify-end px-6 sticky top-0 bg-background z-10 border-b gap-2">
      <div className="hidden md:block">
        <SearchBox />
      </div>
      <div className="md:hidden">
        <AppMenu />
      </div>
      <ThemeSwitcher />
    </header>
  );
};
