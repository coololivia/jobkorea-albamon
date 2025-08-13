import { ArrowLeft, Building2, MapPin, Clock, DollarSign, Users, Calendar, Bookmark, Heart, Send } from 'lucide-react'

export default function JobDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="mr-4 p-2 hover:bg-gray-100 rounded">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <h1 className="text-2xl font-bold text-blue-600">잡코리아</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 기업 정보 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Building2 className="h-16 w-16 text-blue-600 mr-4" />
                <div>
                  <h1 className="text-2xl font-bold">네이버클라우드플랫폼</h1>
                  <p className="text-gray-600">IT서비스 • 대기업 • 임직원 1,000명+</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>경기 성남시 분당구 • 판교역 도보 5분</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4">클라우드 플랫폼 백엔드 개발자</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">경력</p>
                    <p className="font-medium">3-8년</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">연봉</p>
                    <p className="font-medium">5000-8000만원</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">팀 구성</p>
                    <p className="font-medium">15명</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">근무형태</p>
                    <p className="font-medium">하이브리드</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">재택근무</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">합격축하금 100만원</span>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">주요 업무</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 네이버클라우드플랫폼 핵심 서비스 백엔드 시스템 설계 및 개발</li>
                <li>• 대규모 트래픽을 처리하는 고성능 API 서버 구축</li>
                <li>• 마이크로서비스 아키텍처 기반 시스템 개발 및 운영</li>
                <li>• 클라우드 네이티브 환경에서의 서비스 최적화</li>
                <li>• 데이터베이스 설계 및 성능 최적화</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">필요 역량</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-medium mb-2">필수 역량</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Java, Spring Framework 3년 이상 경험</li>
                    <li>• RESTful API 설계 및 구현 경험</li>
                    <li>• RDBMS, NoSQL 활용 경험</li>
                    <li>• Git, 코드 리뷰 경험</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">우대 역량</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Kubernetes, Docker 경험</li>
                    <li>• AWS, GCP 등 클라우드 경험</li>
                    <li>• 대용량 트래픽 처리 경험</li>
                    <li>• MSA 설계 및 구축 경험</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">협업 부서 및 팀 구성</h3>
              <p className="text-gray-700 mb-4">
                플랫폼개발팀(15명), 인프라팀(10명), 프론트엔드팀(8명)과 협업하여 
                클라우드 서비스 전반의 백엔드 시스템을 담당합니다.
              </p>

              <h3 className="text-xl font-semibold mb-4">목표 및 성과지표</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• API 응답시간 평균 100ms 이하 유지</li>
                <li>• 서비스 가용성 99.9% 이상 달성</li>
                <li>• 월 1회 이상 신규 기능 배포</li>
                <li>• 코드 커버리지 80% 이상 유지</li>
              </ul>
            </div>

            {/* 복지 및 근무환경 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">복지 및 근무환경</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">휴가 제도</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 연차 15일 + 리프레시 휴가 5일</li>
                    <li>• 경조사 휴가</li>
                    <li>• 육아휴직, 출산휴가</li>
                    <li>• 안식월 제도 (7년 근속 시)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">교육 지원</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 외부 교육비 연 200만원 지원</li>
                    <li>• 컨퍼런스 참가비 지원</li>
                    <li>• 사내 기술 세미나</li>
                    <li>• 도서 구입비 지원</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">복리후생</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 4대보험 + 퇴직연금</li>
                    <li>• 건강검진 지원</li>
                    <li>• 식대 지원 (월 20만원)</li>
                    <li>• 헬스장 이용료 지원</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">근무환경</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 하이브리드 근무 (주 3일 출근)</li>
                    <li>• 유연근무제</li>
                    <li>• 최신 개발 장비 지원</li>
                    <li>• 카페테리아, 휴게공간</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 지원 프로세스 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">지원 프로세스</h3>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                  <p className="mt-2 text-sm font-medium">서류전형</p>
                  <p className="text-xs text-gray-500">3-5일</p>
                </div>
                <div className="flex-1 h-px bg-gray-300 mx-4"></div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                  <p className="mt-2 text-sm font-medium">1차 면접</p>
                  <p className="text-xs text-gray-500">기술면접</p>
                </div>
                <div className="flex-1 h-px bg-gray-300 mx-4"></div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                  <p className="mt-2 text-sm font-medium">2차 면접</p>
                  <p className="text-xs text-gray-500">컬처핏</p>
                </div>
                <div className="flex-1 h-px bg-gray-300 mx-4"></div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                  <p className="mt-2 text-sm font-medium">최종합격</p>
                  <p className="text-xs text-gray-500">처우협의</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                * 전체 프로세스는 약 2-3주 소요되며, 일정은 지원자와 협의하여 조정 가능합니다.
              </p>
            </div>

            {/* 유사 공고 추천 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">이런 포지션도 추천해요</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((item) => (
                  <div key={item} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer">
                    <div className="flex items-center mb-2">
                      <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                      <h4 className="font-medium">카카오</h4>
                    </div>
                    <p className="font-medium mb-1">플랫폼 백엔드 개발자</p>
                    <p className="text-sm text-gray-600">경력 3-7년 • 6000-9000만원</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 지원 버튼 */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <div className="flex gap-2 mb-4">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <Bookmark className="h-5 w-5 text-gray-400" />
                </button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <Heart className="h-5 w-5 text-gray-400" />
                </button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <Send className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mb-3 font-medium">
                지원하기
              </button>
              
              <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 font-medium">
                1:1 문의하기
              </button>
              
              <p className="text-xs text-gray-500 mt-3 text-center">
                이력서 없이도 간편 지원 가능
              </p>
            </div>

            {/* 기업 정보 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold mb-4">기업 정보</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">업종</span>
                  <span>IT서비스</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">설립년도</span>
                  <span>2017년</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">직원수</span>
                  <span>1,000명+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">매출액</span>
                  <span>1조원 (2023)</span>
                </div>
              </div>
              
              <button className="w-full mt-4 border border-gray-300 py-2 rounded text-sm hover:bg-gray-50">
                기업 상세정보 보기
              </button>
            </div>

            {/* 알림 설정 */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">관심 알림 설정</h4>
              <p className="text-blue-700 text-sm mb-3">
                이 회사의 새로운 채용공고를 알려드릴까요?
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">
                알림 받기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
