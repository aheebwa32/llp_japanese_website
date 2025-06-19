'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  PageContainer, 
  Container, 
  ContentSection 
} from '@/styles/components/layout';
import { 
  HeroSection, 
  HeroContainer, 
  HeroTitle, 
  HeroSubtitle 
} from '@/styles/components/sections';
import { 
  NewsCard 
} from '@/styles/components/cards';
import { 
  BreadcrumbNav, 
  FilterSection, 
  FilterButtons 
} from '@/styles/components/navigation';
import { 
  FilterButton, 
  Button 
} from '@/styles/components/buttons';
import { styled } from '@/styles/stitches.config';

const FeaturedNews = styled('div', {
  background: '$white',
  borderRadius: '$2xl',
  overflow: 'hidden',
  boxShadow: '$xl',
  mb: '$12',
  border: '1px solid $border',
  
  '& .image': {
    height: '300px',
    background: 'linear-gradient(45deg, var(--color1), var(--color2))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '$6xl',
    
    '@md': {
      height: '400px',
    },
  },
  
  '& .content': {
    p: '$8',
    
    '& .category': {
      background: 'linear-gradient(45deg, var(--cat1), var(--cat2))',
      color: '$white',
      px: '$4',
      py: '$2',
      borderRadius: '$full',
      fontSize: '$sm',
      fontWeight: '$bold',
      display: 'inline-block',
      mb: '$4',
      textTransform: 'uppercase',
    },
    
    '& .date': {
      fontSize: '$sm',
      color: '$textMuted',
      mb: '$4',
      fontWeight: '$medium',
    },
    
    '& h2': {
      fontSize: '$2xl',
      fontWeight: '$bold',
      mb: '$4',
      color: '$textPrimary',
      lineHeight: '$tight',
      
      '@md': {
        fontSize: '$3xl',
      },
    },
    
    '& .excerpt': {
      color: '$textSecondary',
      lineHeight: '$relaxed',
      mb: '$6',
    },
    
    '& .read-more': {
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

const RegularNewsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',
  mt: '$12',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  
  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const RegularNewsCard = styled('article', {
  background: '$white',
  borderRadius: '$xl',
  overflow: 'hidden',
  boxShadow: '$md',
  transition: '$default',
  border: '1px solid $border',
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '$lg',
  },
  
  '& .image': {
    height: '200px',
    background: 'linear-gradient(45deg, var(--color1), var(--color2))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '$4xl',
  },
  
  '& .content': {
    p: '$6',
    
    '& .category': {
      background: 'linear-gradient(45deg, var(--cat1), var(--cat2))',
      color: '$white',
      px: '$3',
      py: '$1',
      borderRadius: '$base',
      fontSize: '$xs',
      fontWeight: '$bold',
      display: 'inline-block',
      mb: '$3',
      textTransform: 'uppercase',
    },
    
    '& .date': {
      fontSize: '$xs',
      color: '$textMuted',
      mb: '$2',
      fontWeight: '$medium',
    },
    
    '& h3': {
      fontSize: '$lg',
      fontWeight: '$semibold',
      mb: '$3',
      color: '$textPrimary',
      lineHeight: '$snug',
    },
    
    '& .excerpt': {
      color: '$textSecondary',
      fontSize: '$sm',
      lineHeight: '$relaxed',
      mb: '$4',
    },
    
    '& .read-more': {
      color: '$primary',
      fontWeight: '$medium',
      textDecoration: 'none',
      fontSize: '$sm',
      
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const newsData = [
    {
      id: 'ai-partnership',
      title: '🤖 AI技術パートナーシップ締結のお知らせ',
      category: 'partnership',
      date: '2025年6月10日',
      excerpt: '世界的AI企業との戦略的パートナーシップにより、次世代の人工知能ソリューションを日本市場に提供開始。',
      icon: '🤖',
      colors: { color1: '#FF6B35', color2: '#FF4757' },
      categoryColors: { cat1: '#FF6B35', cat2: '#FF4757' },
      featured: true,
    },
    {
      id: 'new-office',
      title: '🏢 大阪支社開設のお知らせ',
      category: 'company',
      date: '2025年6月5日',
      excerpt: '関西圏でのサービス拡充を目的として、大阪市中央区に新支社を開設いたします。',
      icon: '🏢',
      colors: { color1: '#004E89', color2: '#3742FA' },
      categoryColors: { cat1: '#004E89', cat2: '#3742FA' },
    },
    // Add more news items...
  ];

  const filteredNews = newsData.filter(news => 
    activeFilter === 'all' || news.category === activeFilter
  );

  const featuredNews = filteredNews.find(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

  return (
    <PageContainer>
      <BreadcrumbNav>
        <ol>
          <li><Link href="/">ホーム</Link></li>
          <li>ニュース</li>
        </ol>
      </BreadcrumbNav>

      <HeroSection gradient="news">
        <HeroContainer>
          <HeroTitle>📰 ニュース・プレスリリース</HeroTitle>
          <HeroSubtitle>
            LLP Tech Solutionsの最新情報、
            プレスリリース、業界動向をお届けします
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <ContentSection background="surface">
        <Container>
          <FilterSection>
            <FilterButtons>
              <FilterButton
                active={activeFilter === 'all'}
                onClick={() => setActiveFilter('all')}
              >
                すべて
              </FilterButton>
              <FilterButton
                active={activeFilter === 'company'}
                onClick={() => setActiveFilter('company')}
              >
                会社情報
              </FilterButton>
              <FilterButton
                active={activeFilter === 'partnership'}
                onClick={() => setActiveFilter('partnership')}
              >
                パートナーシップ
              </FilterButton>
              <FilterButton
                active={activeFilter === 'product'}
                onClick={() => setActiveFilter('product')}
              >
                プロダクト
              </FilterButton>
              <FilterButton
                active={activeFilter === 'press'}
                onClick={() => setActiveFilter('press')}
              >
                プレスリリース
              </FilterButton>
            </FilterButtons>
          </FilterSection>

          {featuredNews && (
            <FeaturedNews
              style={{
                '--color1': featuredNews.colors.color1,
                '--color2': featuredNews.colors.color2,
                '--cat1': featuredNews.categoryColors.cat1,
                '--cat2': featuredNews.categoryColors.cat2,
              } as React.CSSProperties}
            >
              <div className="image">
                {featuredNews.icon}
              </div>
              <div className="content">
                <span className="category">{featuredNews.category}</span>
                <div className="date">{featuredNews.date}</div>
                <h2>{featuredNews.title}</h2>
                <div className="excerpt">{featuredNews.excerpt}</div>
                <Link href={`/news/${featuredNews.id}`} className="read-more">
                  続きを読む →
                </Link>
              </div>
            </FeaturedNews>
          )}

          <RegularNewsGrid>
            {regularNews.map((news) => (
              <RegularNewsCard
                key={news.id}
                style={{
                  '--color1': news.colors.color1,
                  '--color2': news.colors.color2,
                  '--cat1': news.categoryColors.cat1,
                  '--cat2': news.categoryColors.cat2,
                } as React.CSSProperties}
              >
                <div className="image">
                  {news.icon}
                </div>
                <div className="content">
                  <span className="category">{news.category}</span>
                  <div className="date">{news.date}</div>
                  <h3>{news.title}</h3>
                  <div className="excerpt">{news.excerpt}</div>
                  <Link href={`/news/${news.id}`} className="read-more">
                    続きを読む →
                  </Link>
                </div>
              </RegularNewsCard>
            ))}
          </RegularNewsGrid>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button variant="outline" size="lg">
              さらに読み込む
            </Button>
          </div>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}