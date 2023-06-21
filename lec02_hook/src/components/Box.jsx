import React, { useEffect, useState } from 'react';

const Box = ({boxStyle}) => {

	const [style, setStyle] = useState({});

	useEffect(() => {
		console.log(`Box.useEffect호출 : 박스애니메이션 ~!~!!~~!~!`);
		setStyle(boxStyle);
	}, [boxStyle]);

	return (
		<div style={style}>
			
		</div>
	);
};

export default Box;