import Parse from "parse"
import React, {Component} from 'react';

class User extends Component {

  constructor (props, context) {
    super(props, context);

    // Запрашиваем и инициализируем Parse
    let PARSE_APP_ID = "eV79MsqNGBVLkZDhEON0rWSvgE0Cq4GXAaIOMnVS";
    let PARSE_JS_KEY = "5HRwICGapW9KISZvKDYo34mURCUJXpKRS7RlQzWf";
    Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);

    // Восстанавливаем пользователя, если открыта сессия
    if (Parse.User.current()) {
      this.user = new Parse.User.current();
    } else {
      this.user = new Parse.User();
    }

    this.error = this.error.bind(this);

  }

  auth () {
    return this.user.authenticated();
  }

  logOut () {
    Parse.User.logOut();
  }

  logIn (login, password, success) {
    this.user.setEmail(login);
    this.user.setUsername(login);
    this.user.setPassword(password);
    this.user.logIn({
      success: success,
      error: this.error
    });
  }

  signUp (login, password, success) {
    this.user.setEmail(login);
    this.user.setUsername(login);
    this.user.setPassword(password);
    this.user.signUp({
      success: success,
      error: this.error
    });
  }

  error () {
    console.log('ошибка: ', arguments);
  }


}
const currentUser = new User;
export default currentUser
