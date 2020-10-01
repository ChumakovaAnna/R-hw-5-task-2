/**
 * компонент ля небольшого баннера рекламы
 */
import React from 'react';
import PropTypes from 'prop-types';

BannerSmall.propTypes = {
  data: PropTypes.object.isRequired,
};

function BannerSmall({ data }) {
  return (
    <div className="container bannerSmall">
      <img src={data.img} className="img_bannerSmall" alt="Стич с мягкой игрушкой"></img>
      <button href={data.link}>{data.title}</button>
      <span>{data.text}</span>
    </div>
  );
}

export default BannerSmall;