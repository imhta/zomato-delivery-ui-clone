import React from 'react';
import { path } from './initialState';
import goldLogo from './assets/images/logo/sticky_gold_logo.png';
import NavbarContainer from './containers/NavbarContainer';
import GoldAlert from './components/styled-component/GoldAlert';
import BreadCrumb from './components/styled-component/BreadCrumb';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <GoldAlert
        icon={goldLogo}
        content="Introducing Zomato Gold — An Exclusive Members Club."
        action={{ title: 'JOIN NOW', href: 'https://www.zomato.com/mumbai/gold' }}
      />
      <NavbarContainer />
      <BreadCrumb path={path} />
      <MainContainer />
    </div>
  );
}

export default App;
