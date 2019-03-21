import React from 'react';
import ReactDOM from 'react-dom';
import { HEADER, LOGOS } from '../constants/constants.js'



export default function Hits(props) {
  return (
    <div className="header-container">
  		<img className="header-image" src={LOGOS.small} />
			<div className="header-button">
				My Climbs
			</div>
      <div className="header-button">
				Climbers
			</div>
			<div className="header-right">
				{ HEADER.user }
			</div>
  	</div>
  )
}
