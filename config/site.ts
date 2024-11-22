import { LucideIcon } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cinemento",
  author: {
    name: "Yoh",
    url: "https://21solclaro.me",
  },
};

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  items?: NavItem[];
};
