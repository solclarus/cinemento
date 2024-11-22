"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { items, NavItem, siteConfig } from "@/config";
import { useDialog } from "@/hooks/use-dialog";
import { cn } from "@/utils/cn";
import { Menu } from "lucide-react";
import Link from "next/link";

export const AppMenu = () => {
  const [open, setOpen] = useDialog();

  return (
    <Drawer open={open} onOpenChange={setOpen} shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu size={16} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{siteConfig.name}</DrawerTitle>
        </DrawerHeader>
        <Accordion type="multiple" className="px-2">
          {items.map((item) =>
            item.items ? (
              <MultipleMenuItem key={item.title} {...item} />
            ) : (
              <MenuItem key={item.title} {...item} />
            )
          )}
        </Accordion>
      </DrawerContent>
    </Drawer>
  );
};

const MenuItem = ({ title, href, icon: Icon }: NavItem) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "w-full justify-between hover:no-underline"
      )}
    >
      <div className={cn("flex items-center justify-start")}>
        <Icon className="mr-2 size-4" />
        {title}
      </div>
    </Link>
  );
};

const MultipleMenuItem = ({ title, items, icon: Icon }: NavItem) => {
  return (
    <AccordionItem className="border-b-0" value={title}>
      <AccordionTrigger
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-between hover:no-underline"
        )}
      >
        <div className={cn("flex items-center justify-start")}>
          <Icon className="mr-2 size-4" />
          {title}
        </div>
      </AccordionTrigger>
      <AccordionContent className="pl-4">
        {items?.map((item) => <MenuItem key={item.title} {...item} />)}
      </AccordionContent>
    </AccordionItem>
  );
};
