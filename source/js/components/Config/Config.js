import Parse from "parse"
import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import './Config.css';

var User = require('../User/User.js').default

class Config extends Component {

  constructor(props, context) {
    super(props, context);

    let PARSE_APP_ID = "eV79MsqNGBVLkZDhEON0rWSvgE0Cq4GXAaIOMnVS";
    let PARSE_JS_KEY = "5HRwICGapW9KISZvKDYo34mURCUJXpKRS7RlQzWf";
    Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
    this.state = {
      loaded: false
    };

    this.CloudConfig = Parse.Object.extend('CloudConfig');

    this.onStateChanged = this.onStateChanged.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.dataLoaded = this.dataLoaded.bind(this);
    this.dataSaved = this.dataSaved.bind(this);
    this.error = this.error.bind(this);

  }

  componentDidMount () {
    var query = new Parse.Query(this.CloudConfig);
    query.first({
      success: this.dataLoaded,
      error: this.error
    });
  }

  error () {
    console.log('Error: ', arguments);
  }

  dataSaved (result) {
    console.log('Saved: ', result);
  }

  dataLoaded (result) {
    if(typeof result != "undefined") {
      this.cloud = result;
      const { price, count } = result.toJSON();
      this.setState({
        price, count,
        loaded: true
      });

    } else {
      this.cloud = new this.CloudConfig();
      this.cloud.save({
        price: 15,
        count: 100
      }, {
        success: this.dataLoaded,
        error: this.error
      });
    }
  }

  onStateChange (event) {
    this.setState({[event.target.getAttribute('name')]: parseInt(event.target.value, 10)}, this.onStateChanged);
  }

  onStateChanged () {
    this.cloud.save({
      price: this.state.price,
      count: this.state.count
    }, {
      success: this.dataSaved,
      error: this.error
    })
  }

  render () {
    return (
      <form className="config" action="/config/save/" method="post">
        <fieldset className="config__line">
          <input required className="config__input" type="number" placeholder="Сколько" min="0" name="count" onChange={this.onStateChange} value={this.state.count} disabled={!this.state.loaded} />
          <span className="config__currency"> шт.</span>
        </fieldset>
        <fieldset className="config__line">
          <input required className="config__input" type="number" placeholder="Цена" min="0" name="price" onChange={this.onStateChange} value={this.state.price} disabled={!this.state.loaded} />
          <span className="config__currency"> $/шт.</span>
        </fieldset>
      </form>
    )
  }
}

export default Config
