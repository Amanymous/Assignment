

import React, { Component } from 'react';
import './App.css';
import Item from './Items/Items';

class App extends Component {
  state = {
    items: [
      { name: "Bottle", quantity: 1, price: 410 },
      { name: "11-pack", quantity: 11, price: 4000 },
      { name: "Big box", quantity: 264, price: 950 },
      { name: "Chocolate bar", quantity: 1, price: 300 },
      { name: "chocolate pack", quantity: 5, price: 1450 },
      { name: "Biscuit", quantity: 3, price: 450 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = ( newName ) => {
    
    this.setState( {
      items: [
        { name: "Bottle", quantity: 1, price: 410 },
        { name: "11-pack", quantity: 11, price: 4000 },
        { name: "Big box", quantity: 264, price: 950 },
        { name: "Chocolate bar", quantity: 1, price: 300 },
        { name: "chocolate pack", quantity: 5, price: 1450 },
        { name: "Biscuit", quantity: 3, price: 450 }
      ]
    } )
  }

 
  toggleItemsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let items = null;

    if ( this.state.showPersons ) {
      items = (
        <div>
          <h1>Price List</h1>
          <h2>Piece</h2>
          <Item
            name={this.state.items[0].name}
            quantity={this.state.items[0].quantity}
            price={this.state.items[0].price}
            />
            <h2>Pack</h2>
          <Item
            name={this.state.items[1].name}
            quantity={this.state.items[1].quantity}
            price={this.state.items[1].price}/>
            <h2>Box</h2>
          <Item
            name={this.state.items[2].name}
            quantity={this.state.items[2].quantity}
            price={this.state.items[2].price}
           />
           <h2>Piece</h2>
           <Item
            name={this.state.items[3].name}
            quantity={this.state.items[3].quantity}
            price={this.state.items[3].price}
           />
           <h2>Pack</h2>
           <Item
           name={this.state.items[4].name}
           quantity={this.state.items[4].quantity}
           price={this.state.items[4].price}
           />
           <h2>Piece</h2>
           <Item
           name={this.state.items[5].name}
           quantity={this.state.items[5].quantity}
           price={this.state.items[5].price}
           />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.toggleItemsHandler}>Toggle Items</button>
        {items}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;