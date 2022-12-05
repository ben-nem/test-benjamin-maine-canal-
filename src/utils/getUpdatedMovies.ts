import { find, isEmpty } from 'lodash';

import { ISearchMoviesState } from '@/hooks/useSearchMoviesContext';

import { IMovie } from '@/types/IMovie';
type IUpdatedMovies = ISearchMoviesState['movies'];

export const getUpdatedMovies = ([oldMovies, newMovies]: [
  IUpdatedMovies,
  IMovie[] | undefined
]): IUpdatedMovies => {
  const lastFetchMovies = newMovies && newMovies.at(-1);
  const shouldUpdateMovies =
    !isEmpty(newMovies) &&
    !!newMovies &&
    !find(oldMovies, ({ id }) => id === lastFetchMovies?.id);

  if (shouldUpdateMovies) {
    return [...(oldMovies || []), ...newMovies];
  }
  return null;
};
