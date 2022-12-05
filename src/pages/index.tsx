import * as React from 'react';
import { SWRConfig, SWRConfiguration } from 'swr';

import { SearchMoviesContextProvider } from '@/hooks/useSearchMoviesContext';

import { ENDPOINTS } from '@/constant/endpoints';
import { MovieGallery } from '@/features/Gallery/components';
import { discoverMovieFetcher, genreFetcher } from '@/fetchers';
import { MainLayout } from '@/ui/layout/MainLayout/MainLayout';

export async function getServerSideProps() {
  const movies = await discoverMovieFetcher({ url: ENDPOINTS.POPULAR_MOVIE });
  const genreList = await genreFetcher();
  return {
    props: {
      fallback: {
        [ENDPOINTS.POPULAR_MOVIE]: movies,
        [ENDPOINTS.GENRE_LIST]: genreList,
      },
    },
  };
}

export default function HomePage({ fallback }: { fallback: SWRConfiguration }) {
  return (
    <SWRConfig value={{ fallback }}>
      <SearchMoviesContextProvider>
        <MainLayout>
          <MovieGallery />
        </MainLayout>
      </SearchMoviesContextProvider>
    </SWRConfig>
  );
}
