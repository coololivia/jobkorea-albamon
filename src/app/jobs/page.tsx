import Link from 'next/link'
import { Search, Filter, MapPin, Building2, Clock, DollarSign, Bookmark, Heart } from 'lucide-react'

export default function JobListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">잡코리아</h1>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600">홈</Link>
              <a href="#" className="text-blue-600 font-medium">채용</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">커리어</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 검색 바 */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="직무, 회사명을 검색해보세요"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              검색
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* 필터 사이드바 */}
          <div className="w-80 bg-white rounded-lg shadow-sm p-6 h-fit">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 mr-2" />
              <h2 className="font-semibold">필터</h2>
            </div>
            
            {/* 태그 필터 */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">업계 태그</h3>
              <div className="flex flex-wrap gap-2">
                {['AI 선도기업', '시리즈C 이상', '재택근무', '합격축하금', '대기업', '스타트업'].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-blue-50 hover:border-blue-300"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* 경력 필터 */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">경력</h3>
              <div className="space-y-2">
                {['신입', '1-3년', '4-6년', '7-10년', '10년 이상'].map((exp) => (
                  <label key={exp} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{exp}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 연봉 필터 */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">연봉</h3>
              <div className="space-y-2">
                {['3000만원 이하', '3000-4000만원', '4000-6000만원', '6000만원 이상'].map((salary) => (
                  <label key={salary} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{salary}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* 공고 리스트 */}
          <div className="flex-1">
            {/* 정렬 및 결과 수 */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">총 <span className="font-semibold text-blue-600">1,234</span>개의 공고</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">최신순</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">적합순</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">맞춤추천</button>
              </div>
            </div>

            {/* 공고 카드들 */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-blue-500">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Building2 className="h-12 w-12 text-blue-600 mr-4" />
                      <div>
                        <h3 className="font-semibold text-lg">네이버클라우드플랫폼</h3>
                        <p className="text-gray-600">IT서비스 • 서울 분당구</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Bookmark className="h-5 w-5 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Heart className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  <h4 className="font-semibold text-xl mb-3">클라우드 플랫폼 백엔드 개발자</h4>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>경력 3-8년</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>5000-8000만원</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>판교역 도보 5분</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Spring</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Kubernetes</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">재택근무</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">합격축하금</span>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">
                    네이버클라우드플랫폼의 핵심 서비스를 개발하고 운영하는 백엔드 개발자를 모집합니다. 
                    클라우드 네이티브 환경에서 대규모 트래픽을 처리하는 시스템을 설계하고 개발할 기회입니다.
                  </p>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                      지원하기
                    </button>
                    <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      상세보기
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">이전</button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 border rounded ${
                      page === 1 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">다음</button>
              </div>
            </div>

            {/* 탐색 피드백 */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8">
              <h3 className="font-semibold text-yellow-800 mb-2">원하는 공고를 못 찾으셨나요?</h3>
              <p className="text-yellow-700 text-sm mb-3">더 정확한 맞춤 공고를 위해 검색 조건을 수정하거나 알림을 설정해보세요.</p>
              <div className="flex gap-2">
                <button className="bg-yellow-600 text-white px-4 py-2 rounded text-sm hover:bg-yellow-700">
                  맞춤 알림 설정
                </button>
                <button className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded text-sm hover:bg-yellow-50">
                  검색 도움말
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
