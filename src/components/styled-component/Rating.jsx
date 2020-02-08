import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getColorBasedOnRange = (rating) => {
  if (rating === 'NEW') return '#89959B';
  if (rating >= 4.0) return '#5BA829';
  if (rating >= 3.5) return '#9ACD32';
  return '#CDD614';
};
const RatingWrapper = styled.div`
    display:inline;
    font-weight: bold;
    color: white;
    padding: 2px 5px;
    border-radius: 4px;
    background-color: ${(props) => getColorBasedOnRange(Number(props.rating))};

`;
function Rating({ mini, rating, votes }) {
  return (
    <>
      <RatingWrapper rating={rating}>
        {rating}
      </RatingWrapper>
      {!mini && votes ? (
        <span className="voting">
          {votes}
          {' '}
          votes
        </span>
      ) : ''}
    </>
  );
}
Rating.defaultProps = {
  mini: false,
  votes: 0,
};

Rating.propTypes = {
  mini: PropTypes.bool,
  rating: PropTypes.string.isRequired,
  votes: PropTypes.number,
};

export default Rating;
