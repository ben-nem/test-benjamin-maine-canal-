import { noop } from 'lodash';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from 'react';

import { usePopularMovies } from '@/hooks/usePopularMovies';
import { useSearchMovies } from '@/hooks/useSearchMovies';

import { FIRST_PAGE } from '@/constant/firstPage';
import {
  ISearchMoviesActions,
  searchMoviesReducer,
} from '@/reducers/searchMoviesReducer';

import { IMovie } from '@/types/IMovie';
import { MOVIE_SEARCH_MODE } from '@/types/movieSearchMode';

const ISearchMoviesInit = {
  isValidating: false,
  movies: null,
  movieSearchMode: MOVIE_SEARCH_MODE.DISCOVER,
  page: FIRST_PAGE,
  search: null,
  selectedGenreId: null,
};

const ISearchMoviesContextInit: ISearchMoviesContext = [
  ISearchMoviesInit,
  noop,
];

export type ISearchMoviesState = {
  movies: IMovie[] | null;
  movieSearchMode: MOVIE_SEARCH_MODE;
  page: number;
  search: string | null;
  selectedGenreId: number | null;
};

type ISearchMoviesContext = [
  ISearchMoviesState & { isValidating: boolean },
  Dispatch<ISearchMoviesActions>
];
const SearchMoviesContext = createContext<ISearchMoviesContext>(
  ISearchMoviesContextInit
);

export const SearchMoviesContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(searchMoviesReducer, ISearchMoviesInit);
  const { movies, movieSearchMode, page, search } = state;

  const { isValidatingPopularMovies } = usePopularMovies(
    {
      dispatch,
      movies: movieSearchMode === MOVIE_SEARCH_MODE.DISCOVER ? movies : [],
    },
    { page, shouldFetch: movieSearchMode === MOVIE_SEARCH_MODE.DISCOVER }
  );

  const { isValidatingSearchesMovies } = useSearchMovies(
    {
      dispatch,
      movies: movieSearchMode === MOVIE_SEARCH_MODE.SEARCH ? movies : [],
    },
    {
      query: search,
      page,
      shouldFetch: !!search && movieSearchMode === MOVIE_SEARCH_MODE.SEARCH,
    }
  );

  const providerValue = useMemo(
    () => ({
      isValidating: isValidatingPopularMovies || isValidatingSearchesMovies,
      ...state,
    }),
    [isValidatingPopularMovies, isValidatingSearchesMovies, state]
  );

  return (
    <SearchMoviesContext.Provider value={[providerValue, dispatch]}>
      {children}
    </SearchMoviesContext.Provider>
  );
};

export const useSearchMoviesContext = () => {
  const context = useContext(SearchMoviesContext);

  if (!context) {
    throw 'Please wrap your component with SearchMoviesContextProvider';
  }
  return context;
};
