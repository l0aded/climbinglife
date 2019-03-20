import React from 'react';
import Autosuggest from 'react-autosuggest';
import {
  connectAutoComplete,
} from 'react-instantsearch-dom';

require('../css/autocomplete.css');

const OneHit = (props) => (
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
  };

  onSuggestionsClearRequested () {
    this.props.refine(this.state.value);
  };

  getSuggestionValue(hit) {
    // return hit.name;
  }

  renderSuggestion(hit) {
    var renderHit = <OneHit hit={hit} />


    return renderHit
  }

  renderSectionTitle(section) {
    // if (section.index === "demo_Beachbody_Blog") return "Blogs"
    // if (section.index === "beachbody_video") return "Videos"
    // if (section.index === "demo_Beachbody_Store") return "Products"
    return 'Places';
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
      <div>
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
      </div>
    );
  }
}

const ConnectedAutoComplete = connectAutoComplete(AutoComplete);


module.exports = {
  ConnectedAutoComplete
}
