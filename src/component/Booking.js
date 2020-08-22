import React, { Component } from "react";
export default class Booking extends Component {
  constructor(props) {
    super(props);
  }

  renderTable = (dsGhe) => {
    return dsGhe.map((item, index) => {
      console.log(item.soGhe);

      return (
        <tr key={index}>
          <td>{item.soGhe}</td>
          <td>{item.gia}</td>
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
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>{this.renderTable(dsGhe)}</tbody>
          <tfoot>
            <tr>
              <td>Tổng Tiền</td>
              <td>150000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
