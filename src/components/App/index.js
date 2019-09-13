// == Import : npm
import React from 'react';


// == Import : local
import Header from 'src/components/Header';

import categories from 'src/data/categories'

import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Header categories={categories} />
    <div>Mon super menu</div>
    <div>mon super contenu</div>
    <div>Mon super footer</div>
  </div>
);

// == Export
export default App;
