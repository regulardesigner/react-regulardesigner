// Import npm
import React from 'react';
import PropTypes from 'prop-types';

import categories from '../../data/categories';

// Import locaux

// Composant

console.log(categories);

const Header = ({categories}) => {
  return (
    <header>
      <h1>regular.designer</h1>
      <nav className="nav">
        {
          categories.map((catItem) => (
            <a key={catItem} href="#">{catItem}</a>
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
