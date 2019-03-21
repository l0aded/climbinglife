import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { Pagination, Configure } from 'react-instantsearch-dom';
import HitsContainer from './Hits';
import Header from './Header';
import Search from './Search';

require('../css/index.css');
require('../css/bootstrap.min.css');

const initialState = {
  count: 0,
  user: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'select user':
      return {user: action.payload};
    default:
      throw new Error();
  }
}

export default function App(props) {
  // const [user, setUser] = useState(null);
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [currentQuery, setCurrentQuery] = useState("");

  const setQuery = (query) => {
    setCurrentQuery(query);
    console.log(query)
  }

  return (
    <div className="main">
      <Header />
      <Search setQuery={setQuery.bind(this)} />
      <Configure
        hitsPerPage={16}
        query={currentQuery}
      />
      <HitsContainer />
    </div>
  )
}




{/* <button onClick={() => dispatch({type: 'increment'})}>+</button> */}
