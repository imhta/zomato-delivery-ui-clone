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
    grid-template-columns: 1fr 1fr .60fr;

    @media (max-width: 1110px) {
      grid-template-columns: 1fr;
    }
`;
const FinalNote = styled.div`
  padding: 10px 10px 20px;
  border-top: 1px solid #e7e7e7;
  cursor: pointer;
  p{
    font-size: 14px;
    color: #89959B;
    margin: 0px;
  }
  ${Container} {
    display: block;
  }
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
      <FinalNote>
        <Container>
          <p>Frequent searches leading to this page</p>
          <p>Delivery Restaurants in Mumbai</p>
        </Container>
      </FinalNote>

    </>
  );
}

export default MainContainer;
