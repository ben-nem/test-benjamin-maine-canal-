import { HStack } from '@chakra-ui/react';
import { isEmpty, map, slice } from 'lodash';
import useSWR from 'swr';

import { avoidSWRRevalidateOption } from '@/constant/avoidSWRRevalidateOption';
import { ENDPOINTS } from '@/constant/endpoints';
import { NUMBER_OF_DISPLAYED_GENRES } from '@/constant/numberOfDisplayedGenres';
import { MovieGenreFilterLoading } from '@/features/Gallery/components';
import {
  GenreFilterItem,
  GenreFilterMoreMenu,
} from '@/features/Gallery/components/MovieGenreFilter';
import { genreFetcher } from '@/fetchers/genreFetcher';

export const GENRE_ITEM_WIDTH = '120px';

const MovieGenreFilter = () => {
  const { data: genres, isValidating } = useSWR(
    { url: ENDPOINTS.GENRE_LIST },
    genreFetcher,
    avoidSWRRevalidateOption
  );

  const firstsGenres = slice(genres, 0, NUMBER_OF_DISPLAYED_GENRES);
  const othersGenres = slice(genres, NUMBER_OF_DISPLAYED_GENRES);
  return isValidating ? (
    <MovieGenreFilterLoading />
  ) : (
    <HStack flexShrink={0} justifyContent='center'>
      {map(firstsGenres, ({ id, name }) => (
        <GenreFilterItem genreId={id} key={id}>
          {name}
        </GenreFilterItem>
      ))}
      {othersGenres && !isEmpty(othersGenres) && (
        <GenreFilterMoreMenu otherGenres={othersGenres} />
      )}
    </HStack>
  );
};

export default MovieGenreFilter;
