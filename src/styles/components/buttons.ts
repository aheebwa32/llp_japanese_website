import { styled } from '../stitches.config';

export const Button = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  px: '$6',
  py: '$3',
  borderRadius: '$lg',
  fontSize: '$base',
  fontWeight: '$semibold',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  transition: '$default',
  
  variants: {
    variant: {
      primary: {
        background: 'linear-gradient(45deg, $primary, $brand1)',
        color: '$white',
        
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '$lg',
        },
      },
      secondary: {
        background: 'transparent',
        color: '$primary',
        border: '2px solid $primary',
        
        '&:hover': {
          background: '$primary',
          color: '$white',
        },
      },
      outline: {
        background: 'transparent',
        color: '$textPrimary',
        border: '2px solid $border',
        
        '&:hover': {
          borderColor: '$primary',
          color: '$primary',
        },
      },
      ghost: {
        background: 'transparent',
        color: '$textSecondary',
        
        '&:hover': {
          background: '$surface',
          color: '$textPrimary',
        },
      },
    },
    size: {
      sm: {
        px: '$4',
        py: '$2',
        fontSize: '$sm',
      },
      md: {
        px: '$6',
        py: '$3',
        fontSize: '$base',
      },
      lg: {
        px: '$8',
        py: '$4',
        fontSize: '$lg',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    rounded: {
      true: {
        borderRadius: '$full',
      },
    },
  },
  
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export const FilterButton = styled('button', {
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

export const CTAButton = styled('a', {
  background: '$white',
  color: '$textPrimary',
  px: '$8',
  py: '$4',
  borderRadius: '$full',
  fontSize: '$lg',
  fontWeight: '$bold',
  textDecoration: 'none',
  transition: '$default',
  boxShadow: '$xl',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '$2xl',
  },
  
  variants: {
    variant: {
      secondary: {
        background: 'transparent',
        color: '$white',
        border: '2px solid $white',
        
        '&:hover': {
          background: '$white',
          color: '$textPrimary',
        },
      },
    },
  },
});