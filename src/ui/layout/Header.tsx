import { UseDisclosureProps } from '@chakra-ui/hooks';
import { Avatar, HStack } from '@chakra-ui/react';
import * as React from 'react';

import SearchBar from '@/features/SearchEngine/components/SearchBar/SearchBar';

const MOCK_USER = {
  firstName: 'firstName',
  lastName: 'lastName',
};
type HeaderProps = Pick<UseDisclosureProps, 'onOpen'>;
const Header = ({ onOpen }: HeaderProps) => {
  return (
    <HStack
      as='header'
      bg='primary.ming'
      borderBottom='1px'
      borderColor='primary.ming'
      display='flex'
      justifyContent='end'
      p={4}
      pb={2}
    >
      <SearchBar />
      <Avatar
        cursor='pointer'
        data-testid='header-avatar'
        onClick={onOpen}
        name={MOCK_USER.firstName}
      />
    </HStack>
  );
};

export default Header;
