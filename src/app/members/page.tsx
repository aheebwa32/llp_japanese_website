'use client';

import React from 'react';
import Link from 'next/link';
import { styled } from '@/styles/stitches.config';

const PageContainer = styled('div', {
  minHeight: '100vh',
});

const HeroSection = styled('section', {
  background: 'linear-gradient(135deg, $brand3 0%, $success 50%, $brand6 100%)',
  color: '$white',
  py: '$20',
  textAlign: 'center',
});

const HeroContainer = styled('div', {
  maxWidth: '1200px',
  mx: 'auto',
  px: '$4',
  
  '@md': {
    px: '$6',
  },
});

const HeroTitle = styled('h1', {
  fontSize: '$5xl',
  fontWeight: '$black',
  mb: '$6',
  
  '@md': {
    fontSize: '$6xl',
  },
});

const HeroSubtitle = styled('p', {
  fontSize: '$xl',
  mb: '$8',
  opacity: 0.9,
  maxWidth: '800px',
  mx: 'auto',
  lineHeight: '$relaxed',
});

const BreadcrumbNav = styled('nav', {
  background: '$surface',
  py: '$4',
  borderBottom: '1px solid $border',
  
  '& ol': {
    maxWidth: '1200px',
    mx: 'auto',
    px: '$4',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    
    '@md': {
      px: '$6',
    },
    
    '& li': {
      display: 'flex',
      alignItems: 'center',
      gap: '$2',
      
      '& a': {
        color: '$primary',
        textDecoration: 'none',
        
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      
      '&:not(:last-child)::after': {
        content: '›',
        color: '$textMuted',
        fontWeight: '$bold',
      },
    },
  },
});

const ContentSection = styled('section', {
  py: '$16',
  
  variants: {
    background: {
      white: {
        background: '$white',
      },
      surface: {
        background: '$surface',
      },
      gradient: {
        background: 'linear-gradient(135deg, $white 0%, $surface 100%)',
      },
    },
  },
});

const Container = styled('div', {
  maxWidth: '1200px',
  mx: 'auto',
  px: '$4',
  
  '@md': {
    px: '$6',
  },
});

const SectionTitle = styled('h2', {
  fontSize: '$4xl',
  fontWeight: '$black',
  textAlign: 'center',
  mb: '$4',
  color: '$textPrimary',
  
  '@md': {
    fontSize: '$5xl',
  },
});

const SectionSubtitle = styled('p', {
  fontSize: '$xl',
  textAlign: 'center',
  color: '$textSecondary',
  mb: '$16',
  maxWidth: '600px',
  mx: 'auto',
  lineHeight: '$relaxed',
});

const MembersGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  
  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const MemberCard = styled('div', {
  background: '$white',
  borderRadius: '$2xl',
  overflow: 'hidden',
  boxShadow: '$lg',
  border: '1px solid $border',
  transition: '$default',
  position: 'relative',
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '$2xl',
  },
  
  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
  },
  
  variants: {
    color: {
      primary: {
        '&::before': {
          background: 'linear-gradient(90deg, $primary, $brand1)',
        },
      },
      secondary: {
        '&::before': {
          background: 'linear-gradient(90deg, $secondary, $brand2)',
        },
      },
      accent: {
        '&::before': {
          background: 'linear-gradient(90deg, $accent, $brand4)',
        },
      },
      success: {
        '&::before': {
          background: 'linear-gradient(90deg, $success, $brand3)',
        },
      },
      info: {
        '&::before': {
          background: 'linear-gradient(90deg, $info, $brand6)',
        },
      },
      purple: {
        '&::before': {
          background: 'linear-gradient(90deg, $brand5, #A55EEA)',
        },
      },
    },
  },
});

const MemberLogo = styled('div', {
  height: '160px',
  background: 'linear-gradient(135deg, var(--bg1), var(--bg2))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$6xl',
  color: '$white',
  fontWeight: '$black',
});

const MemberContent = styled('div', {
  p: '$6',
  
  '& h3': {
    fontSize: '$2xl',
    fontWeight: '$bold',
    mb: '$3',
    color: '$textPrimary',
  },
  
  '& .specialty': {
    background: 'linear-gradient(45deg, var(--spec1), var(--spec2))',
    color: '$white',
    px: '$3',
    py: '$1',
    borderRadius: '$full',
    fontSize: '$sm',
    fontWeight: '$bold',
    display: 'inline-block',
    mb: '$4',
  },
  
  '& p': {
    color: '$textSecondary',
    lineHeight: '$relaxed',
    mb: '$4',
  },
  
  '& .features': {
    '& ul': {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      mb: '$4',
      
      '& li': {
        display: 'flex',
        alignItems: 'center',
        gap: '$2',
        mb: '$2',
        fontSize: '$sm',
        color: '$textSecondary',
        
        '&::before': {
          content: '✓',
          color: '$success',
          fontWeight: '$bold',
        },
      },
    },
  },
  
  '& .stats': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$4',
    mt: '$4',
    
    '& div': {
      textAlign: 'center',
      p: '$3',
      background: '$surface',
      borderRadius: '$lg',
      
      '& .number': {
        fontSize: '$xl',
        fontWeight: '$bold',
        color: '$primary',
        display: 'block',
      },
      
      '& .label': {
        fontSize: '$xs',
        color: '$textMuted',
        textTransform: 'uppercase',
        fontWeight: '$medium',
      },
    },
  },
  
  '& .action': {
    textAlign: 'center',
    mt: '$6',
    
    '& a': {
      color: '$primary',
      fontWeight: '$semibold',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '$2',
      
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});

const PartnersGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$6',
  
  '@md': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  
  '@lg': {
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
});

const PartnerCard = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  p: '$6',
  textAlign: 'center',
  boxShadow: '$md',
  border: '1px solid $border',
  transition: '$default',
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '$lg',
  },
  
  '& .logo': {
    fontSize: '$3xl',
    mb: '$3',
    display: 'block',
  },
  
  '& .name': {
    fontSize: '$sm',
    fontWeight: '$medium',
    color: '$textPrimary',
  },
});

const JoinCTA = styled('div', {
  background: 'linear-gradient(135deg, $primary 0%, $brand1 50%, $brand5 100%)',
  borderRadius: '$2xl',
  p: '$12',
  textAlign: 'center',
  color: '$white',
  
  '& h3': {
    fontSize: '$3xl',
    fontWeight: '$black',
    mb: '$4',
    
    '@md': {
      fontSize: '$4xl',
    },
  },
  
  '& p': {
    fontSize: '$lg',
    mb: '$8',
    opacity: 0.9,
    maxWidth: '600px',
    mx: 'auto',
    lineHeight: '$relaxed',
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
});

export default function MembersPage() {
  const members = [
    {
      id: 'technovation',
      name: 'テクノベーション株式会社',
      specialty: 'DX推進・システム開発',
      logo: 'T',
      description: 'エンタープライズ向けDXソリューションの専門企業。大手企業のデジタル変革を200社以上支援。',
      features: [
        'クラウドマイグレーション',
        'レガシーシステム刷新',
        'AI・機械学習導入',
        'データ分析基盤構築',
      ],
      // stats: {
      //   projects: '300+',
      //   clients: '200+',
      // },
      color: 'primary' as const,
      bgColors: { bg1: '#FF6B35', bg2: '#FF4757' },
      specColors: { spec1: '#FF6B35', spec2: '#FF4757' },
    },
    {
      id: 'creative-ui',
      name: 'クリエイティブUI株式会社',
      specialty: 'UI/UXデザイン',
      logo: 'C',
      description: 'ユーザー体験を重視したデザイン設計。モバイルアプリからWebサービスまで幅広く対応。',
      features: [
        'ユーザビリティテスト',
        'プロトタイピング',
        'デザインシステム構築',
        'アクセシビリティ対応',
      ],
      // stats: {
      //   projects: '500+',
      //   awards: '12',
      // },
      color: 'secondary' as const,
      bgColors: { bg1: '#004E89', bg2: '#3742FA' },
      specColors: { spec1: '#004E89', spec2: '#3742FA' },
    },
    {
      id: 'motion-magic',
      name: 'モーションマジック株式会社',
      specialty: 'アニメーション・映像制作',
      logo: 'M',
      description: '最新の3Dアニメーション技術とモーショングラフィックスで、企業のブランド価値を向上。',
      features: [
        '3Dアニメーション',
        'モーショングラフィックス',
        'VR/AR コンテンツ',
        'プロモーション動画',
      ],
      // stats: {
      //   projects: '400+',
      //   views: '10M+',
      // },
      color: 'accent' as const,
      bgColors: { bg1: '#FFD23F', bg2: '#FFA502' },
      specColors: { spec1: '#FFD23F', spec2: '#FFA502' },
    },
    {
      id: 'ai-solutions',
      name: 'AIソリューションズ株式会社',
      specialty: 'AI・機械学習',
      logo: 'A',
      description: '最先端のAI技術を活用したインテリジェントなシステム開発。業務自動化から予測分析まで。',
      features: [
        '自然言語処理',
        'コンピュータービジョン',
        '予測分析モデル',
        'チャットボット開発',
      ],
      // stats: {
      //   models: '50+',
      //   accuracy: '98%',
      // },
      color: 'success' as const,
      bgColors: { bg1: '#06D6A0', bg2: '#2ED573' },
      specColors: { spec1: '#06D6A0', spec2: '#2ED573' },
    },
    {
      id: 'cloud-masters',
      name: 'クラウドマスターズ株式会社',
      specialty: 'クラウドインフラ・DevOps',
      logo: 'C',
      description: 'クラウドネイティブなシステム構築とDevOpsの導入で、企業のIT運用を最適化。',
      features: [
        'AWS/Azure/GCP',
        'Kubernetes',
        'CI/CD パイプライン',
        'セキュリティ対策',
      ],
      // stats: {
      //   uptime: '99.9%',
      //   savings: '40%',
      // },
      color: 'info' as const,
      bgColors: { bg1: '#457B9D', bg2: '#26D0CE' },
      specColors: { spec1: '#457B9D', spec2: '#26D0CE' },
    },
    {
      id: 'data-insights',
      name: 'データインサイト株式会社',
      specialty: 'データ分析・BI',
      logo: 'D',
      description: 'ビッグデータの解析とビジネスインテリジェンスで、データドリブンな意思決定を支援。',
      features: [
        'データウェアハウス',
        'リアルタイム分析',
        'ダッシュボード構築',
        'データマイニング',
      ],
      // stats: {
      //   data: '100TB+',
      //   insights: '1000+',
      // },
      color: 'purple' as const,
      bgColors: { bg1: '#A55EEA', bg2: '#8B5CF6' },
      specColors: { spec1: '#A55EEA', spec2: '#8B5CF6' },
    },
  ];

  const partners = [
    { name: 'Microsoft', logo: '🏢' },
    { name: 'Google', logo: '🔍' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Adobe', logo: '🎨' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'Oracle', logo: '🗄️' },
   
  ];

  return (
    <PageContainer>
      <BreadcrumbNav>
        <ol>
          <li><Link href="/">ホーム</Link></li>
          <li>メンバー企業</li>
        </ol>
      </BreadcrumbNav>

      <HeroSection>
        <HeroContainer>
          <HeroTitle>🏢 メンバー企業紹介</HeroTitle>
          <HeroSubtitle>
            LLP Tech Solutionsを構成する各専門分野のリーディングカンパニー。
            それぞれが持つ独自の技術と経験を結集し、
            お客様に最高品質のソリューションを提供します。
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <ContentSection background="white">
        <Container>
          <SectionTitle>コアメンバー企業</SectionTitle>
          <SectionSubtitle>
            各分野の専門性を持つ6社が連携し、
            包括的な技術ソリューションを提供します。
          </SectionSubtitle>
          <MembersGrid>
            {members.map((member) => (
              <MemberCard key={member.id} color={member.color}>
                <MemberLogo 
                  style={{
                    '--bg1': member.bgColors.bg1,
                    '--bg2': member.bgColors.bg2,
                  } as React.CSSProperties}
                >
                  {member.logo}
                </MemberLogo>
                <MemberContent>
                  <h3>{member.name}</h3>
                  <div 
                    className="specialty"
                    style={{
                      '--spec1': member.specColors.spec1,
                      '--spec2': member.specColors.spec2,
                    } as React.CSSProperties}
                  >
                    {member.specialty}
                  </div>
                  <p>{member.description}</p>
                  <div className="features">
                    <ul>
                      {member.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="stats">
                    {Object.entries(member.stats).map(([key, value]) => (
                      <div key={key}>
                        <span className="number">{value}</span>
                        <span className="label">{key}</span>
                      </div>
                    ))}
                  </div> */}
                  <div className="action">
                    <Link href={`/members/${member.id}`}>
                      詳細を見る →
                    </Link>
                  </div>
                </MemberContent>
              </MemberCard>
            ))}
          </MembersGrid>
        </Container>
      </ContentSection>

      <ContentSection background="surface">
        <Container>
          <SectionTitle> 技術パートナー</SectionTitle>
          <SectionSubtitle>
            世界最高水準の技術プラットフォームとの
            戦略的パートナーシップ
          </SectionSubtitle>
          <PartnersGrid>
            {partners.map((partner, index) => (
              <PartnerCard key={index}>
                <span className="logo">{partner.logo}</span>
                <div className="name">{partner.name}</div>
              </PartnerCard>
            ))}
          </PartnersGrid>
        </Container>
      </ContentSection>

      <ContentSection background="gradient">
        <Container>
          <JoinCTA>
            <h3> パートナー企業募集中</h3>
            <p>
              LLP Tech Solutionsでは、共に技術革新を推進する
              パートナー企業を募集しています。
              一緒に未来のビジネスを創造しませんか？
            </p>
            <CTAButton href="/contact">
               パートナーシップについて相談
            </CTAButton>
          </JoinCTA>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}