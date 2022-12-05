type IMoviesParams = {
  page: number;
  timezone: string;
};

export type IPopularMoviesParams = IMoviesParams & {
  sort_by: 'popularity.desc' | 'popularity.asc';
  include_null_first_air_dates: boolean;
};

export type ISearchMoviesParams = IMoviesParams & {
  query: string | null;
};
