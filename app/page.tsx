import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { ServiceCards } from "@/components/service-cards"
import { DashboardHeader } from "@/components/dashboard-header"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <ServiceCards />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
