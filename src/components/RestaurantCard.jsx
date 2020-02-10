import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from './styled-component/Rating';
import KeyValue from './styled-component/KeyValue';
import ActionButton from './styled-component/ActionButton';

const RestaurantCardWrapper = styled.div`
    display: flex;
    margin-bottom: 7px;
    font-size: 1em;
    flex-direction: column;
    background: #FFF;
    border: 1px solid #e7e7e7;
    border-radius: .3rem;
    .main-card-wrapper{
      padding: 14px;
    }
    hr{
      border-top: 1px solid #e7e7e7;
      width: 100%;
      margin: 10px 0px;
    }
`;
const CardHeader = styled.div`
    display: flex;
    img{
        border-radius: .3rem;
        height: 120px;
        padding-right: 10px;
    }
    @media (max-width: 580px) {
      display: block;
    }
`;

const TitleWrapper = styled.div`
  flex: 1;
  address{
    max-width: 370px;
    font-size: 14px;
    margin: 0px 5px;
    color: #89959B;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    .title-content{
      flex: 1;
      p{
        font-size: 14px;
        margin: 5px;
      }
      .sponsored{
        font-size: 12px;
        color: #A28947;
      }
      .type{
        span{
          font-size: 11px;
          color: #89959B;
          text-transform: uppercase;
          letter-spacing: .01em;
        }

      }
      .hotel-name{
        color: #cb202d;
        font-family: 'OpenSans Bold', sans-serif;
        font-size: 24px;
        line-height: 22px;
        margin: 5px;
      }
      .min-loc{
        font-family: 'OpenSans Bold', sans-serif;
      }
    }
    .rating-wrapper {
      display: flex;
      justify-content: flex-end;
    }
`;
const CardBody = styled.div`
`;
const CardAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child{
    border-top-left-radius: .3rem;
    border-bottom-left-radius: .3rem; 
  }
  &:last-child{
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
    border-right: 0px;
  }
`;
const Outlets = styled.div`
  p{
    padding: 0px 10px;
    font-size: 12px;
    color: #89959B;
  }
  ul{
    list-style: none;
    padding: 0px;
  }
  li{
    display: flex;
    padding: 0px 10px 10px 10px;
    border-radius: .3rem;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
    img{
      width: 50px;
      height: 50px;
    }
    .outlet-details{
      padding-left: 10px;
    }
    .outlet-title{
      font-size: 14px;
      font-family: 'OpenSans Bold', sans-serif;
      color: #33373D;
      margin: 0px;
    }
    .outlet-location{
      font-size: 12px;
      margin: 0px;
    }
  }

  li:last-child{
    padding: 10px 10px 0px 0px;
    border: none;
    a{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 15px;
      width: 100%;
      color: #cb202d;
      text-decoration: none;
      i{
        font-size: 15px;
      }
    }
  }

`;
function RestaurantCard({
  restaurant: {
    mainImg,
    isSponsored,
    types,
    name,
    miniLocation,
    rating,
    votes,
    address,
    moreDetails,
    availableActions,
    hasOutlet, outlets,
    noOfOutlets,
  },
}) {
  return (
    <RestaurantCardWrapper>
      <div className="main-card-wrapper">
        <CardHeader>
          <img alt="title" src={mainImg} />
          <TitleWrapper>
            <Title>
              <div className="title-content">
                {isSponsored ? <p className="sponsored">SPONSORED</p> : ''}
                <p className="type">
                  {types.map((type, index) => (
                    <span key={Math.random(index)}>
                      {type}
                      {' '}
                    </span>
                  ))}
                </p>
                <h2 className="hotel-name">{name}</h2>
                <p className="min-loc">{miniLocation}</p>
              </div>
              <div className="rating-wrapper">
                <Rating rating={rating} votes={votes} />
              </div>
            </Title>
            <address>{address}</address>
          </TitleWrapper>
        </CardHeader>
        <hr />
        <CardBody>
          {moreDetails
            .map(({ key, value }, index) => (
              <KeyValue
                key={Math.random(index)}
                keyContent={key}
                valueContent={value}
              />
            ))}
        </CardBody>
      </div>
      <CardAction>
        {availableActions.map(({
          action, icon, textColor, bgColor, currentlyNotAvailable,
        }, index) => (
          <ActionButton
            key={Math.random(index)}
            action={action}
            icon={icon}
            textColor={textColor}
            bgColor={bgColor}
            currentlyNotAvailable={currentlyNotAvailable}
          />
        ))}

      </CardAction>
      {hasOutlet
        ? (
          <Outlets>
            <p>
              {noOfOutlets}
              {' '}
              more outlets in Mumbai
            </p>
            <ul>
              {outlets.map(({ location, outletImg }, index) => (
                <li key={Math.random(index)}>
                  <img src={outletImg} alt={`${name + location}`} />
                  <div className="outlet-details">
                    <p className="outlet-title">{name}</p>
                    <p className="outlet-location">{location}</p>
                  </div>
                </li>
              ))}
              <li>
                <a href="#d">
                  See all outlets
                  <i className="material-icons">keyboard_arrow_right</i>
                </a>
              </li>
            </ul>
          </Outlets>
        )
        : ''}

    </RestaurantCardWrapper>

  );
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    mainImg: PropTypes.string.isRequired,
    isSponsored: PropTypes.bool.isRequired,
    types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    name: PropTypes.string.isRequired,
    miniLocation: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    moreDetails: PropTypes.arrayOf(PropTypes.shape(
      {
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      },
    ).isRequired).isRequired,
    availableActions: PropTypes.arrayOf(PropTypes.shape(
      {
        action: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        textColor: PropTypes.string,
        bgColor: PropTypes.string,
        currentlyNotAvailable: PropTypes.bool,
      },
    ).isRequired).isRequired,
    hasOutlet: PropTypes.bool.isRequired,
    outlets: PropTypes.arrayOf(PropTypes.shape(
      {
        location: PropTypes.string.isRequired,
        outletImg: PropTypes.string.isRequired,
      },
    ).isRequired).isRequired,
    noOfOutlets: PropTypes.number.isRequired,
  }).isRequired,
};

export default RestaurantCard;
