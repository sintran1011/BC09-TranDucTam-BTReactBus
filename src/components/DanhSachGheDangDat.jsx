import React, { Component } from "react";

class DanhSachGheDangDat extends Component {
  renderDanhSachGheDangDat = () => {
    return this.props.DanhSachGheDangDat.map((item) => {
      const { TenGhe, Gia,SoGhe } = item.detail;
      return (
        <p className="text-center">
          Ghế: {TenGhe} {Gia}
          <span style={{cursor:"pointer"}}
            onClick={() => this.props.deleteGhe(SoGhe)}
            className="text-danger px-2 "
          >
            [Hủy]
          </span>
        </p>
      );
    });
  };
  render() {
    return (
      <div>
        <h4 className="text-center text-warning">Danh sách ghế đã đặt(1)</h4>
        {this.renderDanhSachGheDangDat()}
      </div>
    );
  }
}

export default DanhSachGheDangDat;
