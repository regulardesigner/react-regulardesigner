// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import locaux
import Article from 'src/components/Content/Article';
import './content.scss';

// Composant
const Content = ({ articles }) => {
  return (
    <section id="blog">
      <h2 className="blog-title">let's talk about design and development:</h2>
      <div className="articles">
        { articles.map((article) => {
          return (
            <Article
              key={article.id}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...article}
            />
          );
        })}
      </div>
    </section>
  );
};


// PropTypes //
/* Content.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }),
  ).isRequired,
}; */

Content.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// Export
export default Content;
