import React, { Component } from "react";
import GheItem from "./GheItem";

class DanhSachGhe extends Component {
  renderGhe = () => {
    return this.props.listGhe.map((item) => {
      return (
        <div
          key={item.SoGhe}
          className="col-3 text-center p-2"
          style={{ width: "25%" }}
        >
          <GheItem
            ghe={item}
            addToList={this.props.addToList}
            DanhSachGheDangDat={this.props.DanhSachGheDangDat}
            SelectedGhe={this.props.SelectedGhe}
            SelectingGhe={this.props.SelectingGhe}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="bg-primary w-100 m-auto rounded">
          <p style={{ fontSize: 25 }} className="text-white text-center">
            Tài xế
          </p>
        </div>
        <div className="row justify-content-between ">{this.renderGhe()}</div>
      </div>
    );
  }
}

export default DanhSachGhe;
