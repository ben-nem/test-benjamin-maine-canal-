import { HStack, Stack, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Image from 'next/image';

import { IMAGE_PROVIDER_URL } from '@/constant/iageProviderURL';

import { IMovie } from '@/types/IMovie';

const DESCRIPTION_IMAGE_SIZE = {
  height: 64,
  width: 64,
};

type DescriptionModalImageBlockProps = Pick<
  IMovie,
  'overview' | 'poster_path' | 'release_date' | 'title'
>;

const DescriptionModalImageBlock = ({
  overview,
  poster_path,
  release_date,
  title,
}: DescriptionModalImageBlockProps) => {
  return (
    <HStack alignItems='start'>
      {!!poster_path && (
        <Image
          alt={title}
          src={poster_path ? IMAGE_PROVIDER_URL + poster_path : ''}
          style={{ flex: 1, position: 'relative', zIndex: 0 }}
          {...DESCRIPTION_IMAGE_SIZE}
        />
      )}
      <Stack flex={8}>
        <Text fontSize='2xl'>
          {title} ({dayjs(release_date).format('YYYY')})
        </Text>
        <Text>{overview}</Text>
      </Stack>
    </HStack>
  );
};

export default DescriptionModalImageBlock;
