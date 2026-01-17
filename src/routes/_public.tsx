import { Outlet, createFileRoute } from '@tanstack/react-router'
import PublicHeader from '@/components/PublicHeader'

export const Route = createFileRoute('/_public')({
  component: PublicLayout,
})

function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />
      <Outlet />
    </div>
  )
}
