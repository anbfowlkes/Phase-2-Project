import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import Results from './Components/Results'
import About from './Components/About'
import Home from './Components/Home'
import Login from './Components/Login'
import InfoPage from './Components/InfoPage'
import Calculations from './Components/Calculations'

const App = () => {

  const [totalDailyExp, setTotalDailyExp] = useState(0)
  const [incomeInfoState, setIncomeInfoState] = useState(0)
  const [taxInfoState, setTaxInfoState] = useState({})
  const [debtInfoState, setDebtInfoState] = useState([])
  const [investInfoState, setInvestInfoState] = useState([])

  return (
    <>
      <Router>
        <div>
          <NavBar></NavBar>
          <Switch>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/info">
              <InfoPage
                setTotalDailyExp={setTotalDailyExp}
                setIncomeInfoState={setIncomeInfoState}
                taxInfoState={taxInfoState}
                setTaxInfoState={setTaxInfoState}
                debtInfoState={debtInfoState}
                setDebtInfoState={setDebtInfoState}
                investInfoState={investInfoState}
                setInvestInfoState={setInvestInfoState}
              />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div >
      </Router >

     

        {console.log(debtInfoState)}
        
        <Calculations 
        totalDailyExp={totalDailyExp}
        incomeInfoState={incomeInfoState}
        taxInfoState={taxInfoState}
        debtInfoState={debtInfoState}
        investInfoState={investInfoState} />
    </>
  );
}

export default App;
