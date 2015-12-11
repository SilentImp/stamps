import Parse from "parse"
import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import './Orders.css';

var User = require('../User/User.js').default,
    Order = require('../Order/Order.js').default;

class Orders extends Component {

  constructor(props, context) {
    super(props, context);

    let PARSE_APP_ID = "eV79MsqNGBVLkZDhEON0rWSvgE0Cq4GXAaIOMnVS";
    let PARSE_JS_KEY = "5HRwICGapW9KISZvKDYo34mURCUJXpKRS7RlQzWf";
    Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);

    this.CloudOrders = Parse.Object.extend('Orders');
  }

  componentDidMount () {
    var query = new Parse.Query(this.CloudOrders);
  }

  render () {
    return (
      <table className="orders">
        <thead>
          <th>№ Заказа</th>
          <th>Количество</th>
          <th>Сумма</th>
          <th>Адресс</th>
          <th>Оплачен</th>
        </thead>
        <tbody>
          <Order />
        </tbody>
      </table>
    )
  }
}

export default Orders
