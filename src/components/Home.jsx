import React, { Component } from "react";
import DanhSachGhe from "./DanhSachGhe";
import DanhSachGheDangDat from "./DanhSachGheDangDat";

class Home extends Component {
  listGhe = [
    { SoGhe: 1, TenGhe: "số 1 ", Gia: "100$", TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2 ", Gia: "100$", TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3 ", Gia: "100$", TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4 ", Gia: "100$", TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5 ", Gia: "100$", TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6 ", Gia: "100$", TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7 ", Gia: "100$", TrangThai: false },
    { SoGhe: 8, TenGhe: "số 8 ", Gia: "100$", TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9 ", Gia: "100$", TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10 ", Gia: "100$", TrangThai: false },
    { SoGhe: 11, TenGhe: "số 11 ", Gia: "100$", TrangThai: false },
    { SoGhe: 12, TenGhe: "số 12 ", Gia: "100$", TrangThai: false },
    { SoGhe: 13, TenGhe: "số 13 ", Gia: "100$", TrangThai: true },
    { SoGhe: 14, TenGhe: "số 14 ", Gia: "100$", TrangThai: false },
    { SoGhe: 15, TenGhe: "số 15 ", Gia: "100$", TrangThai: false },
    { SoGhe: 16, TenGhe: "số 16 ", Gia: "100$", TrangThai: false },
    { SoGhe: 17, TenGhe: "số 17 ", Gia: "100$", TrangThai: false },
    { SoGhe: 18, TenGhe: "số 18 ", Gia: "100$", TrangThai: false },
    { SoGhe: 19, TenGhe: "số 19 ", Gia: "100$", TrangThai: false },
    { SoGhe: 20, TenGhe: "số 20 ", Gia: "100$", TrangThai: false },
    { SoGhe: 21, TenGhe: "số 21 ", Gia: "100$", TrangThai: false },
    { SoGhe: 22, TenGhe: "số 22 ", Gia: "100$", TrangThai: true },
    { SoGhe: 23, TenGhe: "số 23 ", Gia: "100$", TrangThai: false },
    { SoGhe: 24, TenGhe: "số 24 ", Gia: "100$", TrangThai: false },
    { SoGhe: 25, TenGhe: "số 25 ", Gia: "100$", TrangThai: false },
    { SoGhe: 26, TenGhe: "số 26 ", Gia: "100$", TrangThai: true },
    { SoGhe: 27, TenGhe: "số 27 ", Gia: "100$", TrangThai: false },
    { SoGhe: 28, TenGhe: "số 28 ", Gia: "100$", TrangThai: false },
    { SoGhe: 29, TenGhe: "số 29 ", Gia: "100$", TrangThai: false },
    { SoGhe: 30, TenGhe: "số 30 ", Gia: "100$", TrangThai: false },
    { SoGhe: 31, TenGhe: "số 31 ", Gia: "100$", TrangThai: true },
    { SoGhe: 32, TenGhe: "số 32 ", Gia: "100$", TrangThai: false },
    { SoGhe: 33, TenGhe: "số 33 ", Gia: "100$", TrangThai: false },
    { SoGhe: 34, TenGhe: "số 34 ", Gia: "100$", TrangThai: false },
    { SoGhe: 35, TenGhe: "số 35 ", Gia: "100$", TrangThai: false },
    { SoGhe: 36, TenGhe: "số 36 ", Gia: "100$", TrangThai: false },
  ];

  constructor(props) {
    super(props);
    this.state = {
      DanhSachGheDangDat: [],
      SelectedGhe: {},
    };
  }

  SelectingGhe = (val) => {
    this.setState({
      SelectedGhe: val,
    });
    console.log(this.state.SelectedGhe)
  };

  addToList = (ghe) => {
    const cloneDanhSachGheDangDat = [...this.state.DanhSachGheDangDat];

    const foundIndex = cloneDanhSachGheDangDat.findIndex((item) => {
      return item.detail.SoGhe === ghe.SoGhe;
    });
    const gheItem = { detail: ghe };

    if (foundIndex === -1) {
      if (ghe.TrangThai === true) {
        return;
      } else {
        cloneDanhSachGheDangDat.push(gheItem);
      }
    } else {
      cloneDanhSachGheDangDat.splice(foundIndex, 1);
      this.setState({
        SelectedGhe: {},
      });
    }

    this.setState({
      DanhSachGheDangDat: cloneDanhSachGheDangDat,
    });
  };

  deleteGhe = (SoGhe) => {
    const cloneDanhSachGheDangDat = [...this.state.DanhSachGheDangDat];

    const foundIndex = cloneDanhSachGheDangDat.findIndex((item) => {
      return item.detail.SoGhe === SoGhe;
    });
    cloneDanhSachGheDangDat.splice(foundIndex, 1);

    this.setState({
      DanhSachGheDangDat: cloneDanhSachGheDangDat,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="w-75 m-auto">
          <h1 className="text-warning text-center">
            ĐẶT VÉ XE BUS HÃNG CYBERSOFT
          </h1>
          <div className="row">
            <div className="col-4">
              <DanhSachGhe
                listGhe={this.listGhe}
                addToList={this.addToList}
                DanhSachGheDangDat={this.state.DanhSachGheDangDat}
                SelectedGhe={this.state.SelectedGhe}
                SelectingGhe={this.SelectingGhe}
              />
            </div>
            <div className="col-8">
              <DanhSachGheDangDat
                DanhSachGheDangDat={this.state.DanhSachGheDangDat}
                deleteGhe={this.deleteGhe}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
