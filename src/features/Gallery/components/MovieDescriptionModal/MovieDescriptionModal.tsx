import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import { find } from 'lodash';

import { useSearchMoviesContext } from '@/hooks/useSearchMoviesContext';

import {
  DescriptionModalImageBlock,
  DescriptionModalRateAndGenres,
} from '@/features/Gallery/components/MovieDescriptionModal';

type MovieDescriptionModal = Pick<UseDisclosureReturn, 'isOpen' | 'onClose'> & {
  movieId: number;
};

const MovieDescriptionModal = ({
  isOpen,
  movieId,
  onClose,
}: MovieDescriptionModal) => {
  const [{ movies }] = useSearchMoviesContext();

  const selectedMovie = find(movies, ({ id }) => id === movieId);

  if (!selectedMovie) {
    onClose();
    return null;
  }
  const {
    genre_ids,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = selectedMovie;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color='gray.800' zIndex='sticky' />
        <ModalBody p={6} as={Stack} color='gray.800'>
          <DescriptionModalImageBlock
            overview={overview}
            poster_path={poster_path}
            release_date={release_date}
            title={title}
          />
          <DescriptionModalRateAndGenres
            genre_ids={genre_ids}
            vote_average={vote_average}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MovieDescriptionModal;
