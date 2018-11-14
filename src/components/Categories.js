import React, { Component } from "react";

class Categories extends Component {

  render() {
    return (
      <div className="categories">
        <div className="list-categories">
          <button className="category-box"> todas </button>
          <button className="category-box"> bebidas </button>
          <button className="category-box"> comidas </button>
          <button className="category-box"> panaderia </button>
        </div>
      </div>
    )
  }
}

export default Categories;