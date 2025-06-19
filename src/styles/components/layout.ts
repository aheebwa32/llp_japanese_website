import { styled } from '../stitches.config';

// Common layout components
export const PageContainer = styled('div', {
  minHeight: '100vh',
});

export const Container = styled('div', {
  maxWidth: '1200px',
  mx: 'auto',
  px: '$4',
  
  '@md': {
    px: '$6',
  },
});

export const ContentSection = styled('section', {
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

export const Grid = styled('div', {
  display: 'grid',
  gap: '$8',
  
  variants: {
    columns: {
      1: {
        gridTemplateColumns: '1fr',
      },
      2: {
        gridTemplateColumns: '1fr',
        '@md': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
      },
      3: {
        gridTemplateColumns: '1fr',
        '@md': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@lg': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
      },
      4: {
        gridTemplateColumns: '1fr',
        '@md': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@lg': {
          gridTemplateColumns: 'repeat(4, 1fr)',
        },
      },
    },
  },
});