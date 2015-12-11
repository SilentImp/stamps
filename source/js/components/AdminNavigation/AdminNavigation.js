import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import './AdminNavigation.css';

var User = require('../User/User.js').default;

class AdminNavigation extends Component {

  constructor(props, context) {
    super(props, context);

    this.logOut = this.logOut.bind(this);
  }

  componentDidMount () {
    if (!User.auth()) {
      this.props.history.push('/admin/login');
      return;
    }
  }

  logOut () {
    User.logOut();
    this.props.history.push('/admin/login');
  }

  render () {
    return (
      <nav className="admin-navigation">
        <Link className="admin-navigation__button" to={'/admin/config'}>Настройки</Link>
        <Link className="admin-navigation__button" to={'/admin/orders'}>Заказы</Link>
        <button onClick={this.logOut} type="button" className="admin-navigation__logout">Выход</button>
      </nav>
    )
  }
}

export default AdminNavigation
