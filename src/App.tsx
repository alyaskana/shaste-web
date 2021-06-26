import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.scss'
import { CocktailPage } from './pages/cocktail'
import CocktailsPage from './pages/cocktails/CocktailsPage'
import CollectionsPage from './pages/collections/CollectionsPage'
import FeedPage from './pages/feed/FeedPage'
import { Header } from '@components/common/Header'
import { Footer } from '@components/common/Footer'
import LoginPage from './pages/login/LoginPage'
import { NewCocktailPage } from './pages/NewCocktail'
import { Profile } from './pages/Profile'
import { MyBar } from './pages/MyBar'
import { SignUp } from './pages/SignUp'
import { $token, fetchCurrentUserFx } from './models/users'
import './models/init'

function App() {
  const token = useStore($token)

  useEffect(() => {
    if (token) {
      fetchCurrentUserFx({})
    }
  }, [token])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <CocktailsPage />
        </Route>
        <Route exact path="/login">
          {token ? <Redirect to="/cocktails" /> : <LoginPage />}
        </Route>
        <Route exact path="/sign_up">
          <SignUp />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/profile/mybar">
          <MyBar />
        </Route>
        <Route exact path="/collections">
          <CollectionsPage />
        </Route>
        <Route exact path="/cocktails">
          <CocktailsPage />
        </Route>
        <Route exact path="/cocktails/new">
          <NewCocktailPage />
        </Route>
        <Route exact path="/cocktails/:id" render={(props) => <CocktailPage {...props} />} />
        <Route exact path="/:login" render={(props) => <Profile {...props} />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
