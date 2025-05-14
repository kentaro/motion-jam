'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <title>MotionJam</title>
        <meta name="description" content="動きで音楽を作るインタラクティブアプリ" />
      </Head>
      <head>
        {/* Tone.jsをCDNから事前ロード - 複数のソースから試行 */}
        <Script
          src="https://unpkg.com/tone/build/Tone.js"
          strategy="beforeInteractive"
          onError={(e) => {
            console.error('Tone.js preload from unpkg failed, trying jsDelivr next');
          }}
        />
        {/* バックアップCDN */}
        <Script
          src="https://cdn.jsdelivr.net/npm/tone/build/Tone.js"
          strategy="beforeInteractive"
          onError={(e) => {
            console.error('Tone.js preload from jsDelivr failed, trying cdnjs next');
          }}
        />
        {/* バックアップCDN 2 */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"
          strategy="beforeInteractive"
          onError={(e) => {
            console.error('All Tone.js CDN preloads failed');
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
