import React from 'react'
import styled from 'styled-components'

const SearchInputWrapper = styled.div`
    input{
        width: 333px;
        border: none;
        border-radius: 2px;
        padding: 10px 20px;
    }
    button{
        background: #cb202d;
        color: #fff;
        font-family: OpenSans Regular, sans-serif;
        font-weight: bold;
        text-align: center;
        border: none;
        border-radius: 4px;
        border: 1px solid rgba(255,255,255,.75);
        padding: 8px 10px;
        margin-left: 3px;
        cursor: pointer;

        &:hover{
            background-color: #D94148;
            transition: .15s ease-out background-color;
        }
    }
`

function SearchInput() {
    return (
        <SearchInputWrapper>
            <input type="text" placeholder="Search for restaurant or cusisines..." />
            <button>Search</button>
        </SearchInputWrapper>
    )
}

export default SearchInput
