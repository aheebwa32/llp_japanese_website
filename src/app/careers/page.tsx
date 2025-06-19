'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { styled } from '@/styles/stitches.config';

const PageContainer = styled('div', {
  minHeight: '100vh',
});

const HeroSection = styled('section', {
  background: 'linear-gradient(135deg, $brand3 0%, $success 50%, $primary 100%)',
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

const ValuesGrid = styled('div', {
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

const ValueCard = styled('div', {
  background: '$white',
  borderRadius: '$2xl',
  p: '$8',
  textAlign: 'center',
  boxShadow: '$lg',
  border: '1px solid $border',
  transition: '$default',
  position: 'relative',
  overflow: 'hidden',
  
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
    },
  },
  
  '& .icon': {
    fontSize: '$5xl',
    mb: '$4',
    display: 'block',
  },
  
  '& h3': {
    fontSize: '$2xl',
    fontWeight: '$bold',
    mb: '$4',
    color: '$textPrimary',
  },
  
  '& p': {
    color: '$textSecondary',
    lineHeight: '$relaxed',
  },
});

const JobsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',
});

const JobCard = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  p: '$8',
  boxShadow: '$md',
  border: '1px solid $border',
  transition: '$default',
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '$lg',
  },
  
  '& .header': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    mb: '$6',
    
    '@md': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  },
  
  '& .job-info': {
    flex: 1,
    
    '& h3': {
      fontSize: '$2xl',
      fontWeight: '$bold',
      mb: '$2',
      color: '$textPrimary',
    },
    
    '& .department': {
      background: 'linear-gradient(45deg, var(--dept1), var(--dept2))',
      color: '$white',
      px: '$3',
      py: '$1',
      borderRadius: '$full',
      fontSize: '$sm',
      fontWeight: '$bold',
      display: 'inline-block',
      mb: '$3',
    },
    
    '& .location': {
      display: 'flex',
      alignItems: 'center',
      gap: '$2',
      color: '$textMuted',
      fontSize: '$sm',
      mb: '$2',
    },
    
    '& .type': {
      display: 'flex',
      alignItems: 'center',
      gap: '$2',
      color: '$textMuted',
      fontSize: '$sm',
    },
  },
  
  '& .salary': {
    background: '$surface',
    borderRadius: '$lg',
    p: '$4',
    textAlign: 'center',
    minWidth: '200px',
    
    '& .label': {
      fontSize: '$xs',
      color: '$textMuted',
      textTransform: 'uppercase',
      fontWeight: '$bold',
      mb: '$1',
    },
    
    '& .amount': {
      fontSize: '$xl',
      fontWeight: '$bold',
      color: '$primary',
    },
  },
  
  '& .description': {
    color: '$textSecondary',
    lineHeight: '$relaxed',
    mb: '$6',
  },
  
  '& .requirements': {
    mb: '$6',
    
    '& h4': {
      fontSize: '$lg',
      fontWeight: '$semibold',
      mb: '$3',
      color: '$textPrimary',
    },
    
    '& ul': {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      
      '& li': {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '$2',
        mb: '$2',
        fontSize: '$sm',
        color: '$textSecondary',
        
        '&::before': {
          content: '✓',
          color: '$success',
          fontWeight: '$bold',
          marginTop: '2px',
        },
      },
    },
  },
  
  '& .benefits': {
    background: '$surface',
    borderRadius: '$lg',
    p: '$4',
    mb: '$6',
    
    '& h4': {
      fontSize: '$lg',
      fontWeight: '$semibold',
      mb: '$3',
      color: '$textPrimary',
    },
    
    '& .benefits-grid': {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '$2',
      
      '@md': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      
      '& span': {
        fontSize: '$sm',
        color: '$textSecondary',
        display: 'flex',
        alignItems: 'center',
        gap: '$1',
      },
    },
  },
  
  '& .actions': {
    display: 'flex',
    gap: '$3',
    
    '& a': {
      px: '$6',
      py: '$3',
      borderRadius: '$full',
      fontSize: '$sm',
      fontWeight: '$bold',
      textDecoration: 'none',
      transition: '$default',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '$2',
      
      '&.primary': {
        background: 'linear-gradient(45deg, $primary, $brand1)',
        color: '$white',
        
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '$md',
        },
      },
      
      '&.secondary': {
        background: 'transparent',
        color: '$primary',
        border: '2px solid $primary',
        
        '&:hover': {
          background: '$primary',
          color: '$white',
        },
      },
    },
  },
});

const BenefitsSection = styled('div', {
  background: 'linear-gradient(135deg, $primary 0%, $brand1 50%, $brand5 100%)',
  borderRadius: '$2xl',
  p: '$12',
  color: '$white',
  textAlign: 'center',
  
  '& h3': {
    fontSize: '$3xl',
    fontWeight: '$black',
    mb: '$8',
  },
  
  '& .benefits-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$6',
    
    '@md': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    
    '& div': {
      '& .icon': {
        fontSize: '$3xl',
        mb: '$3',
        display: 'block',
      },
      
      '& .title': {
        fontSize: '$lg',
        fontWeight: '$bold',
        mb: '$2',
      },
      
      '& .desc': {
        fontSize: '$sm',
        opacity: 0.9,
        lineHeight: '$relaxed',
      },
    },
  },
});

const ApplicationForm = styled('form', {
  background: '$white',
  borderRadius: '$2xl',
  p: '$8',
  boxShadow: '$xl',
  border: '1px solid $border',
  
  '& h3': {
    fontSize: '$2xl',
    fontWeight: '$bold',
    mb: '$6',
    color: '$textPrimary',
    textAlign: 'center',
  },
  
  '& .form-grid': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '$6',
    
    '@md': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

const FormGroup = styled('div', {
  variants: {
    span: {
      full: {
        '@md': {
          gridColumn: 'span 2',
        },
      },
    },
  },
  
  '& label': {
    display: 'block',
    fontSize: '$sm',
    fontWeight: '$medium',
    color: '$textPrimary',
    mb: '$2',
    
    '& .required': {
      color: '$danger',
      ml: '$1',
    },
  },
  
  '& input, & textarea, & select': {
    width: '100%',
    px: '$4',
    py: '$3',
    border: '2px solid $border',
    borderRadius: '$lg',
    fontSize: '$base',
    transition: '$default',
    background: '$white',
    
    '&:focus': {
      outline: 'none',
      borderColor: '$primary',
      boxShadow: '0 0 0 3px rgba(255, 107, 53, 0.1)',
    },
  },
  
  '& textarea': {
    resize: 'vertical',
    minHeight: '120px',
  },
  
  '& .file-upload': {
    position: 'relative',
    
    '& input[type="file"]': {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      cursor: 'pointer',
    },
    
    '& .upload-area': {
      border: '2px dashed $border',
      borderRadius: '$lg',
      p: '$6',
      textAlign: 'center',
      transition: '$default',
      cursor: 'pointer',
      
      '&:hover': {
        borderColor: '$primary',
        background: '$surface',
      },
      
      '& .icon': {
        fontSize: '$3xl',
        color: '$textMuted',
        mb: '$2',
      },
      
      '& .text': {
        color: '$textSecondary',
        fontSize: '$sm',
      },
    },
  },
});

const SubmitButton = styled('button', {
  width: '100%',
  background: 'linear-gradient(45deg, $primary, $brand1)',
  color: '$white',
  py: '$4',
  px: '$8',
  borderRadius: '$full',
  fontSize: '$lg',
  fontWeight: '$bold',
  border: 'none',
  cursor: 'pointer',
  transition: '$default',
  mt: '$6',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '$xl',
  },
  
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    
    '&:hover': {
      transform: 'none',
    },
  },
});

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const companyValues = [
    {
      icon: '🚀',
      title: 'イノベーション',
      description: '常に新しい技術と手法に挑戦し、業界をリードする革新的なソリューションを創造します。',
      color: 'primary' as const,
    },
    {
      icon: '🤝',
      title: 'チームワーク',
      description: '多様な背景を持つメンバーが協力し、互いの強みを活かしてより大きな成果を実現します。',
      color: 'secondary' as const,
    },
    {
      icon: '📈',
      title: '成長志向',
      description: '個人の成長と会社の発展を両立し、継続的な学習と改善を重視した環境を提供します。',
      color: 'accent' as const,
    },
    {
      icon: '🌟',
      title: '品質へのこだわり',
      description: '妥協のない品質管理と細部への注意により、お客様に最高の価値を提供し続けます。',
      color: 'success' as const,
    },
  ];

  const jobs = [
    {
      id: 'senior-frontend-engineer',
      title: 'シニアフロントエンドエンジニア',
      department: 'エンジニアリング',
      location: '東京（リモート可）',
      type: '正社員',
      salary: '700万円〜1,200万円',
      description: 'React/Next.jsを使用したWebアプリケーション開発のリードを担当。UI/UXチームと連携し、ユーザー体験の向上を実現します。',
      requirements: [
        'React/Next.js での3年以上の開発経験',
        'TypeScript での開発経験',
        'モダンなCSS手法（CSS-in-JS、Tailwind CSS等）の知識',
        'Git/GitHub を使用したチーム開発経験',
        'パフォーマンス最適化の経験',
      ],
      benefits: [
        '💰 年収700万円〜1,200万円',
        '🏠 リモートワーク可',
        '📚 技術書籍購入支援',
        '🎓 外部研修参加支援',
        '💻 最新機材支給',
        '🌴 有給取得奨励',
      ],
      colors: { dept1: '#FF6B35', dept2: '#FF4757' },
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UXデザイナー',
      department: 'デザイン',
      location: '東京（リモート可）',
      type: '正社員',
      salary: '600万円〜1,000万円',
      description: 'エンタープライズ向けWebアプリケーションのUI/UXデザインを担当。ユーザビリティテストからプロトタイピングまで幅広く関わります。',
      requirements: [
        'UI/UXデザインの3年以上の実務経験',
        'Figma、Adobe XD等のデザインツールの習熟',
        'ユーザビリティテストの実施経験',
        'HTML/CSSの基礎知識',
        'デザインシステム構築経験',
      ],
      benefits: [
        '💰 年収600万円〜1,000万円',
        '🏠 リモートワーク可',
        '🎨 デザインツール費用支給',
        '🎪 デザインカンファレンス参加支援',
        '💻 Mac Pro + 外部ディスプレイ支給',
        '☕ カフェワーク手当',
      ],
      colors: { dept1: '#004E89', dept2: '#3742FA' },
    },
    {
      id: 'backend-engineer',
      title: 'バックエンドエンジニア',
      department: 'エンジニアリング',
      location: '東京（ハイブリッド）',
      type: '正社員',
      salary: '650万円〜1,100万円',
      description: 'Node.js/Python を使用したAPIサーバーの開発・運用を担当。スケーラブルなアーキテクチャの設計と実装を行います。',
      requirements: [
        'Node.js または Python での3年以上の開発経験',
        'RESTful API の設計・実装経験',
        'データベース設計の経験（MySQL、PostgreSQL等）',
        'AWS/GCP等のクラウドサービス使用経験',
        'Docker/Kubernetes の使用経験',
      ],
      benefits: [
        '💰 年収650万円〜1,100万円',
        '🏠 ハイブリッドワーク',
        '☁️ AWS認定取得支援',
        '📖 技術書籍・Udemy購入支援',
        '💻 ハイスペックPC支給',
        '🎯 成果ボーナス制度',
      ],
      colors: { dept1: '#06D6A0', dept2: '#2ED573' },
    },
    {
      id: 'data-scientist',
      title: 'データサイエンティスト',
      department: 'AI・データ分析',
      location: '東京',
      type: '正社員',
      salary: '800万円〜1,400万円',
      description: '機械学習モデルの開発とビッグデータ解析を担当。ビジネス課題を技術的に解決するソリューションを提案・実装します。',
      requirements: [
        'Python/R での機械学習実装経験（3年以上）',
        'TensorFlow/PyTorch等のフレームワーク使用経験',
        '統計学・数学の基礎知識',
        'SQL によるデータ抽出・加工経験',
        'ビジネス課題の理解と解決提案能力',
      ],
      benefits: [
        '💰 年収800万円〜1,400万円',
        '🧠 最新GPU環境利用可',
        '📊 Kaggle参加支援',
        '🎓 学会発表支援',
        '💻 ハイエンドワークステーション支給',
        '📈 論文執筆支援',
      ],
      colors: { dept1: '#A55EEA', dept2: '#8B5CF6' },
    },
  ];

  const companyBenefits = [
    {
      icon: '💰',
      title: '競争力のある報酬',
      desc: '業界水準を上回る給与と成果連動ボーナス',
    },
    {
      icon: '🏠',
      title: '柔軟な働き方',
      desc: 'リモートワーク・フレックスタイム制度',
    },
    {
      icon: '📚',
      title: '学習支援',
      desc: '技術書籍・研修・カンファレンス参加費用支給',
    },
    {
      icon: '🌟',
      title: '最新技術環境',
      desc: 'ハイスペック機材と最新ツールの利用環境',
    },
  ];

  return (
    <PageContainer>
      <BreadcrumbNav>
        <ol>
          <li><Link href="/">ホーム</Link></li>
          <li>採用情報</li>
        </ol>
      </BreadcrumbNav>

      <HeroSection>
        <HeroContainer>
          <HeroTitle>🚀 採用情報</HeroTitle>
          <HeroSubtitle>
            LLP Tech Solutionsで一緒に未来の技術を創造しませんか？
            革新的なプロジェクトに挑戦し、個人の成長と会社の発展を
            共に実現できる仲間を募集しています。
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <ContentSection background="white">
        <Container>
          <SectionTitle>💡 私たちの価値観</SectionTitle>
          <SectionSubtitle>
            LLP Tech Solutionsが大切にしている
            4つの価値観をご紹介します。
          </SectionSubtitle>
          <ValuesGrid>
            {companyValues.map((value, index) => (
              <ValueCard key={index} color={value.color}>
                <span className="icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </ContentSection>

      <ContentSection background="surface">
        <Container>
          <BenefitsSection>
            <h3>🎁 充実した福利厚生</h3>
            <div className="benefits-grid">
              {companyBenefits.map((benefit, index) => (
                <div key={index}>
                  <span className="icon">{benefit.icon}</span>
                  <div className="title">{benefit.title}</div>
                  <div className="desc">{benefit.desc}</div>
                </div>
              ))}
            </div>
          </BenefitsSection>
        </Container>
      </ContentSection>

      <ContentSection background="white">
        <Container>
          <SectionTitle>💼 募集中のポジション</SectionTitle>
          <SectionSubtitle>
            現在募集中の職種一覧です。あなたのスキルと
            経験を活かせるポジションを見つけてください。
          </SectionSubtitle>
          <JobsGrid>
            {jobs.map((job) => (
              <JobCard key={job.id}>
                <div className="header">
                  <div className="job-info">
                    <h3>{job.title}</h3>
                    <div 
                      className="department"
                      style={{
                        '--dept1': job.colors.dept1,
                        '--dept2': job.colors.dept2,
                      } as React.CSSProperties}
                    >
                      {job.department}
                    </div>
                    <div className="location">📍 {job.location}</div>
                    <div className="type">👔 {job.type}</div>
                  </div>
                  <div className="salary">
                    <div className="label">想定年収</div>
                    <div className="amount">{job.salary}</div>
                  </div>
                </div>
                
                <div className="description">{job.description}</div>
                
                <div className="requirements">
                  <h4>必要なスキル・経験</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="benefits">
                  <h4>待遇・福利厚生</h4>
                  <div className="benefits-grid">
                    {job.benefits.map((benefit, index) => (
                      <span key={index}>{benefit}</span>
                    ))}
                  </div>
                </div>
                
                <div className="actions">
                  <a href="#application-form" className="primary">
                    📝 応募する
                  </a>
                  <a href={`/careers/${job.id}`} className="secondary">
                    📄 詳細を見る
                  </a>
                </div>
              </JobCard>
            ))}
          </JobsGrid>
        </Container>
      </ContentSection>

      <ContentSection background="gradient" id="application-form">
        <Container>
          <SectionTitle>📝 応募フォーム</SectionTitle>
          <SectionSubtitle>
            ご応募は下記フォームからお願いします。
            書類選考後、面接についてご連絡いたします。
          </SectionSubtitle>
          
          <ApplicationForm>
            <h3>🚀 一緒に未来を創造しましょう</h3>
            <div className="form-grid">
              <FormGroup>
                <label htmlFor="name">
                  お名前<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="山田 太郎"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">
                  メールアドレス<span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="phone">電話番号</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="090-1234-5678"
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="position">
                  希望職種<span className="required">*</span>
                </label>
                <select id="position" name="position" required>
                  <option value="">選択してください</option>
                  {jobs.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </FormGroup>
              
              <FormGroup span="full">
                <label htmlFor="experience">
                  経験・スキル<span className="required">*</span>
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  placeholder="これまでの経験、技術スキル、実績などを詳しくお書きください..."
                  required
                />
              </FormGroup>
              
              <FormGroup span="full">
                <label htmlFor="motivation">志望動機</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  placeholder="当社への志望動機、将来のキャリアビジョンなどをお書きください..."
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="resume">
                  履歴書<span className="required">*</span>
                </label>
                <div className="file-upload">
                  <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
                  <div className="upload-area">
                    <div className="icon">📄</div>
                    <div className="text">履歴書をアップロード（PDF、Word形式）</div>
                  </div>
                </div>
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="portfolio">ポートフォリオ</label>
                <div className="file-upload">
                  <input type="file" id="portfolio" name="portfolio" accept=".pdf,.zip" />
                  <div className="upload-area">
                    <div className="icon">🎨</div>
                    <div className="text">ポートフォリオをアップロード（任意）</div>
                  </div>
                </div>
              </FormGroup>
            </div>
            
            <SubmitButton type="submit">
               応募を送信する
            </SubmitButton>
          </ApplicationForm>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}