'use client';

import React from 'react';
import Link from 'next/link';
import { 
  PageContainer, 
  Container, 
  ContentSection, 
  Grid 
} from '@/styles/components/layout';
import { 
  HeroSection, 
  HeroContainer, 
  HeroTitle, 
  HeroSubtitle, 
  SectionTitle, 
  SectionSubtitle 
} from '@/styles/components/sections';
import { 
  Card, 
  ValueCard 
} from '@/styles/components/cards';
import { 
  Button, 
  CTAButton 
} from '@/styles/components/buttons';
import { styled } from '@/styles/stitches.config';

// Hero Buttons
const HeroButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  alignItems: 'center',
  
  '@md': {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

// Stats Section
const StatsSection = styled('section', {
  py: '$16',
  background: '$surface',
});

const StatsGrid = styled('div', {
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

const StatCard = styled('div', {
  textAlign: 'center',
  p: '$6',
  background: '$white',
  borderRadius: '$xl',
  boxShadow: '$md',
  border: '1px solid $border',
  transition: '$default',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '$xl',
  },
  
  '& .icon': {
    fontSize: '$5xl',
    mb: '$4',
  },
  
  '& .number': {
    fontSize: '$4xl',
    fontWeight: '$black',
    color: '$primary',
    mb: '$2',
  },
  
  '& .label': {
    fontSize: '$lg',
    fontWeight: '$semibold',
    color: '$textSecondary',
  },
});

// Features Section
const FeaturesSection = styled('section', {
  py: '$20',
  background: 'linear-gradient(135deg, $white 0%, $surface 100%)',
});

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection gradient="primary">
        <HeroContainer>
          <HeroTitle>
             <span>AEGIS LLP CO</span><br />
            技術革新で未来を創造
          </HeroTitle>
          <HeroSubtitle>
            デジタル変革（DX）、UI/UXデザイン、アニメーション技術を専門とする企業連合として、
            革新的なソリューションで企業の成長と競争力向上を支援します。
          </HeroSubtitle>
          <HeroButtons>
            <CTAButton href="/contact">
              📞 無料相談を予約する
            </CTAButton>
            <CTAButton href="/projects" variant="secondary">
              💼 導入事例を見る
            </CTAButton>
          </HeroButtons>
        </HeroContainer>
      </HeroSection>

      <StatsSection>
        <Container>
          <StatsGrid>
            <StatCard>
              <div className="icon">🏢</div>
              <div className="number">500+</div>
              <div className="label">導入企業数</div>
            </StatCard>
            <StatCard>
              <div className="icon">⭐</div>
              <div className="number">98%</div>
              <div className="label">顧客満足度</div>
            </StatCard>
            <StatCard>
              <div className="icon">🚀</div>
              <div className="number">1,200+</div>
              <div className="label">完了プロジェクト</div>
            </StatCard>
            <StatCard>
              <div className="icon">👥</div>
              <div className="number">50+</div>
              <div className="label">専門エンジニア</div>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>

      <FeaturesSection>
        <Container>
          <SectionTitle> 私たちの強み</SectionTitle>
          <SectionSubtitle>
            最新技術と豊富な経験を組み合わせた、包括的なデジタルソリューション
          </SectionSubtitle>
          <Grid columns={3}>
            <ValueCard color="primary">
              <div className="icon">🔧</div>
              <h3>DX推進支援</h3>
              <p>
                企業のデジタル変革を包括的にサポート。
                戦略立案から実装まで、一貫したサービスを提供します。
              </p>
            </ValueCard>
            <ValueCard color="secondary">
              <div className="icon">🎨</div>
              <h3>UI/UXデザイン</h3>
              <p>
                ユーザー中心のデザイン思考で、
                直感的で美しいインターフェースを創造します。
              </p>
            </ValueCard>
            <ValueCard color="accent">
              <div className="icon">🎬</div>
              <h3>アニメーション技術</h3>
              <p>
                最新のアニメーション技術で、
                印象的なユーザー体験を実現します。
              </p>
            </ValueCard>
            <ValueCard color="success">
              <div className="icon">🤖</div>
              <h3>AI統合</h3>
              <p>
                人工知能技術を活用して、
                効率的で革新的なソリューションを開発します。
              </p>
            </ValueCard>
            <ValueCard color="info">
              <div className="icon">📱</div>
              <h3>モバイル最適化</h3>
              <p>
                すべてのデバイスで最適な体験を提供する、
                レスポンシブなソリューションを構築します。
              </p>
            </ValueCard>
            <ValueCard color="purple">
              <div className="icon">⚡</div>
              <h3>高性能システム</h3>
              <p>
                スケーラブルで高性能なシステム設計により、
                企業の成長に対応します。
              </p>
            </ValueCard>
          </Grid>
        </Container>
      </FeaturesSection>
    </PageContainer>
  );
}