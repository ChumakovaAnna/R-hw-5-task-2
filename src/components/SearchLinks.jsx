/**
 * Компонент для ссылок над input поиска
 */
import React from 'react';
import PropTypes from 'prop-types';

SearchLinks.propTypes = {
  data: PropTypes.array.isRequired,
};

function SearchLinks({data}) {
  return (
    <div className="container">
      {data.map((item, index) => <button href="#" key={index}>{item}</button>)}
    </div>
  );
}

export default SearchLinks;