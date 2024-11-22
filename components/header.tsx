import { AppMenu } from "./app-menu";
import { SearchBox } from "./search-box";
import { AppSettings } from "./app-settings";

export const Header = () => {
  return (
    <header className="flex h-16 items-center justify-end px-6 sticky top-0 bg-background z-10 border-b gap-2">
      <div className="hidden md:block">
        <SearchBox />
      </div>
      <AppSettings />
      <div className="md:hidden">
        <AppMenu />
      </div>
    </header>
  );
};
