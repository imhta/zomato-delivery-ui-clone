import React from 'react';
import styled from 'styled-components';
import mapPlaceholder from '../assets/images/search-map-placeholder.jpg';
import { SAP } from '../initialState';
import SAPCard from './styled-component/SAPCard';

const SponAndPopWrapper = styled.aside`
    .mini-title{
        font-size: 8px;
        color: #aaa;
        letter-spacing: 1.2px;
        font-weight: bold;
        text-transform: uppercase;
    }
`;
const ViewInMap = styled.div`
    width: 100%;
    height: 60px;
    background-image: url(${mapPlaceholder});
    background-size: cover;
    background-color: rgba(255,255,255,.2);
    color: #33373D;
    width: 100%;
    height: 60px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 4px;
    text-align: center;
    line-height: 60px;
    border: 1px solid #e7e7e7;
    cursor: pointer;
`;
function SponAndPop() {
  const { deliveryRestaurants } = SAP;
  return (
    <SponAndPopWrapper>
      <ViewInMap><span>View search result on map</span></ViewInMap>
      <p className="mini-title">sponsored & popular</p>
      <SAPCard
        title={deliveryRestaurants.title}
        subtitle={deliveryRestaurants.subtitle}
        icon={deliveryRestaurants.icon}
        hotels={deliveryRestaurants.hotels}
      />
    </SponAndPopWrapper>
  );
}

export default SponAndPop;
