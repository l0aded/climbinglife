/* @flow */

import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import {
  InstantSearch,
  Configure
} from 'react-instantsearch-dom';
import { SEARCH_API_KEY, APP_ID, indexName } from '../algolia.js'

//css
require('./css/index.css');
type Props = {||};

function Index() {
	return (
		<div>
			<InstantSearch
				 appId={APP_ID}
				 apiKey={SEARCH_API_KEY}
				 indexName={indexName}
			 >
         <Configure
           hitsPerPage={16}
         />
				 <App />
			</InstantSearch>
		</div>
	)
}

const dom = document.getElementById('App')
if (dom === null) {
	//Error
	console.error("dom does not exist")
} else {
	ReactDOM.render(<Index />, dom);
}
