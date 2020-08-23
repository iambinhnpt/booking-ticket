import React, { Component } from "react";
import { connect } from "react-redux";
class Seat extends Component {
  turnGreenSeat = (arr) => {
    arr.map((ghe) => {
      document.getElementById(`${ghe.soGhe}`).classList.add("gheDangChon");
    });
  };

  render() {
    let classGhe = "";
    this.turnGreenSeat(this.props.bangTinhTien);

    return (
      <div>
        <h1 style={{ color: "white" }}>Đặt vé xem phim</h1>
        <h3 style={{ color: "yellow" }}>Màn hình</h3>
        <div className="screen"></div>
        <table className="table">
          {this.props.danhSachGhe.map((item, index) => {
            return (
              <tr>
                {/* duyet hang: cot dau tien la ten hang, className: firstChar */}
                <td className="firstChar">{item.hang}</td>
                {item.danhSachGhe.map((ghe, indexGhe) => {
                  // Duyet lan luot cac hang, hang dau tien la so thu tu ghe, classNam: rowNumber
                  // Cac hang tu thu 2 tro di la ghe, className: ghe
                  index === 0 ? (classGhe = "rowNumber") : (classGhe = "ghe");
                  if (ghe.daDat) classGhe = "gheDuocChon";
                  return (
                    <td>
                      <button
                        id={`${ghe.soGhe}`}
                        className={classGhe}
                        onClick={() => {
                          if (
                            !document
                              .getElementById(`${ghe.soGhe}`)
                              .classList.contains("gheDuocChon")
                          ) {
                            if (
                              !document
                                .getElementById(`${ghe.soGhe}`)
                                .classList.contains("gheDangChon")
                            ) {
                              this.props.pickSeat(ghe);
                            } else {
                              this.props.xoa(ghe);
                              document
                                .getElementById(`${ghe.soGhe}`)
                                .classList.remove("gheDangChon");
                            }
                          }
                        }}
                      >
                        {ghe.soGhe}
                      </button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pickSeat: (ghe) => {
      const action = {
        type: "PICK_SEAT",
        ghe,
      };
      dispatch(action);
    },
    xoa: (ghe) => {
      const action = {
        type: "XOAGHE",
        ghe,
      };
      console.log(action);
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.BookingReducer.danhSachGhe,
    bangTinhTien: state.BookingReducer.bangTinhTien,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Seat);
