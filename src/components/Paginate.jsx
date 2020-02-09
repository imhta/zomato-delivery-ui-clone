import React from 'react';
import styled from 'styled-components';

const PaginateWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    font-size: 14px;
    border-bottom: 1px solid #e7e7e7;
    ul{
        display: flex;
        list-style: none;
        li{ 
            display: flex;
            align-items: center;
            padding: 13px 18px;
            font-size: 13px;
            background-color: white;
            border: 1px solid #e7e7e7
        }
    }
`;


function Paginate() {
  return (
    <PaginateWrapper>
      <div>
        Page
        {' '}
        <b>1</b>
        {' '}
        of
        {' '}
        <b>1224</b>
      </div>
      <div>
        <ul>
          <li className="left-page"><i className="material-icons">keyboard_arrow_left</i></li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>...</li>
          <li className="right-page"><i className="material-icons">keyboard_arrow_right</i></li>
        </ul>
      </div>
    </PaginateWrapper>
  );
}

export default Paginate;
