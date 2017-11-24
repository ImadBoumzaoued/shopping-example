import React, { Component } from "react";
import CartContainer from "./CartContainer";
import ProductContainer from "./ProductContainer";

class App extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="text-primary">Shopping Cart</span>
        </h2>
        <div className="divider" />
        <CartContainer />
        <div className="divider" />
        <ProductContainer />
      </div>
    );
  }
}

export default App;
