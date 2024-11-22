import { HelpCircle, Play, TrendingUp, User, Video } from "lucide-react";
import { NavItem } from "./site";

export const items: NavItem[] = [
  {
    title: "映画",
    href: "/movie",
    icon: Video,
    items: [
      {
        title: "トレンド",
        href: "/movie/trending",
        icon: TrendingUp,
      },
      {
        title: "上映中",
        href: "/movie/now-playing",
        icon: Play,
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
