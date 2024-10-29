"use client";

import * as React from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarTrigger,
} from "./ui/sidebar";

import { Bell } from "lucide-react";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex flex-row">
        <SidebarMenuSubButton className="flex flex-row w-full justify-between">
          <div className="text-2xl font-bold">Ensuite</div>
          <Bell className="size-12" />
        </SidebarMenuSubButton>
        <SidebarTrigger />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
