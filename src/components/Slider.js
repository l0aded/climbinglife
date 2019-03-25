import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import { ADMIN_API_KEY, APP_ID, indexName } from '../../algolia.js'
import algoliasearch from 'algoliasearch';

const client = algoliasearch(APP_ID, ADMIN_API_KEY);
const index = client.initIndex(indexName);

class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 100
    }
  }

  componentDidMount(){
    var context = this;
    client.getPersonalizationStrategy().then((res) => {
      context.setState({value:res.personalizationImpact})
    })
  }

  handleChangeStart(){
    console.log('Change event started')
  };

  handleChange(value) {
    this.setState({
      value: value
    })
  };

  handleChangeComplete(){
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart.bind(this)}
          onChange={this.handleChange.bind(this)}
          onChangeComplete={()=>this.props.setPersoImpact(this.state.value)}

        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default Horizontal
