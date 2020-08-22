import React, { Component } from "react";
import { connect } from "react-redux";
class Seat extends Component {
  render() {
    let classGhe = "";
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
                  return (
                    <td>
                      <button
                        id={`${ghe.soGhe}`}
                        className={classGhe}
                        onClick={() => {
                          this.props.pickSeat(ghe);

                          document
                            .getElementById(`${ghe.soGhe}`)
                            .classList.toggle("gheDangChon");
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
  };
};
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.BookingReducer.danhSachGhe,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Seat);
