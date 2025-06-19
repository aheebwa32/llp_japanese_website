import type { Metadata } from 'next';
import { getCssText } from '@/styles/stitches.config';
import { globalStyles } from '@/styles/globalStyles';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Apply global styles
globalStyles();

export const metadata: Metadata = {
  title: 'LLP Tech Solutions | 技術革新パートナーシップ',
  description: 'LLP Tech Solutionsは、デジタル変革（DX）、UI/UXデザイン、アニメーション技術を専門とする企業連合です。革新的な技術ソリューションで企業の成長を支援します。',
  keywords: 'LLP, デジタル変革, DX, UI/UX, アニメーション, 技術ソリューション, 企業連合',
  openGraph: {
    title: 'LLP Tech Solutions | 技術革新パートナーシップ',
    description: 'LLP Tech Solutionsは、デジタル変革（DX）、UI/UXデザイン、アニメーション技術を専門とする企業連合です。',
    url: 'https://llp-tech-solutions.jp',
    siteName: 'LLP Tech Solutions',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLP Tech Solutions | 技術革新パートナーシップ',
    description: 'LLP Tech Solutionsは、デジタル変革（DX）、UI/UXデザイン、アニメーション技術を専門とする企業連合です。',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}