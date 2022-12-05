import { map } from 'lodash';

export const defaultFetcher = async <TData, TResponse>({
  args,
  url,
}: {
  args?: TData;
  url: string;
}): Promise<TResponse> => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  if (
    typeof process.env.NEXT_PUBLIC_BASE_URL === 'undefined' ||
    typeof apiKey === 'undefined'
  ) {
    throw Error('initialization failed');
  }
  const baseURL = new URL(process.env.NEXT_PUBLIC_BASE_URL + url);
  const queryParams = { api_key: apiKey, ...args };

  map(queryParams, (param, key) =>
    baseURL.searchParams.append(key, String(param))
  );

  return fetch(baseURL).then((res) => res.json());
};
