/**
 * Компонент для эфира
 */
import React from 'react';
import PropTypes from 'prop-types';

Ether.propTypes = {
  data: PropTypes.array.isRequired,
};

function Ether({data}) {
  return (
    <div className="container ether">
      <h3>Эфир</h3>
      <ul>
      {data.map(item =>
        <li key={item.id}>
          <span>{item.title}</span>
          <span>{item.channel}</span>
        </li>)}
      </ul>
    </div>
  );
}

export default Ether;