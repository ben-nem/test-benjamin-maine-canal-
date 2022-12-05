## STARTER KIT

Starter kit from <a href="https://theodorusclarence.com">Theodorus Clarence

## STEPS I FOLLOWED

### 1. Design of Gallery

- Display a responsive grid with square Skeleton
- Display a SearchBar in header

### 2. Create fetcher management with msw

- use popular endpoint to fetch popular movies
- fetch server popular movies server side first
- fetch initial movies from API
- fetch more movies when the user is at the bottom of the gallery
- add empty state on gallery

Note:
When React.Strict mode is on
StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).
https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar

## 3. switch between search and discover endpoint

- enable to switch between popular movies and search movies
- add movie description modal
- focus search on click search icon

## 4. Displayed search result

- enable to load more fil on scroll only for discover movies
- add title in movie tile if no poster has been found
- display search movies in list when search text is not null
- add star indicator vor rating

I do not find the way to filter movies depending on genres so the top filter will not work as expexted
