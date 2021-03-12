import React from 'react';
import './App.less';
import NavigationBar from './components/NavigationBar';
import TopHeader from './components/TopHeader';
import PagesBar from './components/PagesBar';
import Content from './components/Content';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <TopHeader />
      <PagesBar />
      <Content />
    </div>
  );
}

export default App;
