import { CloseIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { debounce, trim } from 'lodash';
import React, { ChangeEventHandler } from 'react';

import { useSearchMoviesContext } from '@/hooks/useSearchMoviesContext';

import { SearchBarProps } from '@/features/SearchEngine/components/SearchBar/SearchBar';
import { SEARCH_MOVIES_ACTIONS } from '@/reducers/searchMoviesReducer';

const SEARCH_DEBOUNCE_VALUE = 400;

const SearchBarOpened = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ isOpen, toggleIsOpen }, ref) => {
    const [_, dispatch] = useSearchMoviesContext();

    const handleChangeInput: ChangeEventHandler<HTMLInputElement> = ({
      target: { value },
    }) => {
      const newSearchText = trim(value);
      !!newSearchText &&
        dispatch({
          type: SEARCH_MOVIES_ACTIONS.SET_SEARCH,
          payload: newSearchText,
        });
    };
    const debounceChangeInput = debounce(
      handleChangeInput,
      SEARCH_DEBOUNCE_VALUE
    );
    const handleCloseSearchBar = () => {
      dispatch({ type: SEARCH_MOVIES_ACTIONS.RESET_SEARCH });
      toggleIsOpen();
    };

    return (
      <InputGroup
        border='1px'
        borderColor='white'
        borderRadius='md'
        display={isOpen ? 'flex' : 'none'}
      >
        <Input
          border='none'
          color='white'
          ref={ref}
          onChange={debounceChangeInput}
          minH={10}
          _selection={{ color: 'white', backgroundColor: 'gray.600' }}
          _focusVisible={{ border: 'none' }}
        />
        <InputRightAddon bg='primary.ming' border='none'>
          <CloseIcon color='white' onClick={handleCloseSearchBar} />
        </InputRightAddon>
      </InputGroup>
    );
  }
);

export default SearchBarOpened;
