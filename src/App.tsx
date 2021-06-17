import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import CocktailPage from './pages/cocktail/CocktailPage';
import CocktailsPage from './pages/cocktails/CocktailsPage';
import CollectionsPage from './pages/collections/CollectionsPage';
import FeedPage from './pages/feed/FeedPage';
import { Header } from '@organisms/Header';
import { Footer } from '@organisms/Footer';
import LoginPage from './pages/login/LoginPage';
import { NewCocktailPage } from './pages/NewCocktail';
import { Profile } from './pages/Profile'
import { MyBar } from './pages/MyBar'
import { userStore } from '@/store'


function App() {
  const user = userStore.getState();

  // if (!user) {
  //   return <Login setUser={setUser} />
  // }
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/login'>
          {user ? <Redirect to="/cocktails" /> : <LoginPage />}
        </Route>
        <Route exact path='/feed'>
          <FeedPage />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/profile/mybar'>
          <MyBar />
        </Route>
        <Route exact path='/collections'>
          <CollectionsPage />
        </Route>
        <Route exact path='/cocktails'>
          <CocktailsPage />
        </Route>
        <Route exact path='/cocktails/new'>
          <NewCocktailPage />
        </Route>
        <Route exact path='/cocktails/:id' render={(props) => <CocktailPage {...props} />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
