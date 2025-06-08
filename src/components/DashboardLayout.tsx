import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard,
  BarChart3,
  Users,
  Target,
  Settings,
  LogOut,
  Menu,
  X,
  Rocket,
  TrendingUp,
  MessageSquare,
  Calendar,
  FileText,
  CreditCard
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const sidebarItems = [
  {
    name: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
    current: false
  },
  {
    name: 'Campaigns',
    href: '/dashboard/campaigns',
    icon: Rocket,
    current: false
  },
  {
    name: 'KOLs & Influencers',
    href: '/dashboard/kols',
    icon: Users,
    current: false
  },
  {
    name: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
    current: false
  },
  {
    name: 'Performance',
    href: '/dashboard/performance',
    icon: TrendingUp,
    current: false
  },
  {
    name: 'Messages',
    href: '/dashboard/messages',
    icon: MessageSquare,
    current: false
  },
  {
    name: 'Calendar',
    href: '/dashboard/calendar',
    icon: Calendar,
    current: false
  },
  {
    name: 'Reports',
    href: '/dashboard/reports',
    icon: FileText,
    current: false
  },
  {
    name: 'Billing',
    href: '/dashboard/billing',
    icon: CreditCard,
    current: false
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    current: false
  }
];

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Update current page
  const updatedSidebarItems = sidebarItems.map(item => ({
    ...item,
    current: router.pathname === item.href
  }));

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 border-r border-white/10">
          <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="https://assets.co.dev/31027885-c7e9-4de0-8d87-ffffa58fc73e/logo-0535a30.jpg"
                  alt="Bundled Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/20 to-orange-500/20"></div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Bundled
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <nav className="mt-6 px-3">
            <div className="space-y-1">
              {updatedSidebarItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    item.current
                      ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400 border border-yellow-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-gray-900 border-r border-white/10">
          <div className="flex items-center h-16 px-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="https://assets.co.dev/31027885-c7e9-4de0-8d87-ffffa58fc73e/logo-0535a30.jpg"
                  alt="Bundled Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/20 to-orange-500/20"></div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Bundled
              </span>
            </div>
          </div>
          <nav className="mt-6 flex-1 px-3">
            <div className="space-y-1">
              {updatedSidebarItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    item.current
                      ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400 border border-yellow-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <div className="p-3 border-t border-white/10">
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10 rounded-xl"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-white mr-4"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-semibold text-white">{title}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                Welcome back, <span className="text-yellow-400 font-medium">{user?.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}