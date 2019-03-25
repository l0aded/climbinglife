import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { InstantSearch, Configure, InfiniteHits, RefinementList } from 'react-instantsearch-dom';
import { ConnectedAutoComplete } from './Autocomplete.js'
import { SEARCH_API_KEY, APP_ID, indexName, AUTOCOMPLETE_INDEX } from '../../algolia.js'
import { facetList } from '../constants/constants.js'

import Horizontal from './Slider'

require('../css/algolia.css');

const facetState = {
  currentFacet: null
};

export default function Search(props) {
  const [currentFacet, setCurrentFacet] = useState(null);
  const triggerFacet = (facet) => {
    facet === currentFacet ? setCurrentFacet(null) : setCurrentFacet(facet);
  }

  return (
    <div className="search-container">
      <InstantSearch
				 appId={APP_ID}
				 apiKey={SEARCH_API_KEY}
				 indexName={AUTOCOMPLETE_INDEX}
			 >
         <Configure
           hitsPerPage={5}
         />
         <ConnectedAutoComplete setQuery={props.setQuery}/>
      </InstantSearch>
      <div className="facets-container">
        {facetList.map((facet, index) => (
          <DropdownFacet
            setPersoImpact={props.setPersoImpact}
            facet={facet}
            showDropDown={facet === currentFacet}
            triggerFacet={triggerFacet.bind(this)}
            key={index} />
        )
      )}
      </div>
    </div>
  )
}


const PersoSlider = (props) => {
  return (
    <div>
      <Horizontal
        setPersoImpact={props.setPersoImpact}
      />
    </div>

  )

}
const DropdownFacet = (props) => {
  var CustomDropdown = "Dropdown"
  switch(props.facet) {
    case "Type":
      CustomDropdown = <RefinementList attribute="type" />
      break;
    case "Rating/Grade":
      CustomDropdown = <RefinementList attribute="rating" />
      break;
    case "Stars":
      CustomDropdown = <RefinementList attribute="stars" />
      break;
    case "Personalization":
      CustomDropdown = <PersoSlider setPersoImpact={props.setPersoImpact}/>
      break;
    default:
      null
  }

  return (
    <div className="facet">
      <button
        className="facet-button"
        onClick={() => props.triggerFacet(props.facet)}
        >{props.facet}
      </button>
      {props.showDropDown ?
        <div className="facet-button-dropdown">
          {CustomDropdown}
        </div>
      :
      null}
    </div>
  )
}
