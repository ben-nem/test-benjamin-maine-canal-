import { ENDPOINTS } from '@/constant/endpoints';
import { defaultFetcher } from '@/fetchers/defaultFetcher';

import { IGenre } from '@/types/IGenre';

export const genreFetcher = (): Promise<IGenre[] | undefined> => {
  return defaultFetcher<undefined, { genres: IGenre[] }>({
    url: ENDPOINTS.GENRE_LIST,
  }).then(({ genres }) => {
    if (genres) {
      return genres;
    }
    return undefined;
  });
};
