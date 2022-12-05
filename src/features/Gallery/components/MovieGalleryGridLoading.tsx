import { Grid } from '@chakra-ui/react';

import TileLoading from '@/ui/Tile/TileLoading';

const MovieGalleryGridLoading = () => (
  <Grid
    height='fit-content'
    templateColumns={{
      base: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(5, 1fr)',
    }}
    gap={6}
    overflowY='auto'
    w='full'
  >
    <TileLoading />
  </Grid>
);

export default MovieGalleryGridLoading;
