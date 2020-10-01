/**
 * Компонент для списков новостей по выбранной тематике
 */
import React from 'react';
import PropTypes from 'prop-types';
import icon from '../icon.svg';

News.propTypes = {
  news: PropTypes.array.isRequired,
};

function News(props) {
  const {news} = props;

  return (
    <div className="container news">
				{news.map(item => (
					<a key={item.id} href={item.link} className="new">
            <img src={icon} alt="icon"></img>
            {item.text}
					</a>
				))}
    </div>
  );
}

export default News;