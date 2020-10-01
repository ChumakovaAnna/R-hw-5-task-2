/**
 * Компонент для формы поиска
 */
import React from 'react';
import PropTypes from 'prop-types';
import SearchLinks from "./SearchLinks";

Search.propTypes = {
  data: PropTypes.array.isRequired,
};

function Search({data}) {
  return (
    <div className="container searchContainer">
      <SearchLinks data={data}></SearchLinks>
      <form>
        <input type="search" className="input_search"></input>
        <button>Найти</button>
      </form>
      <span>Найдется все! Например, 
        <button href="#">фаза луны</button>
      </span>
    </div>
  );
}

export default Search;