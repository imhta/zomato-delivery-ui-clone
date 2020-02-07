import React from 'react'
import styled from 'styled-components'

const LocationInputWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    input{
        width: 225px;
        border: none;
        border-radius: 2px;
        padding: 10px 25px;
        margin: 0px 3px;
        font-size: 14px;
        font-family: OpenSans Regular, sans-serif;
        font-weight: bold;
        cursor: pointer;
    }
    .material-icons{
        font-size: 20px;
        position:absolute;
        color: #89959B;
    }
    .material-icons.location{
        left: 7px;
    }
    .material-icons.arrow{
        right: 10px;
    }
`

function LocationInput() {
    return (
        <LocationInputWrapper>
            <i class="material-icons location">
                location_on
            </i>
            <input type="text" value="Mumbai" readOnly />
            <i class="material-icons arrow">
                keyboard_arrow_down
            </i>
        </LocationInputWrapper>
    )
}

export default LocationInput
