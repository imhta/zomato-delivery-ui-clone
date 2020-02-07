import React from 'react'
import styled from 'styled-components'

const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    input{
        width: 325px;
        border: none;
        border-radius: 2px;
        padding: 10px 28px;
        font-size: 14px;
        font-family: OpenSans Regular, sans-serif;
        cursor: pointer;
    }
    button{
        background: #cb202d;
        color: #fff;
        font-size: 14px;
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
    .material-icons{
        font-size: 18px;
        font-weight: bold;
        color: #89959B;
        position: absolute;
        left: 5px;
    }
`

function SearchInput() {
    return (
        <SearchInputWrapper>
            <i class="material-icons">
                search
            </i>
            <input type="text" placeholder="Search for restaurant or cusisines..." />
            <button>Search</button>
        </SearchInputWrapper>
    )
}

export default SearchInput
