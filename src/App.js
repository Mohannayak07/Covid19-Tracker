import React from 'react'
import './App.css';
import StateData from './components/StateData';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Home from './components/Home';
export default function App() {
  return (
    <Router>
       <div>
        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/statedata">StateWise</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><h2>Covid-19 <span style={{color:'#ff3700'}}>Tracker</span></h2></li>
        </ul>
        </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/statedata' component={StateData}></Route>
        </Switch>
        </Router>
        
    
     
     
  );
}

