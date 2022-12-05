import { HStack, Text } from '@chakra-ui/react';
import { map } from 'lodash';

import { useExtractMovieGenre } from '@/hooks/useExtractMovieGenre';

import { StarIndicator } from '@/ui/StarIndicator';
import { calculateRateStarsNumber } from '@/utils/calculateRateStarsNumber';

import { IMovie } from '@/types/IMovie';

type DescriptionModalRateAndGenresProps = Pick<
  IMovie,
  'genre_ids' | 'vote_average'
>;

const DescriptionModalRateAndGenres = ({
  genre_ids,
  vote_average,
}: DescriptionModalRateAndGenresProps) => {
  const genres = useExtractMovieGenre(genre_ids);
  const numberOfStar = calculateRateStarsNumber(vote_average);

  return (
    <>
      <HStack alignItems='start'>
        <Text fontWeight={500}>Rate:</Text>
        <StarIndicator numberOfStar={numberOfStar} />
      </HStack>

      <HStack>
        <Text fontWeight={500}>Genre</Text>
        {map(genres, (genre) => (
          <Text key={genre?.id}>{genre?.name}</Text>
        ))}
      </HStack>
    </>
  );
};

export default DescriptionModalRateAndGenres;
