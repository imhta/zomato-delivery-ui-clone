import React from 'react';
import styled from 'styled-components';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantsWrapper = styled.section`
      margin: 0px 15px 15px 15px;
`;

function RestaurantsContainer() {
  return (
    <RestaurantsWrapper>
      <RestaurantCard />
    </RestaurantsWrapper>
  );
}

export default RestaurantsContainer;
