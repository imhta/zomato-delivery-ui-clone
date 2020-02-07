import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo/zomato_white_logo_new.svg'
import Container from './styled-component/Container'
import LocationInput from './inputs/LocationInput'
import SearchInput from './inputs/SearchInput'

const MainNavbarWrapper = styled.nav`
    background-color: #cb202d;
    padding: 10px;
    img{
        padding: 8px 0;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 0px 5px;

    @media (max-width: 1110px) {
        display: none;
    }

`


const AccountContainer = styled.div`
    display: flex;
    align-items: center;
    button{
        color: white;
        font-size: 15px;
        font-family: OpenSans Regular, sans-serif;
        padding: 10px 20px  12px;
        background-color: transparent;
        border: none;
        border-radius: 4px;
        margin-left: 6px;
        cursor: pointer;
    }
    .signup{
        background-color: #ba1e2b;
    }

    button:hover{
            background-color: #D94148;
            transition: .15s ease-out background-color;
        }
    
`
function MainNavbar() {
    return (
        <MainNavbarWrapper>
            <Container>
                <img src={logo} alt="zomato logo" />
                <SearchContainer>
                    <LocationInput />
                    <SearchInput />
                </SearchContainer>

                <AccountContainer>
                    <button href="#" className="login">Log in</button>
                    <button href="#" className="signup">Create an account</button>
                </AccountContainer>
            </Container>
        </MainNavbarWrapper>
    )
}

export default MainNavbar
