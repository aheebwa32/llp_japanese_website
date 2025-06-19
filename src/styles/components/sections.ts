import { styled } from '../stitches.config';

// Hero sections
export const HeroSection = styled('section', {
  color: '$white',
  py: '$20',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  
  variants: {
    gradient: {
      primary: {
        background: 'linear-gradient(135deg, $primary 0%, $secondary 25%, $brand2 50%, $brand5 75%, $brand1 100%)',
      },
      secondary: {
        background: 'linear-gradient(135deg, $secondary 0%, $brand2 50%, $primary 100%)',
      },
      brand: {
        background: 'linear-gradient(135deg, $brand3 0%, $success 50%, $brand6 100%)',
      },
      news: {
        background: 'linear-gradient(135deg, $brand4 0%, $accent 50%, $warning 100%)',
      },
      blog: {
        background: 'linear-gradient(135deg, $brand5 0%, $info 50%, $secondary 100%)',
      },
      projects: {
        background: 'linear-gradient(135deg, $brand2 0%, $primary 50%, $brand1 100%)',
      },
      careers: {
        background: 'linear-gradient(135deg, $brand3 0%, $success 50%, $primary 100%)',
      },
    },
  },
});

export const HeroContainer = styled('div', {
  maxWidth: '1200px',
  mx: 'auto',
  px: '$4',
  
  '@md': {
    px: '$6',
  },
});

export const HeroTitle = styled('h1', {
  fontSize: '$5xl',
  fontWeight: '$black',
  mb: '$6',
  lineHeight: '$tight',
  
  '@md': {
    fontSize: '$6xl',
  },
  
  '& span': {
    background: 'linear-gradient(45deg, $accent, $brand3)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
  },
});

export const HeroSubtitle = styled('p', {
  fontSize: '$xl',
  mb: '$8',
  opacity: 0.9,
  maxWidth: '800px',
  mx: 'auto',
  lineHeight: '$relaxed',
  
  '@md': {
    fontSize: '$2xl',
  },
});

export const SectionTitle = styled('h2', {
  fontSize: '$4xl',
  fontWeight: '$black',
  textAlign: 'center',
  mb: '$4',
  color: '$textPrimary',
  
  '@md': {
    fontSize: '$5xl',
  },
});

export const SectionSubtitle = styled('p', {
  fontSize: '$xl',
  textAlign: 'center',
  color: '$textSecondary',
  mb: '$16',
  maxWidth: '600px',
  mx: 'auto',
  lineHeight: '$relaxed',
});