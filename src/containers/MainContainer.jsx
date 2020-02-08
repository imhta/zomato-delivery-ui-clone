import React from 'react';
import styled from 'styled-components';
import Container from '../components/styled-component/Container';
import FiltersContainer from './FiltersContainer';
import SponAndPopContainer from './SponAndPopContainer';
import RestaurantsContainer from './RestaurantsContainer';


const MainHeader = styled.h1`
    font-family: OpenSans Regular, sans-serif;
    font-size: 1.8em;
    margin: 15px;
`;
const MainLayout = styled.main`
    display: grid;
    width: 100%;
    grid-template-columns: .5fr 1fr .60fr;

`;

function MainContainer() {
  return (
    <>
      <Container>
        <MainHeader>Delivery Restaurants in Mumbai</MainHeader>
      </Container>
      <Container>
        <MainLayout>
          <FiltersContainer />
          <RestaurantsContainer />
          <SponAndPopContainer />
        </MainLayout>
      </Container>
    </>
  );
}

export default MainContainer;
