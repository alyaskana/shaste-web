import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cocktail from './components/cocktails/Cocktail/Cocktail';
import Cocktails from './components/cocktails/Cocktails';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/cocktails'>
        <Cocktails />
      </Route>
      <Route exact path='/cocktails/:id' render={(props) => <Cocktail {...props} />} />
    </BrowserRouter>
  );
}

export default App;
