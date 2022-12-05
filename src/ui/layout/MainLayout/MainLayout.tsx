import { ChakraProps, Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import Header from '@/ui/layout/Header';
import MainLayoutWrapper from '@/ui/layout/MainLayout/MainLayoutWrapper';

type MainLayoutProps = PropsWithChildren<ChakraProps>;

export const MainLayout = ({ children, ...styles }: MainLayoutProps) => {
  return (
    <Flex
      direction='column'
      mt={0}
      minHeight='100vh'
      maxHeight='100vh'
      overflowY='auto'
    >
      <Header />
      <MainLayoutWrapper {...styles}>{children}</MainLayoutWrapper>
    </Flex>
  );
};
