import React from 'react';
import './App.css';
import HeaderTop from './components/HeaderTop/HeaderTop';
import NavBar from './components/NavBar/NavBar';
import FoodMenu from './components/FoodMenu/FoodMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DifferentTime from './components/DifferentTime/DifferentTime';


function App() {
  return (
    <div className="App">
        <HeaderTop></HeaderTop>
        <NavBar></NavBar>
       
        <Router>
           <Switch>
               <Route exact path="/">
                  <FoodMenu></FoodMenu>
               </Route>
               <Route path="/breakfast">
                   <DifferentTime></DifferentTime>
               </Route>

           </Switch>
        </Router>
    </div>
  );
}

export default App;
