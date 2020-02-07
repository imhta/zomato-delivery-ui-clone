import React from 'react'
import styled from 'styled-components'
import Link from './Link';
import Container from './styled-component/Container'
import getTheAppImg from '../assets/images/get-the-app-plain.svg'
import bookATableImg from '../assets/images/book-a-table.svg'
import orderFoodImg from '../assets/images/order-online.svg'
import GoldImg from '../assets/images/header_gold_icon.svg'


const BottomNavbarWrapper = styled.nav`
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
`
const Child = styled.div`
    display: flex;
`

function BottomNavbar() {
    return (
        <BottomNavbarWrapper>
            <Container>
            <Child className="left">
                <Link href="https://www.zomato.com/mobile" icon={{ url: getTheAppImg }} title="Get the App" />
            </Child>
            <Child className="right">
                <Link href="https://www.zomato.com/mumbai/order" icon={{ url: orderFoodImg }} title="Order Food" />
                <Link href="https://www.zomato.com/mumbai/restaurants?table_booking=1" icon={{ url: bookATableImg }} title="Book a Table" />
                <Link href="https://www.zomato.com/gold" icon={{ url: GoldImg, size: '22px' }} title="Zomato Gold" />
            </Child>
            </Container>
        </BottomNavbarWrapper>
    )
}

export default BottomNavbar
