import React from 'react';
import './App.css';
import HeaderTop from './components/HeaderTop/HeaderTop';
import NavBar from './components/NavBar/NavBar';
import FoodMenu from './components/FoodMenu/FoodMenu';

function App() {
  return (
    <div className="App">
        <HeaderTop></HeaderTop>
        <NavBar></NavBar>
        <FoodMenu></FoodMenu>
    </div>
  );
}

export default App;
