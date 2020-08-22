import data from "../component/danhSachGhe.json";
const initialState = {
  danhSachGhe: data,
  bangTinhTien: [{ soGhe: "A1", gia: 75000, daDat: false }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PICK_SEAT":
      let updateState = { ...state };
      updateState.bangTinhTien.push(action.ghe);

      return { ...state, bangTinhTien: updateState.bangTinhTien };

    default:
      return state;
  }
};
