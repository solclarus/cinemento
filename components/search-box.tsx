"use client";

import { Button } from "@/components/ui/button";

import { cn } from "@/utils/cn";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const SearchBox = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div>
      <Button
        variant={"outline"}
        onClick={() => setOpen(true)}
        className={cn("w-full rounded-md px-3")}
      >
        <Search size={16} className="mr-1" />
        <div className="space-x-1">
          <span>映画を探す</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="JOKER" />
        <CommandList>
          <CommandEmpty>見つかりませんでした</CommandEmpty>
          <CommandGroup>
            {[0, 1, 2].map((id) => {
              return (
                <CommandItem
                  key={id}
                  onSelect={() => router.push(`/movie/${id}`)}
                >
                  {id}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};
