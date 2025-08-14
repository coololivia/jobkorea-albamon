import { Clock, DollarSign, Heart, Building2, Calendar, Star, BookOpen, Target, Brain, Camera } from 'lucide-react'

export default function AlbamonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">알바몬</h1>
              <span className="ml-2 text-sm text-gray-500">전공별 맞춤 알바부터 포트폴리오까지</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-orange-600">전공별 알바</a>
              <a href="#" className="text-gray-900 hover:text-orange-600">스케줄 관리</a>
              <a href="#" className="text-gray-900 hover:text-orange-600">포트폴리오</a>
              <a href="#" className="text-gray-900 hover:text-orange-600">AI 추천</a>
            </nav>
          </div>
        </div>
      </header>

      {/* 전공별 맞춤 필터 영역 */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">🎓 전공에 맞는 완벽한 알바 찾기</h2>
            <p className="opacity-90">AI가 당신의 전공과 목표를 분석해서 최적의 알바를 추천해드려요</p>
          </div>
          
          {/* 복합 필터 UI */}
          <div className="bg-white rounded-lg p-6 text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">전공 분야</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>전공 선택</option>
                  <option>컴퓨터공학</option>
                  <option>경영학</option>
                  <option>디자인</option>
                  <option>마케팅</option>
                  <option>교육학</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">자격증/스킬</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>자격증 선택</option>
                  <option>컴활 1급</option>
                  <option>토익 700+</option>
                  <option>포토샵</option>
                  <option>회계자격증</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">희망 지역</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>지역 선택</option>
                  <option>강남구</option>
                  <option>홍대/신촌</option>
                  <option>잠실/송파</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">목표 수입</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>수입 목표</option>
                  <option>월 50만원</option>
                  <option>월 100만원</option>
                  <option>월 150만원 이상</option>
                </select>
              </div>
            </div>
            
            {/* 선택된 필터 태그 */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">컴퓨터공학</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">강남구</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">월 100만원</span>
            </div>
            
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700">
              🔍 100% 맞춤 알바 찾기 (156개 결과)
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 - 스케줄 & AI 추천 */}
          <div className="lg:col-span-1 space-y-6">
            {/* 스케줄 관리 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 mr-2 text-orange-600" />
                <h3 className="font-semibold">내 스케줄</h3>
                <button className="ml-auto text-sm text-orange-600">연동</button>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm font-medium">오늘 (8/13)</p>
                  <p className="text-xs text-orange-700">스타벅스 오후 2-6시</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium">내일 (8/14)</p>
                  <p className="text-xs text-blue-700">면접: IT회사 인턴</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium">이번주 가능</p>
                  <p className="text-xs text-gray-600">화, 목 오전 시간대</p>
                </div>
              </div>
              <button className="w-full mt-3 text-orange-600 text-sm hover:bg-orange-50 py-2 rounded">
                스케줄 자동 추천 받기
              </button>
            </div>

            {/* AI 추천 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-5 w-5 mr-2 text-purple-600" />
                <h3 className="font-semibold">AI 맞춤 추천</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-purple-600 mr-1" />
                    <span className="text-sm font-medium">98% 매칭</span>
                  </div>
                  <p className="text-sm">IT 스타트업 개발 인턴</p>
                  <p className="text-xs text-gray-600">전공 활용도 높음</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm font-medium">95% 매칭</span>
                  </div>
                  <p className="text-sm">코딩 과외 선생님</p>
                  <p className="text-xs text-gray-600">시급 3만원</p>
                </div>
              </div>
              <button className="w-full mt-3 bg-purple-100 text-purple-700 py-2 rounded text-sm">
                더 많은 AI 추천 보기
              </button>
            </div>

            {/* 목표 달성 현황 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Target className="h-5 w-5 mr-2 text-green-600" />
                <h3 className="font-semibold">목표 달성</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>이번 달 수입</span>
                    <span className="font-medium">78만원 / 100만원</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">목표까지 22만원 남았어요! 추천 알바로 달성 가능해요.</p>
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3 space-y-6">
            {/* 전공별 우대 공고 */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">🏆 컴퓨터공학 전공 우대 알바</h2>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">#전공활용</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">#포트폴리오가능</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">#높은시급</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    company: "네이버클라우드",
                    position: "개발 인턴",
                    major: "컴퓨터공학 우대",
                    schedule: "평일 4시간",
                    pay: "시급 2만원",
                    skills: ["Python", "React"],
                    portfolio: true,
                    matching: 98,
                    review: "실제 개발 경험 쌓을 수 있어요!"
                  },
                  {
                    company: "코딩 교육원",
                    position: "프로그래밍 강사",
                    major: "IT 전공 필수",
                    schedule: "주말 6시간", 
                    pay: "시급 3만원",
                    skills: ["Java", "알고리즘"],
                    portfolio: true,
                    matching: 95,
                    review: "교육 경험도 쌓고 고수익!"
                  }
                ].map((job, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-orange-500">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <Building2 className="h-8 w-8 text-orange-600 mr-3" />
                        <div>
                          <h3 className="font-semibold">{job.company}</h3>
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">{job.matching}% 매칭</span>
                        </div>
                      </div>
                      <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                    </div>
                    
                    <h4 className="font-medium text-lg mb-2">{job.position}</h4>
                    <p className="text-sm text-orange-600 mb-3">{job.major}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{job.schedule}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2" />
                        <span>{job.pay}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-3">
                      {job.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{skill}</span>
                      ))}
                      {job.portfolio && <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">포트폴리오</span>}
                    </div>

                    <div className="flex items-center mb-4 p-2 bg-yellow-50 rounded">
                      <Camera className="h-4 w-4 mr-2 text-yellow-600" />
                      <span className="text-sm text-yellow-700">&ldquo;{job.review}&rdquo;</span>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-orange-600 text-white py-2 rounded hover:bg-orange-700">
                        바로 지원
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                        스케줄 확인
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 포트폴리오 연계 가이드 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                알바 경험으로 포트폴리오 만들기
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    category: "개발 인턴",
                    description: "실제 프로젝트 참여 경험",
                    portfolio: "GitHub 레포지토리 + 기술 블로그",
                    nextStep: "정규직 개발자",
                    color: "blue"
                  },
                  {
                    category: "코딩 강사",
                    description: "교육 및 소통 능력 증명",
                    portfolio: "강의 자료 + 학생 피드백",
                    nextStep: "교육업계 / PM",
                    color: "green"
                  },
                  {
                    category: "IT 지원",
                    description: "비즈니스 이해도 향상",
                    portfolio: "업무 개선 제안서",
                    nextStep: "기획자 / 컨설턴트",
                    color: "purple"
                  }
                ].map((guide, index) => (
                  <div key={index} className={`p-4 bg-${guide.color}-50 border border-${guide.color}-200 rounded-lg`}>
                    <h3 className={`font-medium text-${guide.color}-800 mb-2`}>{guide.category}</h3>
                    <p className="text-sm text-gray-700 mb-3">{guide.description}</p>
                    <div className="text-xs text-gray-600 mb-2">
                      <strong>포트폴리오:</strong> {guide.portfolio}
                    </div>
                    <div className="text-xs text-gray-600 mb-3">
                      <strong>연결 직무:</strong> {guide.nextStep}
                    </div>
                    <button className={`w-full bg-${guide.color}-600 text-white py-2 rounded text-sm hover:bg-${guide.color}-700`}>
                      가이드 보기
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 현장 리뷰 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Camera className="h-5 w-5 mr-2 text-green-600" />
                알바몬 현장 탐방 리뷰
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    company: "카카오 판교오피스",
                    reviewer: "알바몬 에디터",
                    photos: 8,
                    rating: 4.8,
                    highlight: "개발자들과 실제 협업 가능",
                    environment: "쾌적한 사무환경, 무료 간식"
                  },
                  {
                    company: "토스 잠실오피스", 
                    reviewer: "현직 인턴",
                    photos: 12,
                    rating: 4.9,
                    highlight: "실무 경험 + 네트워킹 기회",
                    environment: "자유로운 복장, 플렉스 타임"
                  }
                ].map((review, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <Camera className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{review.company}</h3>
                        <p className="text-sm text-gray-600">by {review.reviewer}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-current text-yellow-500" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium">{review.rating}</span>
                      <span className="ml-2 text-xs text-gray-500">사진 {review.photos}장</span>
                    </div>
                    <p className="text-sm text-green-700 mb-2">💡 {review.highlight}</p>
                    <p className="text-xs text-gray-600 mb-3">{review.environment}</p>
                    <button className="w-full bg-green-100 text-green-700 py-2 rounded text-sm hover:bg-green-200">
                      전체 리뷰 보기
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 수입 목표 기반 추천 */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-green-600" />
                월 100만원 목표 달성 플랜
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-medium mb-2">주중 계획</h3>
                  <p className="text-sm text-gray-600 mb-2">개발 인턴 (20시간)</p>
                  <p className="text-lg font-bold text-green-600">40만원</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-medium mb-2">주말 계획</h3>
                  <p className="text-sm text-gray-600 mb-2">코딩 과외 (10시간)</p>
                  <p className="text-lg font-bold text-blue-600">30만원</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-medium mb-2">프로젝트</h3>
                  <p className="text-sm text-gray-600 mb-2">외주 개발 (선택)</p>
                  <p className="text-lg font-bold text-purple-600">30만원+</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                  맞춤 스케줄 생성하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
