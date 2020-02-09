import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo/zomato_flat_bg_logo.svg';
import { footerContent } from '../initialState';
import Container from '../components/styled-component/Container';

const FooterWrapper = styled.footer`
    background-color: #282C35;
    border-top: 1px solid #eee;
    padding: 0;
    color: #CDCDCD;
    font-size: 14px;
    ${Container} {
        flex-direction: column;
    }

`;
const FootHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    img{
        border-radius: .3rem;
    }
    select{
        background-color: rgba(0,0,0,.3);
        min-width: 155px;
        border: 1px solid #6d6d6d;
        padding: 10px;
        border-radius: 3px;
        line-height: 22px;
        margin: .25em;
        color: white;
    }
`;
const FootBody = styled.div`
    width: 100%;
    h3{
        font-family: 'OpenSans Bold', sans-serif;
        margin: 12px 0;
        font-size: 18px;
        font-weight: 700;
        color: #ADB0B6;
    }
    ul{
        list-style: none;
        padding: 0px;
        li{
            padding-bottom: 8px;
            cursor: pointer;
        }
    }
    .wrapper{
        display: flex;
        ul{
            flex: 1;
        }
    }
    .sub{
            flex: 1;
            padding: 0px 10px;
    }
    .level{
        border-top: 1px solid #3C3F46;
        margin: 10px 0px;
    }
    .other-links{
        display: flex;
        align-items: center;
        .links{
            span{
                display: inline-block;
                padding: 10px 25px 10px 0;
                cursor: pointer;
            }
            
        }
    }

    @media (max-width: 600px) {
        .wrapper{
            display: block
        }
    }
`;
const CopyRight = styled.div`
        width: 100%;
        border-top: 1px solid #3C3F46;
        padding: 10px 0px;
        color: #9a9a9a;
        opacity: .5;
        line-height: 20px;
        font-size: 10px;
`;
function FooterContainer() {
  const {
    aboutZomato, forFoodies, forRestaurants, countries,
  } = footerContent;
  return (
    <FooterWrapper>
      <Container>

        <FootHead>
          <img src={logo} alt="zomato logo" width="60" height="60" />
          <select>
            <option>
              {/* eslint-disable-next-line */}
              &#127760;
              {' '}
              English
            </option>
          </select>
        </FootHead>
        <FootBody>
          <div className="wrapper level">
            <div className="sub">
              <h3>About Zomato</h3>
              <ul>
                {aboutZomato.map((link) => <li>{link}</li>)}
              </ul>
            </div>
            <div className="sub">
              <h3>For Foodies</h3>
              <ul>
                {forFoodies.map((link) => <li>{link}</li>)}
              </ul>
            </div>
            <div className="sub">
              <h3>For Restaurants</h3>
              <div className="wrapper">
                <ul>
                  {forRestaurants[0].map((link) => <li>{link}</li>)}
                </ul>
                <ul>
                  {forRestaurants[1].map((link) => <li>{link}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="level">
            <h3>Countries</h3>
            <div className="wrapper">
              <ul className="sub">
                {countries.slice(0, 5).map((link) => <li>{link}</li>)}
              </ul>
              <ul className="sub">
                {countries.slice(6, 11).map((link) => <li>{link}</li>)}
              </ul>
              <ul className="sub">
                {countries.slice(11, 16).map((link) => <li>{link}</li>)}
              </ul>
              <ul className="sub">
                {countries.slice(16, 21).map((link) => <li>{link}</li>)}
              </ul>
              <ul className="sub">
                {countries.slice(21, -1).map((link) => <li>{link}</li>)}
              </ul>
            </div>

          </div>
          <div className="level other-links">
            <div className="links">
              <span>Privacy</span>
              <span> Terms</span>
              <span>API Policy</span>
              <span>CSR</span>
              <span>Security</span>
              <span>Sitemap</span>
            </div>
            <div className="social-links" />
          </div>
        </FootBody>
        <CopyRight>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies.
          All trademarks are properties of their respective owners.
          © 2008-2020 - Zomato™ Media Pvt Ltd. All rights reserved.
        </CopyRight>
      </Container>
    </FooterWrapper>

  );
}


export default FooterContainer;
