import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CheckBoxWrapper = styled.label`
    display: block;
    position: relative;
    padding-left: 26px;
    padding-bottom: 5px;
    cursor: pointer;
    font-size: 14px;
    user-select: none;


    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 17px;
        width: 17px;
        border: 1px solid lightgray;
        border-radius: 3px;
        background-color: white;
    }
    &:hover{
        color: #cb202d;
    }

    input:checked ~ .checkmark {
        background-color: white;
    }

    input:checked ~ .checkmark:after {
        display: block;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
        left: 5px;
        top: 0px;
        width: 5px;
        height: 10px;
        border: solid black;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`

function CheckBox({ title }) {
    return (
        <CheckBoxWrapper>
            {title}
            <input type="checkbox" />
            <span class="checkmark"></span>
        </CheckBoxWrapper>
    )
}

CheckBox.propTypes = {
    title: PropTypes.string.isRequired
}

export default CheckBox
