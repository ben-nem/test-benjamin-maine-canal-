import { Flex } from '@chakra-ui/react';

import { StarIcon } from '@/ui/icons/StarIcon';

export type StarIndicatorProps = {
  numberOfStar: number;
};
export const StarIndicator = ({ numberOfStar }: StarIndicatorProps) => {
  return (
    <Flex position='relative'>
      <Flex position='absolute' width='50%'>
        <StarIcon left='0rem' filled='empty' />
        <StarIcon left='2.2rem' filled='empty' />
        <StarIcon left='4.4rem' filled='empty' />
        <StarIcon left='6.6rem' filled='empty' />
        <StarIcon left='8.8rem' filled='empty' />
      </Flex>

      <Flex position='absolute'>
        <Flex overflow='hidden' width={`${numberOfStar * 20}%`}>
          <StarIcon left='0rem' />
          <StarIcon left='2.2rem' />
          <StarIcon left='4.4rem' />
          <StarIcon left='6.6rem' />
          <StarIcon left='8.8rem' />
        </Flex>
      </Flex>
    </Flex>
  );
};
