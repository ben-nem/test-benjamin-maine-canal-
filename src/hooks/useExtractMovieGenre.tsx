import { isEmpty } from 'lodash';
import useSWR from 'swr';

import { avoidSWRRevalidateOption } from '@/constant/avoidSWRRevalidateOption';
import { ENDPOINTS } from '@/constant/endpoints';
import { genreFetcher } from '@/fetchers';
import { extractMovieGenre } from '@/utils/extractMovieGenre';

import { IGenre } from '@/types/IGenre';

export const useExtractMovieGenre = (
  movieIds: number[] | undefined
): IGenre[] | null => {
  const { data: genreList } = useSWR(
    { url: ENDPOINTS.GENRE_LIST },
    genreFetcher,
    avoidSWRRevalidateOption
  );
  if (!genreList || isEmpty(genreList) || !movieIds || isEmpty(movieIds)) {
    return null;
  }

  return extractMovieGenre(genreList, movieIds);
};
