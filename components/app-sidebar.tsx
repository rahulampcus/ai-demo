import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  User,
  ImageIcon,
  MessageSquare,
  BarChart3,
  FileText,
  LogOut,
  Bell,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Menu items for navigation
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Documents",
    url: "#",
    icon: FileText,
  },
];

// Service items
const serviceItems = [
  {
    title: "Generate Application",
    url: "#",
    icon: ImageIcon,
  },
  {
    title: "AI Interview",
    url: "#",
    icon: MessageSquare,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-theme-orange-500 to-theme-yellow-500 text-white shadow-lg">
                  <BarChart3 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold bg-gradient-to-r from-theme-orange-600 to-theme-yellow-600 bg-clip-text text-transparent">
                    AI Services
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    Dashboard
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>AI Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {serviceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Settings />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-gradient-to-r data-[state=open]:from-theme-orange-100 data-[state=open]:to-theme-yellow-100 data-[state=open]:text-theme-orange-900"
                >
                  <Avatar className="h-8 w-8 rounded-lg ring-2 ring-theme-orange-200">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="User"
                    />
                    <AvatarFallback className="rounded-lg bg-gradient-to-br from-theme-orange-500 to-theme-yellow-500 text-white font-semibold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Dev Rajput</span>
                    <span className="truncate text-xs text-muted-foreground">
                      dev@example.com
                    </span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg border-theme-orange-200"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-theme-orange-50 hover:to-theme-yellow-50">
                  <User className="mr-2 h-4 w-4 text-theme-orange-600" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-theme-orange-50 hover:to-theme-yellow-50">
                  <Settings className="mr-2 h-4 w-4 text-theme-orange-600" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-theme-orange-50 hover:to-theme-yellow-50">
                  <Bell className="mr-2 h-4 w-4 text-theme-orange-600" />
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-theme-orange-50 hover:to-theme-yellow-50">
                  <LogOut className="mr-2 h-4 w-4 text-theme-orange-600" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
