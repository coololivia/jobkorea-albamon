import { Calendar, Users, Play, MessageCircle, Heart, Eye, Clock, Star, Award, Bookmark } from 'lucide-react'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-purple-600">커뮤니티 & 콘텐츠 허브</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-purple-600 font-medium">커뮤니티</a>
              <a href="#" className="text-gray-900 hover:text-purple-600">웨비나</a>
              <a href="#" className="text-gray-900 hover:text-purple-600">공모전</a>
              <a href="#" className="text-gray-900 hover:text-purple-600">캘린더</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <div className="lg:col-span-1 space-y-6">
            {/* 이벤트 캘린더 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                <h3 className="font-semibold">이번 주 이벤트</h3>
              </div>
              <div className="space-y-3">
                {[
                  { date: "08/14", day: "수", event: "IT 개발자 웨비나", time: "19:00", type: "webinar" },
                  { date: "08/15", day: "목", event: "디자인 공모전 마감", time: "23:59", type: "contest" },
                  { date: "08/16", day: "금", event: "스타트업 네트워킹", time: "18:00", type: "networking" },
                  { date: "08/17", day: "토", event: "취업 특강", time: "14:00", type: "seminar" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-center mr-3">
                      <p className="text-sm font-medium text-purple-700">{item.date}</p>
                      <p className="text-xs text-purple-600">{item.day}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.event}</p>
                      <p className="text-xs text-gray-600">{item.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      item.type === 'webinar' ? 'bg-blue-500' :
                      item.type === 'contest' ? 'bg-red-500' :
                      item.type === 'networking' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-purple-600 text-sm hover:bg-purple-50 py-2 rounded">
                전체 캘린더 보기
              </button>
            </div>

            {/* 인기 오픈채팅 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-5 w-5 mr-2 text-purple-600" />
                <h3 className="font-semibold">인기 오픈채팅</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "💻 개발자 모임", members: "1,234명", active: true },
                  { name: "🎨 디자이너 톡방", members: "892명", active: true },
                  { name: "📈 취업 준비생", members: "2,156명", active: false },
                  { name: "🏢 스타트업 관심", members: "567명", active: true }
                ].map((chat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 cursor-pointer">
                    <div>
                      <p className="text-sm font-medium">{chat.name}</p>
                      <p className="text-xs text-gray-600">{chat.members}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${chat.active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 필터 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold mb-4">필터</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">카테고리</h4>
                  <div className="space-y-2">
                    {['전체', '개발', '디자인', '마케팅', '창업'].map((cat) => (
                      <label key={cat} className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked={cat === '전체'} />
                        <span className="text-sm">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">콘텐츠 유형</h4>
                  <div className="space-y-2">
                    {['웨비나', '공모전', '세미나', '네트워킹'].map((type) => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3 space-y-6">
            {/* 탭 네비게이션 */}
            <div className="bg-white rounded-lg shadow-sm p-2">
              <div className="flex">
                {['전체', '웨비나', '공모전', '커뮤니티', '세미나'].map((tab, index) => (
                  <button 
                    key={tab}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium ${
                      index === 0 ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-purple-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* 추천 웨비나 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Play className="h-5 w-5 mr-2 text-blue-600" />
                이번 주 추천 웨비나
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI 시대, 개발자로 살아남기",
                    speaker: "김테크 CTO",
                    company: "네이버",
                    date: "08/14 (수) 19:00",
                    viewers: "2,341명 신청",
                    thumbnail: "🤖",
                    category: "개발",
                    level: "중급"
                  },
                  {
                    title: "스타트업 취업 전략",
                    speaker: "박창업 대표", 
                    company: "토스",
                    date: "08/16 (금) 18:00",
                    viewers: "1,892명 신청",
                    thumbnail: "🚀",
                    category: "커리어",
                    level: "초급"
                  }
                ].map((webinar, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 flex items-center justify-center text-6xl">
                      {webinar.thumbnail}
                    </div>
                    <div className="p-4">
                      <div className="flex gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{webinar.category}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">{webinar.level}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{webinar.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{webinar.speaker} • {webinar.company}</p>
                      <p className="text-sm text-gray-600 mb-3">{webinar.date}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-purple-600">{webinar.viewers}</span>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700">
                          신청하기
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 진행중인 공모전 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-red-600" />
                진행중인 공모전
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "2024 혁신 아이디어 경진대회",
                    organizer: "삼성전자",
                    prize: "총 상금 5,000만원",
                    deadline: "2024.08.31",
                    participants: "1,234팀 참가",
                    category: "아이디어",
                    difficulty: "전체"
                  },
                  {
                    title: "대학생 앱 개발 챌린지",
                    organizer: "카카오",
                    prize: "상금 3,000만원 + 인턴 기회",
                    deadline: "2024.09.15", 
                    participants: "892팀 참가",
                    category: "개발",
                    difficulty: "대학생"
                  },
                  {
                    title: "소셜 임팩트 창업 공모전",
                    organizer: "사회혁신기업",
                    prize: "창업 지원금 1억원",
                    deadline: "2024.09.30",
                    participants: "567팀 참가", 
                    category: "창업",
                    difficulty: "전체"
                  }
                ].map((contest, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex gap-2 mb-2">
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">{contest.category}</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">{contest.difficulty}</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{contest.title}</h3>
                        <p className="text-gray-600 mb-1">주최: {contest.organizer}</p>
                        <p className="text-purple-600 font-medium mb-2">{contest.prize}</p>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Bookmark className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>마감: {contest.deadline}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{contest.participants}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-50">
                        자세히 보기
                      </button>
                      <button className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700">
                        참가 신청
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 커뮤니티 인기글 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                커뮤니티 인기글
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "신입 개발자 면접 후기 (네이버, 카카오, 토스)",
                    author: "주니어개발자",
                    category: "면접후기",
                    views: 12487,
                    likes: 892,
                    comments: 156,
                    time: "2시간 전",
                    hot: true
                  },
                  {
                    title: "스타트업 vs 대기업, 어디가 좋을까요?",
                    author: "고민중인사람",
                    category: "커리어고민", 
                    views: 8934,
                    likes: 567,
                    comments: 234,
                    time: "5시간 전",
                    hot: true
                  },
                  {
                    title: "프론트엔드 포트폴리오 리뷰 부탁드려요!",
                    author: "신입희망",
                    category: "포트폴리오",
                    views: 6742,
                    likes: 423,
                    comments: 89,
                    time: "1일 전",
                    hot: false
                  },
                  {
                    title: "디자이너 취업 준비 로드맵 공유",
                    author: "UX디자이너김",
                    category: "취업준비",
                    views: 5621,
                    likes: 378,
                    comments: 67,
                    time: "2일 전",
                    hot: false
                  }
                ].map((post, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">{post.category}</span>
                          {post.hot && <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">🔥 HOT</span>}
                        </div>
                        <h3 className="font-medium mb-1">{post.title}</h3>
                        <p className="text-sm text-gray-600">by {post.author} • {post.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          {post.likes}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  더 많은 글 보기
                </button>
              </div>
            </div>

            {/* 실시간 알림 */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Star className="h-5 w-5 mr-2 text-purple-600" />
                실시간 소식
              </h3>
              <div className="space-y-3">
                {[
                  "🎉 'AI 개발자 웨비나' 1000명 돌파! 추가 신청 받습니다",
                  "📢 새로운 디자인 공모전이 시작되었습니다 (상금 2000만원)",
                  "👥 개발자 네트워킹 이벤트 신청자 500명 달성!",
                  "📚 취업 특강 자료가 업데이트되었습니다"
                ].map((news, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                    <p className="text-sm">{news}</p>
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
