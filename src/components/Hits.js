import React, { useState, useEffect, useReducer } from 'react';
import { InfiniteHits , Pagination } from 'react-instantsearch-dom';
import { LOGOS } from '../constants/constants.js'

require('../css/index.css');
require('../css/bootstrap.min.css');


export default function HitsContainer(props) {
  return (
    <div className="left-container">
      <InfiniteHits
        hitComponent={Hit}
        translations={{loadMore: 'Load More Routes'}}
      />
    </div>
  )
}


const Hit = (props) => {
  if (!props.hit.imgMedium) props.hit.imgMedium = LOGOS.noImage;
  return (
    <div className='hit-container'>
      <div className="hit-container-image">
        <img src={props.hit.imgMedium} alt="Logo" />
      </div>
      <div className="hit-container-description">
        <div className="hit-container-title">
          {props.hit.name} ({props.hit.rating})
        </div>
        <div className="hit-container-info">
          Rating: {props.hit.stars}
        </div>
        <div className="hit-container-info">
          Location: {props.hit.topLocation}
        </div>
      </div>
    </div>

  )
}
