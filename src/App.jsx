import React from 'react';
import Navbar from './components/Navbar'
import GoldAlert from './components/styled-component/GoldAlert'
import goldLogo from './assets/images/logo/sticky_gold_logo.png'

function App() {
  return (
    <div className="App">
      <GoldAlert
        icon={goldLogo}
        content="Introducing Zomato Gold — An Exclusive Members Club."
        action={{ title: 'JOIN NOW', href: 'https://www.zomato.com/mumbai/gold' }} />
      <Navbar />
    </div>
  );
}

export default App;
