import React, { useState, useEffect, useReducer } from 'react';
require('../css/index.css');
require('../css/bootstrap.min.css');

export default function Hits(props) {
  return (
    <div className='hit-container'>
      <div className="hit-container-image">
        <img src={props.hit.imgMedium} alt="Logo" />
      </div>
      <div className="hit-container-description">
        <div className="hit-container-title">
          {props.hit.name}
        </div>
      </div>



    </div>

  )
}
