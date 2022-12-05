import { HStack, Skeleton } from '@chakra-ui/react';

import { GENRE_ITEM_WIDTH } from '@/features/Gallery/components/MovieGenreFilter/MovieGenreFilter';

const MovieGenreFilterLoading = () => (
  <HStack>
    <Skeleton h={6} w={GENRE_ITEM_WIDTH} />
    <Skeleton h={6} w={GENRE_ITEM_WIDTH} />
    <Skeleton h={6} w={GENRE_ITEM_WIDTH} />
    <Skeleton h={6} w={GENRE_ITEM_WIDTH} />
  </HStack>
);
export default MovieGenreFilterLoading;
