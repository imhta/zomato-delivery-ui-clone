import React from 'react';
import styled from 'styled-components';
import RestaurantCard from '../components/RestaurantCard';
import Paginate from '../components/Paginate';
import { restaurants } from '../initialState';

const RestaurantsWrapper = styled.section`
`;

function RestaurantsContainer() {
  return (
    <RestaurantsWrapper>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={Math.random(index)} restaurant={restaurant} />
      ))}
      <Paginate />
    </RestaurantsWrapper>
  );
}

export default RestaurantsContainer;
