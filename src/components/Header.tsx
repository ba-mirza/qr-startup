import { Link } from '@tanstack/react-router'
import { QrCode } from 'lucide-react'

function Header() {
  return (
    <header className="bg-white/75 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <QrCode className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                QR Attendance
              </span>
            </Link>

          </div>

          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Войти
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Регистрация
              </Link>
            </div>

          </div>
        </div>
      </div>

    </header>
  )
}

export default Header;
