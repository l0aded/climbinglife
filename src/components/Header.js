import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { HEADER, LOGOS, USERS } from '../constants/constants.js'

export default function Header(props) {
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const triggerDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  }

  return (
    <div className="header-container">
  		<img className="header-image" src={LOGOS.small} />
			<div className="header-button">
        <DropdownUser
          currentUser={props.currentUser}
          setUser={props.setUser}
          className="facet-button"
          triggerDropdown={triggerDropdown.bind(this)}
          showUserDropdown={showUserDropdown}
        />
			</div>
  	</div>
  )
}


const DropdownUser = (props) => {
  return (
    <div className="facet">
      <button
        className="facet-button"
        onClick={() => props.triggerDropdown()}
        >{props.currentUser[0]}
      </button>
      {props.showUserDropdown ?
        <div className="facet-button-dropdown">
          <ul>
            {USERS.map((user, index) => (
              <div
                className="user-selection"
                key={index}
                onClick={() => props.setUser(user)}
                >
                {user[0]}
              </div>
            ))}
          </ul>
        </div>
      :
      null}
    </div>
  )
}
