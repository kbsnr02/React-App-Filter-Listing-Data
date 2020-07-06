import React from 'react';

const Card = ({ id, name, url }) => {
	return (
		<div className="card">
			<img alt={name} src={url} style={{ width: '200px', height: '200px' }} />
			<div>
                <h2>{name}</h2>
			</div>
		</div>
	);
};

export default Card;
