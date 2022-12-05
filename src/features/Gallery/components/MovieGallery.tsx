import {
  MovieGalleryGrid,
  MovieGenreFilter,
} from '@/features/Gallery/components';

const MovieGallery = () => {
  return (
    <>
      <MovieGenreFilter />
      <MovieGalleryGrid />
    </>
  );
};

export default MovieGallery;
