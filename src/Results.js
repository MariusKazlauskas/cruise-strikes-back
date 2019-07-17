import React from 'react';
import styled from 'styled-components';
import { SearchContext } from './SearchContext';
import Movie from './Movie';

const Results = styled(ResultsComponent)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 114px);
  width: 100%;
`;

 function ResultsComponent({ className }) {
  const { state } = React.useContext(SearchContext);

  return !!state.list.length &&
    (<ul className={className}>
        {state.list.map(props => (<Movie {...props}/>))}
    </ul>);
}

export default Results;
