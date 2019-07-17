import React from 'react';

const initialState = {
  list: [],
  favourite: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'favourite-list':
      return {
        ...state,
        favourite: action.payload || state.favourite,
        list: action.payload || state.favourite,
      };
    case 'movie-list':
      return {
        ...state,
        list: action.payload
      };
  }
};

const SearchContext = React.createContext(initialState);

function SearchContextProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <SearchContext.Provider value={value}>{props.children}</SearchContext.Provider>
  );
}

const SearchContextConsumer = SearchContext.Consumer;

export { SearchContext, SearchContextProvider, SearchContextConsumer };
