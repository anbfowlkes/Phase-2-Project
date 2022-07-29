import './App.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Login from './Components/Login'
import InfoPage from './Components/InfoPage'

const App = () => {
  return (
    <>
        <NavBar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </NavBar>


      <InfoPage />
    </>
  );
}

export default App;
