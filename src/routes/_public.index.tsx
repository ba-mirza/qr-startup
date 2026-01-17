import { Link, createFileRoute } from '@tanstack/react-router'

import {
  Clock,
  QrCode,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_public/')({
  component: App, loader: () => {
    console.log('Loader executed')
  },
  beforeLoad: () => {
    console.log('Before load executed')
  },
})

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-8">
            <QrCode className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium text-sm">
              Modern Attendance Tracking
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Track Attendance with <br />
            <span className="text-blue-600">Simple QR Codes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            No expensive hardware. No facial recognition. Just a simple, secure,
            and efficient way to manage employee attendance using smartphones.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to='/dashboard/organizations'>
              <Button size="lg" className="w-full sm:w-auto">
                Начать бесплатно
              </Button>
            </Link>
            <Link to="/auth/login">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Войти
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose QR Attendance?
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to manage your workforce efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                No Hardware Required
              </h3>
              <p className="text-gray-600">
                Forget about expensive biometric scanners or card readers. Use
                the devices your employees already have.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Instant Setup
              </h3>
              <p className="text-gray-600">
                Create your organization, generate QR codes, and start tracking
                attendance in less than 5 minutes.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Secure employee verification process with admin approval and
                location-based validation options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Как это работает?
            </h2>
            <p className="text-lg text-gray-600">
              Three simple steps to modernize your attendance system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10 transform scale-x-75"></div>

            <div className="text-center bg-gray-50">
              <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 border-4 border-white relative z-10">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                1. Create Organization
              </h3>
              <p className="text-gray-600">
                Sign up and set up your company profile in seconds.
              </p>
            </div>
            <div className="text-center bg-gray-50">
              <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 border-4 border-white relative z-10">
                <QrCode className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                2. Generate Codes
              </h3>
              <p className="text-gray-600">
                Print your permanent QR code for the office entrance.
              </p>
            </div>
            <div className="text-center bg-gray-50">
              <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 border-4 border-white relative z-10">
                <Clock className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                3. Track Time
              </h3>
              <p className="text-gray-600">
                Employees scan to check in and out. You see real-time data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to streamline your attendance?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of companies moving away from outdated punch cards
            and expensive biometrics.
          </p>
          <Link to="/">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 border-transparent"
            >
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <QrCode className="h-6 w-6 text-white" />
            <span className="text-xl font-bold text-white">QR Attendance</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} QR Attendance. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
