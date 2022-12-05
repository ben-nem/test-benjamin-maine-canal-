import produce from 'immer';

import { ISearchMoviesState } from '@/hooks/useSearchMoviesContext';

import {
  ISearchMoviesActions,
  SEARCH_MOVIES_ACTIONS,
} from '@/reducers/searchMoviesReducer/index';

import { MOVIE_SEARCH_MODE } from '@/types/movieSearchMode';

export const searchMoviesReducer = produce(
  (draft: ISearchMoviesState, action: ISearchMoviesActions) => {
    switch (action.type) {
      case SEARCH_MOVIES_ACTIONS.SET_SEARCH:
        draft.search = action.payload;
        if (draft.movieSearchMode === MOVIE_SEARCH_MODE.DISCOVER) {
          draft.movies = null;
        }
        draft.movieSearchMode = MOVIE_SEARCH_MODE.SEARCH;
        break;
      case SEARCH_MOVIES_ACTIONS.SET_SELECTED_GENRE_ID:
        draft.selectedGenreId = action.payload;
        break;
      case SEARCH_MOVIES_ACTIONS.RESET_SEARCH:
        draft.search = null;
        draft.movieSearchMode = MOVIE_SEARCH_MODE.DISCOVER;
        draft.movies = null;
        break;
      case SEARCH_MOVIES_ACTIONS.INCREMENT_PAGE:
        draft.page = draft.page + 1;
        break;
      case SEARCH_MOVIES_ACTIONS.UPDATE_MOVIES:
        draft.movies = action.payload;
        break;
      default:
        return draft;
    }
  }
);
