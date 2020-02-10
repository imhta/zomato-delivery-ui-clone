import React from 'react';
import styled from 'styled-components';
import RestaurantCard from '../components/RestaurantCard';
import Paginate from '../components/Paginate';
import { restaurants } from '../initialState';

const RestaurantsWrapper = styled.section`
      margin: 0px 15px 15px 15px;

      @media(max-width: 580px) {
        margin: 0px;
      }
`;

function RestaurantsContainer() {
  return (
    <RestaurantsWrapper>
      {restaurants.map((restaurant) => (<RestaurantCard restaurant={restaurant} />))}
      <Paginate />
    </RestaurantsWrapper>
  );
}

export default RestaurantsContainer;
