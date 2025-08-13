import type { Metadata } from "next";
import "./globals.css";
import BottomNav from '@/components/BottomNav'

export const metadata: Metadata = {
  title: "잡코리아·알바몬 통합 플랫폼",
  description: "전공별 맞춤 알바부터 정규직까지, 당신의 커리어 여정을 함께합니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <main className="pb-16 md:pb-0">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
