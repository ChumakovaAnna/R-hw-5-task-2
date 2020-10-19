import React from 'react';
import PropTypes from 'prop-types';

WidgetWithList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

function WidgetWithList(props) {
  const {title} = props;
  return (
    <div className="container">
    <h3>{title}</h3>
    <ul>
      {props.children}
    </ul>
  </div>
  );
}

export default WidgetWithList;