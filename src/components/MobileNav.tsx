'use client'
import { useState } from 'react'
import { Menu, X, Home, Search, User, MessageCircle, Briefcase } from 'lucide-react'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 모바일 햄버거 메뉴 */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* 모바일 슬라이드 메뉴 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-blue-600">잡코리아</h2>
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <nav className="p-4">
              <div className="space-y-4">
                <a href="/" className="flex items-center text-gray-900 hover:text-blue-600">
                  <Home className="h-5 w-5 mr-3" />
                  홈
                </a>
                <a href="/jobs" className="flex items-center text-gray-900 hover:text-blue-600">
                  <Search className="h-5 w-5 mr-3" />
                  채용정보
                </a>
                <a href="/resume" className="flex items-center text-gray-900 hover:text-blue-600">
                  <User className="h-5 w-5 mr-3" />
                  이력서
                </a>
                <a href="/albamon" className="flex items-center text-orange-600 hover:text-orange-700">
                  <Briefcase className="h-5 w-5 mr-3" />
                  알바몬
                </a>
                <a href="/community" className="flex items-center text-gray-900 hover:text-purple-600">
                  <MessageCircle className="h-5 w-5 mr-3" />
                  커뮤니티
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
