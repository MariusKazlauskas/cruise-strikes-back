import React from 'react';
import styled from 'styled-components';
import { favActor } from '../package.json';
import { SearchContext } from './SearchContext';
import { getMovies, getFilmsOf } from './search-provider';
import debounce from 'lodash.debounce';

const debouncedSearch = debounce(getMovies, 500);

const Search = styled(SearchComponent)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Input = styled.input`
  width: 50%;
`;

function SearchComponent({ className }) {
  const { state, dispatch } = React.useContext(SearchContext);
  const [ inputValue, setInputValue ] = React.useState('');

  const handleChange = ({ target }) => {
    setInputValue(target.value);
    debouncedSearch(target.value, dispatch);
  }

  const handleFavouriteSearch = () => {
    getFilmsOf(favActor, state, dispatch);
    setInputValue('');
  }

	return (
		<div className={className}>
      <Input
        placeholder="search for movie"
        value={inputValue}
        onChange={handleChange}
        type="text"
      />
      <button onClick={handleFavouriteSearch}>{favActor} movies!</button>
    </div>
	);
}

export default Search;
