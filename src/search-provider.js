import { endpoint } from '../package.json';

function forEmpty(value) {
  return Object.keys(value).length !== 0;
}

export const getMovies = async (query, dispatch) => {
  if (query) {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          searchMovies(query: "${query}") {
            title
            poster {
              thumbnail
            }
            releaseDate
          }
        }`,
        variables: {}
      })
    });
    const { data } = await response.json();
    const movies = data.searchMovies.filter(forEmpty);

    dispatch({
      type: 'movie-list',
      payload: movies
    });
  }
}

export const getFilmsOf = async (person, state, dispatch) => {
  if (state.favourite) {
    dispatch({ type: 'favourite-list' });
  } else {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          searchPeople(query: "${person}") {
            appearsIn {
              ... on Movie {
                title
                poster {
                  thumbnail
                }
                releaseDate
              }
            }
          }
        }`,
        variables: {}
      })
    });
    const { data } = await response.json();
    const movies = data.searchPeople[0].appearsIn.filter(forEmpty);

    dispatch({
      type: 'favourite-list',
      payload: movies
    });
  }
};
