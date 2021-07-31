import React, { Component } from "react";
import "./Model.css";

class Model extends Component {
  render() {
    const { url, name, desc } = this.props.selectedProduct;
    console.log(url);
    return (
      <div className="content_model">
        <div className="glass">
          <img src={url} alt="changeGlass" />
        </div>
        <div className="text">
          <h3 className="text-danger">{name}</h3>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}

export default Model;
