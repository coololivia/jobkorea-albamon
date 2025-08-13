import { ArrowLeft, Play, CheckCircle, Clock, Users, Star, Download, Share } from 'lucide-react'

export default function AlbamonGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button className="mr-4 p-2 hover:bg-gray-100 rounded">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-2xl font-bold text-orange-600">첫근무 가이드</h1>
            <span className="ml-3 text-sm text-gray-500">처음부터 차근차근 알려드려요</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 - 가이드 목록 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="font-semibold mb-4">�� 가이드 목록</h3>
              <div className="space-y-2">
                {[
                  { id: 1, title: "알바 지원 전 준비", duration: "5분", completed: true },
                  { id: 2, title: "면접 준비하기", duration: "8분", completed: true },
                  { id: 3, title: "첫출근 체크리스트", duration: "6분", completed: false, current: true },
                  { id: 4, title: "근무 매너 & 예절", duration: "7분", completed: false },
                  { id: 5, title: "급여 계산법", duration: "4분", completed: false },
                  { id: 6, title: "문제 상황 대처법", duration: "9분", completed: false },
                  { id: 7, title: "경력 발전 방향", duration: "10분", completed: false }
                ].map((guide) => (
                  <div 
                    key={guide.id} 
                    className={`flex items-center justify-between p-3 rounded cursor-pointer ${
                      guide.current ? 'bg-orange-50 border-2 border-orange-200' : 
                      guide.completed ? 'bg-green-50' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      {guide.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      ) : guide.current ? (
                        <Play className="h-4 w-4 text-orange-600 mr-2" />
                      ) : (
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      )}
                      <div>
                        <p className={`text-sm font-medium ${guide.current ? 'text-orange-700' : ''}`}>
                          {guide.title}
                        </p>
                        <p className="text-xs text-gray-500">{guide.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-700 mb-2">🎯 진행률</p>
                <div className="w-full bg-orange-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full w-2/7"></div>
                </div>
                <p className="text-xs text-orange-600 mt-1">2/7 완료</p>
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3 space-y-6">
            {/* 현재 가이드 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">👔 첫출근 체크리스트</h2>
                  <p className="text-gray-600">첫 출근날 당황하지 않도록 미리 준비해보세요!</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <Download className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <Share className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* 동영상 플레이어 영역 */}
              <div className="bg-gray-900 rounded-lg mb-6 relative overflow-hidden" style={{aspectRatio: '16/9'}}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-75">첫출근 체크리스트</p>
                  <p className="text-xs opacity-60">6분 23초</p>
                </div>
              </div>

              {/* 체크리스트 */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">📋 출근 전 준비사항</h3>
                  <div className="space-y-3">
                    {[
                      { task: "근무복/유니폼 준비 확인", detail: "사전에 받은 유니폼이나 드레스코드 확인", checked: false },
                      { task: "교통편 및 소요시간 파악", detail: "최소 30분 여유를 두고 출발 계획 세우기", checked: false },
                      { task: "필요 서류 준비", detail: "신분증, 통장사본, 기타 요청 서류", checked: false },
                      { task: "담당자 연락처 저장", detail: "늦거나 문제 발생 시 즉시 연락할 수 있도록", checked: false }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <input 
                          type="checkbox" 
                          className="mt-1 mr-3 w-5 h-5 text-orange-600"
                          defaultChecked={item.checked}
                        />
                        <div className="flex-1">
                          <p className="font-medium">{item.task}</p>
                          <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">🕐 첫 출근날 타임라인</h3>
                  <div className="space-y-4">
                    {[
                      { time: "출근 30분 전", action: "최종 준비 및 출발", icon: "🏃‍♂️" },
                      { time: "출근 10분 전", action: "도착 후 담당자에게 인사", icon: "👋" },
                      { time: "출근 시간", action: "오리엔테이션 및 업무 소개", icon: "📖" },
                      { time: "첫 2시간", action: "동료들과 인사 및 업무 익히기", icon: "🤝" },
                      { time: "점심시간", action: "휴게 공간 및 식사 안내", icon: "🍽️" },
                      { time: "오후", action: "실제 업무 참여 및 관찰", icon: "👀" },
                      { time: "퇴근 전", action: "하루 정리 및 내일 일정 확인", icon: "✅" }
                    ].map((schedule, index) => (
                      <div key={index} className="flex items-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl mr-4">{schedule.icon}</div>
                        <div className="flex-1">
                          <p className="font-medium text-orange-700">{schedule.time}</p>
                          <p className="text-sm text-orange-600">{schedule.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">💡 첫날 꿀팁</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { tip: "적극적으로 질문하기", desc: "모르는 것은 바로바로 물어보세요" },
                      { tip: "메모하는 습관", desc: "중요한 내용은 꼭 기록해두세요" },
                      { tip: "밝은 인사", desc: "먼저 인사하고 웃는 얼굴 유지하기" },
                      { tip: "시간 여유 갖기", desc: "첫날은 여유를 가지고 천천히" }
                    ].map((tip, index) => (
                      <div key={index} className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                        <p className="font-medium text-yellow-800">{tip.tip}</p>
                        <p className="text-sm text-yellow-700 mt-1">{tip.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  이전: 면접 준비하기
                </button>
                <button className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                  다음: 근무 매너 & 예절
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </button>
              </div>
            </div>

            {/* 관련 커뮤니티 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-orange-600" />
                관련 커뮤니티 글
              </h3>
              <div className="space-y-4">
                {[
                  { title: "첫 알바 출근, 이것만 알면 OK!", author: "알바왕님", likes: 127, comments: 23 },
                  { title: "편의점 첫날 실수담 ㅠㅠ", author: "newbie22", likes: 89, comments: 31 },
                  { title: "카페 알바 첫날 꿀팁 모음", author: "바리스타김", likes: 156, comments: 45 }
                ].map((post, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <h4 className="font-medium mb-2">{post.title}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>by {post.author}</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          {post.likes}
                        </span>
                        <span>댓글 {post.comments}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
