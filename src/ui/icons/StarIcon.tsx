import { ChakraProps, Icon } from '@chakra-ui/react';
import React from 'react';

const DEFAULT_ICON_SIZE = '20px';

interface StarIconProps extends ChakraProps {
  filled?: 'empty' | 'full' | 'half';
}
export const StarIcon = ({
  filled = 'full',
  left,
  height = DEFAULT_ICON_SIZE,
  width = DEFAULT_ICON_SIZE,
  ...props
}: StarIconProps) => {
  return (
    <Icon
      left={left}
      fill={filled === 'empty' ? '#5d6269' : '#ffdd00'}
      height={height}
      viewBox={filled === 'half' ? '0 0 10 20' : '0 0 20 20'}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      {...props}
    >
      <path d='m10 0 2.5 7.6H20l-6 4.2 2.1 7.2-6.1-4.2-6.2 4.3L6 11.9 0 7.6h7.5L10 0z'></path>
    </Icon>
  );
};
