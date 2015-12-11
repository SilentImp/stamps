import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import './AdminLogin.css';

var User = require('../User/User.js').default

class AdminLogin extends Component {

  constructor(props, context) {
    super(props, context);
    this.submited = this.submited.bind(this);
    this.logedIn = this.logedIn.bind(this);
  }

  componentDidMount () {
    if (User.auth()) {
      this.props.history.push('/admin/config');
      return;
    }
  }

  submited (event) {
    event.preventDefault();

    let form = event.currentTarget
      , email = form.querySelector('input[name="email"]').value.trim()
      , password = form.querySelector('input[name="password"]').value.trim();

    User.logIn(email, password, this.logedIn);

    form.reset();
  }

  logedIn (result) {
    this.props.history.push('/admin/config');
  }

  render () {
    return (
      <form className="admin-login" action="/config/login/" method="post" onSubmit={this.submited}>
        <input className="admin-login__input" placeholder="some@mail.com" type="email" name="email" required="required"/>
        <input className="admin-login__input" placeholder="Пароль" type="password" name="password" required="required"/>
        <button type="submit" className="admin-login__submit">Войти</button>
      </form>
    )
  }
}

export default AdminLogin
