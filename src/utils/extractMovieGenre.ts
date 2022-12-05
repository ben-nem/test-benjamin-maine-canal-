import { filter, includes, isEmpty } from 'lodash';

import { IGenre } from '@/types/IGenre';

export const extractMovieGenre = (
  genreList: IGenre[],
  movieIds: number[]
): IGenre[] | null => {
  const genres = filter(genreList, ({ id }) => includes(movieIds, id));
  return isEmpty(genres) ? null : genres;
};
