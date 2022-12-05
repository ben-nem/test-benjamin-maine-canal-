const components = {
  Button: {
    baseStyle: {
      bg: 'primary.soda',
      color: 'white',
      _disabled: { background: 'primary.sodaLight', cursor: 'default' },
      _hover: {
        backgroundColor: 'primary.sodaDark',
      },
    },
    default: { variant: 'primary' },
    variants: {
      cancel: { bg: 'red.600', color: 'white' },
      primary: {
        bg: 'primary.soda',
        color: 'white',
        _disabled: 'primary.sodaLight',
        _hover: 'primary.sodaDark',
      },
      secondary: {
        bg: 'primary.ming',
        _hover: 'primary.mingDark',
        _disabled: 'primary.mingLight',
        color: 'white',
      },
    },
  },
};

export default components;
