import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  renderProducts = () => {
    return this.props.products.map((item) => {
      return (
        <div key={item.id}>
          <ProductItem
            prod={item}
            selectedProduct={this.props.selectedProduct}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="d-flex justify-content-center">
        {this.renderProducts()}
      </div>
    );
  }
}

export default ProductList;
