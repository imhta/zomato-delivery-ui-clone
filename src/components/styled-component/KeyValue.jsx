import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const KeyValueWrapper = styled.div`
   display: flex;
   align-items: center;
  .left{
    width: 25%;
    text-transform: uppercase;
    font-size: 12px;
    color: #89959B;
    padding: 0px 10px;

    div{
      letter-spacing: .01em;
    }
  }
  .right{
    max-width: 370px;
    font-size: 14px;
    padding: 0px 10px 0px 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

function KeyValue({ keyContent, valueContent }) {
  return (
    <KeyValueWrapper>
      <div className="left">
        {keyContent}
        :
      </div>
      <div className="right">{valueContent}</div>
    </KeyValueWrapper>
  );
}

KeyValue.propTypes = {
  keyContent: PropTypes.string.isRequired,
  valueContent: PropTypes.string.isRequired,
};
export default KeyValue;
