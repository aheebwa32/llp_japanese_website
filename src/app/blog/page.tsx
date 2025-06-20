'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@/styles/stitches.config';

const PageContainer = styled('div', {
  minHeight: '100vh',
});

const HeroSection = styled('section', {
  background: 'linear-gradient(135deg, $brand5 0%, $info 50%, $secondary 100%)',
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
  background: '$surface',
});

const Container = styled('div', {
  maxWidth: '1200px',
  mx: 'auto',
  px: '$4',
  
  '@md': {
    px: '$6',
  },
});

const BlogHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  mb: '$16',
  
  '@lg': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

const FilterSection = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
});

const FilterButton = styled('button', {
  px: '$4',
  py: '$2',
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

const NewsletterSignup = styled('div', {
  background: 'linear-gradient(45deg, $primary, $brand1)',
  borderRadius: '$xl',
  p: '$6',
  color: '$white',
  textAlign: 'center',
  
  '& h3': {
    fontSize: '$xl',
    fontWeight: '$bold',
    mb: '$3',
  },
  
  '& p': {
    mb: '$4',
    opacity: 0.9,
  },
  
  '& form': {
    display: 'flex',
    gap: '$3',
    maxWidth: '400px',
    mx: 'auto',
    
    '& input': {
      flex: 1,
      px: '$3',
      py: '$2',
      borderRadius: '$lg',
      border: 'none',
      fontSize: '$sm',
    },
    
    '& button': {
      px: '$4',
      py: '$2',
      background: '$white',
      color: '$primary',
      borderRadius: '$lg',
      border: 'none',
      fontWeight: '$bold',
      cursor: 'pointer',
      fontSize: '$sm',
    },
  },
});

const BlogGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  
  '@lg': {
    gridTemplateColumns: '2fr 1fr',
  },
});

const MainContent = styled('div', {});

const FeaturedPost = styled('article', {
  background: '$white',
  borderRadius: '$2xl',
  overflow: 'hidden',
  boxShadow: '$xl',
  border: '1px solid $border',
  mb: '$12',
  transition: '$default',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '$2xl',
  },
});

const PostImage = styled('div', {
  height: '300px',
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

const PostContent = styled('div', {
  p: '$8',
  
  '& .category': {
    background: 'linear-gradient(45deg, var(--cat1), var(--cat2))',
    color: '$white',
    px: '$3',
    py: '$1',
    borderRadius: '$full',
    fontSize: '$xs',
    fontWeight: '$bold',
    display: 'inline-block',
    mb: '$4',
    textTransform: 'uppercase',
  },
  
  '& .meta': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
    mb: '$4',
    fontSize: '$sm',
    color: '$textMuted',
    
    '& .author': {
      display: 'flex',
      alignItems: 'center',
      gap: '$2',
    },
    
    '& .date': {
      display: 'flex',
      alignItems: 'center',
      gap: '$2',
    },
  },
  
  '& h2': {
    fontSize: '$3xl',
    fontWeight: '$bold',
    mb: '$4',
    color: '$textPrimary',
    lineHeight: '$tight',
  },
  
  '& .excerpt': {
    color: '$textSecondary',
    lineHeight: '$relaxed',
    mb: '$6',
    fontSize: '$lg',
  },
  
  '& .tags': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '$2',
    mb: '$6',
    
    '& span': {
      background: '$surface',
      color: '$textSecondary',
      px: '$3',
      py: '$1',
      borderRadius: '$base',
      fontSize: '$xs',
    },
  },
  
  '& .read-more': {
    color: '$primary',
    fontWeight: '$semibold',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$2',
    fontSize: '$lg',
    
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const PostsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

const PostCard = styled('article', {
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
});

const CardImage = styled('div', {
  height: '200px',
  background: 'linear-gradient(135deg, var(--color1), var(--color2))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$4xl',
  color: '$white',
});

const CardContent = styled('div', {
  p: '$6',
  
  '& .category': {
    background: 'linear-gradient(45deg, var(--cat1), var(--cat2))',
    color: '$white',
    px: '$2',
    py: '$1',
    borderRadius: '$base',
    fontSize: '$xs',
    fontWeight: '$bold',
    display: 'inline-block',
    mb: '$3',
    textTransform: 'uppercase',
  },
  
  '& .meta': {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    mb: '$3',
    fontSize: '$xs',
    color: '$textMuted',
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
});

const Sidebar = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const SidebarWidget = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  p: '$6',
  boxShadow: '$md',
  border: '1px solid $border',
  
  '& h3': {
    fontSize: '$lg',
    fontWeight: '$bold',
    mb: '$4',
    color: '$textPrimary',
    borderBottom: '2px solid $primary',
    pb: '$2',
  },
});

const PopularPosts = styled('div', {
  '& .post': {
    display: 'flex',
    gap: '$3',
    mb: '$4',
    pb: '$4',
    borderBottom: '1px solid $border',
    
    '&:last-child': {
      mb: 0,
      pb: 0,
      borderBottom: 'none',
    },
    
    '& .thumbnail': {
      size: '$16',
      background: 'linear-gradient(45deg, var(--thumb1), var(--thumb2))',
      borderRadius: '$lg',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '$white',
      fontSize: '$xl',
      flexShrink: 0,
    },
    
    '& .content': {
      '& h4': {
        fontSize: '$sm',
        fontWeight: '$semibold',
        mb: '$1',
        color: '$textPrimary',
        lineHeight: '$snug',
      },
      
      '& .date': {
        fontSize: '$xs',
        color: '$textMuted',
      },
    },
  },
});

const TagCloud = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  
  '& a': {
    background: '$surface',
    color: '$textSecondary',
    px: '$3',
    py: '$1',
    borderRadius: '$base',
    fontSize: '$xs',
    textDecoration: 'none',
    transition: '$default',
    
    '&:hover': {
      background: '$primary',
      color: '$white',
    },
  },
});

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: '全て' },
    { id: 'technology', label: '技術' },
    { id: 'design', label: 'デザイン' },
    { id: 'business', label: 'ビジネス' },
    { id: 'case-study', label: '事例' },
    { id: 'tutorial', label: 'チュートリアル' },
    { id: 'trend', label: 'トレンド' },
  ];

  const featuredPost = {
    id: 'future-of-dx',
    title: '2025年のDXトレンド：AIとクラウドが変える企業の未来',
    category: 'technology',
    author: '田中 一郎',
    date: '2025年6月15日',
    readTime: '8分',
    excerpt: 'デジタル変革（DX）の最新トレンドを詳しく解説。AI技術とクラウドプラットフォームの進化が企業のビジネスモデルにどのような影響を与えるのか、具体的な事例とともに考察します。',
    tags: ['DX', 'AI', 'クラウド', 'ビジネス変革'],
    image: '/ai.jpeg',
    colors: { color1: '#FF6B35', color2: '#FF4757' },
    categoryColors: { cat1: '#FF6B35', cat2: '#FF4757' },
  };

  const posts = [
    {
      id: 'ui-ux-principles',
      title: ' ユーザー中心設計の基本原則',
      category: 'design',
      author: '佐藤 美咲',
      date: '2025年6月12日',
      readTime: '5分',
      excerpt: '効果的なUI/UXデザインのための基本原則と実践方法を解説。',
      image: '/ico.jpeg',
      colors: { color1: '#004E89', color2: '#3742FA' },
      categoryColors: { cat1: '#004E89', cat2: '#3742FA' },
    },
    {
      id: 'animation-trends',
      title: '🎬 2025年のWebアニメーション動向',
      category: 'trend',
      author: '山田 健太',
      date: '2025年6月10日',
      readTime: '6分',
      excerpt: '最新のWebアニメーション技術とデザイントレンドを詳しく紹介。',
      image: '/tech.jpeg',
      colors: { color1: '#FFD23F', color2: '#FFA502' },
      categoryColors: { cat1: '#FFD23F', cat2: '#FFA502' },
    },
    {
      id: 'cloud-migration-guide',
      title: ' クラウド移行成功の秘訣',
      category: 'tutorial',
      author: '鈴木 雅子',
      date: '2025年6月8日',
      readTime: '10分',
      excerpt: 'オンプレミスからクラウドへの移行を成功させるための実践ガイド。',
      image: '/cloud.jpeg',
      colors: { color1: '#457B9D', color2: '#26D0CE' },
      categoryColors: { cat1: '#457B9D', cat2: '#26D0CE' },
    },
    {
      id: 'startup-dx-case',
      title: ' スタートアップのDX成功事例',
      category: 'case-study',
      author: '高橋 達也',
      date: '2025年6月5日',
      readTime: '7分',
      excerpt: '限られたリソースでDXを成功させたスタートアップの事例分析。',
      image: '/cccdcn.jpeg',
      colors: { color1: '#06D6A0', color2: '#2ED573' },
      categoryColors: { cat1: '#06D6A0', cat2: '#2ED573' },
    },
  ];

  const popularPosts = [
    {
      title: 'React + TypeScriptでの開発ベストプラクティス',
      date: '2025年6月1日',
      thumbnail: { thumb1: '#FF6B35', thumb2: '#FF4757', icon: '⚛️' },
    },
    {
      title: 'デザインシステム構築の完全ガイド',
      date: '2025年5月28日',
      thumbnail: { thumb1: '#004E89', thumb2: '#3742FA', icon: '🎨' },
    },
    {
      title: 'AI導入プロジェクトの進め方',
      date: '2025年5月25日',
      thumbnail: { thumb1: '#06D6A0', thumb2: '#2ED573', icon: '🤖' },
    },
    {
      title: 'モバイルファーストデザインの重要性',
      date: '2025年5月22日',
      thumbnail: { thumb1: '#A55EEA', thumb2: '#8B5CF6', icon: '📱' },
    },
  ];

  const tags = [
    'React', 'TypeScript', 'Next.js', 'UI/UX', 'デザインシステム',
    'DX', 'AI', 'クラウド', 'アニメーション', 'モバイル',
    'パフォーマンス', 'セキュリティ', 'アクセシビリティ'
  ];

  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

  return (
    <PageContainer>
      <BreadcrumbNav>
        <ol>
          <li><Link href="/">ホーム</Link></li>
          <li>ブログ & 更新情報</li>
        </ol>
      </BreadcrumbNav>

      <HeroSection>
        <HeroContainer>
          <HeroTitle> ブログ & 更新情報</HeroTitle>
          <HeroSubtitle>
            技術の最新トレンド、開発ノウハウ、プロジェクト事例など、
            LLP Tech Solutionsの専門家による実践的な情報をお届けします。
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <ContentSection>
        <Container>
          <BlogHeader>
            <FilterSection>
              {categories.map((category) => (
                <FilterButton
                  key={category.id}
                  active={activeFilter === category.id}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                </FilterButton>
              ))}
            </FilterSection>
            
            <NewsletterSignup>
              <h3> ニュースレター購読</h3>
              <p>最新の技術情報を週1回お届けします</p>
              <form>
                <input type="email" placeholder="メールアドレス" required />
                <button type="submit">購読</button>
              </form>
            </NewsletterSignup>
          </BlogHeader>

          <BlogGrid>
            <MainContent>
              <FeaturedPost>
              <PostImage style={{ position: 'relative', height: '300px' }}>
              {featuredPost.image && (
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, 800px"
                  priority={true}
                />
              )}
            </PostImage>
                <PostContent>
                  <div 
                    className="category"
                    style={{
                      '--cat1': featuredPost.categoryColors.cat1,
                      '--cat2': featuredPost.categoryColors.cat2,
                    } as React.CSSProperties}
                  >
                    {categories.find(c => c.id === featuredPost.category)?.label}
                  </div>
                  <div className="meta">
                    <div className="author"> {featuredPost.author}</div>
                    <div className="date"> {featuredPost.date}</div>
                    <div className="read-time"> {featuredPost.readTime}</div>
                  </div>
                  <h2>{featuredPost.title}</h2>
                  <div className="excerpt">{featuredPost.excerpt}</div>
                  <div className="tags">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                  <Link href={`/blog/${featuredPost.id}`} className="read-more">
                    記事を読む →
                  </Link>
                </PostContent>
              </FeaturedPost>

              <PostsGrid>
                {filteredPosts.map((post) => (
                  <PostCard key={post.id}>
                    <CardImage style={{ position: 'relative', height: '200px' }}>
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 600px) 100vw, 400px"
                    />
                  )}
                </CardImage>
                    <CardContent>
                      <div 
                        className="category"
                        style={{
                          '--cat1': post.categoryColors.cat1,
                          '--cat2': post.categoryColors.cat2,
                        } as React.CSSProperties}
                      >
                        {categories.find(c => c.id === post.category)?.label}
                      </div>
                      <div className="meta">
                        <span> {post.author}</span>
                        <span> {post.date}</span>
                        <span> {post.readTime}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <div className="excerpt">{post.excerpt}</div>
                      <Link href={`/blog/${post.id}`} className="read-more">
                        続きを読む →
                      </Link>
                    </CardContent>
                  </PostCard>
                ))}
              </PostsGrid>
            </MainContent>

            <Sidebar>
              <SidebarWidget>
                <h3> 人気記事</h3>
                <PopularPosts>
                  {popularPosts.map((post, index) => (
                    <div key={index} className="post">
                      <div 
                        className="thumbnail"
                        style={{
                          '--thumb1': post.thumbnail.thumb1,
                          '--thumb2': post.thumbnail.thumb2,
                        } as React.CSSProperties}
                      >
                        {post.thumbnail.icon}
                      </div>
                      <div className="content">
                        <h4>{post.title}</h4>
                        <div className="date">{post.date}</div>
                      </div>
                    </div>
                  ))}
                </PopularPosts>
              </SidebarWidget>

              <SidebarWidget>
                <h3> タグクラウド</h3>
                <TagCloud>
                  {tags.map((tag, index) => (
                    <Link key={index} href={`/blog/tag/${tag}`}>
                      {tag}
                    </Link>
                  ))}
                </TagCloud>
              </SidebarWidget>

              <SidebarWidget>
                <h3>📞 技術相談</h3>
                <p style={{ marginBottom: '1rem', color: '#6B7280', lineHeight: '1.6' }}>
                  ブログで紹介している技術について
                  詳しく知りたい方はお気軽にご相談ください。
                </p>
                <Link 
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'linear-gradient(45deg, #FF6B35, #F18F01)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    transition: 'all 150ms ease',
                  }}
                >
                   無料相談
                </Link>
              </SidebarWidget>
            </Sidebar>
          </BlogGrid>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}