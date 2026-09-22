import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function NavSidebar() {
  return (
    <SidebarProvider>
          <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
      <AppSidebar side="right" />
    </SidebarProvider>
  )
}
