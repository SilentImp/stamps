import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import createHashHistory from 'history/lib/createHashHistory'

const history = createHashHistory({
  queryKey: false
});

let ReactDOM = require('react-dom'),
    Config = require('./pages/Config/Config.js').default,
    Orders = require('./pages/Orders/Orders.js').default,
    AdminLogin = require('./components/AdminLogin/AdminLogin.js').default,
    Shop = require('./components/Shop/Shop.js').default,
    User = require('./components/User/User.js').default

require('./components/Layout/Layout.css');
ReactDOM.render((
    <Router history={history}>
        <Route path="/" component={Shop}/>
        <Route path="/admin" component={Orders}/>
        <Route path="/admin/orders" component={Orders}/>
        <Route path="/admin/config" component={Config}/>
        <Route path="/admin/login" component={AdminLogin}/>
    </Router>
), document.querySelector('.application'));


import Parse from "parse";
let PARSE_APP_ID = "eV79MsqNGBVLkZDhEON0rWSvgE0Cq4GXAaIOMnVS";
let PARSE_JS_KEY = "5HRwICGapW9KISZvKDYo34mURCUJXpKRS7RlQzWf";
Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);


Parse.Cloud.run('hello', {}, {
  success: function(result) {
    console.log('yay!: ', run);
  },
  error: function(error) {
  }
});

// curl -X POST \
//  -H "X-Parse-Application-Id: ${eV79MsqNGBVLkZDhEON0rWSvgE0Cq4GXAaIOMnVS}" \
//  -H "X-Parse-REST-API-Key: ${7DOZMRKh1BWdL3Y5HnMS15bm4bKjEVrj5qCcGfo1}" \
//  -H "Content-Type: application/json" \
//  -d '{}' \
//  https://api.parse.com/1/functions/hello

// let user = new Parse.User();
// user.setEmail('ravenb@mail.ru');
// user.setUsername('ravenb@mail.ru');
// user.setPassword('sloniki');
// user.signUp();
//
// let role = new Parse.Role('Aminm',    );
// role.setName('Admin');
//
// console.log(role);

// Создадим ACL
// let rwACL = new Parse.ACL;
// rwACL.setRoleReadAccess(role, true); // разрешить пользователю чтение
// rwACL.setRoleWriteAccess(role, true); // разрешить пользователю запись
// console.log(role, rwACL);
