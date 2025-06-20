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
  ValueCard 
} from '@/styles/components/cards';
import { 
  BreadcrumbNav 
} from '@/styles/components/navigation';
import { styled } from '@/styles/stitches.config';

const StatsCard = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  p: '$8',
  textAlign: 'center',
  boxShadow: '$md',
  border: '1px solid $border',
  transition: '$default',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '$xl',
  },
  
  '& .number': {
    fontSize: '$4xl',
    fontWeight: '$black',
    color: '$primary',
    mb: '$2',
    display: 'block',
  },
  
  '& .label': {
    fontSize: '$lg',
    fontWeight: '$semibold',
    color: '$textSecondary',
  },
});

const TeamMemberPhoto = styled('div', {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  overflow: 'hidden',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
});

export default function AboutPage() {
  return (
    <PageContainer>
      <BreadcrumbNav>
        <ol>
          <li><Link href="/">ホーム</Link></li>
          <li>会社概要</li>
        </ol>
      </BreadcrumbNav>

      <HeroSection gradient="secondary">
        <HeroContainer>
          <HeroTitle> 会社概要</HeroTitle>
          <HeroSubtitle>
            技術革新で企業の未来を創造する、
            LLP Tech Solutionsの使命と価値観
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <ContentSection background="white">
        <Container>
          <SectionTitle> 私たちのミッション</SectionTitle>
          <SectionSubtitle>
            最新のデジタル技術で企業の競争力を向上させ、持続可能な成長を支援します
          </SectionSubtitle>
          <Grid columns={3}>
            <ValueCard color="primary">
              <div className="icon"></div>
              <h3>革新</h3>
              <p>
                常に最新技術を追求し、
                革新的なソリューションを提供します。
              </p>
            </ValueCard>
            <ValueCard color="secondary">
              <div className="icon">🤝</div>
              <h3>協働</h3>
              <p>
                お客様と密接に連携し、
                共に成功を目指します。
              </p>
            </ValueCard>
            <ValueCard color="accent">
              <div className="icon">🌟</div>
              <h3>品質</h3>
              <p>
                最高品質のサービスと
                成果物をお約束します。
              </p>
            </ValueCard>
            <ValueCard color="success">
              <div className="icon">💡</div>
              <h3>創造性</h3>
              <p>
                クリエイティブな発想で
                新しい価値を創造します。
              </p>
            </ValueCard>
          </Grid>
        </Container>
      </ContentSection>

      <ContentSection background="surface">
        <Container>
          <SectionTitle> 実績と信頼</SectionTitle>
          <SectionSubtitle>
            数字で見るLLP Tech Solutionsの成長と実績
          </SectionSubtitle>
          <Grid columns={2}>
            <StatsCard>
              <div className="number">500+</div>
              <div className="label">導入企業数</div>
            </StatsCard>
            <StatsCard>
              <div className="number">98.5%</div>
              <div className="label">顧客満足度</div>
            </StatsCard>
            <StatsCard>
              <div className="number">1,200+</div>
              <div className="label">完了プロジェクト</div>
            </StatsCard>
            <StatsCard>
              <div className="number">50+</div>
              <div className="label">専門エンジニア</div>
            </StatsCard>
          </Grid>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}