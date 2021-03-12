import React from 'react';
import './App.less';
import SidBar from './components/SideBar';
import UserHeader from './components/UserHeader';
import PagesBar from './components/PagesBar';
import Content from './components/Content';
import Config from './Config.json';
Config['current-sit'].push(1);
console.log(Config, 'Google');
function App() {
  return (
    <div className="App">
      <SidBar />
      <UserHeader />
      <PagesBar />
      <Content />
    </div>
  );
}

export default App;
