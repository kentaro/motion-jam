import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// App Routerでのメタデータ定義
export const metadata = {
  title: "MotionJam",
  description: "動きで音楽を作るインタラクティブアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* 
          Next.jsが <meta charSet="utf-8" /> や <meta name="viewport" ... /> などを自動で追加します。
          追加で必要な <meta> タグや <link> タグがあればここに記述できます。
          Tone.js は next.config.mjs の transpilePackages 設定に基づき、
          npmからインストールされたものがバンドルされるため、ここでScriptタグを記述する必要はありません。
        */}
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
