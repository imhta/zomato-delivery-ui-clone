import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import MiniHotelCard from './MiniHotelCard';

const SAPCardWrapper = styled.section`
    border-radius: 4px;
    border: 1px solid #e7e7e7; 
    background-color: white;
    margin-bottom: 20px;
    padding: 10px 15px;

    header{
        display: flex;
        justify-content: space-between;

        div>h2{
            color: #33373D;
            margin: 2px 0px 0px 0px;
        }

        div>p{
            font-size: 14px;
            color: #89959B;
            margin: 2px 0px 0px 0px;
        }
    }

`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    padding-top: 10px;
`;
function SAPCard({
  title, subtitle, icon, hotels,
}) {
  return (
    <SAPCardWrapper>
      <header>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <img src={icon} alt={title} width="44" height="44" />
      </header>
      <Layout>
        {hotels.map((hotel) => (<MiniHotelCard hotel={hotel} />))}
      </Layout>
    </SAPCardWrapper>
  );
}

SAPCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isNewItSelf: PropTypes.bool,
    }).isRequired,
  ).isRequired,
};

export default SAPCard;
