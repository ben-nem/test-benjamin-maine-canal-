import { useEffect, useRef } from 'react';

import { useToggle } from '@/utils';
import { IToggle } from '@/utils/useToggle';

import { SearchBarClosed, SearchBarOpened } from './index';

export type SearchBarProps = { isOpen: boolean; toggleIsOpen: IToggle };

const SearchBar = () => {
  const [isOpen, toggleIsOpen] = useToggle();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      searchInputRef?.current?.focus();
    }
  }, [isOpen, searchInputRef]);

  return isOpen ? (
    <SearchBarOpened
      isOpen={isOpen}
      toggleIsOpen={toggleIsOpen}
      ref={searchInputRef}
    />
  ) : (
    <SearchBarClosed toggleIsOpen={toggleIsOpen} />
  );
};

SearchBar.Opened = SearchBarOpened;
SearchBar.Closed = SearchBarClosed;

export default SearchBar;
