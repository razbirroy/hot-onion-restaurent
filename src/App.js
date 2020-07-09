import React from 'react';
import './App.css';
import HeaderTop from './components/HeaderTop/HeaderTop';
import {
  BrowserRouter as Router,
  Switch,
  Route
  }
 from "react-router-dom";
import DifferentTime from './components/DifferentTime/DifferentTime';
import ItemDetails from './components/ItemDetails/ItemDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp'



function App() {
   const [store, setStore] = useState([]);
   const headerCart = (item) =>{
     setStore(item); 
     console.log(item)
   }
    return (
     <div className="App">
        <Router>
           <Switch>
              <Route path="/ItemName/:productName"> 
                 <ItemDetails headerCart = {headerCart}></ItemDetails>
              </Route>
              <Route path ="/signIn">
                 <SignIn></SignIn>
              </Route>
              <Route path ="/signup">
                 <SignUp></SignUp>
              </Route>
               <Route path="/"> 
                  <HeaderTop store = {store}></HeaderTop>
                  <DifferentTime></DifferentTime>
               </Route>
           </Switch>
        </Router>
    </div>
  );
}

export default App;
