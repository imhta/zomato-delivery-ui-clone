import React from 'react';
import styled from 'styled-components';
import PropsType from 'prop-types';
import closeIcon from '../../assets/images/cross.png';

const GoldAlertWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d8c65f;
    font-family: 'Open Sans', sans-serif;
    font-size:  14px; 
    background-color: #33373d;
    padding: 10px;
    position: relative;

    img{
        width: 32px;
    }
    p{ 
        margin: 10px 15px;
    }
    button{
        background-color: transparent;
        border: none;
        position: absolute;
        right: 10px;
        cursor: pointer;
        img{
            width: 12px;
            height: 12px;
        }
    }

    @media (max-width: 700px){
        display: none;
    }
`;
const Action = styled.a`
    margin-left: 10px;
    font-weight: bold;
    background: radial-gradient(40% 50px at center,#A37320,#EFEA7E,#A37320);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
`;
const GoldLine = styled.div`
    height: 3px;
    background: radial-gradient(40% 50px at center,#A37320,#EFEA7E,#A37320);

    @media (max-width: 700px){
        display: none;
    }
`;
function GoldAlert({ icon, content, action }) {
  return (
    <>
      <GoldAlertWrapper>
        {icon ? <img src={icon} alt={content} /> : ''}
        <p>{content}</p>
        {action ? <Action href={action.href}>{action.title}</Action> : ''}
        <button>
          <img src={closeIcon} alt="close alert" />
        </button>
      </GoldAlertWrapper>
      <GoldLine />
    </>
  );
}

GoldAlert.propsType = {
  icon: PropsType.string,
  content: PropsType.string.isRequired,
  action: PropsType.shape({
    title: PropsType.string.isRequired,
    href: PropsType.string.isRequired,
  }),
};

export default GoldAlert;
