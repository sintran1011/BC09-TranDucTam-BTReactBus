import React, { Component } from "react";
import Model from "./Model";
import "./Home.css";
import ProductList from "./ProductList";
import model from "../assets/img/model.jpg";

class Home extends Component {
  products = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./assets/img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./assets/img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./assets/img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./assets/img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./assets/img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./assets/img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./assets/img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./assets/img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./assets/img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
    };
  }
  selectedProduct = (val) => {
    this.setState({
      selectedProduct: val,
    });
  };
  render() {
    return (
      <div className="content">
         
        <div>
          <h1 className="text-center">TRY GLASS APP ONLINE</h1>
        </div>
        <div className="w-25 h-50 m-auto">
          <img
            src={model}
            alt=""
            style={{ width: "100%", height: "100%", display: "block" }}
          />
          {this.state.selectedProduct ? (
            <Model selectedProduct={this.state.selectedProduct} />
          ) : null}
        </div>

        <ProductList
          products={this.products}
          selectedProduct={this.selectedProduct}
        />
      </div>
    );
  }
}

export default Home;
