/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
//css
require('./css/index.css');

type Props = {||};

function Index() {
	return (
		<React.Fragment>
			Index
		</React.Fragment>
	)
}

const dom = document.getElementById('App')
if (dom === null) {
	//Error
	console.error("dom does not exist")
} else {
	ReactDOM.render(<Index />, dom);
}
