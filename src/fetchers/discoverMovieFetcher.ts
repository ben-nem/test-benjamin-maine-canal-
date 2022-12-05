import { FIRST_PAGE } from '@/constant/firstPage';
import { defaultFetcher } from '@/fetchers';

import { IPopularMoviesParams } from '@/types/fetcherParams';
import { IAPIResponse } from '@/types/IAPIResponse';
import { IMovie } from '@/types/IMovie';

export const defaultPopularMoviesParams: IPopularMoviesParams = {
  include_null_first_air_dates: false,
  page: FIRST_PAGE,
  sort_by: 'popularity.desc',
  timezone: 'Europe/Paris',
};

type IParams = Partial<IPopularMoviesParams> | undefined;

export const discoverMovieFetcher = ({
  args,
  url,
}: {
  args?: IParams;
  url: string;
}) => {
  return defaultFetcher<IParams, IAPIResponse<IMovie[]>>({
    args: { ...defaultPopularMoviesParams, ...args },
    url,
  }).then(({ results }) => {
    if (results) {
      return results;
    }
    return undefined;
  });
};
