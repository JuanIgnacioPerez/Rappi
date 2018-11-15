import React, { Component } from "react";
import logo from '../data/assets/baraton.png';
import shoppingBag from '../data/assets/shopping-bag.svg';
import search from '../data/assets/search.svg';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
    };
  }
  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  
  render() {
    return (
      <header>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={4} className="item-cont">
              <div className="brand">
                <img
                  className="logo"
                  src={logo}
                  alt="El baraton Logo"
                />
              </div>
            </Col>
            <Col xs={12} sm={4} className="item-cont">
              <div className="search">
                <input
                  type="search"
                  placeholder="Buscar productos"
                  className="search-keyword"
                />
                <button
                  className="search-button"
                  type="submit"
                >
                  <img
                    className="search-icon"
                    src={search}
                    alt="lupa" />
                </button>
              </div>
            </Col>
            <Col xs={12} sm={4} className="item-cont">
              <div className="shopping-cart">
                <div className="cart-info">
                  <table>
                    <tbody>
                      <tr>
                        <td>Productos</td>
                        <td>:</td>
                        <td>
                          <strong>12</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>:</td>
                        <td>
                          <strong>124.000</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a className="cart-icon"
                    href="/"
                    onClick={this.handleCart.bind(this)}>
                  <img
                    className="cart-bag"
                    src={shoppingBag}
                    alt="Cart"
                  />
                </a>
                <div
                  className={
                    this.state.showCart ? "cart-preview active" : "cart-preview"
                  }
                >
                <p> no tienes productos en tu carrito </p>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </header>

    );
  }
}

export default Header;