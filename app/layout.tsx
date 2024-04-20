/*
 * @Author: Mr. Chao
 * @Date: 2024-04-17 15:05:02
 * @LastEditors: Mr. Chao
 * @LastEditTime: 2024-04-20 17:20:12
 * @Description: 
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 这里还添加了 Tailwind 的 antialiased 类，该类可使字体更加平滑。使用这个类并不是必需的，但它会增添一些美感。 */}
      <body className={`${inter.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
