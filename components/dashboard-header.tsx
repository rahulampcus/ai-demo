import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Bell, Plus } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">AI Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto flex items-center gap-2 px-4">
        <Button
          variant="outline"
          size="icon"
          className="border-theme-orange-200 hover:bg-gradient-to-r hover:from-theme-orange-50 hover:to-theme-yellow-50 hover:border-theme-orange-300"
        >
          <Bell className="h-4 w-4 text-theme-orange-600" />
        </Button>
        <Button
          size="sm"
          className="bg-gradient-to-r from-theme-orange-500 to-theme-yellow-500 hover:from-theme-orange-600 hover:to-theme-yellow-600 text-white shadow-lg"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Service
        </Button>
      </div>
    </header>
  )
}
