import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

var Orders = require('../../components/Orders/Orders.js').default,
    Navigation = require('../../components/AdminNavigation/AdminNavigation.js').default

class OrdersPage extends Component {

  constructor(props, context) {
    super(props, context);

  }

  render () {
    return (<section>
              <Navigation {...this.props}/>
              <Orders {...this.props}/>
            </section>);
  }
}

export default OrdersPage
