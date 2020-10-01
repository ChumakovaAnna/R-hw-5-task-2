/**
 * Компонент для прорисовки Footer
 */
import React from 'react';
import PropTypes from 'prop-types';
import Weather from "./Weather";
import Timetable from "./Timetable";
import Ether from "./Ether";
import Visited from "./Visited";
import Program from "./Program";

Footer.propTypes = {
  data: PropTypes.object.isRequired,
};

function Footer({data}) {

const {weather, visited, programTV, ether} = data;

  return (
    <div className="container footer">
      <Weather data={ weather }></Weather>
      <Timetable></Timetable>
      <Ether data={ ether }></Ether>
      <Visited data={ visited }></Visited>
      <Program data={ programTV }></Program>
    </div>
  );
}

export default Footer;