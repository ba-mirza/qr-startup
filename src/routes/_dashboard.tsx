import { Outlet, createFileRoute } from '@tanstack/react-router'
import DashboardHeader from '@/components/DashboardHeader'

export const Route = createFileRoute('/_dashboard')({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <Outlet />
    </div>
  )
}
