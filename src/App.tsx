import { useStore } from "effector-react";
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
import { tokenStore } from '@/store'

function App() {
  const token = useStore(tokenStore);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/login'>
          {token ? <Redirect to="/cocktails" /> : <LoginPage />}
        </Route>
        <Route exact path='/feed'>
          <FeedPage />
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
        <Route exact path='/:login' render={(props) => <Profile {...props} />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
