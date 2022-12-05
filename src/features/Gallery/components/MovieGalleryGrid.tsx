import { Grid, useDisclosure } from '@chakra-ui/react';
import { map } from 'lodash';
import { UIEventHandler, useEffect, useState } from 'react';

import { useSearchMoviesContext } from '@/hooks/useSearchMoviesContext';

import MovieDescriptionModal from '@/features/Gallery/components/MovieDescriptionModal/MovieDescriptionModal';
import MovieGalleryGridLoading from '@/features/Gallery/components/MovieGalleryGridLoading';
import { SEARCH_MOVIES_ACTIONS } from '@/reducers/searchMoviesReducer';
import Tile from '@/ui/Tile/Tile';

import { MOVIE_SEARCH_MODE } from '@/types/movieSearchMode';

const MovieGalleryGrid = () => {
  const [{ isValidating, movies, movieSearchMode }, dispatch] =
    useSearchMoviesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const handleScroll: UIEventHandler<HTMLDivElement> = ({ target }) => {
    const canLoadMore = movieSearchMode === MOVIE_SEARCH_MODE.DISCOVER;
    if (canLoadMore && target) {
      const { clientHeight, scrollHeight, scrollTop } =
        target as HTMLDivElement;
      const isAtBottom = Math.abs(clientHeight + scrollTop - scrollHeight) < 5;
      isAtBottom && dispatch({ type: SEARCH_MOVIES_ACTIONS.INCREMENT_PAGE });
    }
  };

  useEffect(() => {
    selectedMovieId !== null && onOpen();
  }, [onOpen, selectedMovieId]);

  const handleClickFilmDescription = (id: number) => {
    setSelectedMovieId(id);
  };

  const handleClose = () => {
    setSelectedMovieId(null);
    onClose();
  };

  return isValidating ? (
    <MovieGalleryGridLoading />
  ) : (
    <>
      {selectedMovieId && (
        <MovieDescriptionModal
          isOpen={isOpen}
          movieId={selectedMovieId}
          onClose={handleClose}
        />
      )}
      <Grid
        flexShrink={1}
        height='fit-content'
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(5, 1fr)',
        }}
        onScroll={handleScroll}
        gap={6}
        overflowY='auto'
        w='full'
      >
        {map(movies, (movie) => (
          <Tile
            key={movie.id}
            onClick={handleClickFilmDescription}
            {...movie}
          />
        ))}
      </Grid>
    </>
  );
};

export default MovieGalleryGrid;
