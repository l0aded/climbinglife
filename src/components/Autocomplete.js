import React from 'react';
import Autosuggest from 'react-autosuggest';
import {
  connectAutoComplete,
} from 'react-instantsearch-dom';
import { LOGOS } from '../constants/constants.js'

require('../css/autocomplete.css');

const OneHit = (props) => {
  return (
    <div className='auto-hit-container'>
      <div className="auto-hit-container-description">
        <div className="auto-hit-container-title">
          {props.hit.query}
        </div>
      </div>
    </div>
  )
}

// AUTOCOMPLETE WITH ROUTES AND IMAGES
// const OneHit = (props) => {
//   if (!props.hit.imgMedium) props.hit.imgMedium = LOGOS.noImage;
//   return (
//     <div className='auto-hit-container'>
//       <div className="auto-hit-container-image">
//         <img src={props.hit.imgMedium} alt="Logo" />
//       </div>
//       <div className="auto-hit-container-description">
//         <div className="auto-hit-container-title">
//           {props.hit.name} ({props.hit.rating})
//         </div>
//         <div className="auto-hit-container-info">
//           Rating: {props.hit.stars}
//         </div>
//         <div className="auto-hit-container-info">
//           Location: {props.hit.topLocation}
//         </div>
//       </div>
//     </div>
//   )
// }

class AutoComplete extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.currentRefinement,
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.props.query) {
      this.props.refine(nextProps.query)
    }
  }

  onChange (event, { newValue }) {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested ({ value }) {
    // this.props.refine(value);
    this.props.refine(this.state.value);
    this.props.setQuery(value);
  };

  onSuggestionsClearRequested () {
    this.props.refine(this.state.value);
  };

  getSuggestionValue(hit) {
    return hit.query;
  }

  renderSuggestion(hit) {
    var renderHit = <OneHit hit={hit} />
    return renderHit
  }

  renderSectionTitle(section) {
    return 'Routes';
  }

  getSectionSuggestions(section) {
    return section.hits;
  }

  render() {
    const { hits } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: 'Search for Places, Routes, etc.',
      onChange: this.onChange.bind(this),
      value,
    };

    return (
      <Autosuggest
        suggestions={hits}
        multiSection={false}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
      />
    );
  }
}

const ConnectedAutoComplete = connectAutoComplete(AutoComplete);


module.exports = {
  ConnectedAutoComplete
}
