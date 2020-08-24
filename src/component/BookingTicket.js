import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import Seat from "./Seat";
import Booking from "./Booking";
import { connect } from "react-redux";

class BookingTicket extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <Seat />
          </div>
          <div className="col-4">
            <Booking dsGhe={this.props.dsGhe} tongTien={this.props.tongTien} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dsGhe: state.BookingReducer.bangTinhTien || [],
    tongTien: state.BookingReducer.tongTien,
  };
};
export default connect(mapStateToProps)(BookingTicket);
