import { HelpCircle, Play, Star, TrendingUp, User, Video } from "lucide-react";
import { NavItem } from "./site";

export const items: NavItem[] = [
  {
    title: "映画",
    href: "/movie",
    icon: Video,
    items: [
      {
        title: "上映中",
        href: "/movie/now-playing",
        icon: Play,
      },
      {
        title: "人気",
        href: "/movie/popular",
        icon: Star,
      },
    ],
  },
  {
    title: "マイページ",
    href: "/my-page",
    icon: User,
  },
  {
    title: "ヘルプ",
    href: "/help",
    icon: HelpCircle,
  },
];
