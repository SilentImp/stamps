import Parse from "parse"
import React, {Component} from 'react';
import './Shop.css';

class Shop extends Component {

  constructor (props, context) {
    super(props, context);

    this.state = {
      loaded: false,
      items: 1,
      count: 100,
      price: 15
    };

    this.CloudConfig = Parse.Object.extend('CloudConfig');

    this.dataLoaded = this.dataLoaded.bind(this);
    this.error = this.error.bind(this);
    this.changeCount = this.changeCount.bind(this);
    this.submited = this.submited.bind(this);
  }

  submited (event) {
    event.preventDefault();

    
  }

  componentDidMount () {
    var query = new Parse.Query(this.CloudConfig);
    query.first({
      success: this.dataLoaded,
      error: this.error
    });
  }

  dataLoaded (result) {
    if(typeof result != "undefined") {
      this.cloud = result;
      const { price, count } = result.toJSON();
      this.setState({
        price, count,
        loaded: true
      });
    }
  }

  error () {
    console.log('Error: ', arguments);
  }

  changeCount (event) {
    let items_count = parseInt(event.target.value.trim(), 10);
    if (isNaN(items_count)) {
      items_count = 1;
    }
    items_count = Math.min(items_count, this.state.count);
    this.setState({items: items_count});
  }

  render () {
    return (
      <form className="shop" action="/buy/" method="post" onSubmit={this.submited}>
        <span className="shop__icon"/>
        <input disabled={!this.state.loaded} type="number" className="shop__count" min="1" onChange={this.changeCount} value={this.state.items}/>
        <span className="shop__times">&times;</span>
        <span className="shop__price">{this.state.price}$ = {!isNaN(this.state.items*parseInt(this.state.price, 10))? (this.state.items*parseInt(this.state.price, 10))+"$" : "?" }</span>
        <button disabled={!this.state.loaded} className="shop__order" type="submit">Заказать</button>
      </form>
    );
  }
}

export default Shop
