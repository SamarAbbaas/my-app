import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboard, Receipt, Package, Settings, Store } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" className="bg-[#111111] text-zinc-400 border-none">
      {/* Header section with branding */}
      <SidebarHeader className="p-6">
        <h1 className="text-3xl font-bold tracking-tight text-[#00E5FF]   flex items-center gap-2">
          Electric POS
        </h1>
        <p className="text-xs font-medium text-zinc-500 tracking-wider">V2.0 PRECISION</p>
      </SidebarHeader>

      {/* Main navigation content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 px-2">
              
              {/* Active Menu Item */}
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive 
                  className="bg-[#1C1C1C] text-[#00E5FF] hover:bg-[#1C1C1C] hover:text-[#00E5FF] py-6 rounded-md transition-colors"
                >
                  <LayoutDashboard className="size-5 shrink-0" />
                  <span className="text-lg">Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Inactive Menu Items */}
              <SidebarMenuItem>
                <SidebarMenuButton className="py-6 rounded-md hover:bg-[#1C1C1C] hover:text-white transition-colors">
                  <Receipt className="size-5 shrink-0" />
                  <span className="text-lg">Transactions</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="py-6 rounded-md hover:bg-[#1C1C1C] hover:text-white transition-colors">
                  <Package className="size-5 shrink-0" />
                  {/* <span className="text-lg">Inventory</span> */}
                  <Link href="/Inventory" className="text-lg">Inventory</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="py-6 rounded-md hover:bg-[#1C1C1C] hover:text-white transition-colors">
                  <Settings className="size-5 shrink-0" />
                  <span className="text-lg">Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer section with user profile */}
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          {/* User Avatar Placeholder */}
          <div className="bg-white rounded-xl p-2 size-12 flex items-center justify-center shrink-0">
            <Store className="size-8 text-green-600" />
          </div>
          
          {/* User Details */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Store Admin</span>
            <span className="text-xs text-zinc-500">Night Shift</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}