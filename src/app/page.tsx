import { Search, MapPin, Bell, User, Heart, Building2, Clock, DollarSign, BarChart3, Users, Award, Target, ArrowRight, Briefcase, Menu } from 'lucide-react'
import MobileNav from '@/components/MobileNav'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 내비게이션 */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            <div className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-blue-600">잡코리아</h1>
              <nav className="ml-4 md:ml-8 hidden md:flex space-x-4 md:space-x-8 text-sm md:text-base">
                <a href="#" className="text-gray-900 hover:text-blue-600">채용</a>
                <a href="#" className="text-gray-900 hover:text-blue-600">포트폴리오</a>
                <a href="#" className="text-gray-900 hover:text-blue-600">커리어 커뮤니티</a>
                <a href="/albamon" className="text-orange-600 hover:text-orange-700">알바몬 연계</a>
              </nav>
            </div>
            <div className="flex items-center space-x-3 md:space-x-4">
              <Bell className="h-5 w-5 text-gray-400" />
              <User className="h-5 w-5 text-gray-400" />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
          {/* 사이드바 - 모바일에서는 상단 카드들로 */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6 order-2 lg:order-1">
            {/* 포트폴리오 현황 */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <div className="flex items-center mb-3 md:mb-4">
                <Briefcase className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-600" />
                <h3 className="font-semibold text-sm md:text-base">포트폴리오 현황</h3>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm">완성도</span>
                  <span className="font-medium text-blue-600 text-sm md:text-base">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>✅ 개발 프로젝트 3개</p>
                  <p>✅ 기술 스택 정리</p>
                  <p>⚠️ 팀 프로젝트 경험 추가 필요</p>
                </div>
              </div>
              <button className="w-full mt-3 md:mt-4 bg-blue-100 text-blue-700 py-2 rounded text-xs md:text-sm hover:bg-blue-200">
                포트폴리오 보완하기
              </button>
            </div>

            {/* 지원 현황 - 모바일에서 간소화 */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <div className="flex items-center mb-3 md:mb-4">
                <BarChart3 className="h-4 w-4 md:h-5 md:w-5 mr-2 text-green-600" />
                <h3 className="font-semibold text-sm md:text-base">지원 현황</h3>
              </div>
              <div className="grid grid-cols-2 md:block md:space-y-3 gap-2 md:gap-0">
                <div className="flex flex-col md:flex-row md:justify-between text-xs md:text-sm">
                  <span>이번 달 지원</span>
                  <span className="font-medium">12건</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between text-xs md:text-sm">
                  <span>서류 통과</span>
                  <span className="font-medium text-green-600">8건</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between text-xs md:text-sm">
                  <span>면접 진행</span>
                  <span className="font-medium text-blue-600">3건</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between text-xs md:text-sm">
                  <span>최종 합격</span>
                  <span className="font-medium text-purple-600">1건</span>
                </div>
              </div>
            </div>

            {/* 추천 커뮤니티 - 모바일에서는 숨김 */}
            <div className="hidden md:block bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                <h3 className="font-semibold">추천 커뮤니티</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg cursor-pointer">
                  <p className="text-sm font-medium">💻 프론트엔드 개발자</p>
                  <p className="text-xs text-gray-600">멤버 2,341명</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg cursor-pointer">
                  <p className="text-sm font-medium">🚀 스타트업 취업준비</p>
                  <p className="text-xs text-gray-600">멤버 1,892명</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg cursor-pointer">
                  <p className="text-sm font-medium">🎨 UX/UI 디자이너</p>
                  <p className="text-xs text-gray-600">멤버 1,156명</p>
                </div>
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3 space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* 검색 영역 */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">기술 스택별 맞춤 채용정보</h2>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="기술 스택, 직무 검색"
                    className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>
                <div className="relative md:w-auto">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <select className="w-full md:w-auto pl-9 md:pl-10 pr-8 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
                    <option>지역 선택</option>
                    <option>서울</option>
                    <option>경기</option>
                    <option>부산</option>
                  </select>
                </div>
                <button className="bg-blue-600 text-white px-4 md:px-6 py-2.5 md:py-2 rounded-lg hover:bg-blue-700 text-sm md:text-base">
                  검색
                </button>
              </div>
              
              {/* 기술 스택 필터 */}
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-xs md:text-sm font-medium">인기 기술 스택</h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {['React', 'Vue.js', 'Node.js', 'Python', 'Java', 'Spring', 'Docker', 'AWS'].map((tech) => (
                    <button
                      key={tech}
                      className="px-2.5 md:px-3 py-1 border border-gray-300 rounded-full text-xs md:text-sm hover:bg-blue-50 hover:border-blue-300"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 포트폴리오 기반 맞춤 추천 */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-0">🎯 포트폴리오 기반 맞춤 추천</h2>
                <span className="text-xs md:text-sm text-gray-500">매칭도 기준 정렬</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    company: "토스",
                    position: "프론트엔드 개발자",
                    experience: "신입-3년",
                    salary: "4500-7000만원",
                    skills: ["React", "TypeScript", "Next.js"],
                    matching: 95,
                    portfolioMatch: "React 프로젝트 3개와 높은 매칭도",
                    type: "정규직",
                    benefit: "스톡옵션"
                  },
                  {
                    company: "카카오",
                    position: "풀스택 개발자",
                    experience: "2-5년",
                    salary: "5000-8000만원", 
                    skills: ["Vue.js", "Node.js", "AWS"],
                    matching: 88,
                    portfolioMatch: "풀스택 프로젝트 경험 우수",
                    type: "정규직",
                    benefit: "재택근무"
                  }
                ].map((job, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <div className="flex items-center">
                        <Building2 className="h-8 w-8 md:h-10 md:w-10 text-blue-600 mr-2 md:mr-3" />
                        <div>
                          <h3 className="font-semibold text-base md:text-lg">{job.company}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs md:text-sm text-gray-600">{job.type}</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">{job.matching}% 매칭</span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Heart className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                      </button>
                    </div>

                    <h4 className="font-semibold text-lg md:text-xl mb-2">{job.position}</h4>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-2 md:p-3 mb-3 md:mb-4">
                      <p className="text-xs md:text-sm text-green-700">🎯 {job.portfolioMatch}</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {job.skills.map((skill) => (
                        <span key={skill} className="px-2 md:px-3 py-0.5 md:py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm">{skill}</span>
                      ))}
                      <span className="px-2 md:px-3 py-0.5 md:py-1 bg-purple-100 text-purple-800 rounded-full text-xs md:text-sm">{job.benefit}</span>
                    </div>

                    <div className="flex gap-2 md:gap-3">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm md:text-base">
                        지원하기
                      </button>
                      <button className="px-4 md:px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm md:text-base">
                        상세보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 잡코리아-알바몬 연계 섹션 */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center">
                <Target className="h-4 w-4 md:h-5 md:w-5 mr-2 text-orange-600" />
                알바몬 연계 추천
              </h2>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                정규직 준비와 함께 경험을 쌓을 수 있는 알바몬 기회를 추천드려요!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                <div className="bg-white rounded-lg p-3 md:p-4">
                  <div className="flex items-center mb-2">
                    <Building2 className="h-5 w-5 md:h-6 md:w-6 text-orange-600 mr-2" />
                    <h3 className="font-medium text-sm md:text-base">개발 인턴</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">실무 경험 + 포트폴리오</p>
                  <p className="text-orange-600 font-medium text-sm md:text-base">시급 15,000원~</p>
                  <button className="w-full mt-2 bg-orange-100 text-orange-700 py-1 rounded text-xs md:text-sm">
                    보러가기
                  </button>
                </div>
                
                <div className="bg-white rounded-lg p-3 md:p-4">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-orange-600 mr-2" />
                    <h3 className="font-medium text-sm md:text-base">과외/강사</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">교육 경험 + 커뮤니케이션</p>
                  <p className="text-orange-600 font-medium text-sm md:text-base">시급 25,000원~</p>
                  <button className="w-full mt-2 bg-orange-100 text-orange-700 py-1 rounded text-xs md:text-sm">
                    보러가기
                  </button>
                </div>
                
                <div className="bg-white rounded-lg p-3 md:p-4">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 md:h-6 md:w-6 text-orange-600 mr-2" />
                    <h3 className="font-medium text-sm md:text-base">프로젝트 외주</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">실전 개발 + 수익창출</p>
                  <p className="text-orange-600 font-medium text-sm md:text-base">프로젝트당 50만원~</p>
                  <button className="w-full mt-2 bg-orange-100 text-orange-700 py-1 rounded text-xs md:text-sm">
                    보러가기
                  </button>
                </div>
              </div>

              <div className="text-center mt-4 md:mt-6">
                <a 
                  href="/albamon"
                  className="inline-flex items-center bg-orange-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-orange-700 text-sm md:text-base"
                >
                  알바몬에서 더 많은 기회 찾기
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2" />
                </a>
              </div>
            </div>

            {/* 커리어 커뮤니티 활동 - 모바일에서 간소화 */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center">
                <Users className="h-4 w-4 md:h-5 md:w-5 mr-2 text-purple-600" />
                커리어 커뮤니티 추천
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="border border-gray-200 rounded-lg p-3 md:p-4">
                  <h3 className="font-medium mb-2 text-sm md:text-base">🏢 대기업 취업 준비반</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">삼성, LG, 현대 등 대기업 합격자들의 노하우 공유</p>
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span className="text-purple-600">멤버 3,241명</span>
                    <button className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded text-xs md:text-sm">
                      참여하기
                    </button>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-3 md:p-4">
                  <h3 className="font-medium mb-2 text-sm md:text-base">🚀 스타트업 네트워킹</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">스타트업 현직자와의 네트워킹 및 채용정보</p>
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span className="text-purple-600">멤버 2,156명</span>
                    <button className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded text-xs md:text-sm">
                      참여하기
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 text-center">
                <a 
                  href="/community"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 text-sm md:text-base"
                >
                  더 많은 커뮤니티 보기
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
