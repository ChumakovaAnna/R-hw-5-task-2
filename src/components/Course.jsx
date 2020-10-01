/**
 * Компонент для ссылок на курсы валюты
 */
import React from 'react';
import PropTypes from 'prop-types';

Course.propTypes = {
  data: PropTypes.array.isRequired,  
};

function Course(props) {
  const {data} = props;

  return (
    <div className="container">
      {data.map((item, index) => <button key={index} href="#">{item.title} {item.rate} {item.changes}</button>)} 
    </div>
  );
}

export default Course;