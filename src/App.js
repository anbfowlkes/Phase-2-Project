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
  
  const [dailyTotalObj, setDailyTotalObj] = useState({
      dailyMoneyFromIncome: 0,
      dailyMoneyFromInvestments: 0,
      dailyLossFromExpenses: 0,
      dailyLossFromDebt: 0,
      dailyLossFromTaxes: 0,
  })

  const [moneyFromIncomeTotal, setMoneyFromIncomeTotal] = useState(0)

  const moneySetter = (x) => {
    setMoneyFromIncomeTotal(x)
  }

  //const [dailyTotalObj, setDailyTotalObj] = useState({})

  const [prevSpending, setPrevSpending] = useState([])
  const [prevIncome, setPrevIncome] = useState([])
  const [prevTaxes, setPrevTaxes] = useState({})
  const [prevDebts, setPrevDebts] = useState([])
  const [prevInvestments, setPrevInvestments] = useState([])
  const [prevTotals, setPrevTotals] = useState({})
  const [prevBills, setPrevBills] = useState([])

  const [newSpending, setNewSpending] = useState([])
  const [newIncome, setNewIncome] = useState([])
  const [newTaxes, setNewTaxes] = useState({})
  const [newDebts, setNewDebts] = useState([])
  const [newInvestments, setNewInvestments] = useState([])
  const [newTotals, setNewTotals] = useState({})
  const [newBills, setNewBills] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/daily')
      .then((res) => res.json())
      .then((data) => setPrevSpending(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8000/income')
      .then((res) => res.json())
      .then((data) => setPrevIncome(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8000/investments')
      .then((res) => res.json())
      .then((data) => setPrevInvestments(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8000/debt')
      .then((res) => res.json())
      .then((data) => setPrevDebts(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8000/taxes')
      .then((res) => res.json())
      .then((data) => setPrevTaxes(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8000/bills')
      .then((res) => res.json())
      .then((data) => setPrevBills(data))
  }, [])

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
              <InfoPage
                newSpending={newSpending}
                setNewSpending={setNewSpending}
                prevSpending={prevSpending}
                setPrevSpending={setPrevSpending}
                newIncome={newIncome}
                setNewIncome={setNewIncome}
                prevIncome={prevIncome}
                setPrevIncome={setPrevIncome}
                newTaxes={newTaxes}
                setNewTaxes={setNewTaxes}
                prevTaxes={prevTaxes}
                setPrevTaxes={setPrevTaxes}
                newDebts={newDebts}
                setNewDebts={setNewDebts}
                prevDebts={prevDebts}
                setPrevDebts={setPrevDebts}
                newInvestments={newInvestments}
                setNewInvestments={setNewInvestments}
                prevInvestments={prevInvestments}
                setPrevInvestments={setPrevInvestments}
                newBills={newBills}
                setNewBills={setNewBills}
                prevBills={prevBills}
                setPrevBills={setPrevBills}
                newTotals={newTotals}
                setNewTotals={setNewTotals}
                prevTotals={prevTotals}
                setPrevTotals={setPrevTotals}
                />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div >
      </Router >
    </>
  );
}

export default App;
