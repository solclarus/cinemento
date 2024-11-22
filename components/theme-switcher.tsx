"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const { toast } = useToast();

  function handleClick(value: string) {
    setTheme(value);
    toast({
      title: "テーマを変更しました",
    });
  }

  return (
    <div className="flex gap-2">
      <Button
        variant={"default"}
        onClick={() => handleClick("light")}
        className="w-full"
      >
        <Sun className="size-4 mr-2" />
        <span>ライト</span>
      </Button>
      <Button
        variant={"outline"}
        onClick={() => handleClick("dark")}
        className="w-full"
      >
        <Moon className="size-4 mr-2" />
        <span>ダーク</span>
      </Button>
    </div>
  );
};
