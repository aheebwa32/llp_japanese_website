'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@/styles/stitches.config';
import { notFound } from 'next/navigation';

const PageContainer = styled('div', {
  minHeight: '100vh',
});

const HeroSection = styled('section', {
  color: '$white',
  py: '$20',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
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

const CompanyHeader = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  mb: '$16',
  
  '@lg': {
    gridTemplateColumns: '1fr 2fr',
  },
});

const CompanyLogo = styled('div', {
  borderRadius: '$2xl',
  overflow: 'hidden',
  height: '300px',
  position: 'relative',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const CompanyInfo = styled('div', {
  '& h2': {
    fontSize: '$3xl',
    fontWeight: '$black',
    mb: '$4',
    color: '$textPrimary',
    
    '@md': {
      fontSize: '$4xl',
    },
  },
  
  '& .specialty': {
    display: 'inline-block',
    px: '$4',
    py: '$2',
    borderRadius: '$full',
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$white',
    mb: '$6',
  },
  
  '& .description': {
    fontSize: '$lg',
    lineHeight: '$relaxed',
    color: '$textSecondary',
    mb: '$6',
  },
  
  '& .founded': {
    fontSize: '$md',
    color: '$textMuted',
    mb: '$4',
  },
});

const StatsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$4',
  
  '@md': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});

const StatCard = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  p: '$6',
  textAlign: 'center',
  boxShadow: '$md',
  border: '1px solid $border',
  
  '& .number': {
    fontSize: '$2xl',
    fontWeight: '$black',
    color: '$primary',
    display: 'block',
    mb: '$2',
  },
  
  '& .label': {
    fontSize: '$sm',
    color: '$textMuted',
    textTransform: 'uppercase',
    fontWeight: '$medium',
  },
});

const ServicesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  
  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const ServiceCard = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  p: '$6',
  boxShadow: '$md',
  border: '1px solid $border',
  transition: '$default',
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '$lg',
  },
  
  '& .icon': {
    fontSize: '$3xl',
    mb: '$4',
    display: 'block',
  },
  
  '& h3': {
    fontSize: '$xl',
    fontWeight: '$bold',
    mb: '$3',
    color: '$textPrimary',
  },
  
  '& p': {
    color: '$textSecondary',
    lineHeight: '$relaxed',
  },
});

const ProjectsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

const ProjectCard = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  overflow: 'hidden',
  boxShadow: '$md',
  border: '1px solid $border',
  
  '& .image': {
    height: '200px',
    background: 'linear-gradient(45deg, var(--color1), var(--color2))',
    position: 'relative',
    
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  
  '& .content': {
    p: '$6',
    
    '& h3': {
      fontSize: '$lg',
      fontWeight: '$bold',
      mb: '$2',
      color: '$textPrimary',
    },
    
    '& p': {
      color: '$textSecondary',
      fontSize: '$sm',
      lineHeight: '$relaxed',
    },
  },
});

const ContactCTA = styled('div', {
  borderRadius: '$2xl',
  p: '$12',
  textAlign: 'center',
  color: '$white',
  
  '& h3': {
    fontSize: '$3xl',
    fontWeight: '$black',
    mb: '$4',
  },
  
  '& p': {
    fontSize: '$lg',
    mb: '$8',
    opacity: 0.9,
    maxWidth: '600px',
    mx: 'auto',
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

// Company data
const companies = {
  'technovation': {
    id: 'technovation',
    name: 'テクノベーション株式会社',
    specialty: 'DX推進・システム開発',
    logo: '/tech.jpeg',
    description: 'エンタープライズ向けDXソリューションの専門企業として、大手企業のデジタル変革を200社以上支援してきました。最新のクラウド技術とAIを活用し、従来のビジネスプロセスを革新的に改善します。',
    founded: '2015年設立',
    heroGradient: 'linear-gradient(135deg, #FF6B35 0%, #FF4757 50%, #FF3742 100%)',
    specColors: { spec1: '#FF6B35', spec2: '#FF4757' },
    stats: [
      { number: '200+', label: '導入企業' },
      { number: '15年', label: '平均経験年数' },
      { number: '98%', label: '顧客満足度' },
      { number: '24/7', label: 'サポート体制' },
    ],
    services: [
      {
        icon: '☁️',
        title: 'クラウドマイグレーション',
        description: 'オンプレミスからクラウドへの安全な移行を支援。AWS、Azure、GCPに対応。',
      },
      {
        icon: '🔄',
        title: 'レガシーシステム刷新',
        description: '古いシステムを最新技術でリニューアル。ビジネス継続性を保ちながら近代化。',
      },
      {
        icon: '🤖',
        title: 'AI・機械学習導入',
        description: 'ビジネスプロセスにAIを組み込み、効率化と自動化を実現。',
      },
      {
        icon: '📊',
        title: 'データ分析基盤構築',
        description: 'データドリブンな意思決定を支援する分析プラットフォーム構築。',
      },
      {
        icon: '🔐',
        title: 'セキュリティ強化',
        description: '最新のサイバーセキュリティ対策でシステムを保護。',
      },
      {
        icon: '📱',
        title: 'モバイルアプリ開発',
        description: 'iOS/Androidアプリの企画から運用まで一貫サポート。',
      },
    ],
    projects: [
      {
        title: '大手製造業DX推進プロジェクト',
        description: '生産管理システムのクラウド化により、生産効率を30%向上',
        image: '/project1.jpg',
        colors: { color1: '#FF6B35', color2: '#FF4757' },
      },
      {
        title: '金融機関AI導入プロジェクト',
        description: '不正検知システムにAIを導入し、検知精度を95%以上に向上',
        image: '/project2.jpg',
        colors: { color1: '#FF6B35', color2: '#FF4757' },
      },
    ],
  },
  
  'creative-ui': {
    id: 'creative-ui',
    name: 'クリエイティブUI株式会社',
    specialty: 'UI/UXデザイン',
    logo: '/cccdcn.jpeg',
    description: 'ユーザー体験を最優先に考えたデザイン設計で、モバイルアプリからWebサービスまで幅広く対応。デザインシステム構築からプロトタイピングまで、一貫したデザインプロセスを提供します。',
    founded: '2017年設立',
    heroGradient: 'linear-gradient(135deg, #004E89 0%, #3742FA 50%, #5352ed 100%)',
    specColors: { spec1: '#004E89', spec2: '#3742FA' },
    stats: [
      { number: '300+', label: 'デザイン案件' },
      { number: '95%', label: 'ユーザビリティ向上' },
      { number: '50+', label: 'アプリリリース' },
      { number: '10年', label: 'デザイン経験' },
    ],
    services: [
      {
        icon: '🎨',
        title: 'UI/UXデザイン',
        description: 'ユーザー中心設計による直感的で美しいインターフェース設計。',
      },
      {
        icon: '📱',
        title: 'モバイルアプリデザイン',
        description: 'iOS/Android向けの最新デザインガイドラインに準拠したアプリ設計。',
      },
      {
        icon: '🔍',
        title: 'ユーザビリティテスト',
        description: '実際のユーザーによるテストでデザインの有効性を検証。',
      },
      {
        icon: '⚡',
        title: 'プロトタイピング',
        description: '高品質なインタラクティブプロトタイプで設計を可視化。',
      },
      {
        icon: '🎯',
        title: 'デザインシステム構築',
        description: '統一されたデザイン言語でブランド一貫性を実現。',
      },
      {
        icon: '♿',
        title: 'アクセシビリティ対応',
        description: 'すべてのユーザーが使いやすいインクルーシブデザイン。',
      },
    ],
    projects: [
      {
        title: 'フィンテックアプリUI/UX改善',
        description: 'ユーザビリティテストに基づく設計改善で、利用率40%向上',
        image: '/FINTECH.jpeg',
        colors: { color1: '#004E89', color2: '#3742FA' },
      },
      {
        title: 'ECサイトリニューアル',
        description: 'デザインシステム導入により、開発効率50%向上',
        image: '/design2.jpg',
        colors: { color1: '#004E89', color2: '#3742FA' },
      },
    ],
  },

  'motion-magic': {
    id: 'motion-magic',
    name: 'モーションマジック株式会社',
    specialty: 'アニメーション・映像制作',
    logo: '/ico.jpeg',
    description: '最新の3Dアニメーション技術とモーショングラフィックスで、企業のブランド価値を向上させます。VR/ARコンテンツからプロモーション動画まで、幅広い映像制作サービスを提供。',
    founded: '2016年設立',
    heroGradient: 'linear-gradient(135deg, #FFD23F 0%, #FFA502 50%, #ff9f43 100%)',
    specColors: { spec1: '#FFD23F', spec2: '#FFA502' },
    stats: [
      { number: '500+', label: '制作実績' },
      { number: '100+', label: 'VR/ARコンテンツ' },
      { number: '20+', label: '受賞歴' },
      { number: '12年', label: '平均経験年数' },
    ],
    services: [
      {
        icon: '🎬',
        title: '3Dアニメーション',
        description: '高品質な3DCGアニメーションで商品やサービスを魅力的に表現。',
      },
      {
        icon: '✨',
        title: 'モーショングラフィックス',
        description: 'ブランドメッセージを効果的に伝える動的なグラフィック制作。',
      },
      {
        icon: '🥽',
        title: 'VR/ARコンテンツ',
        description: '没入感あふれるバーチャル体験コンテンツの企画・制作。',
      },
      {
        icon: '📺',
        title: 'プロモーション動画',
        description: 'SNS向けからTVCMまで、目的に応じた映像コンテンツ制作。',
      },
      {
        icon: '🎮',
        title: 'インタラクティブ映像',
        description: 'ユーザー参加型の双方向映像コンテンツ制作。',
      },
      {
        icon: '🏢',
        title: '企業VP制作',
        description: '企業の価値と魅力を伝える高品質なビデオプロダクション。',
      },
    ],
    projects: [
      {
        title: '自動車メーカーVR展示システム',
        description: '最新車種の没入型バーチャル体験で来場者満足度95%達成',
        image: '/motion1.jpg',
        colors: { color1: '#FFD23F', color2: '#FFA502' },
      },
      {
        title: 'スタートアップ企業VP制作',
        description: '3分間の企業紹介動画で投資家からの関心度300%向上',
        image: '/motion2.jpg',
        colors: { color1: '#FFD23F', color2: '#FFA502' },
      },
    ],
  },

  'ai-solutions': {
    id: 'ai-solutions',
    name: 'AIソリューションズ株式会社',
    specialty: 'AI・機械学習',
    logo: '/ai.jpeg',
    description: '最先端のAI技術を活用したインテリジェントなシステム開発を専門とします。自然言語処理からコンピュータービジョンまで、業務自動化から予測分析まで幅広いAIソリューションを提供。',
    founded: '2018年設立',
    heroGradient: 'linear-gradient(135deg, #06D6A0 0%, #2ED573 50%, #26de81 100%)',
    specColors: { spec1: '#06D6A0', spec2: '#2ED573' },
    stats: [
      { number: '150+', label: 'AI導入実績' },
      { number: '85%', label: '業務効率化' },
      { number: '30+', label: 'AI研究者' },
      { number: '5件', label: '特許取得' },
    ],
    services: [
      {
        icon: '🧠',
        title: '自然言語処理',
        description: 'テキスト解析、感情分析、自動翻訳などの言語AI技術。',
      },
      {
        icon: '👁️',
        title: 'コンピュータービジョン',
        description: '画像認識、物体検出、顔認証などの視覚AI技術。',
      },
      {
        icon: '📈',
        title: '予測分析モデル',
        description: '機械学習による需要予測、リスク分析、トレンド予測。',
      },
      {
        icon: '🤖',
        title: 'チャットボット開発',
        description: '顧客対応を自動化する高度な対話型AIシステム。',
      },
      {
        icon: '🔍',
        title: '異常検知システム',
        description: 'AIによる品質管理、不正検知、セキュリティ監視。',
      },
      {
        icon: '⚙️',
        title: 'RPA・自動化',
        description: 'AI技術を活用した業務プロセス自動化ソリューション。',
      },
    ],
    projects: [
      {
        title: '医療AI診断支援システム',
        description: '画像診断AIで医師の診断精度を15%向上、診断時間を50%短縮',
        image: '/ai.jpeg',
        colors: { color1: '#06D6A0', color2: '#2ED573' },
      },
      {
        title: 'ECサイト推薦エンジン',
        description: 'AI推薦システムで購買率30%向上、顧客満足度95%達成',
        image: '/ai.jpeg',
        colors: { color1: '#06D6A0', color2: '#2ED573' },
      },
    ],
  },

  'cloud-masters': {
    id: 'cloud-masters',
    name: 'クラウドマスターズ株式会社',
    specialty: 'クラウドインフラ・DevOps',
    logo: '/cloud.jpeg',
    description: 'クラウドネイティブなシステム構築とDevOpsの導入で、企業のIT運用を最適化します。AWS、Azure、GCPの豊富な経験と、最新のコンテナ技術で安全かつ効率的なインフラを構築。',
    founded: '2014年設立',
    heroGradient: 'linear-gradient(135deg, #457B9D 0%, #26D0CE 50%, #2bcbba 100%)',
    specColors: { spec1: '#457B9D', spec2: '#26D0CE' },
    stats: [
      { number: '300+', label: 'クラウド導入' },
      { number: '99.9%', label: '稼働率' },
      { number: '80%', label: 'コスト削減' },
      { number: '24/7', label: '監視体制' },
    ],
    services: [
      {
        icon: '☁️',
        title: 'マルチクラウド構築',
        description: 'AWS、Azure、GCPを活用した最適なクラウド環境設計。',
      },
      {
        icon: '🐳',
        title: 'Kubernetes運用',
        description: 'コンテナオーケストレーションによるスケーラブルなシステム。',
      },
      {
        icon: '🔄',
        title: 'CI/CDパイプライン',
        description: '継続的インテグレーション・デプロイメントの自動化。',
      },
      {
        icon: '🛡️',
        title: 'セキュリティ対策',
        description: 'クラウドセキュリティのベストプラクティス実装。',
      },
      {
        icon: '📊',
        title: 'インフラ監視',
        description: '24/7監視による安定したシステム運用保証。',
      },
      {
        icon: '💰',
        title: 'コスト最適化',
        description: 'クラウドリソースの効率的な利用によるコスト削減。',
      },
    ],
    projects: [
      {
        title: 'グローバル企業インフラ構築',
        description: 'マルチリージョン構成で99.99%の高可用性を実現',
        image: '/cloud1.jpg',
        colors: { color1: '#457B9D', color2: '#26D0CE' },
      },
      {
        title: 'スタートアップDevOps導入',
        description: 'CI/CDパイプライン導入でデプロイ時間90%短縮',
        image: '/cloud2.jpg',
        colors: { color1: '#457B9D', color2: '#26D0CE' },
      },
    ],
  },

  'data-insights': {
    id: 'data-insights',
    name: 'データインサイト株式会社',
    specialty: 'データ分析・BI',
    logo: '/datainsight.jpeg',
    description: 'ビッグデータの解析とビジネスインテリジェンスで、データドリブンな意思決定を支援します。データウェアハウス構築からリアルタイム分析まで、企業の持つデータを価値ある洞察に変換。',
    founded: '2016年設立',
    heroGradient: 'linear-gradient(135deg, #A55EEA 0%, #8B5CF6 50%, #7c3aed 100%)',
    specColors: { spec1: '#A55EEA', spec2: '#8B5CF6' },
    stats: [
      { number: '250+', label: 'データ分析案件' },
      { number: '10TB+', label: '処理データ量' },
      { number: '90%', label: '予測精度' },
      { number: '15年', label: 'データ分析歴' },
    ],
    services: [
      {
        icon: '🏗️',
        title: 'データウェアハウス',
        description: '大規模データの統合・管理基盤構築とメンテナンス。',
      },
      {
        icon: '⚡',
        title: 'リアルタイム分析',
        description: 'ストリーミングデータの即座な分析と可視化。',
      },
      {
        icon: '📊',
        title: 'ダッシュボード構築',
        description: 'ビジネス指標を直感的に把握できる可視化システム。',
      },
      {
        icon: '⛏️',
        title: 'データマイニング',
        description: '膨大なデータから隠れたパターンや法則を発見。',
      },
      {
        icon: '🎯',
        title: '予測モデリング',
        description: '統計学・機械学習による高精度な予測分析。',
      },
      {
        icon: '📈',
        title: 'BIコンサルティング',
        description: 'データ活用戦略の立案から実行まで包括的支援。',
      },
    ],
    projects: [
      {
        title: '小売チェーン売上予測システム',
        description: '需要予測モデルで在庫回転率40%向上、廃棄ロス50%削減',
        image: '/exhibit.jpg',
        colors: { color1: '#A55EEA', color2: '#8B5CF6' },
      },
      {
        title: '製造業品質管理BI',
        description: 'リアルタイム品質監視で不良品率75%削減',
        image: '/cloud.jpeg',
        colors: { color1: '#A55EEA', color2: '#8B5CF6' },
      },
    ],
  },
};

interface PageProps {
  params: Promise<{ id: string }>; // Fixed to Promise type
}

export default function CompanyDetailPage({ params }: PageProps) {
  const { id } = React.use(params); // Use React.use() to unwrap the Promise
  const company = companies[id as keyof typeof companies];
  
  if (!company) {
    notFound();
  }

  return (
    <PageContainer>
      <BreadcrumbNav>
        <ol>
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/members">メンバー企業</Link></li>
          <li>{company.name}</li>
        </ol>
      </BreadcrumbNav>

      <HeroSection style={{ background: company.heroGradient }}>
        <HeroContainer>
          <HeroTitle>{company.name}</HeroTitle>
          <HeroSubtitle>
            {company.description}
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <ContentSection background="white">
        <Container>
          <CompanyHeader>
            <CompanyLogo>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </CompanyLogo>
            <CompanyInfo>
              <h2>{company.name}</h2>
              <div 
                className="specialty"
                style={{
                  background: `linear-gradient(45deg, ${company.specColors.spec1}, ${company.specColors.spec2})`,
                }}
              >
                {company.specialty}
              </div>
              <div className="founded">{company.founded}</div>
              <div className="description">{company.description}</div>
            </CompanyInfo>
          </CompanyHeader>

          <StatsGrid>
            {company.stats.map((stat, index) => (
              <StatCard key={index}>
                <span className="number">{stat.number}</span>
                <span className="label">{stat.label}</span>
              </StatCard>
            ))}
          </StatsGrid>
        </Container>
      </ContentSection>

      <ContentSection background="surface">
        <Container>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '1rem', color: 'var(--colors-textPrimary)' }}>
            🛠️ 提供サービス
          </h2>
          <p style={{ fontSize: '1.25rem', textAlign: 'center', color: 'var(--colors-textSecondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            専門性を活かした幅広いサービスで、お客様のビジネス課題を解決します
          </p>
          <ServicesGrid>
            {company.services.map((service, index) => (
              <ServiceCard key={index}>
                <span className="icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ContentSection>

      <ContentSection background="white">
        <Container>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '1rem', color: 'var(--colors-textPrimary)' }}>
            📋 主要プロジェクト実績
          </h2>
          <p style={{ fontSize: '1.25rem', textAlign: 'center', color: 'var(--colors-textSecondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            これまでに手がけた代表的なプロジェクトをご紹介します
          </p>
          <ProjectsGrid>
            {company.projects.map((project, index) => (
              <ProjectCard key={index}>
                <div 
                  className="image"
                  style={{
                    '--color1': project.colors.color1,
                    '--color2': project.colors.color2,
                  } as React.CSSProperties}
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
                <div className="content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Container>
      </ContentSection>

      <ContentSection background="gradient">
        <Container>
          <ContactCTA style={{ background: company.heroGradient }}>
            <h3>🤝 {company.name}へのお問い合わせ</h3>
            <p>
              {company.specialty}に関するご相談・お見積もりは、
              お気軽にお問い合わせください。
              専門チームが最適なソリューションをご提案いたします。
            </p>
            <CTAButton href="/contact">
              📞 無料相談を予約する
            </CTAButton>
          </ContactCTA>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}