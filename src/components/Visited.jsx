/**
 * Компонент для Посещаемое
 */
import React from 'react';
import PropTypes from 'prop-types';

Visited.propTypes = {
  data: PropTypes.array.isRequired,
};

function Visited({ data }) {
  return (
    <div className="container visited">
      <h3>Посещаемое</h3>
      <ul>
      {data.map(item =>
        <li key={item.id}>
          <span>{item.title}</span>
          <span> - </span>
          <span>{item.text}</span>
        </li>)}
      </ul>
    </div>
  );
}

export default Visited;