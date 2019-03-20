import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBox, InfiniteHits } from 'react-instantsearch-dom';
import { ConnectedAutoComplete } from './Autocomplete.js'


export default function Search(props) {
  return (
    <div className="search-container">
      <ConnectedAutoComplete />
    </div>
  )
}
