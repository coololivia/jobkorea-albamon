import { Search, MapPin, Bell, User, Heart, Building2, Clock, DollarSign, BarChart3, Users, Award, Target, ArrowRight, Briefcase } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 내비게이션 */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">잡코리아</h1>
              <nav className="ml-8 hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600">채용</a>
                <a href="#" className="text-gray-900 hover:text-blue-600">포트폴리오</a>
                <a href="#" className="text-gray-900 hover:text-blue-600">커리어 커뮤니티</a>
                <a href="/albamon" className="text-orange-600 hover:text-orange-700">알바몬 연계</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-400" />
              <User className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 - 포트폴리오 대시보드 */}
          <div className="lg:col-span-1 space-y-6">
            {/* 포트폴리오 현황 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                <h3 className="font-semibold">포트폴리오 현황</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">완성도</span>
                  <span className="font-medium text-blue-600">85%</span>
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
              <button className="w-full mt-4 bg-blue-100 text-blue-700 py-2 rounded text-sm hover:bg-blue-200">
                포트폴리오 보완하기
              </button>
            </div>

            {/* 지원 현황 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
                <h3 className="font-semibold">지원 현황</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>이번 달 지원</span>
                  <span className="font-medium">12건</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>서류 통과</span>
                  <span className="font-medium text-green-600">8건</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>면접 진행</span>
                  <span className="font-medium text-blue-600">3건</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>최종 합격</span>
                  <span className="font-medium text-purple-600">1건</span>
                </div>
              </div>
            </div>

            {/* 추천 커뮤니티 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
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
          <div className="lg:col-span-3 space-y-8">
            {/* 검색 영역 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">기술 스택별 맞춤 채용정보</h2>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="기술 스택, 직무, 회사명을 검색해보세요"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>지역 선택</option>
                    <option>서울</option>
                    <option>경기</option>
                    <option>부산</option>
                  </select>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  검색
                </button>
              </div>
              
              {/* 기술 스택 필터 */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium">인기 기술 스택</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vue.js', 'Node.js', 'Python', 'Java', 'Spring', 'Docker', 'AWS', 'Kubernetes', 'TypeScript'].map((tech) => (
                    <button
                      key={tech}
                      className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-blue-50 hover:border-blue-300"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 포트폴리오 기반 맞춤 추천 */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">🎯 포트폴리오 기반 맞춤 추천</h2>
                <span className="text-sm text-gray-500">매칭도 기준 정렬</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  },
                  {
                    company: "네이버클라우드",
                    position: "DevOps 엔지니어",
                    experience: "1-4년",
                    salary: "4000-6500만원",
                    skills: ["Docker", "Kubernetes", "AWS"],
                    matching: 82,
                    portfolioMatch: "인프라 프로젝트 경험 보유",
                    type: "정규직",
                    benefit: "교육지원"
                  },
                  {
                    company: "우아한형제들",
                    position: "백엔드 개발자",
                    experience: "신입-2년",
                    salary: "4000-6000만원",
                    skills: ["Java", "Spring", "MySQL"],
                    matching: 79,
                    portfolioMatch: "API 개발 프로젝트 우수",
                    type: "정규직",
                    benefit: "유연근무"
                  }
                ].map((job, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <Building2 className="h-10 w-10 text-blue-600 mr-3" />
                        <div>
                          <h3 className="font-semibold text-lg">{job.company}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">{job.type}</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">{job.matching}% 매칭</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded">
                          <Heart className="h-5 w-5 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    <h4 className="font-semibold text-xl mb-2">{job.position}</h4>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-green-700">🎯 {job.portfolioMatch}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{skill}</span>
                      ))}
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">{job.benefit}</span>
                    </div>

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
            </div>

            {/* 잡코리아-알바몬 연계 섹션 */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-orange-600" />
                알바몬 연계 추천
              </h2>
              <p className="text-gray-700 mb-4">
                정규직 준비와 함께 경험을 쌓을 수 있는 알바몬 기회를 추천드려요!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Building2 className="h-6 w-6 text-orange-600 mr-2" />
                    <h3 className="font-medium">개발 인턴</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">실무 경험 + 포트폴리오</p>
                  <p className="text-orange-600 font-medium">시급 15,000원~</p>
                  <button className="w-full mt-2 bg-orange-100 text-orange-700 py-1 rounded text-sm">
                    보러가기
                  </button>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Users className="h-6 w-6 text-orange-600 mr-2" />
                    <h3 className="font-medium">과외/강사</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">교육 경험 + 커뮤니케이션</p>
                  <p className="text-orange-600 font-medium">시급 25,000원~</p>
                  <button className="w-full mt-2 bg-orange-100 text-orange-700 py-1 rounded text-sm">
                    보러가기
                  </button>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Award className="h-6 w-6 text-orange-600 mr-2" />
                    <h3 className="font-medium">프로젝트 외주</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">실전 개발 + 수익창출</p>
                  <p className="text-orange-600 font-medium">프로젝트당 50만원~</p>
                  <button className="w-full mt-2 bg-orange-100 text-orange-700 py-1 rounded text-sm">
                    보러가기
                  </button>
                </div>
              </div>

              <div className="text-center mt-6">
                <a 
                  href="/albamon"
                  className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
                >
                  알바몬에서 더 많은 기회 찾기
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>

            {/* 커리어 커뮤니티 활동 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                커리어 커뮤니티 추천
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium mb-2">🏢 대기업 취업 준비반</h3>
                  <p className="text-sm text-gray-600 mb-3">삼성, LG, 현대 등 대기업 합격자들의 노하우 공유</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-purple-600">멤버 3,241명</span>
                    <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded">
                      참여하기
                    </button>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium mb-2">🚀 스타트업 네트워킹</h3>
                  <p className="text-sm text-gray-600 mb-3">스타트업 현직자와의 네트워킹 및 채용정보</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-purple-600">멤버 2,156명</span>
                    <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded">
                      참여하기
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href="/community"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700"
                >
                  더 많은 커뮤니티 보기
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
