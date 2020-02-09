import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from './Rating';

const MiniHotelCardWrapper = styled.div`
    color: #89959B;

`;
const ImageWrapper = styled.div`
    width: 100%;
    height: 90px;
    position: relative;
    background-image: url(${({ bgImg }) => bgImg});
    background-size: cover;
    border-radius: 4px;
    .rating{
        position: absolute;
        top: 0px;
        right: 0px;
    }
`;
const HotelBody = styled.div`
    padding: 5px 0px 10px;
    line-height: 1em;
    word-wrap: break-word;
    .new{
        color: #099e44;
    }
    p{
        font-size: 13px !important;
        font-family: OpenSans Regular, sans-serif;
        color: #33373D;
        margin: 1px 0px 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    span{
        font-size: 11px !important;
        font-family: OpenSans Regular, sans-serif;
    }

`;
function MiniHotelCard({
  hotel: {
    title, subtitle, rating, image, isNewItSelf,
  },
}) {
  return (
    <MiniHotelCardWrapper>
      <ImageWrapper bgImg={image}>
        <div className="rating">
          <Rating mini rating={rating} />
        </div>
      </ImageWrapper>
      <HotelBody>
        <p>
          {title}
        </p>
        <span className="sub">{subtitle}</span>
        <br />
        {isNewItSelf ? <span className="new">Newly Opened</span> : '' }
      </HotelBody>

    </MiniHotelCardWrapper>
  );
}

MiniHotelCard.propTypes = {
  hotel: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isNewItSelf: PropTypes.bool,
  }).isRequired,
};

export default MiniHotelCard;
