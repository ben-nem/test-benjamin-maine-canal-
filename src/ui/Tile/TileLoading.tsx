import { Box, Skeleton } from '@chakra-ui/react';

const TileLoading = () => {
  return (
    <Box style={{ aspectRatio: '1' }}>
      <Skeleton height='100%' />
    </Box>
  );
};

export default TileLoading;
