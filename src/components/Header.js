import React, { Component } from "react";
import logo from '../data/assets/baraton.png';
import shoppingBag from '../data/assets/shopping-bag.svg';
import search from '../data/assets/search.svg';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends Component {
  /* constructor(props) {
    super(props);
  } */

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
                //onChange={this.props.handleSearch}
                />
                <button
                  className="search-button"
                  type="submit"
                //onClick={this.handleSubmit.bind(this)}
                > 
                <img
                  className="search-icon"
                  src={search} 
                  alt="lupa"/>
                </button> 
              </div>
            </Col>
            <Col xs={12} sm={4} className="item-cont">
              <div className="shopping-cart">
                <div className="cart-info">
                  <table>
                    <tbody>
                      <tr>
                        <td>No. de productos</td>
                        <td>:</td>
                        <td>
                          <strong>12</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>:</td>
                        <td>
                          <strong>311212</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a className="cart-icon" href="/">
                  <img
                    className="cart-bag"
                    src={shoppingBag}
                    alt="Cart"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Grid>
      </header>

    );
  }
}

export default Header;