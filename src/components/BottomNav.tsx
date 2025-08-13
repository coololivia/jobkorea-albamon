'use client'
import { usePathname } from 'next/navigation'
import { Home, Search, User, MessageCircle, Briefcase } from 'lucide-react'

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: Home, label: '홈', color: 'blue' },
    { href: '/jobs', icon: Search, label: '채용', color: 'blue' },
    { href: '/albamon', icon: Briefcase, label: '알바몬', color: 'orange' },
    { href: '/community', icon: MessageCircle, label: '커뮤니티', color: 'purple' },
    { href: '/resume', icon: User, label: '마이', color: 'gray' }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
      <div className="grid grid-cols-5 py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href === '/albamon' && pathname.startsWith('/albamon'))
          
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-2 px-1 ${
                isActive 
                  ? `text-${item.color}-600` 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className={`h-5 w-5 mb-1 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
