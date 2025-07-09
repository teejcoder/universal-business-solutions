import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Settings, 
  BarChart3,
  FileText,
  Mail,
  Shield
} from 'lucide-react'

const adminNavItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard
  },
  {
    title: 'Bookings',
    href: '/admin/bookings',
    icon: Calendar
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: Users
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3
  },
  {
    title: 'Reports',
    href: '/admin/reports',
    icon: FileText
  },
  {
    title: 'Messages',
    href: '/admin/messages',
    icon: Mail
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings
  }
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-card border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Admin Portal</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="hidden sm:flex">
              Super Admin
            </Badge>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16 bg-card border-r">
          <div className="flex flex-col h-full">
            {/* Admin Info */}
            <div className="p-4 border-b">
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Admin User</p>
                      <p className="text-sm text-muted-foreground">admin@ubs.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {adminNavItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                    {item.title}
                  </a>
                )
              })}
            </nav>

            {/* Quick Stats */}
            <div className="p-4 border-t">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Today's Bookings</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Users</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">System Status</span>
                    <Badge variant="secondary" className="text-xs">
                      Online
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:pl-64">
          <div className="p-4 lg:p-6">
            {children}
          </div>
        </main>
      </div>

      {/* Admin Footer */}
      <footer className="bg-card border-t lg:pl-64">
        <div className="px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} ConvertOrDie</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Admin Dashboard v1.0</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="/admin/help" className="text-muted-foreground hover:text-foreground">
                Help
              </a>
              <a href="/admin/support" className="text-muted-foreground hover:text-foreground">
                Support
              </a>
              <Badge variant="outline" className="text-xs">
                Last updated: 9 July 2025
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}