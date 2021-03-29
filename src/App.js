import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import useToken from './components/App/useToken';
import Cocktail from './components/Cocktails/Cocktail/Cocktail';
import Cocktails from './components/Cocktails/Cocktails';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import UserContext from './userContext'

function App() {
  const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <UserContext.Provider value={token}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/login'>
            {token ? <Redirect to="/cocktails" /> : <Login setToken={setToken} />}
          </Route>
          <Route exact path='/cocktails'>
            <Cocktails />
          </Route>
          <Route exact path='/cocktails/:id' render={(props) => <Cocktail {...props} />} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
