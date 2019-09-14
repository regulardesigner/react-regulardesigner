// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import locaux
import './content.scss';

// composant
const Article = ({ title, category, excerpt }) => {
  return (
    <article className="article">
      <h2 className="article-title">{title}</h2>
      <h3 className="article-tag">{category}</h3>
      <p className="article-excerpt">{excerpt}</p>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

// export
export default Article;
