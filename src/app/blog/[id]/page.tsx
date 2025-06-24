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
  
  '& .meta': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$4',
    fontSize: '$lg',
    opacity: 0.8,
    mb: '$4',
    flexWrap: 'wrap',
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
  
  '& code': {
    background: '$surface',
    px: '$2',
    py: '$1',
    borderRadius: '$md',
    fontSize: '$md',
    fontFamily: 'monospace',
  },
  
  '& pre': {
    background: '$surface',
    p: '$4',
    borderRadius: '$lg',
    overflow: 'auto',
    mb: '$6',
    
    '& code': {
      background: 'transparent',
      p: 0,
    },
  },
});

const AuthorInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  p: '$6',
  background: '$surface',
  borderRadius: '$xl',
  mt: '$8',
  
  '& .avatar': {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, $primary, $brand1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$white',
    fontSize: '$xl',
    fontWeight: '$bold',
  },
  
  '& .info': {
    '& .name': {
      fontSize: '$lg',
      fontWeight: '$semibold',
      color: '$textPrimary',
      mb: '$1',
    },
    
    '& .role': {
      fontSize: '$sm',
      color: '$textSecondary',
      mb: '$2',
    },
    
    '& .bio': {
      fontSize: '$sm',
      color: '$textSecondary',
      lineHeight: '$relaxed',
    },
  },
});

const TagsSection = styled('div', {
  mt: '$8',
  pt: '$6',
  borderTop: '1px solid $border',
  
  '& .label': {
    fontSize: '$sm',
    fontWeight: '$semibold',
    color: '$textSecondary',
    mb: '$3',
  },
  
  '& .tags': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '$2',
  },
});

const Tag = styled('span', {
  px: '$3',
  py: '$1',
  background: '$primary',
  color: '$white',
  borderRadius: '$full',
  fontSize: '$sm',
  fontWeight: '$medium',
});

const RelatedPosts = styled('div', {
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
    
    '& .meta': {
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

// Blog posts data - Added the missing post
const blogPosts = {
  'modern-web-development': {
    id: 'modern-web-development',
    title: 'モダンWebフレームワークの選び方：2025年版ガイド',
    category: '技術解説',
    categoryColor: '#06D6A0',
    date: '2025年6月18日',
    author: {
      name: '田中 開発太郎',
      role: 'フロントエンドアーキテクト',
      bio: '10年以上のWeb開発経験を持ち、React、Vue.js、Next.jsの専門家',
      avatar: '田',
    },
    readTime: '8分',
    tags: ['React', 'Next.js', 'Vue.js', 'フロントエンド'],
    excerpt: 'フロントエンド開発における最新トレンドと、プロジェクトに最適なフレームワークの選び方を詳しく解説します。',
    image: '/AI.jpeg',
    heroGradient: 'linear-gradient(135deg, #06D6A0 0%, #2ED573 50%, #26de81 100%)',
    content: `<p>Webフロントエンド開発の世界は急速に進化し続けており、2025年現在、開発者には数多くの選択肢があります。本記事では、プロジェクトの要件に応じて最適なフレームワークを選択するためのガイドラインを提供します。</p>

<h2>主要フレームワークの比較</h2>

<h3>React</h3>
<p>Metaが開発したReactは、コンポーネントベースのアーキテクチャと豊富なエコシステムが特徴です。</p>
<ul>
<li><strong>メリット：</strong> 大規模なコミュニティ、豊富なライブラリ、柔軟性</li>
<li><strong>デメリット：</strong> 学習コストが高い、設定が複雑</li>
<li><strong>適用場面：</strong> 大規模アプリケーション、複雑なUI</li>
</ul>

<h3>Next.js</h3>
<p>Reactベースのフルスタックフレームワークで、SSRやSSGを簡単に実現できます。</p>
<ul>
<li><strong>メリット：</strong> SEO対応、高性能、豊富な機能</li>
<li><strong>デメリット：</strong> Vercelエコシステムへの依存</li>
<li><strong>適用場面：</strong> 企業サイト、ECサイト、ブログ</li>
</ul>

<h3>Vue.js</h3>
<p>学習コストが低く、段階的な導入が可能なプログレッシブフレームワークです。</p>
<ul>
<li><strong>メリット：</strong> 学習しやすい、優れたドキュメント、軽量</li>
<li><strong>デメリット：</strong> Reactほど大きくないエコシステム</li>
<li><strong>適用場面：</strong> 中小規模アプリ、プロトタイプ開発</li>
</ul>

<blockquote>「フレームワークの選択は、チームのスキルレベルとプロジェクトの要件を総合的に考慮することが重要です」</blockquote>

<h2>選択のための判断基準</h2>

<h3>1. プロジェクトの規模と複雑さ</h3>
<p>小規模なプロジェクトにはVue.jsやSvelte、大規模なアプリケーションにはReactやAngularが適しています。</p>

<h3>2. チームのスキルレベル</h3>
<p>チームの経験レベルに応じて、学習コストを考慮した選択を行いましょう。</p>

<h3>3. パフォーマンス要件</h3>
<p>高いパフォーマンスが求められる場合は、SvelteやVue.jsが有利です。</p>

<h3>4. エコシステムとサポート</h3>
<p>長期的な運用を考慮し、活発なコミュニティとサポートがあるフレームワークを選択しましょう。</p>

<h2>まとめ</h2>
<p>適切なフレームワーク選択により、開発効率とアプリケーションの品質を大幅に向上させることができます。プロジェクトの特性を十分に分析し、最適な選択を行いましょう。</p>`,
  },
  'ai-business-integration': {
    id: 'ai-business-integration',
    title: 'AIをビジネスに統合する際の課題と解決策',
    category: 'AI・機械学習',
    categoryColor: '#A55EEA',
    date: '2025年6月10日',
    author: {
      name: '佐藤 AI子',
      role: 'AIエンジニア',
      bio: 'データサイエンス博士号を持ち、企業のAI導入を200社以上支援',
      avatar: '佐',
    },
    readTime: '12分',
    tags: ['AI', '機械学習', 'ビジネス', 'DX'],
    excerpt: '企業がAI技術を導入する際に直面する主要な課題と、それらを克服するための実践的なアプローチを紹介します。',
    image: '/ai.jpeg',
    heroGradient: 'linear-gradient(135deg, #A55EEA 0%, #8B5CF6 50%, #7c3aed 100%)',
    content: `<p>AI技術の急速な発展により、多くの企業がビジネスプロセスにAIを統合しようと試みています。しかし、その道のりは決して平坦ではありません。本記事では、AI導入時によく遭遇する課題と、それらを効果的に解決する方法について詳しく解説します。</p>

<h2>AI導入における主要な課題</h2>

<h3>1. データ品質の問題</h3>
<p>AIモデルの性能は、学習データの品質に大きく依存します。多くの企業では、以下のようなデータ関連の課題に直面します：</p>
<ul>
<li>データの不完全性や不正確性</li>
<li>異なるシステム間でのデータ形式の不統一</li>
<li>十分な量の学習データの不足</li>
<li>データのバイアスや偏り</li>
</ul>

<h3>2. 組織の抵抗と文化的障壁</h3>
<p>技術的な課題以上に困難なのが、組織内の抵抗です。従業員がAI導入に対して示す懸念には以下があります：</p>
<ul>
<li>職を失う恐れ</li>
<li>新しい技術への不安</li>
<li>既存のワークフローの変更への抵抗</li>
</ul>

<h3>3. 技術的な複雑さ</h3>
<p>AI技術の実装と運用には、高度な専門知識が必要です：</p>
<ul>
<li>適切なアルゴリズムの選択</li>
<li>モデルの調整とハイパーパラメータの最適化</li>
<li>本番環境での運用と監視</li>
</ul>

<blockquote>「成功するAI導入には、技術的な準備だけでなく、組織全体の変革への準備が不可欠です」</blockquote>

<h2>効果的な解決策</h2>

<h3>データ品質の向上</h3>
<p>データ品質を向上させるための段階的アプローチ：</p>
<ol>
<li><strong>データ監査：</strong> 既存データの品質を評価</li>
<li><strong>クレンジング：</strong> 不正確なデータの修正</li>
<li><strong>標準化：</strong> データ形式の統一</li>
<li><strong>継続監視：</strong> データ品質の定期的なチェック</li>
</ol>

<h3>組織変革管理</h3>
<p>従業員の不安を軽減し、AI導入を成功させるために：</p>
<ul>
<li>透明性のあるコミュニケーション</li>
<li>スキルアップ研修の提供</li>
<li>段階的な導入による慣れ</li>
<li>成功事例の共有</li>
</ul>

<h3>技術的アプローチ</h3>
<p>技術的課題を克服するための戦略：</p>
<ul>
<li><strong>MLOps：</strong> 機械学習モデルの運用自動化</li>
<li><strong>AutoML：</strong> モデル構築の自動化</li>
<li><strong>クラウドAI：</strong> 既製のAIサービスの活用</li>
<li><strong>外部専門家：</strong> コンサルティングサービスの利用</li>
</ul>

<h2>成功事例の紹介</h2>

<h3>製造業でのAI活用</h3>
<p>ある製造業では、予知保全AIを導入することで：</p>
<ul>
<li>設備故障率を30%削減</li>
<li>メンテナンスコストを25%削減</li>
<li>生産性を15%向上</li>
</ul>

<h3>小売業での顧客分析</h3>
<p>顧客行動分析AIの導入により：</p>
<ul>
<li>売上を20%向上</li>
<li>顧客満足度を35%改善</li>
<li>在庫回転率を40%向上</li>
</ul>

<h2>今後の展望</h2>
<p>AI技術は今後さらに進歩し、より多くの企業にとって身近な存在となるでしょう。重要なのは、技術の進歩に合わせて組織も成長し続けることです。</p>

<p>AI導入は一度きりのプロジェクトではなく、継続的な改善プロセスです。小さな成功を積み重ね、徐々に規模を拡大していくことが、持続可能なAI活用への道筋となります。</p>`,
  },
  'ux-design-trends-2025': {
    id: 'ux-design-trends-2025',
    title: '2025年のUXデザイントレンド：ユーザー体験の未来',
    category: 'デザイン',
    categoryColor: '#FF6B35',
    date: '2025年6月1日',
    author: {
      name: '鈴木 デザ美',
      role: 'UXデザイナー',
      bio: 'Google、Appleでの勤務経験を持つUXデザインのエキスパート',
      avatar: '鈴',
    },
    readTime: '10分',
    tags: ['UX', 'デザイン', 'トレンド', 'UI'],
    excerpt: '2025年に注目すべきUXデザインのトレンドと、それらがユーザー体験に与える影響について詳しく解説します。',
    image: '/AI2.jpeg',
    heroGradient: 'linear-gradient(135deg, #FF6B35 0%, #FF4757 50%, #FF3742 100%)',
    content: `<p>ユーザー体験（UX）デザインの分野は常に進化し続けており、2025年も新しいトレンドが登場しています。本記事では、今年注目すべき主要なUXデザイントレンドと、それらがユーザーとビジネスに与える影響について詳しく探ります。</p>

<h2>1. AIによるパーソナライゼーション</h2>
<p>AI技術の進歩により、ユーザー一人ひとりに最適化されたインターフェースの提供が可能になっています。</p>

<h3>主な特徴：</h3>
<ul>
<li>ユーザーの行動パターンに基づくUIの動的調整</li>
<li>コンテンツの自動最適化</li>
<li>予測的なユーザーインターフェース</li>
</ul>

<h3>実装のメリット：</h3>
<ul>
<li>ユーザーエンゲージメントの向上</li>
<li>コンバージョン率の改善</li>
<li>ユーザー満足度の向上</li>
</ul>

<h2>2. マイクロインタラクションの進化</h2>
<p>細部にこだわったマイクロインタラクションが、ユーザー体験の質を大きく左右します。</p>

<blockquote>「優れたデザインは、ユーザーが気づかないほど自然で直感的なものです」</blockquote>

<h3>2025年のトレンド：</h3>
<ul>
<li>物理法則を模倣したアニメーション</li>
<li>感情に訴えかけるフィードバック</li>
<li>状況に応じた動的な反応</li>
</ul>

<h2>3. ボイスUIとコンバーサショナルデザイン</h2>
<p>音声インターフェースの普及により、新しいデザインパラダイムが求められています。</p>

<h3>デザインの考慮点：</h3>
<ul>
<li>自然な会話フローの設計</li>
<li>音声とビジュアルの統合</li>
<li>コンテキストの理解と応答</li>
</ul>

<h2>4. サステナブルデザイン</h2>
<p>環境意識の高まりにより、持続可能なデザインへの注目が集まっています。</p>

<h3>実践方法：</h3>
<ul>
<li>軽量なデザインとコード最適化</li>
<li>ダークモードの標準実装</li>
<li>データ使用量の最小化</li>
</ul>

<h2>5. インクルーシブデザインの重視</h2>
<p>すべてのユーザーが利用できるデザインの重要性がますます認識されています。</p>

<h3>アクセシビリティの向上：</h3>
<ul>
<li>色覚多様性への配慮</li>
<li>スクリーンリーダー対応</li>
<li>多様な入力方法のサポート</li>
</ul>

<h2>6. 没入型体験（AR/VR）</h2>
<p>拡張現実（AR）と仮想現実（VR）技術の普及により、新しいUX設計手法が必要になっています。</p>

<h3>設計の課題：</h3>
<ul>
<li>空間的なナビゲーション設計</li>
<li>没入感とユーザビリティのバランス</li>
<li>VR酔い対策</li>
</ul>

<h2>実装のベストプラクティス</h2>

<h3>段階的導入</h3>
<p>新しいトレンドを取り入れる際は、以下の手順を推奨します：</p>
<ol>
<li><strong>ユーザー調査：</strong> 現在のユーザーニーズの把握</li>
<li><strong>プロトタイピング：</strong> 小規模な実装とテスト</li>
<li><strong>A/Bテスト：</strong> 効果の検証</li>
<li><strong>段階的展開：</strong> 成功した要素の全面導入</li>
</ol>

<h3>測定と改善</h3>
<p>UXの改善は継続的なプロセスです：</p>
<ul>
<li>ユーザビリティテストの定期実施</li>
<li>分析データに基づく意思決定</li>
<li>ユーザーフィードバックの活用</li>
</ul>

<h2>まとめ</h2>
<p>2025年のUXデザイントレンドは、テクノロジーの進歩とユーザーの期待の変化を反映しています。重要なのは、トレンドを盲目的に追うのではなく、自社のユーザーとビジネス目標に最適な要素を選択的に取り入れることです。</p>

<p>優れたUXデザインの基本原則は変わりません：ユーザーを中心に据え、彼らの真のニーズを理解し、それに応える価値あるソリューションを提供することです。</p>`,
  },
  // Add the missing blog post for "future-of-dx"
  'future-of-dx': {
    id: 'future-of-dx',
    title: 'DXの未来：2025年に向けたデジタル変革の展望',
    category: 'DX・戦略',
    categoryColor: '#4ECDC4',
    date: '2025年6月15日',
    author: {
      name: '山田 DX太郎',
      role: 'DXストラテジスト',
      bio: '企業のデジタル変革を15年間支援し、100社以上のDX推進をリード',
      avatar: '山',
    },
    readTime: '15分',
    tags: ['DX', 'デジタル変革', '戦略', 'イノベーション'],
    excerpt: '2025年に向けたDXの動向と、企業が取り組むべき次世代デジタル変革戦略について詳しく解説します。',
    image: '/DIGITAL.jpeg',
    heroGradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 50%, #093637 100%)',
    content: `<p>デジタル変革（DX）は単なる技術の導入を超え、企業の根本的な変革を促す重要な戦略となっています。2025年に向けて、DXはどのように進化し、企業はどのような取り組みを行うべきでしょうか。</p>

<h2>DXの現状と課題</h2>

<h3>多くの企業が直面する課題</h3>
<p>現在、多くの日本企業がDXに取り組んでいますが、以下のような課題に直面しています：</p>
<ul>
<li>既存システムのレガシー化</li>
<li>デジタルスキルを持つ人材の不足</li>
<li>組織の抵抗と文化的な壁</li>
<li>ROIの測定が困難</li>
<li>セキュリティとコンプライアンスの懸念</li>
</ul>

<h3>成功企業の共通点</h3>
<p>DXに成功している企業には以下の共通点があります：</p>
<ul>
<li>経営層の強いコミットメント</li>
<li>顧客中心のアプローチ</li>
<li>段階的な変革プロセス</li>
<li>データ駆動の意思決定</li>
</ul>

<h2>2025年のDXトレンド</h2>

<h3>1. ハイパーオートメーション</h3>
<p>AI、RPA、機械学習を組み合わせた包括的な自動化が主流になります。</p>

<blockquote>「ハイパーオートメーションは、単純な作業の自動化から、複雑な意思決定プロセスの支援まで幅広く対応します」</blockquote>

<h3>2. エッジコンピューティングの普及</h3>
<p>リアルタイム処理のニーズの高まりにより、エッジでのデータ処理が重要になります。</p>

<h3>3. ゼロトラストセキュリティ</h3>
<p>「信頼しない、常に検証する」アプローチが標準になります。</p>

<h3>4. 持続可能なIT</h3>
<p>環境配慮型のデジタル戦略が企業の競争力に直結します。</p>

<h2>業界別DX戦略</h2>

<h3>製造業</h3>
<p>Industry 4.0の実現に向けた取り組み：</p>
<ul>
<li>スマートファクトリーの構築</li>
<li>予知保全の導入</li>
<li>サプライチェーンの最適化</li>
<li>品質管理の自動化</li>
</ul>

<h3>金融業</h3>
<p>FinTechとの融合による新サービス創出：</p>
<ul>
<li>オープンバンキング</li>
<li>ブロックチェーン技術の活用</li>
<li>AIによるリスク管理</li>
<li>デジタル通貨への対応</li>
</ul>

<h3>小売業</h3>
<p>オムニチャネル戦略の深化：</p>
<ul>
<li>パーソナライゼーション</li>
<li>AR/VRショッピング体験</li>
<li>在庫管理の最適化</li>
<li>顧客データ活用</li>
</ul>

<h2>DX推進のベストプラクティス</h2>

<h3>1. ビジョンと戦略の明確化</h3>
<p>DXの目的と期待される成果を明確に定義しましょう。</p>

<h3>2. 小さく始めて大きく展開</h3>
<p>パイロットプロジェクトから始めて、成功事例を横展開します。</p>

<h3>3. 人材育成への投資</h3>
<p>デジタルスキルの向上は継続的な投資が必要です。</p>

<h3>4. パートナーシップの活用</h3>
<p>外部専門家との協業により、専門知識を補完します。</p>

<h2>測定指標（KPI）の設定</h2>

<h3>定量的指標</h3>
<ul>
<li>業務効率の改善率</li>
<li>コスト削減額</li>
<li>新規収益の創出</li>
<li>顧客満足度の向上</li>
</ul>

<h3>定性的指標</h3>
<ul>
<li>従業員のデジタルリテラシー</li>
<li>組織のアジリティ</li>
<li>イノベーション創出力</li>
<li>ブランド価値の向上</li>
</ul>

<h2>リスク管理と対策</h2>

<h3>技術的リスク</h3>
<p>システム障害やセキュリティ侵害への対策を講じます。</p>

<h3>組織的リスク</h3>
<p>変革への抵抗や人材流出を防ぐ施策が重要です。</p>

<h3>規制・コンプライアンスリスク</h3>
<p>法規制の変化に対応できる柔軟な体制を構築します。</p>

<h2>未来のDX</h2>

<h3>量子コンピューティング</h3>
<p>計算能力の飛躍的向上により、新たな可能性が開かれます。</p>

<h3>メタバース</h3>
<p>仮想空間でのビジネス展開が現実となります。</p>

<h3>Web3.0</h3>
<p>分散型インターネットが新しいビジネスモデルを創出します。</p>

<h2>まとめ</h2>
<p>DXは継続的な変革プロセスであり、2025年に向けてさらに加速していきます。成功の鍵は、技術導入だけでなく、組織文化の変革と人材育成にあります。</p>

<p>企業は自社の状況を正確に把握し、段階的かつ戦略的にDXを推進することで、持続可能な競争優位性を構築できるでしょう。</p>`,
  },
};

interface PageProps {
  params: Promise<{ id: string }>; // Fixed to Promise type
}

export default function BlogDetailPage({ params }: PageProps) {
  const { id } = React.use(params); // Use React.use() to unwrap the Promise
  const post = blogPosts[id as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

  // Related posts (exclude current post)
  const relatedPosts = Object.values(blogPosts)
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  return (
    <PageContainer>
      <BreadcrumbNav>
        <ol>
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/blog">ブログ</Link></li>
          <li>{post.title}</li>
        </ol>
      </BreadcrumbNav>

      <HeroSection style={{ background: post.heroGradient }}>
        <HeroContainer>
          <ArticleHeader>
            <div 
              className="category"
              style={{ backgroundColor: post.categoryColor }}
            >
              {post.category}
            </div>
            <div className="meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}の読み物</span>
              <span>•</span>
              <span>{post.author.name}</span>
            </div>
            <h1>{post.title}</h1>
          </ArticleHeader>
        </HeroContainer>
      </HeroSection>

      <ContentSection background="white">
        <Container>
          {post.image && (
            <ArticleImage>
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ArticleImage>
          )}
          
          <ArticleContent 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <AuthorInfo>
            <div className="avatar">{post.author.avatar}</div>
            <div className="info">
              <div className="name">{post.author.name}</div>
              <div className="role">{post.author.role}</div>
              <div className="bio">{post.author.bio}</div>
            </div>
          </AuthorInfo>
          
          <TagsSection>
            <div className="label">関連タグ</div>
            <div className="tags">
              {post.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </TagsSection>
          
          <RelatedPosts>
            <h3>関連記事</h3>
            <RelatedGrid>
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.id}`} style={{ textDecoration: 'none' }}>
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
                      <div className="meta">{related.date} • {related.readTime}</div>
                      <h4>{related.title}</h4>
                      <p>{related.excerpt}</p>
                    </div>
                  </RelatedCard>
                </Link>
              ))}
            </RelatedGrid>
          </RelatedPosts>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}
