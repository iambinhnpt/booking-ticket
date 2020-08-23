import React, { Component } from "react";
import { connect } from "react-redux";

class Booking extends Component {
  renderTable = (dsGhe) => {
    return dsGhe.map((item, index) => {
      console.log(item.soGhe);

      return (
        <tr key={index}>
          <td className="text-white">{item.soGhe}</td>
          <td className="text-white">{item.gia.toLocaleString() + " VND"}</td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.xoa(item, index);
              document
                .getElementById(`${item.soGhe}`)
                .classList.remove("gheDangChon");
            }}
          >
            X
          </button>
        </tr>
      );
    });
  };
  render() {
    let { dsGhe } = this.props;
    console.log(dsGhe);
    return (
      <div>
        <h2>Danh sách ghế bạn chọn</h2>
        <div className="text-left">
          <div>
            <button className="gheDuocChon m-1"></button>Ghế đã đặt
          </div>
          <div>
            <button className="gheDangChon m-1"></button>Ghế đang chọn
          </div>
          <div>
            <button className="ghe m-1"></button>Ghế chưa chọn
          </div>
        </div>
        <table className="table table-striped table-inverse table-responsive">
          <thead className="thead-inverse">
            <tr className="text-white font-weight-bold">
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>{this.renderTable(dsGhe)}</tbody>
          <tfoot>
            <tr>
              <td className="font-weight-bold" style={{ color: "orange" }}>
                Tổng Tiền
              </td>
              <td className="font-weight-bold" style={{ color: "orange" }}>
                {this.props.tongTien.toLocaleString() + " VND"}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    xoa: (ghe, index) => {
      const action = {
        type: "XOA",
        ghe,
        index,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Booking);
