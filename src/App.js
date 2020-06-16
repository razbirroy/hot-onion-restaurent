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



function App() {
  return (
     <div className="App">
        <Router>
           <Switch>
              <Route path="/ItemName/:productName"> 
                 <ItemDetails></ItemDetails>
              </Route>
               <Route path="/"> 
                  <HeaderTop></HeaderTop>
                  <DifferentTime></DifferentTime>
               </Route>
           </Switch>
        </Router>
    </div>
  );
}

export default App;
