import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

var Config = require('../../components/Config/Config.js').default,
    Navigation = require('../../components/AdminNavigation/AdminNavigation.js').default

class ConfigPage extends Component {

  constructor(props, context) {
    super(props, context);

  }

  render () {
    return (<section>
              <Navigation {...this.props}/>
              <Config {...this.props}/>
            </section>);
  }
}

export default ConfigPage
