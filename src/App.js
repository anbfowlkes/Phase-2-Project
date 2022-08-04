import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import Results from './Components/Results'
import About from './Components/About'
import Home from './Components/Home'
import Login from './Components/Login'
import InfoPage from './Components/InfoPage'

/*
for the display we want:
daily expenses, investment growth, debt growth, taxes, 
*/


const App = () => {
  
  return (
    <>
      <Router>
        <div>
          <NavBar></NavBar>
          <Switch>
            <Route path="/results">
              <Results 
              
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/info">
              <InfoPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div >
      </Router >
<<<<<<< HEAD
=======

        <Calculations  />
>>>>>>> 0e73836a48962568464ffc26ebcfb236479b9cef
    </>
  );
}

export default App;
