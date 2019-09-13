// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// import categories from '../../data/categories';

// Import locaux
import './header.scss';

// Composant

// console.log(categories);

const Header = ({categories}) => {
  return (
    <header>
      <h1>designer/developer</h1>
      <nav className="nav">
        {
          categories.map((catItem) => (
            <a className="nav-item" key={catItem} href="#">{catItem}</a>
          ))
        }
      </nav>
    </header>
  );
}

// props val
Header.propTypes = {
  categories: PropTypes.array.isRequired,
}

// Export
export default Header;
