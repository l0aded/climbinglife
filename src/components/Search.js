import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { InstantSearch, Configure, InfiniteHits, RefinementList } from 'react-instantsearch-dom';
import { ConnectedAutoComplete } from './Autocomplete.js'
import { SEARCH_API_KEY, APP_ID, indexName } from '../../algolia.js'

require('../css/algolia.css');

const facetState = {
  currentFacet: null
};

export default function Search(props) {
  const facetList = ["Type", "Rating/Grade", "Stars"];
  const [currentFacet, setCurrentFacet] = useState(null);

  const triggerFacet = (facet) => {
    facet === currentFacet ? setCurrentFacet(null) : setCurrentFacet(facet);
  }

  return (
    <div className="search-container">
      <InstantSearch
				 appId={APP_ID}
				 apiKey={SEARCH_API_KEY}
				 indexName={indexName}
			 >
         <Configure
           hitsPerPage={5}
         />
         <ConnectedAutoComplete setQuery={props.setQuery}/>
      </InstantSearch>
      <div className="facets-container">
        {facetList.map((facet, index) => (
          <DropdownFacet
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


const DropdownFacet = (props) => {
  var CustomDropdown = "Dropdown"
  switch(props.facet) {
    case "Type":
      CustomDropdown = <RefinementList attribute="type" />
      break;
    case "Rating":
      CustomDropdown = <RefinementList attribute="rating" />
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
