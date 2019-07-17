import React from 'react';
import styled from 'styled-components';

const PlaceHolder = styled.div`
  height: 136px;
  width: 92px;
  background: #33333330;
`;

const Movie = styled(MovieComponent)`
  border: solid 1px;
  padding: 5px;
  margin: 5px;
`;

function MovieComponent({ className, title, poster, releaseDate }) {
  const caption = `${title}${releaseDate && ' ('+releaseDate.substr(0,4)+')'}`;

  return (
	  <li className={className} key={title}>
      {poster && poster.thumbnail && (<img src={poster.thumbnail} alt={`Poster: ${caption}`} />) || <PlaceHolder/>}
      {caption}
    </li>
  );
}

export default Movie;
