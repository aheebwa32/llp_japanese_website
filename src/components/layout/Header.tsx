'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { styled } from '@/styles/stitches.config';

const HeaderContainer = styled('header', {
  background: 'linear-gradient(135deg, $primary 0%, $secondary 50%, $brand2 100%)',
  color: '$white',
  position: 'sticky',
  top: 0,
  zIndex: '$sticky',
  boxShadow: '$lg',
});

const TopBanner = styled('div', {
  background: 'linear-gradient(90deg, $accent 0%, $brand4 100%)',
  color: '$textPrimary',
  textAlign: 'center',
  py: '$2',
  fontSize: '$sm',
  fontWeight: '$medium',
  
  '& span': {
    background: '$white',
    px: '$3',
    py: '$1',
    borderRadius: '$full',
    mx: '$2',
    fontWeight: '$bold',
  },
});

const Nav = styled('nav', {
  maxWidth: '1200px',
  mx: 'auto',
  px: '$4',
  py: '$4',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  
  '@md': {
    px: '$6',
  },
});

const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  
  '& h1': {
    fontSize: '$2xl',
    fontWeight: '$black',
    color: '$white',
    margin: 0,
    
    '@md': {
      fontSize: '$3xl',
    },
  },
  
  '& span': {
    fontSize: '$sm',
    opacity: 0.9,
    fontWeight: '$medium',
  },
});

const LogoIcon = styled('div', {
  size: '$12',
  background: 'linear-gradient(45deg, $accent, $brand3)',
  borderRadius: '$lg',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$xl',
  fontWeight: '$black',
  color: '$textPrimary',
  boxShadow: '$md',
});

const NavLinks = styled('ul', {
  display: 'none',
  listStyle: 'none',
  gap: '$6',
  margin: 0,
  padding: 0,
  
  '@lg': {
    display: 'flex',
  },
});

const NavLink = styled('li', {
  '& a': {
    color: '$white',
    fontSize: '$base',
    fontWeight: '$medium',
    textDecoration: 'none',
    position: 'relative',
    transition: '$default',
    padding: '$2 $3',
    borderRadius: '$base',
    
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateY(-2px)',
    },
    
    '&::after': {
      content: '',
      position: 'absolute',
      bottom: '-4px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '2px',
      background: '$accent',
      transition: '$default',
    },
    
    '&:hover::after': {
      width: '100%',
    },
  },
});

const MobileMenuButton = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '$2',
  
  '@lg': {
    display: 'none',
  },
  
  '& span': {
    width: '24px',
    height: '3px',
    background: '$white',
    borderRadius: '$full',
    transition: '$default',
  },
  
  variants: {
    isOpen: {
      true: {
        '& span:nth-child(1)': {
          transform: 'rotate(45deg) translate(6px, 6px)',
        },
        '& span:nth-child(2)': {
          opacity: 0,
        },
        '& span:nth-child(3)': {
          transform: 'rotate(-45deg) translate(6px, -6px)',
        },
      },
    },
  },
});

const MobileMenu = styled('div', {
  display: 'none',
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  background: '$secondary',
  boxShadow: '$xl',
  
  variants: {
    isOpen: {
      true: {
        display: 'block',
      },
    },
  },
});

const MobileNavLinks = styled('ul', {
  listStyle: 'none',
  margin: 0,
  padding: '$4',
  
  '& li': {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    
    '&:last-child': {
      borderBottom: 'none',
    },
    
    '& a': {
      display: 'block',
      color: '$white',
      fontSize: '$lg',
      fontWeight: '$medium',
      textDecoration: 'none',
      py: '$4',
      transition: '$default',
      
      '&:hover': {
        color: '$accent',
        pl: '$4',
      },
    },
  },
});

const ContactCTA = styled('div', {
  display: 'none',
  gap: '$3',
  
  '@lg': {
    display: 'flex',
  },
});

const CTAButton = styled('a', {
  background: 'linear-gradient(45deg, $accent, $brand4)',
  color: '$textPrimary',
  px: '$6',
  py: '$3',
  borderRadius: '$full',
  fontSize: '$sm',
  fontWeight: '$bold',
  textDecoration: 'none',
  transition: '$default',
  boxShadow: '$md',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '$xl',
  },
});

const PhoneNumber = styled('div', {
  color: '$white',
  fontSize: '$sm',
  fontWeight: '$medium',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '& span': {
    fontSize: '$xs',
    opacity: 0.8,
  },
});

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/about', label: 'LLPについて' },
    { href: '/members', label: 'メンバー企業' },
    { href: '/projects', label: 'プロジェクト' },
    { href: '/news', label: 'ニュース' },
    { href: '/blog', label: 'ブログ' },
    { href: '/careers', label: 'キャリア' },
  ];

  return (
    <HeaderContainer>
      <TopBanner>
        🚀 <span>NEW</span> DX推進支援サービス開始！
        <span>特別価格</span> 今なら初回コンサルティング無料
        ⭐ <span>限定</span> 2025年6月末まで
      </TopBanner>
      
      <Nav>
        <Logo>
          {/* <LogoIcon>L</LogoIcon> */}
          <div>
            <h1>AEGIS LLP Co.</h1>
            {/* <span>技術革新パートナーシップ</span> */}
          </div>
        </Logo>
        
        <NavLinks>
          {navItems.map((item) => (
            <NavLink key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </NavLink>
          ))}
        </NavLinks>
        
        <ContactCTA>
          
          <CTAButton href="/contact">
       接触
          </CTAButton>
        </ContactCTA>
        
        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </MobileMenuButton>
      </Nav>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLinks>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </li>
        </MobileNavLinks>
      </MobileMenu>
    </HeaderContainer>
  );
};