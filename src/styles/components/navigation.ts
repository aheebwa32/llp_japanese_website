import { styled } from '../stitches.config';

export const BreadcrumbNav = styled('nav', {
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

export const FilterSection = styled('div', {
  mb: '$12',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  
  '@md': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const FilterButtons = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  justifyContent: 'center',
  
  '@md': {
    justifyContent: 'flex-start',
  },
});