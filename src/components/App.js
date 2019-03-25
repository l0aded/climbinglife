import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { Pagination, Configure } from 'react-instantsearch-dom';
import HitsContainer from './Hits';
import Header from './Header';
import Search from './Search';

import { ADMIN_API_KEY, APP_ID, indexName } from '../../algolia.js'
import algoliasearch from 'algoliasearch';

const client = algoliasearch(APP_ID, ADMIN_API_KEY);
const index = client.initIndex(indexName);

require('../css/index.css');
require('../css/bootstrap.min.css');

export default function App(props) {
  const [currentQuery, setCurrentQuery] = useState("");
  const [impact, setImpact] = useState(0);
  const [currentUser, setCurrentUser] = useState(["Login Here"]);
  const setPersoImpact = (val) => {
    setImpact(val);
  }
  const setQuery = (query) => {
    setCurrentQuery(query);
  }
  const setUser = (user) => {
    setCurrentUser(user);
  }

  return (
    <div className="main">

      <Header
        currentUser={currentUser}
        setUser={setUser.bind(this)}
      />
      <Search
        setQuery={setQuery.bind(this)}
        setPersoImpact={setPersoImpact.bind(this)}
      />
      <Configure
        hitsPerPage={16}
        query={currentQuery}
        userToken={currentUser[1]}
        enablePersonalization={true}
        personalizationImpact={impact}
      />
      <HitsContainer />
    </div>
  )
}
