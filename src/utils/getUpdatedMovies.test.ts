import { getUpdatedMovies } from '@/utils/getUpdatedMovies';

import { IMovie } from '@/types/IMovie';

describe('getUpdatedMovies', () => {
  test('1) it should return null if newMovies are empty', () => {
    const expectedResult = getUpdatedMovies([[], []]);
    expect(expectedResult).toBeNull();
  });
  test('2) it should return the newMovies if oldMovies is empty', () => {
    const expectedResult = getUpdatedMovies([[], [mockMovie0]]);
    expect(expectedResult).toEqual([mockMovie0]);
  });
  test('3) it should return null if oldMovies and newMovies are equal', () => {
    const expectedResult = getUpdatedMovies([[mockMovie0], [mockMovie0]]);
    expect(expectedResult).toBeNull();
  });
  test('4) it should the concatenation of new and old movies if oldMovies and newMovies are not equal', () => {
    const expectedResult = getUpdatedMovies([
      [mockMovie0],
      [mockMovie1, mockMovie2],
    ]);
    expect(expectedResult).toEqual([mockMovie0, mockMovie1, mockMovie2]);
  });
});

const mockMovie0: IMovie = {
  adult: false,
  backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
  genre_ids: [28, 14, 878],
  id: 436270,
  original_language: 'en',
  original_title: 'Black Adam',
  overview:
    'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
  popularity: 11801.698,
  poster_path: '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
  release_date: '2022-10-19',
  title: 'Black Adam',
  video: false,
  vote_average: 7.3,
  vote_count: 2197,
};

const mockMovie1 = {
  adult: false,
  backdrop_path: '/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg',
  genre_ids: [14, 28, 35, 80],
  id: 1013860,
  original_language: 'en',
  original_title: 'R.I.P.D. 2: Rise of the Damned',
  overview:
    'When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.',
  popularity: 4442.62,
  poster_path: '/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
  release_date: '2022-11-15',
  title: 'R.I.P.D. 2: Rise of the Damned',
  video: false,
  vote_average: 6.8,
  vote_count: 175,
};

const mockMovie2 = {
  adult: false,
  backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
  genre_ids: [28, 12, 878],
  id: 505642,
  original_language: 'en',
  original_title: 'Black Panther: Wakanda Forever',
  overview:
    'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
  popularity: 1809.575,
  poster_path: '/ps2oKfhY6DL3alynlSqY97gHSsg.jpg',
  release_date: '2022-11-09',
  title: 'Black Panther: Wakanda Forever',
  video: false,
  vote_average: 7.5,
  vote_count: 1100,
};
