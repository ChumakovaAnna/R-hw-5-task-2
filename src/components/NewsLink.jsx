import React from "react";
import PropTypes from "prop-types";

NewsLink.propTypes = {
	data: PropTypes.array.isRequired,
};

function NewsLink(props) {
	const { data } = props;
	return (
		<div className="container">
			{data.map((item, index) => (
				<a key={index} href="#" className="newsLink">
					{item}
				</a>
			))}
		</div>
	);
}

export default NewsLink;
