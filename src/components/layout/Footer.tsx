'use client';

import React from 'react';
import Link from 'next/link';
import { styled } from '@/styles/stitches.config';

const FooterContainer = styled('footer', {
  background: 'linear-gradient(135deg, $gray900 0%, $secondary 50%, $gray800 100%)',
  color: '$white',
  marginTop: 'auto',
});

const TopSection = styled('div', {
  background: 'linear-gradient(90deg, $primary 0%, $brand1 50%, $brand5 100%)',
  py: '$8',
  
  '@md': {
    py: '$12',
  },
});

const CTAContainer = styled('div', {
  maxWidth: '1200px',
  mx: 'auto',
  px: '$4',
  textAlign: 'center',
  
  '@md': {
    px: '$6',
  },
});

const CTATitle = styled('h2', {
  fontSize: '$3xl',
  fontWeight: '$black',
  mb: '$4',
  
  '@md': {
    fontSize: '$5xl',
  },
});

const CTASubtitle = styled('p', {
  fontSize: '$xl',
  mb: '$8',
  opacity: 0.9,
  maxWidth: '600px',
  mx: 'auto',
  lineHeight: '$relaxed',
});

const CTAButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  alignItems: 'center',
  
  '@md': {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const CTAButton = styled('a', {
  background: '$white',
  color: '$textPrimary',
  px: '$8',
  py: '$4',
  borderRadius: '$full',
  fontSize: '$lg',
  fontWeight: '$bold',
  textDecoration: 'none',
  transition: '$default',
  boxShadow: '$xl',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '$2xl',
  },
  
  variants: {
    variant: {
      secondary: {
        background: 'transparent',
        color: '$white',
        border: '2px solid $white',
        
        '&:hover': {
          background: '$white',
          color: '$textPrimary',
        },
      },
    },
  },
});

const MainFooter = styled('div', {
  maxWidth: '1200px',
  mx: 'auto',
  px: '$4',
  py: '$12',
  
  '@md': {
    px: '$6',
  },
});

const FooterGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  
  '@lg': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});

const FooterSection = styled('div', {
  '& h3': {
    fontSize: '$xl',
    fontWeight: '$bold',
    mb: '$4',
    color: '$accent',
  },
  
  '& ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    
    '& li': {
      mb: '$2',
      
      '& a': {
        color: '$gray300',
        textDecoration: 'none',
        transition: '$default',
        
        '&:hover': {
          color: '$accent',
          pl: '$2',
        },
      },
    },
  },
});

const CompanyInfo = styled('div', {
  gridColumn: 'span 1',
  
  '@lg': {
    gridColumn: 'span 2',
  },
  
  '& h3': {
    fontSize: '$2xl',
    fontWeight: '$black',
    mb: '$4',
    color: '$white',
  },
  
  '& p': {
    color: '$gray300',
    lineHeight: '$relaxed',
    mb: '$4',
  },
});

const ContactInfo = styled('div', {
  background: 'rgba(255, 255, 255, 0.05)',
  p: '$6',
  borderRadius: '$xl',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  
  '& h4': {
    fontSize: '$lg',
    fontWeight: '$bold',
    mb: '$3',
    color: '$accent',
  },
  
  '& div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    mb: '$2',
    color: '$gray300',
    
    '& span': {
      fontSize: '$lg',
    },
  },
});

const SocialLinks = styled('div', {
  display: 'flex',
  gap: '$4',
  mt: '$6',
});

const SocialLink = styled('a', {
  size: '$12',
  background: 'linear-gradient(45deg, $brand2, $brand5)',
  borderRadius: '$lg',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  fontSize: '$xl',
  textDecoration: 'none',
  transition: '$default',
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '$lg',
  },
});

const BottomBar = styled('div', {
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  py: '$6',
  
  '& > div': {
    maxWidth: '1200px',
    mx: 'auto',
    px: '$4',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    textAlign: 'center',
    
    '@md': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: '$6',
    },
  },
});

const LegalLinks = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$6',
  justifyContent: 'center',
  
  '& a': {
    color: '$gray400',
    fontSize: '$sm',
    textDecoration: 'none',
    
    '&:hover': {
      color: '$accent',
    },
  },
});

const Copyright = styled('p', {
  color: '$gray400',
  fontSize: '$sm',
  margin: 0,
});

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <TopSection>
        <CTAContainer>
          <CTATitle>
            プロジェクトを始めませんか？
          </CTATitle>
          <CTASubtitle>
            LLP Tech Solutionsが提供する革新的な技術ソリューションで、
            あなたのビジネスを次のレベルへ導きます。
          </CTASubtitle>
          <CTAButtons>
            <CTAButton href="/contact">
              📞 無料相談を予約する
            </CTAButton>
            <CTAButton href="/projects" variant="secondary">
              💼 導入事例を見る
            </CTAButton>
          </CTAButtons>
        </CTAContainer>
      </TopSection>

      <MainFooter>
        <FooterGrid>
          <CompanyInfo>
            <h3> AEGIS LLP Co.</h3>
            <p>
              私たちは、最新のデジタル技術とクリエイティブなデザインを融合させ、
              企業のDX推進を支援する専門企業連合です。UI/UXデザイン、
              アニメーション制作、システム開発まで、幅広いソリューションを提供します。
            </p>
            
            <ContactInfo>
              <h4> お問い合わせ</h4>
              <div>
                <span>📧</span>
                info@llp-tech-solutions.jp
              </div>
              <div>
                <span>📞</span>
                03-1234-5678
              </div>
              <div>
                <span></span>
                東京都渋谷区恵比寿1-1-1
              </div>
            </ContactInfo>

            <SocialLinks>
              <SocialLink href="https://twitter.com/llptech" target="_blank">
                
              </SocialLink>
              <SocialLink href="https://linkedin.com/company/llptech" target="_blank">
                
              </SocialLink>
              <SocialLink href="https://github.com/llptech" target="_blank">
                
              </SocialLink>
              <SocialLink href="https://youtube.com/llptech" target="_blank">
                
              </SocialLink>
            </SocialLinks>
          </CompanyInfo>

          <FooterSection>
            <h3> サービス</h3>
            <ul>
              <li><Link href="/services/dx">DX推進支援</Link></li>
              <li><Link href="/services/ui-ux">UI/UXデザイン</Link></li>
              <li><Link href="/services/animation">アニメーション制作</Link></li>
              <li><Link href="/services/consulting">技術コンサルティング</Link></li>
              <li><Link href="/services/development">システム開発</Link></li>
              <li><Link href="/services/maintenance">保守・運用</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3> ソリューション</h3>
            <ul>
              <li><Link href="/solutions/enterprise">エンタープライズ</Link></li>
              <li><Link href="/solutions/startup">スタートアップ</Link></li>
              <li><Link href="/solutions/ecommerce">Eコマース</Link></li>
              <li><Link href="/solutions/healthcare">ヘルスケア</Link></li>
              <li><Link href="/solutions/finance">金融</Link></li>
              <li><Link href="/solutions/education">教育</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3> リソース</h3>
            <ul>
              <li><Link href="/resources/case-studies">導入事例</Link></li>
              <li><Link href="/resources/whitepapers">技術資料</Link></li>
              <li><Link href="/resources/webinars">ウェビナー</Link></li>
              <li><Link href="/blog">技術ブログ</Link></li>
              <li><Link href="/news">ニュース</Link></li>
              <li><Link href="/events">イベント情報</Link></li>
            </ul>
          </FooterSection>
        </FooterGrid>
      </MainFooter>

      <BottomBar>
        <div>
          <LegalLinks>
            <Link href="/privacy">プライバシーポリシー</Link>
            <Link href="/terms">利用規約</Link>
            <Link href="/security">セキュリティ</Link>
            <Link href="/accessibility">アクセシビリティ</Link>
            <Link href="/sitemap">サイトマップ</Link>
          </LegalLinks>
          <Copyright>
            © 2025 LLP Tech Solutions. All rights reserved. | 
            技術革新で未来を創造する
          </Copyright>
        </div>
      </BottomBar>
    </FooterContainer>
  );
};

// Add default export
export default Footer;