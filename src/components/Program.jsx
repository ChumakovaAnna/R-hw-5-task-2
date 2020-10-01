/**
 * Компонент для программы передач
 */
import React from 'react';
import PropTypes from 'prop-types';

Program.propTypes = {
  data: PropTypes.array.isRequired,
};

function Program({ data }) {
  return (
    <div className="container program">
      <h3>Посещаемое</h3>
      <ul>
      {data.map(item =>
        <li key={item.id}>
          <span>{item.time}</span>
          <span>{item.program}</span>
          <span>{item.channel}</span>
        </li>)}
      </ul>
    </div>
  );
}

export default Program;