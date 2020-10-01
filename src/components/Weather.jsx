/**
 * Компонент для прорисовки погоды
 */
import React from 'react';
import PropTypes from 'prop-types';

Weather.propTypes = {
  data: PropTypes.object.isRequired,
};

function Weather({data}) {
  return (
    <div className="container ">
      <h3>Погода</h3>
      <div className="weather">
        <div className="weatherNow">
          <div className="img_weatherNow"></div> 
          <span>{data.now}</span>
        </div>
        <div>
          <div>утром: {data.morning}</div>
          <div>днем: {data.day}</div>
        </div>
      </div>
    </div>
  );
}

export default Weather;