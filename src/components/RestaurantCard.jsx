import React from 'react';
import styled from 'styled-components';
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
        font-size: 11px;
        color: #89959B;
        text-transform: uppercase;
        letter-spacing: .01em;
      }
      .hotel-name{
        color: #cb202d;
        font-family: 'OpenSans Bold', sans-serif;
        font-size: 24px;
        line-height: 22px;
        margin: 5px;
      }
    }
    .rating-wrapper {
      max-width: 100%;
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
function RestaurantCard() {
  return (
    <RestaurantCardWrapper>
      <div className="main-card-wrapper">
        <CardHeader>
          <img alt="title" src="https://b.zmtcdn.com/data/pictures/chains/7/46577/8b503cd43b786fc3be3dfa40fc3a2ca3_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" />
          <TitleWrapper>
            <Title>
              <div className="title-content">
                <p className="sponsored">SPONSORED</p>
                <p className="type">QUICK BITES</p>
                <h2 className="hotel-name">Afzal Restaurant</h2>
                <p>Byculla</p>
              </div>
              <div className="rating-wrapper">
                <Rating rating="4.0" votes={1273} />
              </div>
            </Title>
            <address>9 A, Opposite Sai Niketan Building, Shivdas Champsi Marg, Mazgao</address>
          </TitleWrapper>
        </CardHeader>
        <hr />
        <CardBody>
          <KeyValue keyContent="CUISINES" valueContent="American, Mediterranean, Italian, European" />
          <KeyValue keyContent="COST FOR TWO" valueContent="₹3,500" />
          <KeyValue keyContent="HOURS" valueContent="8pm – 1am (Mon-Fri),12:30pm – 3:30pm, 8pm –..." />
          <KeyValue keyContent="FEATURED IN" valueContent="Romantic" />
        </CardBody>
      </div>
      <CardAction>
        <ActionButton action="Call" icon="call" />
        <ActionButton action="View Menu" icon="book" />
        <ActionButton action="Book a Table" icon="calendar_today" textColor="#00AACD" />
        <ActionButton action="Order" icon="shopping_cart" textColor="white" bgColor="#099E44" />
      </CardAction>
      <Outlets>
        <p>11 more outlets in Mumbai</p>
        <ul>
          <li>
            <img src="https://b.zmtcdn.com/data/pictures/chains/1/49261/369c96ad1a7886b403f23bd35303bca5.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="aa" />
            <div className="outlet-details">
              <p className="outlet-title">Vashi Social</p>
              <p className="outlet-location">Vashi</p>
            </div>
          </li>
          <li>
            <a href="#d">
              See all outlets
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </li>
        </ul>
      </Outlets>
    </RestaurantCardWrapper>

  );
}

export default RestaurantCard;
