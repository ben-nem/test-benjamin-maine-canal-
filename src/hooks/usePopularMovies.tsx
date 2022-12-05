import { Dispatch, useEffect } from 'react';
import useSWR from 'swr';

import { ISearchMoviesState } from '@/hooks/useSearchMoviesContext';

import { ENDPOINTS } from '@/constant/endpoints';
import { discoverMovieFetcher } from '@/fetchers';
import {
  ISearchMoviesActions,
  SEARCH_MOVIES_ACTIONS,
} from '@/reducers/searchMoviesReducer';
import { getUpdatedMovies } from '@/utils/getUpdatedMovies';

import { IPopularMoviesParams } from '@/types/fetcherParams';

export const usePopularMovies = (
  {
    dispatch,
    movies,
  }: {
    dispatch: Dispatch<ISearchMoviesActions>;
    movies: ISearchMoviesState['movies'];
  },
  {
    page,
    shouldFetch,
  }: Pick<IPopularMoviesParams, 'page'> & { shouldFetch: boolean }
) => {
  const { data: popularMovies, isValidating } = useSWR(
    shouldFetch ? { url: ENDPOINTS.POPULAR_MOVIE, args: { page } } : null,
    discoverMovieFetcher,
    { revalidateOnFocus: false }
  );
  useEffect(() => {
    const updatedMovies = getUpdatedMovies([movies, popularMovies]);

    if (updatedMovies && !isValidating) {
      dispatch({
        type: SEARCH_MOVIES_ACTIONS.UPDATE_MOVIES,
        payload: updatedMovies,
      });
    }
  }, [dispatch, popularMovies, isValidating, movies]);

  return { isValidatingPopularMovies: isValidating };
};
