'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { styled } from '@/styles/stitches.config';
import Image from 'next/image';

const PageContainer = styled('div', {
  minHeight: '100vh',
});

const HeroSection = styled('section', {
  background: 'linear-gradient(135deg, $brand2 0%, $primary 50%, $brand1 100%)',
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

const FilterSection = styled('div', {
  mb: '$12',
  textAlign: 'center',
});

const FilterButtons = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  justifyContent: 'center',
  mb: '$8',
});

const FilterButton = styled('button', {
  px: '$6',
  py: '$3',
  borderRadius: '$full',
  fontSize: '$sm',
  fontWeight: '$medium',
  border: '2px solid $border',
  background: '$white',
  color: '$textSecondary',
  cursor: 'pointer',
  transition: '$default',
  
  '&:hover': {
    borderColor: '$primary',
    color: '$primary',
  },
  
  variants: {
    active: {
      true: {
        borderColor: '$primary',
        background: '$primary',
        color: '$white',
        
        '&:hover': {
          background: '$secondary',
          borderColor: '$secondary',
        },
      },
    },
  },
});

const ProjectsGrid = styled('div', {
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

const ProjectCard = styled('article', {
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
    category: {
      dx: {
        '&::before': {
          background: 'linear-gradient(90deg, $primary, $brand1)',
        },
      },
      design: {
        '&::before': {
          background: 'linear-gradient(90deg, $secondary, $brand2)',
        },
      },
      animation: {
        '&::before': {
          background: 'linear-gradient(90deg, $accent, $brand4)',
        },
      },
      ai: {
        '&::before': {
          background: 'linear-gradient(90deg, $success, $brand3)',
        },
      },
      cloud: {
        '&::before': {
          background: 'linear-gradient(90deg, $info, $brand6)',
        },
      },
      ecommerce: {
        '&::before': {
          background: 'linear-gradient(90deg, $brand5, #A55EEA)',
        },
      },
    },
  },
});

const ProjectImage = styled('div', {
  height: '200px',
  background: 'linear-gradient(135deg, var(--color1), var(--color2))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$6xl',
  color: '$white',
  position: 'relative',
  
  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.2)',
    opacity: 0,
    transition: '$default',
  },
  
  '&:hover::after': {
    opacity: 1,
  },
});

const ProjectContent = styled('div', {
  p: '$6',
  
  '& .category-tag': {
    background: 'linear-gradient(45deg, var(--tag1), var(--tag2))',
    color: '$white',
    px: '$3',
    py: '$1',
    borderRadius: '$full',
    fontSize: '$xs',
    fontWeight: '$bold',
    display: 'inline-block',
    mb: '$3',
    textTransform: 'uppercase',
  },
  
  '& h3': {
    fontSize: '$xl',
    fontWeight: '$bold',
    mb: '$3',
    color: '$textPrimary',
    lineHeight: '$snug',
  },
  
  '& .client': {
    fontSize: '$sm',
    color: '$textMuted',
    mb: '$3',
    fontWeight: '$medium',
  },
  
  '& .description': {
    color: '$textSecondary',
    lineHeight: '$relaxed',
    mb: '$4',
    fontSize: '$sm',
  },
  
  '& .tech-stack': {
    mb: '$4',
    
    '& .label': {
      fontSize: '$xs',
      fontWeight: '$bold',
      color: '$textMuted',
      textTransform: 'uppercase',
      mb: '$2',
      display: 'block',
    },
    
    '& .tags': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '$2',
      
      '& span': {
        background: '$surface',
        color: '$textSecondary',
        px: '$2',
        py: '$1',
        borderRadius: '$base',
        fontSize: '$xs',
      },
    },
  },
  
  '& .results': {
    background: '$surface',
    borderRadius: '$lg',
    p: '$4',
    mb: '$4',
    
    '& .label': {
      fontSize: '$xs',
      fontWeight: '$bold',
      color: '$textMuted',
      textTransform: 'uppercase',
      mb: '$2',
      display: 'block',
    },
    
    '& .metrics': {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '$3',
      
      '& div': {
        textAlign: 'center',
        
        '& .number': {
          fontSize: '$lg',
          fontWeight: '$bold',
          color: '$primary',
          display: 'block',
        },
        
        '& .metric': {
          fontSize: '$xs',
          color: '$textMuted',
        },
      },
    },
  },
  
  '& .action': {
    textAlign: 'center',
    
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

const StatsSection = styled('div', {
  background: 'linear-gradient(135deg, $primary 0%, $brand1 50%, $brand5 100%)',
  borderRadius: '$2xl',
  p: '$12',
  color: '$white',
  textAlign: 'center',
  mb: '$16',
  
  '& h3': {
    fontSize: '$3xl',
    fontWeight: '$black',
    mb: '$8',
  },
  
  '& .stats-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$8',
    
    '@md': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    
    '& div': {
      '& .number': {
        fontSize: '$4xl',
        fontWeight: '$black',
        mb: '$2',
        display: 'block',
      },
      
      '& .label': {
        fontSize: '$sm',
        opacity: 0.9,
      },
    },
  },
});

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: '全て' },
    { id: 'dx', label: 'DX推進' },
    { id: 'design', label: 'UI/UX' },
    { id: 'animation', label: 'アニメーション' },
    { id: 'ai', label: 'AI・機械学習' },
    { id: 'cloud', label: 'クラウド' },
    { id: 'ecommerce', label: 'Eコマース' },
  ];

  const projects = [
    {
      id: 'retail-dx-transformation',
      title: '大手小売業のDX推進プロジェクト',
      client: '株式会社リテールマート（仮名）',
      category: 'dx',
      description: '全国500店舗の小売チェーンにおける包括的なデジタル変革。在庫管理システムの刷新から顧客体験の向上まで。',
      techStack: ['React', 'Node.js', 'AWS', 'MongoDB', 'Redis'],
      image: '/DIGITAL.jpeg',
      colors: { color1: '#FF6B35', color2: '#FF4757' },
      tagColors: { tag1: '#FF6B35', tag2: '#FF4757' },
    },
    {
      id: 'fintech-mobile-app',
      title: 'フィンテック企業モバイルアプリUI/UX',
      client: 'フィンテックソリューションズ（仮名）',
      category: 'design',
      description: '次世代決済アプリのユーザーインターフェース設計。直感的な操作性とセキュリティを両立。',
      techStack: ['Figma', 'React Native', 'TypeScript', 'Firebase'],
      
      image: '/FINTECH.jpeg',
      colors: { color1: '#004E89', color2: '#3742FA' },
      tagColors: { tag1: '#004E89', tag2: '#3742FA' },
    },
    {
      id: 'automotive-vr-experience',
      title: '自動車メーカーVR展示システム',
      client: 'オートモーティブジャパン（仮名）',
      category: 'animation',
      description: '最新車種の没入型バーチャル体験システム。リアルタイム3Dレンダリングによる高品質な展示。',
      techStack: ['Unity', 'C#', 'Oculus SDK', '3ds Max', 'Blender'],
      
      image: '/exhibit.jpeg',
      colors: { color1: '#FFD23F', color2: '#FFA502' },
      tagColors: { tag1: '#FFD23F', tag2: '#FFA502' },
    },
    {
      id: 'healthcare-ai-diagnosis',
      title: '医療AI診断支援システム',
      client: 'メディカルケアグループ（仮名）',
      category: 'ai',
      description: '医療画像解析による診断支援AI。深層学習技術を活用した高精度な診断補助システム。',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Docker', 'Kubernetes'],
      
      image: '/AI.jpeg',
      colors: { color1: '#06D6A0', color2: '#2ED573' },
      tagColors: { tag1: '#06D6A0', tag2: '#2ED573' },
    },
    {
      id: 'media-cloud-migration',
      title: 'メディア企業クラウドマイグレーション',
      client: 'グローバルメディア株式会社（仮名）',
      category: 'cloud',
      description: 'オンプレミスからクラウドへの大規模移行プロジェクト。コスト削減と可用性向上を実現。',
      techStack: ['AWS', 'Terraform', 'Docker', 'Jenkins', 'Prometheus'],
      
      image:'/cloud2.jpeg',
      colors: { color1: '#457B9D', color2: '#26D0CE' },
      tagColors: { tag1: '#457B9D', tag2: '#26D0CE' },
    },
    {
      id: 'fashion-ecommerce-platform',
      title: 'ファッションECプラットフォーム構築',
      client: 'ファッションブランドコレクション（仮名）',
      category: 'ecommerce',
      description: '次世代ファッションECサイトの構築。AR試着機能とパーソナライゼーション機能を搭載。',
      techStack: ['Next.js', 'Shopify Plus', 'GraphQL', 'Stripe', 'AR.js'],
      
      image:'/fashion.jpeg',
      colors: { color1: '#A55EEA', color2: '#8B5CF6' },
      tagColors: { tag1: '#A55EEA', tag2: '#8B5CF6' },
    },
    
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PageContainer>
      <BreadcrumbNav>
        <ol>
          <li><Link href="/">ホーム</Link></li>
          <li>プロジェクト実績</li>
        </ol>
      </BreadcrumbNav>

      <HeroSection>
        <HeroContainer>
          <HeroTitle> プロジェクト実績</HeroTitle>
          <HeroSubtitle>
            LLP Tech Solutionsが手がけた革新的なプロジェクトの数々。
            問題解決から価値創造まで、各分野での成功事例をご紹介します。
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <ContentSection background="white">
        <Container>
          <StatsSection>
            <h3> プロジェクト実績ハイライト</h3>
            <div className="stats-grid">
              <div>
                <span className="number">1,200+</span>
                <span className="label">完了プロジェクト</span>
              </div>
              <div>
                <span className="number">500+</span>
                <span className="label">導入企業</span>
              </div>
              <div>
                <span className="number">98.5%</span>
                <span className="label">成功率</span>
              </div>
              <div>
                <span className="number">25+</span>
                <span className="label">受賞歴</span>
              </div>
            </div>
          </StatsSection>

          <FilterSection>
            <FilterButtons>
              {filters.map((filter) => (
                <FilterButton
                  key={filter.id}
                  active={activeFilter === filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </FilterButton>
              ))}
            </FilterButtons>
          </FilterSection>

          <ProjectsGrid>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} category={project.category as any}>
                <ProjectImage
                  style={{
                    '--color1': project.colors.color1,
                    '--color2': project.colors.color2,
                    padding: 0,
                  } as React.CSSProperties}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                      sizes="(max-width: 600px) 100vw, 400px"
                      priority={true}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: '#eee',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#aaa',
                      fontSize: '2rem'
                    }}>
                      No Image
                    </div>
                  )}
                </ProjectImage>
                <ProjectContent>
                  <div 
                    className="category-tag"
                    style={{
                      '--tag1': project.tagColors.tag1,
                      '--tag2': project.tagColors.tag2,
                    } as React.CSSProperties}
                  >
                    {filters.find(f => f.id === project.category)?.label}
                  </div>
                  <h3>{project.title}</h3>
                  <div className="client">クライアント: {project.client}</div>
                  <div className="description">{project.description}</div>
                  
                  <div className="tech-stack">
                    <div className="label">使用技術</div>
                    <div className="tags">
                      {project.techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  
                  
                  <div className="action">
                    <Link href={`/projects/${project.id}`}>
                      詳細ケーススタディ →
                    </Link>
                  </div>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link 
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(45deg, #FF6B35, #F18F01)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.125rem',
                transition: 'all 150ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              }}
            >
               あなたのプロジェクトを相談する
            </Link>
          </div>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}