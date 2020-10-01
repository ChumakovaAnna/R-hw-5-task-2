/**
 * Компонент для ссылок на темы новостей
 * @param {*} props 
 */
import React from "react";
import PropTypes from "prop-types";
import News from "./News"

NewsLink.propTypes = {
	data: PropTypes.array.isRequired,
	news: PropTypes.array.isRequired,
};

function NewsLink(props) {
	const { data } = props;
	const { news } = props;
	return (
		<>
			<div className="container">
				{data.map((item, index) => (
					<button key={index} href="#" className="newsLink">
						{item}
					</button>
				))}
			</div>
			<News news={news}></News>
		</>
	);
}

export default NewsLink;
