// == Import : npm
import React from 'react';

// == Import : local
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// les datas des catégries que j'importe et que j'utilise dans mon menu
import categories from 'src/data/categories';

import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Header categories={categories} />
    <div>mon super contenu</div>
    <Footer />
  </div>
);

// == Export
export default App;
