import { styled } from '../stitches.config';

// Generic card component
export const Card = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  p: '$8',
  boxShadow: '$md',
  border: '1px solid $border',
  transition: '$default',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '$xl',
  },
  
  variants: {
    size: {
      sm: {
        p: '$4',
      },
      md: {
        p: '$6',
      },
      lg: {
        p: '$8',
      },
    },
    shadow: {
      none: {
        boxShadow: 'none',
      },
      sm: {
        boxShadow: '$sm',
      },
      md: {
        boxShadow: '$md',
      },
      lg: {
        boxShadow: '$lg',
      },
      xl: {
        boxShadow: '$xl',
      },
    },
  },
});

// Specialized card variants
export const ValueCard = styled(Card, {
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '$2xl',
  },
  
  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
  },
  
  variants: {
    color: {
      primary: {
        '&::before': {
          background: 'linear-gradient(90deg, $primary, $brand1)',
        },
      },
      secondary: {
        '&::before': {
          background: 'linear-gradient(90deg, $secondary, $brand2)',
        },
      },
      accent: {
        '&::before': {
          background: 'linear-gradient(90deg, $accent, $brand4)',
        },
      },
      success: {
        '&::before': {
          background: 'linear-gradient(90deg, $success, $brand3)',
        },
      },
      info: {
        '&::before': {
          background: 'linear-gradient(90deg, $info, $brand6)',
        },
      },
      purple: {
        '&::before': {
          background: 'linear-gradient(90deg, $brand5, #A55EEA)',
        },
      },
    },
  },
  
  '& .icon': {
    fontSize: '$5xl',
    mb: '$6',
    display: 'block',
  },
  
  '& h3': {
    fontSize: '$2xl',
    fontWeight: '$bold',
    mb: '$4',
    color: '$textPrimary',
  },
  
  '& p': {
    color: '$textSecondary',
    lineHeight: '$relaxed',
  },
});

export const ServiceCard = styled(Card, {
  overflow: 'hidden',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '$xl',
  },
});

export const ProjectCard = styled('article', {
  background: '$white',
  borderRadius: '$2xl',
  overflow: 'hidden',
  boxShadow: '$lg',
  border: '1px solid $border',
  transition: '$default',
  position: 'relative',
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '$2xl',
  },
  
  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
  },
  
  variants: {
    category: {
      dx: {
        '&::before': {
          background: 'linear-gradient(90deg, $primary, $brand1)',
        },
      },
      design: {
        '&::before': {
          background: 'linear-gradient(90deg, $secondary, $brand2)',
        },
      },
      animation: {
        '&::before': {
          background: 'linear-gradient(90deg, $accent, $brand4)',
        },
      },
      ai: {
        '&::before': {
          background: 'linear-gradient(90deg, $success, $brand3)',
        },
      },
      web: {
        '&::before': {
          background: 'linear-gradient(90deg, $info, $brand6)',
        },
      },
      mobile: {
        '&::before': {
          background: 'linear-gradient(90deg, $brand5, #A55EEA)',
        },
      },
    },
  },
});

export const NewsCard = styled('article', {
  background: '$white',
  borderRadius: '$xl',
  overflow: 'hidden',
  boxShadow: '$md',
  transition: '$default',
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '$lg',
  },
});

export const PostCard = styled('article', {
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