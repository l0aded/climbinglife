/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
//css
require('./css/index.css');

type Props = {||};

class Index extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			imageURLs: [
				'https://s3-us-west-1.amazonaws.com/climbinglife/LRG_DSC01229.JPG','https://s3-us-west-1.amazonaws.com/climbinglife/ORG_DSC01009.JPG','https://s3-us-west-1.amazonaws.com/climbinglife/ORG_DSC01212.JPG',
				'https://s3-us-west-1.amazonaws.com/climbinglife/DSC00971.JPG', 'https://s3-us-west-1.amazonaws.com/climbinglife/DSC00978.JPG', 'https://s3-us-west-1.amazonaws.com/climbinglife/DSC00986.JPG'
		]
		}
	}
	render() {
		return (
			<div className="main">
				<div className="about">
					<div className="header">
						<div className="header-left">
							About Bowser
						</div>
						<div className="header-center">
							Library
						</div>
						<div className="header-right">
							Admin
						</div>
					</div>
					<div className="announcement">
					</div>
				</div>
				<Grid
					urls = {this.state.imageURLs}
				/>
			</div>
		)
	}
}


const Grid = ( {urls} ) => (
	<div className="grid-container">
		{urls.map((url, index) =>
			<Cell
				key = {index}
				url = {url}
			/>
		)}
	</div>
)

const Cell = ( {url} ) => (
	<div className="grid-item"><img className="grid-image" src={url}/></div>
)

const dom = document.getElementById('App')
if (dom === null) {
	//Error
	console.error("dom does not exist")
} else {
	ReactDOM.render(<Index />, dom);
}
