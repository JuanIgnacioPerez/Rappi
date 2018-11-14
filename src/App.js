import React, { Component } from 'react';
import '../src/scss/style.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="container">
          <Categories/>
          <Products />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
