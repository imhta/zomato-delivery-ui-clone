import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActionButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 0px;
  border: none;
  font-size: 14px;
  color: ${({ textColor, currentlyNotAvailable }) => (currentlyNotAvailable ? '#D3D3D3' : textColor)};
  font-family: 'OpenSans Bold', sans-serif;
  border: 1px solid #e7e7e7;
  border-left: 0px;
  background-color: ${({ currentlyNotAvailable, bgColor }) => (currentlyNotAvailable ? 'white' : bgColor)};

  &:hover{
    cursor: pointer;;
    transition: background-color .1s ease;
    color: ${({ textColor, bgColor }) => (textColor === '#595C60' ? '#595C60' : bgColor)};
    background-color: ${({ textColor }) => (textColor === '#595C60' ? '#e7e7e7' : textColor)};
  }

  .icon-wrapper{
    display: flex;
    i{
      align-self: flex-end;
      margin-right: 4px;
      font-size: 14px;
      font-size: bold;
    }
  }

  .offline-status{
    font-family: 'OpenSans Regular', sans-serif;
    font-size: 12px;
    color: #D3D3D3
  }

  `;

function ActionButton({
  icon, action, textColor, bgColor, currentlyNotAvailable,
}) {
  return (
    <ActionButtonWrapper
      textColor={textColor}
      bgColor={bgColor}
      currentlyNotAvailable={currentlyNotAvailable}
    >
      <div className="icon-wrapper">
        <i className="material-icons">{icon}</i>
        {action}
      </div>

      {currentlyNotAvailable ? <div className="offline-status">Currently Offline</div> : ''}
    </ActionButtonWrapper>
  );
}
ActionButton.defaultProps = {
  textColor: '#595C60',
  bgColor: 'white',
  currentlyNotAvailable: false,
};

ActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  currentlyNotAvailable: PropTypes.bool,
};
export default ActionButton;
