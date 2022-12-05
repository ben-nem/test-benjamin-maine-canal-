import { SearchIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { SearchBarProps } from '@/features/SearchEngine/components/SearchBar/SearchBar';

const SEARCH_ICON_SIZE = 6;

const SearchBarClosed = ({
  toggleIsOpen,
}: Pick<SearchBarProps, 'toggleIsOpen'>) => {
  const handleClickSearchIcon = () => {
    toggleIsOpen();
  };
  return (
    <SearchBarClosedWrapper>
      <SearchIcon
        color='white'
        height={SEARCH_ICON_SIZE}
        onClick={handleClickSearchIcon}
        width={SEARCH_ICON_SIZE}
      />
    </SearchBarClosedWrapper>
  );
};

export default SearchBarClosed;

const SearchBarClosedWrapper = ({ children }: PropsWithChildren) => (
  <Flex alignItems='center' h={10} mr={4}>
    {children}
  </Flex>
);
