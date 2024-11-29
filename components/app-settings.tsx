import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ThemeSwitcher } from "./theme-switcher";

export const AppSettings = async () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" className="shrink-0 rounded-full bg-transparent">
          <Settings size={16} />
          <span className="sr-only">設定</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="space-y-4" align="end">
        <div className="mt-4 space-y-2">
          <Label className="text-xs text-muted-foreground">テーマ</Label>
          <ThemeSwitcher />
        </div>
      </PopoverContent>
    </Popover>
  );
};
