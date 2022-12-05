import { Text } from '@chakra-ui/react';
import { forwardRef, PropsWithChildren } from 'react';

import { useSearchMoviesContext } from '@/hooks/useSearchMoviesContext';

import { GENRE_ITEM_WIDTH } from '@/features/Gallery/components/MovieGenreFilter/MovieGenreFilter';
import { SEARCH_MOVIES_ACTIONS } from '@/reducers/searchMoviesReducer';

type GenreFilterItemProps = {
  genreId: number | null;
};

const GenreFilterItem = ({
  children,
  genreId,
}: PropsWithChildren<GenreFilterItemProps>) => {
  const [{ selectedGenreId }, dispatch] = useSearchMoviesContext();
  const handleChangeSelectedGenre = () => {
    genreId !== null &&
      dispatch({
        type: SEARCH_MOVIES_ACTIONS.SET_SELECTED_GENRE_ID,
        payload: genreId,
      });
  };
  const isActive = selectedGenreId === genreId;

  return (
    <Text
      textAlign='center'
      color={isActive ? 'primary.sodaDark' : 'inherit'}
      cursor='pointer'
      fontSize='xl'
      minW={GENRE_ITEM_WIDTH}
      onClick={handleChangeSelectedGenre}
      _hover={{ color: 'primary.soda' }}
    >
      {children}
    </Text>
  );
};

export default forwardRef<
  HTMLDivElement,
  PropsWithChildren<GenreFilterItemProps>
>(GenreFilterItem);
