import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Results from './Results';
import { SearchContextProvider } from './SearchContext';

const App = styled(AppComponent)`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	overflow: hidden;
`;

function AppComponent({ className }) {
  return (
    <div className={className}>
      <h1>Movie Search!</h1>
      <SearchContextProvider>
        <Search />
        <Results />
      </SearchContextProvider>
    </div>
  );
}

export default App;
