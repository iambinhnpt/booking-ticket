import data from "../component/danhSachGhe.json";
const initialState = {
  danhSachGhe: data,
  bangTinhTien: [],
  tongTien: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PICK_SEAT":
      let updateArray = [];
      let updateState = { ...state };
      updateState.tongTien += action.ghe.gia;
      updateArray.push(action.ghe);
      updateState.bangTinhTien = updateState.bangTinhTien.concat(updateArray);
      state = { ...updateState };
      return { ...state };
    case "XOA":
      let xoaState = { ...state };
      xoaState.tongTien -= action.ghe.gia;
      xoaState.bangTinhTien.splice(action.index, 1);
      console.log(xoaState.bangTinhTien);
      state = { ...xoaState };
      return { ...state };
    case "XOAGHE":
      let xoaGheState = { ...state };
      xoaGheState.bangTinhTien.findIndex(
        (ghe) => ghe.soGhe === action.ghe.soGhe
      );
      xoaGheState.tongTien -= action.ghe.gia;
      xoaGheState.bangTinhTien.splice(action.index, 1);
      console.log(xoaGheState.bangTinhTien);
      state = { ...xoaGheState };
      return { ...state };
    default:
      return state;
  }
};
