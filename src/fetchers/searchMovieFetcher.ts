import { FIRST_PAGE } from '@/constant/firstPage';
import { defaultFetcher } from '@/fetchers';

import { ISearchMoviesParams } from '@/types/fetcherParams';
import { IAPIResponse } from '@/types/IAPIResponse';
import { IMovie } from '@/types/IMovie';

const defaultParams = {
  query: null,
  page: FIRST_PAGE,
};

type IParams = Partial<ISearchMoviesParams> | undefined;

export const searchMovieFetcher = async ({
  args,
  url,
}: {
  args?: IParams;
  url: string;
}): Promise<IMovie[] | undefined> => {
  return defaultFetcher<IParams, IAPIResponse<IMovie[]>>({
    args: { ...defaultParams, ...args },
    url,
  }).then(({ results }) => {
    if (results) {
      return results;
    }
    return undefined;
  });
};
