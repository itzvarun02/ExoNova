"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, User, MessageSquare, GalleryVerticalEnd, Calendar, FileText, HelpCircle } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Inquiries", href: "/dashboard/inquiries", icon: MessageSquare },
  { name: "My Bids", href: "/dashboard/bids", icon: GalleryVerticalEnd },
  { name: "My Plan", href: "/dashboard/plan", icon: Calendar },
  { name: "Accounts", href: "/dashboard/accounts", icon: FileText },
  { name: "Help", href: "/dashboard/help", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex w-64 flex-col fixed inset-y-0">
      <div className="flex flex-1 flex-col min-h-0 border-r bg-white">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex-shrink-0 px-4">
            <h1 className="text-2xl font-bold">ExoNova</h1>
          </div>
          <nav className="mt-8 flex-1 space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className={`mr-3 h-5 w-5 flex-shrink-0 ${isActive ? "text-gray-500" : "text-gray-400"}`} />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}

