import { AppMenu } from "./app-menu";
import { SearchBox } from "./search-box";

export const Header = () => {
  return (
    <header className="flex h-16 items-center justify-end px-6 sticky top-0 z-10 opacity-100">
      <div className="hidden md:block">
        <SearchBox />
      </div>
      <div className="md:hidden">
        <AppMenu />
      </div>
    </header>
  );
};
