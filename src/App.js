import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import useToken from './components/App/useToken';
import CocktailPage from './components/Cocktails/Cocktail/CocktailPage';
import CocktailsPage from './components/Cocktails/CocktailsPage';
import CollectionsPage from './components/Collections/CollectionsPage';
import FeedPage from './components/Feed/FeedPage';
import Header from './components/Header/Header';
import LoginPage from './components/Login/LoginPage';
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
          <Route exact path='/login'>
            {token ? <Redirect to="/cocktails" /> : <LoginPage setToken={setToken} />}
          </Route>
          <Route exact path='/feed'>
            <FeedPage />
          </Route>
          <Route exact path='/collections'>
            <CollectionsPage />
          </Route>
          <Route exact path='/cocktails'>
            <CocktailsPage />
          </Route>
          <Route exact path='/cocktails/:id' render={(props) => <CocktailPage {...props} />} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
