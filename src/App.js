import { useState } from 'react'
import './App.css'
import { Route, Switch, withRouter} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Login from './Components/Login'
import InfoPage from './Components/InfoPage'

const App = () => {

  const [totalDailyExp, setTotalDailyExp] = useState(0)
  const [income, setIncome] = useState(0)
  const [taxInfoState, setTaxInfoState] = useState([])
  const [debtInfoState, setDebtInfoState] = useState([])
  const [investInfoState, setInvestInfoState] = useState([])

  return (
    <>
        <NavBar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </NavBar>

      <InfoPage 
        setTotalDailyExp={setTotalDailyExp} 
        setIncome={setIncome}
        taxInfoState={taxInfoState}
        setTaxInfoState={setTaxInfoState}
        debtInfoState={debtInfoState}
        setDebtInfoState={setDebtInfoState}
        investInfoState={investInfoState}
        setInvestInfoState={setInvestInfoState}
        />

        {console.log(debtInfoState)}
    </>
  );
}

export default App;
