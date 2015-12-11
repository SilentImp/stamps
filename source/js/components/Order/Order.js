
import React, {Component} from 'react';
import './Order.css';
class Order extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render () {
    return (
      <tr>
        <th>{this.props.id}</th>
        <th>{this.props.count}</th>
        <th>{this.props.price}</th>
        <th>{this.props.address}</th>
        <th>{this.props.payment}</th>
      </tr>
    )
  }
}

export default Order
