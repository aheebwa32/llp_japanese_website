import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  
  'html': {
    scrollBehavior: 'smooth',
  },
  
  'body': {
    fontFamily: '$japanese',
    backgroundColor: '$background',
    color: '$textPrimary',
    lineHeight: '$normal',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: '$bold',
    lineHeight: '$tight',
    color: '$textPrimary',
  },
  
  'h1': {
    fontSize: '$5xl',
    '@md': {
      fontSize: '$6xl',
    },
  },
  
  'h2': {
    fontSize: '$4xl',
    '@md': {
      fontSize: '$5xl',
    },
  },
  
  'h3': {
    fontSize: '$3xl',
    '@md': {
      fontSize: '$4xl',
    },
  },
  
  'h4': {
    fontSize: '$2xl',
    '@md': {
      fontSize: '$3xl',
    },
  },
  
  'h5': {
    fontSize: '$xl',
    '@md': {
      fontSize: '$2xl',
    },
  },
  
  'h6': {
    fontSize: '$lg',
    '@md': {
      fontSize: '$xl',
    },
  },
  
  'p': {
    lineHeight: '$relaxed',
    color: '$textSecondary',
  },
  
  'a': {
    color: '$primary',
    textDecoration: 'none',
    transition: '$default',
    
    '&:hover': {
      textDecoration: 'underline',
      color: '$secondary',
    },
  },
  
  'button': {
    fontFamily: 'inherit',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    
    '&:focus': {
      outline: '2px solid $primary',
      outlineOffset: '2px',
    },
  },
  
  'input, textarea, select': {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    
    '&:focus': {
      outline: '2px solid $primary',
      outlineOffset: '2px',
    },
  },
  
  'img': {
    maxWidth: '100%',
    height: 'auto',
  },
  
  // Japanese-specific styles
  '.japanese-emphasis': {
    background: 'linear-gradient(45deg, $accent, $brand4)',
    color: '$white',
    padding: '$2 $4',
    borderRadius: '$base',
    fontWeight: '$bold',
    display: 'inline-block',
    margin: '$1',
  },
  
  '.info-dense': {
    fontSize: '$sm',
    lineHeight: '$snug',
    '& + &': {
      marginTop: '$2',
    },
  },
  
  // Animation keyframes
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  
  '@keyframes slideIn': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0)' },
  },
  
  '@keyframes bounce': {
    '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
    '40%, 43%': { transform: 'translate3d(0,-30px,0)' },
    '70%': { transform: 'translate3d(0,-15px,0)' },
    '90%': { transform: 'translate3d(0,-4px,0)' },
  },
  
  '.animate-fadeIn': {
    animation: 'fadeIn 0.5s ease-out',
  },
  
  '.animate-slideIn': {
    animation: 'slideIn 0.3s ease-out',
  },
  
  '.animate-bounce': {
    animation: 'bounce 1s ease-in-out infinite',
  },
});