import { styled } from '../stitches.config';

export const FormContainer = styled('div', {
  maxWidth: '600px',
  mx: 'auto',
  background: '$white',
  borderRadius: '$2xl',
  p: '$8',
  boxShadow: '$xl',
  border: '1px solid $border',
});

export const FormGroup = styled('div', {
  mb: '$6',
  
  '& label': {
    display: 'block',
    mb: '$2',
    fontSize: '$sm',
    fontWeight: '$semibold',
    color: '$textPrimary',
  },
  
  '& .required': {
    color: '$danger',
  },
  
  '& input, & textarea, & select': {
    width: '100%',
    px: '$4',
    py: '$3',
    border: '2px solid $border',
    borderRadius: '$lg',
    fontSize: '$base',
    transition: '$default',
    background: '$white',
    
    '&:focus': {
      outline: 'none',
      borderColor: '$primary',
      boxShadow: '0 0 0 3px rgba(255, 107, 53, 0.1)',
    },
  },
  
  '& textarea': {
    resize: 'vertical',
    minHeight: '120px',
  },
});

export const SearchBar = styled('div', {
  background: '$white',
  borderRadius: '$xl',
  border: '2px solid $border',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  
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
});

export const FileUpload = styled('div', {
  position: 'relative',
  
  '& input[type="file"]': {
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  
  '& .upload-area': {
    border: '2px dashed $border',
    borderRadius: '$lg',
    p: '$6',
    textAlign: 'center',
    transition: '$default',
    cursor: 'pointer',
    
    '&:hover': {
      borderColor: '$primary',
      background: '$surface',
    },
    
    '& .icon': {
      fontSize: '$3xl',
      color: '$textMuted',
      mb: '$2',
    },
    
    '& .text': {
      color: '$textSecondary',
      fontSize: '$sm',
    },
  },
});