import { useState, useEffect } from 'react'
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
  const [dailySpending, setDailySpending] = useState([])
  const [incomeInfoState, setIncomeInfoState] = useState({})
  const [taxInfoState, setTaxInfoState] = useState({})
  const [debtInfoState, setDebtInfoState] = useState([])
  const [investInfoState, setInvestInfoState] = useState([])
  const [totals, setTotals] = useState({})

  useEffect(() => {
    fetch('http://localhost:8000/daily')
      .then((res) => res.json())
      .then((data) => setDailySpending(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8000/income')
      .then((res) => res.json())
      .then((data) => setIncomeInfoState(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8000/investments')
      .then((res) => res.json())
      .then((data) => setInvestInfoState(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8000/debt')
      .then((res) => res.json())
      .then((data) => setDebtInfoState(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8000/taxes')
      .then((res) => res.json())
      .then((data) => setTaxInfoState(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8000/calculated')
      .then((res) => res.json())
      .then((data) => setTotals(data))
  }, [])

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

        <Calculations 
        totalDailyExp={totalDailyExp}
        incomeInfoState={incomeInfoState}
        taxInfoState={taxInfoState}
        debtInfoState={debtInfoState}
        investInfoState={investInfoState}
        dailySpending={dailySpending} />
    </>
  );
}

export default App;
