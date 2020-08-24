import data from "../component/danhSachGhe.json";
const getLocale = JSON.parse(localStorage.getItem("dulieu"));
let ds = [];
console.log(getLocale);
if (getLocale !== null) {
  ds = getLocale;
} else {
  ds = data;
}
const initialState = {
  danhSachGhe: ds,
  bangTinhTien: [],
  tongTien: 0,
};

export default (state = initialState, action) => {
  console.log(state);
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

      state = { ...xoaState };
      return { ...state };
    case "XOAGHE":
      let xoaGheState = { ...state };
      xoaGheState.bangTinhTien.findIndex(
        (ghe) => ghe.soGhe === action.ghe.soGhe
      );
      xoaGheState.tongTien -= action.ghe.gia;
      xoaGheState.bangTinhTien.splice(action.index, 1);

      state = { ...xoaGheState };
      return { ...state };
    case "LUU_DU_LIEU":
      let luuState = { ...state };
      for (let item of luuState.danhSachGhe) {
        for (let ghe of item.danhSachGhe) {
          for (let gheMoiDat of luuState.bangTinhTien) {
            if (gheMoiDat.soGhe === ghe.soGhe) {
              ghe.daDat = true;
            }
          }
        }
      }
      luuState.bangTinhTien = [];
      luuState.tongTien = [];
      state = { ...luuState };
      localStorage.setItem("dulieu", JSON.stringify(state.danhSachGhe));
      return { ...state };
    default:
      return state;
  }
};
