import { Dispatch, useEffect } from 'react';
import useSWR from 'swr';

import { ISearchMoviesState } from '@/hooks/useSearchMoviesContext';

import { ENDPOINTS } from '@/constant/endpoints';
import { searchMovieFetcher } from '@/fetchers';
import {
  ISearchMoviesActions,
  SEARCH_MOVIES_ACTIONS,
} from '@/reducers/searchMoviesReducer';
import { getUpdatedMovies } from '@/utils/getUpdatedMovies';

import { ISearchMoviesParams } from '@/types/fetcherParams';

export const useSearchMovies = (
  {
    dispatch,
    movies,
  }: {
    dispatch: Dispatch<ISearchMoviesActions>;
    movies: ISearchMoviesState['movies'];
  },
  {
    page,
    query,
    shouldFetch,
  }: Pick<ISearchMoviesParams, 'query' | 'page'> & { shouldFetch: boolean }
) => {
  const { data: searchedMovies, isValidating } = useSWR(
    shouldFetch ? { url: ENDPOINTS.SEARCH_MOVIE, args: { page, query } } : null,
    searchMovieFetcher,
    { revalidateOnFocus: false }
  );
  useEffect(() => {
    const updatedMovies = getUpdatedMovies([movies, searchedMovies]);

    if (updatedMovies && !isValidating) {
      dispatch({
        type: SEARCH_MOVIES_ACTIONS.UPDATE_MOVIES,
        payload: searchedMovies || null,
      });
    }
  }, [dispatch, searchedMovies, isValidating, movies, query]);

  return { isValidatingSearchesMovies: isValidating };
};
