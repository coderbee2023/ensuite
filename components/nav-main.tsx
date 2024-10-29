"use client";

import {
  Home,
  BrainCircuit,
  SparklesIcon,
  Layers,
  ShoppingCart,
  Brain,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSubButton,
} from "./ui/sidebar";
import Link from "next/link";

const sidebarMenu = [
  {
    title: "Dashboard",
    href: "/",
    icons: Home,
  },
  {
    title: "Ace GPT",
    href: "/ace-gpt",
    icons: SparklesIcon,
  },
  {
    title: "Study Buddy Ai",
    href: "/study-buddy",
    icons: BrainCircuit,
  },
  {
    title: "Workspace",
    href: "/workspace",
    icons: Layers,
  },
  {
    title: "Campus Cart",
    href: "/campus-cart",
    icons: ShoppingCart,
  },
  {
    title: "Serenity",
    href: "/serenity",
    icons: Brain,
  },
];
export function NavMain() {
  return (
    <SidebarMenu className="p-2">
      {sidebarMenu.map((item) => (
        <SidebarMenuButton key={item.title}>
          <SidebarMenuSubButton
            asChild
            className="flex flex-row w-full justify-between"
          >
            <Link href={item.href} className=" font-semibold">
              {item.title}
            </Link>
          </SidebarMenuSubButton>
          <item.icons className="size-12" />
        </SidebarMenuButton>
      ))}
    </SidebarMenu>
  );
}
