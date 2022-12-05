import { ChevronDownIcon } from '@chakra-ui/icons';
import { MenuButtonProps } from '@chakra-ui/menu';
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { map } from 'lodash';
import { forwardRef } from 'react';

import { GenreFilterItem } from '@/features/Gallery/components/MovieGenreFilter/index';

import { IGenre } from '@/types/IGenre';

type GenreFilterItemProps = {
  otherGenres: IGenre[];
};

const GenreFilterMoreMenu = ({ otherGenres }: GenreFilterItemProps) => {
  return (
    <Menu>
      <MenuButton as={MoreMenuButton} />
      <MenuList zIndex='overlay'>
        {map(otherGenres, ({ id, name }) => {
          return (
            <MenuItem as={GenreFilterItem} key={id} genreId={id}>
              {name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default GenreFilterMoreMenu;

const MoreMenuButton = forwardRef<HTMLDivElement, MenuButtonProps>(
  (props, ref) => {
    return (
      <HStack ref={ref}>
        <Button
          bg='unset'
          color='gray.800'
          cursor='pointer'
          fontSize='xl'
          fontWeight='normal'
          _hover={{ color: 'primary.soda' }}
          {...props}
        >
          More
          <ChevronDownIcon />
        </Button>
      </HStack>
    );
  }
);
