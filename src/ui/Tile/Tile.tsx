import {
  Button,
  Collapse,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { IMAGE_PROVIDER_URL } from '@/constant/iageProviderURL';
import NoCover from '@/ui/Tile/NoCover';

import { IMovie } from '@/types/IMovie';

type TileProps = IMovie & { onClick: (id: number) => void };
const Tile = ({ id, title, onClick, poster_path }: TileProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleClickSeeDescription = () => {
    onClick(id);
    onClose();
  };
  return (
    <Flex
      alignItems='end'
      bgImg={
        poster_path ? `url(${IMAGE_PROVIDER_URL + poster_path})` : undefined
      }
      bg={poster_path ? undefined : 'gray.100'}
      backgroundSize='cover'
      flex={1}
      style={{ aspectRatio: '9/13' }}
      position='relative'
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      {!poster_path && <NoCover title={title} />}
      <Collapse
        in={isOpen}
        animateOpacity
        style={{ width: '100%', zIndex: 10 }}
      >
        <Stack
          bg='rgb(255, 255, 255, 0.8)'
          color='white'
          flex={1}
          justifyContent='center'
          p={5}
          roundedTop='md'
          shadow='md'
        >
          <Text
            fontSize='xl'
            fontWeight='600'
            color='gray.800'
            textAlign='center'
          >
            {title}
          </Text>
          <Button
            opacity={1}
            onClick={handleClickSeeDescription}
            variant='priary'
          >
            See description
          </Button>
        </Stack>
      </Collapse>
    </Flex>
  );
};

export default Tile;
