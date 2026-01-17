import { Outlet, createFileRoute } from '@tanstack/react-router'
import DashboardHeader from '@/components/DashboardHeader'
import { ProtectedRoute } from '@/components/ProtectedRoute'

export const Route = createFileRoute('/_dashboard')({
  component: () => (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  ),
})

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <Outlet />
    </div>
  )
}
