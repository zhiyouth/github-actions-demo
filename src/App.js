import React from 'react';
import './App.less';
import SidBar from './components/SideBar';
import UserHeader from './components/UserHeader';
import PagesBar from './components/PagesBar';
import Content from './components/Content';
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
