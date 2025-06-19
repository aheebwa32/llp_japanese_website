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
  FormContainer, 
  FormGroup 
} from '@/styles/components/forms';
import { 
  BreadcrumbNav 
} from '@/styles/components/navigation';
import { 
  Button 
} from '@/styles/components/buttons';
import { styled } from '@/styles/stitches.config';

const ContactGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$12',
  
  '@lg': {
    gridTemplateColumns: '2fr 1fr',
  },
});

const ContactForm = styled('form', {
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
});

const CheckboxGroup = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$3',
  mb: '$6',
  
  '& input[type="checkbox"]': {
    width: 'auto',
    mt: '$1',
  },
  
  '& label': {
    fontSize: '$sm',
    lineHeight: '$relaxed',
    color: '$textSecondary',
    mb: 0,
  },
});

const ContactInfo = styled('div', {
  '& h3': {
    fontSize: '$2xl',
    fontWeight: '$bold',
    mb: '$6',
    color: '$textPrimary',
  },
});

const InfoCard = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  p: '$6',
  mb: '$6',
  boxShadow: '$md',
  border: '1px solid $border',
  
  '& .icon': {
    fontSize: '$3xl',
    mb: '$4',
    display: 'block',
  },
  
  '& h4': {
    fontSize: '$xl',
    fontWeight: '$bold',
    mb: '$3',
    color: '$textPrimary',
  },
  
  '& p': {
    color: '$textSecondary',
    mb: '$2',
  },
});

const QuickActions = styled('div', {
  '& h4': {
    fontSize: '$xl',
    fontWeight: '$bold',
    mb: '$4',
    color: '$textPrimary',
  },
  
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
    
    '& a': {
      display: 'flex',
      alignItems: 'center',
      gap: '$3',
      p: '$4',
      background: '$white',
      borderRadius: '$lg',
      textDecoration: 'none',
      color: '$textPrimary',
      border: '1px solid $border',
      transition: '$default',
      
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '$md',
        borderColor: '$primary',
      },
      
      '& .icon': {
        fontSize: '$xl',
      },
      
      '& .content': {
        '& .title': {
          fontWeight: '$semibold',
          mb: '$1',
        },
        
        '& .desc': {
          fontSize: '$sm',
          color: '$textSecondary',
        },
      },
    },
  },
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      timeline: '',
      message: '',
      agree: false,
    });
    setIsSubmitting(false);
  };

  return (
    <PageContainer>
      <BreadcrumbNav>
        <ol>
          <li><Link href="/">ホーム</Link></li>
          <li>お問い合わせ</li>
        </ol>
      </BreadcrumbNav>

      <HeroSection gradient="brand">
        <HeroContainer>
          <HeroTitle>📞 お問い合わせ</HeroTitle>
          <HeroSubtitle>
            あなたのビジネス課題について、お気軽にご相談ください。
            経験豊富な専門チームが最適なソリューションをご提案いたします。
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <ContentSection background="surface">
        <Container>
          <ContactGrid>
            <ContactForm onSubmit={handleSubmit}>
              <h3>📋 プロジェクト相談フォーム</h3>
              
              <FormGroup>
                <label htmlFor="name">
                  お名前<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@company.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="company">
                  会社名<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="株式会社サンプル"
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="phone">電話番号</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="03-1234-5678"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="service">
                  ご希望のサービス<span className="required">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">選択してください</option>
                  <option value="dx">DX推進支援</option>
                  <option value="ui-ux">UI/UXデザイン</option>
                  <option value="animation">アニメーション制作</option>
                  <option value="consulting">技術コンサルティング</option>
                  <option value="development">システム開発</option>
                  <option value="other">その他</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="budget">想定予算</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="">選択してください</option>
                  <option value="under-1m">100万円未満</option>
                  <option value="1m-5m">100万円〜500万円</option>
                  <option value="5m-10m">500万円〜1,000万円</option>
                  <option value="10m-50m">1,000万円〜5,000万円</option>
                  <option value="over-50m">5,000万円以上</option>
                  <option value="undecided">未定</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="timeline">希望開始時期</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                >
                  <option value="">選択してください</option>
                  <option value="asap">すぐに</option>
                  <option value="1month">1ヶ月以内</option>
                  <option value="3months">3ヶ月以内</option>
                  <option value="6months">6ヶ月以内</option>
                  <option value="1year">1年以内</option>
                  <option value="undecided">未定</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="message">
                  プロジェクト詳細・ご質問<span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="プロジェクトの背景、課題、期待する成果などをお聞かせください..."
                  required
                />
              </FormGroup>

              <CheckboxGroup>
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="agree">
                  <Link href="/privacy">プライバシーポリシー</Link>に同意します<span className="required">*</span>
                </label>
              </CheckboxGroup>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.agree}
                fullWidth
                size="lg"
              >
                {isSubmitting ? '送信中...' : '📧 相談内容を送信する'}
              </Button>
            </ContactForm>

            <ContactInfo>
              <h3>📍 お問い合わせ先</h3>
              
              <InfoCard>
                <span className="icon">🏢</span>
                <h4>本社オフィス</h4>
                <p>〒150-0013</p>
                <p>東京都渋谷区恵比寿1-1-1</p>
                <p>恵比寿ガーデンプレイス</p>
              </InfoCard>

              <InfoCard>
                <span className="icon">📞</span>
                <h4>電話番号</h4>
                <p>03-1234-5678</p>
                <p>受付時間: 平日 9:00-18:00</p>
              </InfoCard>

              <InfoCard>
                <span className="icon">📧</span>
                <h4>メールアドレス</h4>
                <p>info@llp-tech-solutions.jp</p>
                <p>24時間受付</p>
              </InfoCard>

              <QuickActions>
                <h4>🚀 クイックアクション</h4>
                <div>
                  <Link href="/projects">
                    <span className="icon">💼</span>
                    <div className="content">
                      <div className="title">導入事例を見る</div>
                      <div className="desc">過去のプロジェクト事例</div>
                    </div>
                  </Link>
                  <a href="/downloads/company-profile.pdf" target="_blank">
                    <span className="icon">📄</span>
                    <div className="content">
                      <div className="title">会社案内ダウンロード</div>
                      <div className="desc">PDF形式・2.5MB</div>
                    </div>
                  </a>
                  <a href="https://calendly.com/llp-tech-solutions" target="_blank" rel="noopener noreferrer">
                    <span className="icon">📅</span>
                    <div className="content">
                      <div className="title">オンライン面談予約</div>
                      <div className="desc">Web会議で詳細相談</div>
                    </div>
                  </a>
                </div>
              </QuickActions>
            </ContactInfo>
          </ContactGrid>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}