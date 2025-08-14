import { Save, Download, Eye, Move, Plus, Trash2, Lightbulb, Star } from 'lucide-react'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">이력서 작성</h1>
            <div className="flex gap-3">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Eye className="h-4 w-4 mr-2" />
                미리보기
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                다운로드
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Save className="h-4 w-4 mr-2" />
                저장
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 - 디자인 옵션 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="font-semibold mb-4">디자인 커스터마이징</h3>
              
              {/* 템플릿 선택 */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">템플릿</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['클래식', '모던', '미니멀', '크리에이티브'].map((template) => (
                    <button
                      key={template}
                      className="p-2 border border-gray-300 rounded text-sm hover:border-blue-500 hover:bg-blue-50"
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>

              {/* 컬러 선택 */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">컬러</h4>
                <div className="flex gap-2">
                  {['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-gray-800'].map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 ${color} rounded-full border-2 border-white shadow-md`}
                    />
                  ))}
                </div>
              </div>

              {/* 폰트 선택 */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">폰트</h4>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>나눔고딕</option>
                  <option>맑은고딕</option>
                  <option>노토산스</option>
                </select>
              </div>

              {/* AI 도움말 */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Lightbulb className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="font-medium text-yellow-800">AI 추천</span>
                </div>
                <p className="text-yellow-700 text-sm mb-3">
                  더 나은 이력서를 위한 AI 분석과 개선 제안을 받아보세요.
                </p>
                <button className="w-full bg-yellow-600 text-white py-2 rounded text-sm hover:bg-yellow-700">
                  AI 분석 요청
                </button>
              </div>
            </div>
          </div>

          {/* 메인 이력서 편집 영역 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* 기본 정보 */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">기본 정보</h2>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Move className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">이름 *</label>
                    <input
                      type="text"
                      placeholder="이름을 입력하세요"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">연락처 *</label>
                    <input
                      type="tel"
                      placeholder="010-0000-0000"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">포트폴리오 링크</label>
                    <input
                      type="url"
                      placeholder="https://portfolio.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* 한 줄 소개 */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">한 줄 소개</h2>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Move className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <textarea
                  rows={3}
                  placeholder="나를 한 줄로 표현해보세요 (예: 사용자 경험을 최우선으로 하는 3년차 프론트엔드 개발자입니다.)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-2">
                  💡 첫 인상을 결정하는 중요한 부분입니다. 핵심 역량과 목표를 간결하게 표현해보세요.
                </p>
              </div>

              {/* 경력 */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">경력</h2>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Move className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Plus className="h-4 w-4 mr-1" />
                      추가
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="회사명"
                          className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="직책/부서"
                          className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="근무기간 (예: 2021.03 - 2023.12)"
                          className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <select className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
                          <option>재직중</option>
                          <option>퇴사</option>
                        </select>
                      </div>
                      <button className="ml-4 p-2 hover:bg-gray-100 rounded">
                        <Trash2 className="h-4 w-4 text-red-400" />
                      </button>
                    </div>
                    <textarea
                      rows={4}
                      placeholder="주요 업무와 성과를 구체적으로 작성해주세요&#10;• 담당 업무: &#10;• 주요 성과: &#10;• 사용 기술: "
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* 프로젝트 */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">프로젝트</h2>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Move className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Plus className="h-4 w-4 mr-1" />
                      추가
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="프로젝트명"
                          className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="진행기간"
                          className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="url"
                          placeholder="프로젝트 링크 (선택)"
                          className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 md:col-span-2"
                        />
                      </div>
                      <button className="ml-4 p-2 hover:bg-gray-100 rounded">
                        <Trash2 className="h-4 w-4 text-red-400" />
                      </button>
                    </div>
                    <textarea
                      rows={4}
                      placeholder="프로젝트 설명과 본인의 역할, 성과를 작성해주세요&#10;• 프로젝트 개요: &#10;• 본인 역할: &#10;• 사용 기술: &#10;• 성과/결과: "
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* 스킬 */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">기술 스택</h2>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Move className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">프로그래밍 언어</label>
                    <input
                      type="text"
                      placeholder="JavaScript, Python, Java 등 (쉼표로 구분)"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">프레임워크/라이브러리</label>
                    <input
                      type="text"
                      placeholder="React, Vue.js, Spring 등 (쉼표로 구분)"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">도구/기타</label>
                    <input
                      type="text"
                      placeholder="Git, Docker, AWS 등 (쉼표로 구분)"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* 학력 */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">학력</h2>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Move className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Plus className="h-4 w-4 mr-1" />
                      추가
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="학교명"
                        className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="전공"
                        className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <select className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
                        <option>졸업</option>
                        <option>재학중</option>
                        <option>휴학</option>
                        <option>중퇴</option>
                      </select>
                      <input
                        type="text"
                        placeholder="졸업년도"
                        className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button className="ml-4 p-2 hover:bg-gray-100 rounded">
                      <Trash2 className="h-4 w-4 text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* AI 피드백 섹션 */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold">AI 이력서 분석 결과</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">완성도</h4>
                  <div className="flex items-center">
                    <div className="flex-1 bg-green-200 rounded-full h-2 mr-3">
                      <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                    </div>
                    <span className="text-green-800 font-medium">80%</span>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">매칭도</h4>
                  <div className="flex items-center">
                    <div className="flex-1 bg-blue-200 rounded-full h-2 mr-3">
                      <div className="bg-blue-600 h-2 rounded-full w-3/5"></div>
                    </div>
                    <span className="text-blue-800 font-medium">75%</span>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">경쟁력</h4>
                  <div className="flex items-center">
                    <div className="flex-1 bg-purple-200 rounded-full h-2 mr-3">
                      <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
                    </div>
                    <span className="text-purple-800 font-medium">85%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-green-700">👍 잘 작성된 부분</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 구체적인 성과 지표 포함</li>
                    <li>• 기술 스택이 명확하게 정리됨</li>
                    <li>• 프로젝트 설명이 상세함</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-orange-700">💡 개선 제안</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 한 줄 소개를 더 임팩트 있게 작성</li>
                    <li>• 경력별 핵심 키워드 강조 필요</li>
                    <li>• 포트폴리오 링크 추가 권장</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">💼 추천 포지션</h4>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">프론트엔드 개발자</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">풀스택 개발자</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">웹 개발자</span>
                </div>
                <p className="text-blue-700 text-sm mt-2">
                  현재 이력서로 지원 가능한 포지션들입니다. 더 많은 기회를 원하시면 개선 제안을 참고해보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
