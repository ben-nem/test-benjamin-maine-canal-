import { Text } from '@chakra-ui/react';

import { IMovie } from '@/types/IMovie';

const NoCover = ({ title }: Pick<IMovie, 'title'>) => (
  <Text
    mx={0}
    left={0}
    right={0}
    top={7}
    fontSize='xl'
    fontWeight='600'
    color='gray.800'
    textAlign='center'
    position='absolute'
  >
    {title}
  </Text>
);

export default NoCover;
