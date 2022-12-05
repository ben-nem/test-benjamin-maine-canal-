import { extractMovieGenre } from '@/utils/extractMovieGenre';

import { IGenre } from '@/types/IGenre';

describe('extractMovieGenre', () => {
  test('1) it should return null if movieIds is empty', () => {
    const expectedResult = extractMovieGenre(mockGenreList, []);
    expect(expectedResult).toBeNull();
  });
  test('2) it should return null if genreIds is empty', () => {
    const expectedResult = extractMovieGenre([], [1, 2, 3]);
    expect(expectedResult).toBeNull();
  });
  test('3) it should return name and id of movieIds which are in genreList if genreIds is empty', () => {
    const expectedResult = extractMovieGenre(mockGenreList, [14, 80]);
    expect(expectedResult).toEqual([
      {
        id: 80,
        name: 'Crime',
      },
      {
        id: 14,
        name: 'Fantasy',
      },
    ]);
  });
});

const mockGenreList: IGenre[] = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];
