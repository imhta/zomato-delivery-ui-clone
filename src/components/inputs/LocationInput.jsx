import React from 'react'
import styled from 'styled-components'

const LocationInputWrapper = styled.div`
    input{
        width: 230px;
        border: none;
        border-radius: 2px;
        padding: 10px 20px;
        margin: 0px 3px;
        font-size: 14px;
        font-family: OpenSans Regular, sans-serif;
        font-weight: bold;
    }
`

function LocationInput() {
    return (
        <LocationInputWrapper>
            <input type="text" value="Mumbai" readOnly />
        </LocationInputWrapper>
    )
}

export default LocationInput
