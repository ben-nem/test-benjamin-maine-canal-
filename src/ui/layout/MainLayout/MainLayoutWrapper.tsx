import { chakra } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const MainLayoutWrapper = ({ children, ...rest }: PropsWithChildren) => {
  return (
    <chakra.main
      display='flex'
      flex={1}
      flexDir='column'
      gap={4}
      py={8}
      px={4}
      overflow='hidden'
      {...rest}
    >
      {children}
    </chakra.main>
  );
};

export default MainLayoutWrapper;
