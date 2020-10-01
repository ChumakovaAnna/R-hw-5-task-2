/**
 * Компонент для большого рекламного баннера
 */
import React from 'react';
import PropTypes from 'prop-types';

BannerBig.propTypes = {
  data: PropTypes.object.isRequired,
};

function BannerBig({data}) {
  return (
    <div className="container bannerBig">
      <a href={data.link}>
        <img src={data.img} alt="большой баннер" className="img_bannerBig"></img>
      </a>
    </div>
  );
}

export default BannerBig;