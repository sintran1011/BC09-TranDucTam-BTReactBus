import React, { Component } from "react";

class GheItem extends Component {
  changeClassName() {
    if (this.props.SelectedGhe.SoGhe === this.props.ghe.SoGhe) {
      return "btn btn-success";
    } else if (this.props.ghe.TrangThai === true) {
      return "btn btn-danger";
    } else if (this.props.ghe.TrangThai === false) {
      return "btn btn-secondary";
    }
  }

  render() {
    const { SoGhe } = this.props.ghe;

    return (
      <button
        className={this.changeClassName()}
        onClick={() => {
          this.props.addToList(this.props.ghe);
          this.props.SelectingGhe(this.props.ghe);
        }}
        style={{ width: 40, height: 40 }}
      >
        {SoGhe}
      </button>
    );
  }
}
export default GheItem;
