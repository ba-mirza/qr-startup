import { Link } from '@tanstack/react-router'
import { QrCode } from 'lucide-react'
import { Button } from '@/components/ui/button'


export default function PublicHeader() {
  return (
    <header className="bg-white/75 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-red-600 p-1.5 rounded-lg">
                <QrCode className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Kasip QR
              </span>
            </Link>
          </div>


          <div className="flex items-center space-x-4">
            <Link to="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth/register">
              <Button variant="outline">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
