// == Import : npm
import React from 'react';

// == Import : local
import Header from 'src/components/Header';
import Content from 'src/components/Content';
import Footer from 'src/components/Footer';

// les datas des catégries que j'importe et que j'utilise dans mon menu
import categories from 'src/data/categories';
import articles from 'src/data/posts';

import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Header categories={categories} />
    <Content articles={articles} />
    <Footer />
  </div>
);

// == Export
export default App;
