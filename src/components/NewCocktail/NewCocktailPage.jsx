import React from 'react';
import s from './NewCocktailPage.module.scss'

const NewCocktailPage = () => {
  return (
    <div>
      <form>
        <label>
          <p>Email</p>
          <input name='email' type="email" onChange={e => setUserEmail(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewCocktailPage;