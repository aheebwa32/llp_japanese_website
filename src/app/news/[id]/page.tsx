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
 
const ArticleHeader = styled('div', {
  '& .category': {
    display: 'inline-block',
    px: '$4',
    py: '$2',
    borderRadius: '$full',
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$white',
    mb: '$4',
  },
  
  '& .date': {
    fontSize: '$lg',
    opacity: 0.8,
    mb: '$4',
  },
  
  '& h1': {
    fontSize: '$4xl',
    fontWeight: '$black',
    mb: '$6',
    lineHeight: '$tight',
    
    '@md': {
      fontSize: '$5xl',
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
    },
  },
});

const Container = styled('div', {
  maxWidth: '800px',
  mx: 'auto',
  px: '$4',
  
  '@md': {
    px: '$6',
  },
});

const ArticleImage = styled('div', {
  borderRadius: '$2xl',
  overflow: 'hidden',
  mb: '$8',
  height: '400px',
  position: 'relative',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const ArticleContent = styled('div', {
  fontSize: '$lg',
  lineHeight: '$relaxed',
  color: '$textPrimary',
  
  '& p': {
    mb: '$6',
  },
  
  '& h2': {
    fontSize: '$2xl',
    fontWeight: '$bold',
    mt: '$8',
    mb: '$4',
    color: '$textPrimary',
  },
  
  '& h3': {
    fontSize: '$xl',
    fontWeight: '$semibold',
    mt: '$6',
    mb: '$3',
    color: '$textPrimary',
  },
  
  '& ul, & ol': {
    mb: '$6',
    pl: '$6',
    
    '& li': {
      mb: '$2',
    },
  },
  
  '& blockquote': {
    borderLeft: '4px solid $primary',
    pl: '$6',
    py: '$4',
    my: '$6',
    background: '$surface',
    borderRadius: '$lg',
    fontStyle: 'italic',
    fontSize: '$xl',
  },
});

const RelatedNews = styled('div', {
  mt: '$16',
  pt: '$8',
  borderTop: '2px solid $border',
  
  '& h3': {
    fontSize: '$2xl',
    fontWeight: '$bold',
    mb: '$6',
    textAlign: 'center',
  },
});

const RelatedGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

const RelatedCard = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  overflow: 'hidden',
  boxShadow: '$md',
  border: '1px solid $border',
  transition: '$default',
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '$lg',
  },
  
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
    
    '& .category': {
      display: 'inline-block',
      px: '$3',
      py: '$1',
      borderRadius: '$full',
      fontSize: '$xs',
      fontWeight: '$bold',
      color: '$white',
      mb: '$3',
    },
    
    '& .date': {
      fontSize: '$sm',
      color: '$textMuted',
      mb: '$2',
    },
    
    '& h4': {
      fontSize: '$lg',
      fontWeight: '$semibold',
      mb: '$3',
      color: '$textPrimary',
    },
    
    '& p': {
      fontSize: '$sm',
      color: '$textSecondary',
      lineHeight: '$relaxed',
    },
  },
});

// News articles data
const newsArticles = {
  'partnership-expansion': {
    id: 'partnership-expansion',
    title: '戦略的パートナーシップ拡大について',
    category: 'パートナーシップ',
    categoryColor: '#06D6A0',
    date: '2025年6月20日',
    excerpt: '新たな技術パートナーとの連携により、サービス領域を大幅に拡充いたします。',
    image: '/datainsight.jpeg',
    heroGradient: 'linear-gradient(135deg, #06D6A0 0%, #2ED573 50%, #26de81 100%)',
    content: `
      <p>LLP Tech Solutionsは、この度、グローバル技術企業との戦略的パートナーシップを拡大し、新たなイノベーション創出に向けた取り組みを開始いたします。</p>
      
      <h2>パートナーシップの概要</h2>
      <p>今回の提携により、以下の分野での協業を強化いたします：</p>
      <ul>
        <li>クラウドネイティブソリューションの共同開発</li>
        <li>AI・機械学習技術の実用化促進</li>
        <li>サイバーセキュリティ対策の高度化</li>
        <li>デジタル変革（DX）支援サービスの拡充</li>
      </ul>
      
      <blockquote>
        「この戦略的パートナーシップにより、お客様により革新的で包括的なソリューションを提供できるようになります」
        - 代表取締役 田中太郎
      </blockquote>
      
      <h2>期待される効果</h2>
      <p>このパートナーシップにより、以下の効果が期待されます：</p>
      <ul>
        <li>技術革新の加速</li>
        <li>グローバル市場での競争力強化</li>
        <li>顧客価値の向上</li>
        <li>新規事業領域への展開</li>
      </ul>
      
      <h3>今後の展開</h3>
      <p>2025年下半期より、共同開発プロジェクトを本格的に開始し、2026年初頭には新サービスのリリースを予定しております。詳細については、追って発表いたします。</p>
    `,
  },
  'new-office': {
    id: 'new-office',
    title: '大阪支社開設のお知らせ',
    category: '会社情報',
    categoryColor: '#004E89',
    date: '2025年6月5日',
    excerpt: '関西圏でのサービス拡充を目的として、大阪市中央区に新支社を開設いたします。',
    image: '/cccdcn.jpeg',
    heroGradient: 'linear-gradient(135deg, #004E89 0%, #3742FA 50%, #5352ed 100%)',
    content: `
      <p>LLP Tech Solutionsは、関西圏でのビジネス拡大と顧客サービス向上を目的として、2025年7月1日に大阪支社を開設することをお知らせいたします。</p>
      
      <h2>大阪支社について</h2>
      <p><strong>所在地：</strong> 大阪市中央区本町1-2-3 テクノロジービル8階<br/>
      <strong>開設日：</strong> 2025年7月1日<br/>
      <strong>初期スタッフ：</strong> 25名</p>
      
      <h2>設立の背景</h2>
      <p>関西圏のお客様からの強いご要望にお応えし、より身近で迅速なサービス提供を実現するため、大阪支社の設立を決定いたしました。</p>
      
      <h3>サービス内容</h3>
      <ul>
        <li>DX推進コンサルティング</li>
        <li>システム開発・運用支援</li>
        <li>AI・データ分析ソリューション</li>
        <li>クラウドインフラ構築</li>
        <li>デザイン・UX改善支援</li>
      </ul>
      
      <p>今後とも、LLP Tech Solutionsをよろしくお願いいたします。</p>
    `,
  },
  'award-recognition': {
    id: 'award-recognition',
    title: 'イノベーション賞受賞について',
    category: '受賞・表彰',
    categoryColor: '#FFD23F',
    date: '2025年5月15日',
    excerpt: '当社のAIソリューションが「Tech Innovation Award 2025」を受賞いたしました。',
    image: '/tech.jpeg',
    heroGradient: 'linear-gradient(135deg, #FFD23F 0%, #FFA502 50%, #ff9f43 100%)',
    content: `
      <p>LLP Tech Solutionsは、この度、「Tech Innovation Award 2025」において最優秀イノベーション賞を受賞いたしました。</p>
      
      <h2>受賞の概要</h2>
      <p>当社が開発したAI予測分析プラットフォーム「AEGIS Analytics」が、その革新性と実用性を高く評価され、今回の受賞に至りました。</p>
      
      <blockquote>
        「お客様の業務効率化に大きく貢献できるソリューションを評価していただき、大変光栄です」
        - CTO 佐藤次郎
      </blockquote>
      
      <h2>AEGIS Analyticsの特徴</h2>
      <ul>
        <li>高精度な需要予測アルゴリズム</li>
        <li>リアルタイムデータ処理能力</li>
        <li>直感的なダッシュボード設計</li>
        <li>業界特化型カスタマイズ機能</li>
      </ul>
      
      <h3>今後の展開</h3>
      <p>この受賞を励みに、さらなる技術革新とお客様価値の創造に努めてまいります。</p>
    `,
  },
};

interface PageProps {
  params: Promise<{ id: string }>; // Change this to Promise
}

export default function NewsDetailPage({ params }: PageProps) {
  const { id } = React.use(params); // Use React.use() to unwrap the Promise
  const article = newsArticles[id as keyof typeof newsArticles];
  
  if (!article) {
    notFound();
  }

  // Related articles (exclude current article)
  const relatedArticles = Object.values(newsArticles)
    .filter(a => a.id !== article.id)
    .slice(0, 2);

  return (
    <PageContainer>
      <BreadcrumbNav>
        <ol>
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/news">ニュース</Link></li>
          <li>{article.title}</li>
        </ol>
      </BreadcrumbNav>

      <HeroSection style={{ background: article.heroGradient }}>
        <HeroContainer>
          <ArticleHeader>
            <div 
              className="category"
              style={{ backgroundColor: article.categoryColor }}
            >
              {article.category}
            </div>
            <div className="date">{article.date}</div>
            <h1>{article.title}</h1>
          </ArticleHeader>
        </HeroContainer>
      </HeroSection>

      <ContentSection background="white">
        <Container>
          {article.image && (
            <ArticleImage>
              <Image
                src={article.image}
                alt={article.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ArticleImage>
          )}
          
          <ArticleContent 
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <RelatedNews>
            <h3>関連ニュース</h3>
            <RelatedGrid>
              {relatedArticles.map((related) => (
                <Link key={related.id} href={`/news/${related.id}`} style={{ textDecoration: 'none' }}>
                  <RelatedCard
                    style={{
                      '--color1': related.categoryColor,
                      '--color2': related.categoryColor + '80',
                    } as React.CSSProperties}
                  >
                    <div className="image">
                      {related.image && (
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <div className="content">
                      <div 
                        className="category"
                        style={{ backgroundColor: related.categoryColor }}
                      >
                        {related.category}
                      </div>
                      <div className="date">{related.date}</div>
                      <h4>{related.title}</h4>
                      <p>{related.excerpt}</p>
                    </div>
                  </RelatedCard>
                </Link>
              ))}
            </RelatedGrid>
          </RelatedNews>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}