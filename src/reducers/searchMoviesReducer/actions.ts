import { IMovie } from '@/types/IMovie';

export enum SEARCH_MOVIES_ACTIONS {
  INCREMENT_PAGE = 1,
  RESET_SEARCH,
  SET_SEARCH,
  SET_SELECTED_GENRE_ID,
  UPDATE_MOVIES,
}

export type ISearchMoviesActions =
  | { type: SEARCH_MOVIES_ACTIONS.INCREMENT_PAGE }
  | { type: SEARCH_MOVIES_ACTIONS.RESET_SEARCH }
  | { type: SEARCH_MOVIES_ACTIONS.SET_SEARCH; payload: string }
  | {
      type: SEARCH_MOVIES_ACTIONS.SET_SELECTED_GENRE_ID;
      payload: number | null;
    }
  | { type: SEARCH_MOVIES_ACTIONS.UPDATE_MOVIES; payload: IMovie[] | null };
