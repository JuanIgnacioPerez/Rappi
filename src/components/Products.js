import React, { Component } from "react";
import wine from '../data/assets/wine.svg';
import Counter from '../components/Counter'

class Products extends Component {

  render() {
    return (
      <div className="product">
        <div className="product-image">
          <img src={wine} alt="product" />
        </div>
        <h4 className="product-name">wine</h4>
        <p className="product-price">80.000</p>

        <Counter />

        <div className="product-action">
          <button
            className="product-button"
            type="button"
          > Añadir al carrito
          </button>
        </div>
      </div>
    )
  }
}

export default Products;