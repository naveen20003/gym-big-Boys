import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button";

// This is sample data.
const item = [
  {
    id: 1,
    name: "shop",
    url: "/shop"
  },
  {
    id: 2,
    name: "location",
    url: "https://share.google/8xl7HQ597k2LS4783"
  },
  {
    id: 3,
    name: "contact",
    url: "/contact"
  }
]
export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar {...props}>
      <SidebarContent className="bg-black text-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton render={<a href={item.url} className="font-medium" />}>
                    {item.name}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Button className="bg-green-600 max-w-[100px] font-mediumpt mt-2">Book a Call</Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
