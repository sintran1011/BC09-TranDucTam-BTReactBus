import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { url } = this.props.prod;
    return (
      <button
        onClick={() => this.props.selectedProduct(this.props.prod)}
        style={{ height: 80, width: 160 }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src={url}
          alt="product"
        />
      </button>
    );
  }
}

export default ProductItem;
