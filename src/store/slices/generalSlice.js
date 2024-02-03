import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  activeNav: 0,
  isDrawerOpen: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    changeActiveNav(state, action) {
      console.log("change active nav request received");
      return {
        ...state,
        activeNav: action.payload,
      };
    },
    changeDrawerState(state, action) {
      //  const { isDrawerOpen } = current(state);
      console.log(
        "change drawer state request received>>",
        current(state).isDrawerOpen,
      );
      return {
        ...state,
        isDrawerOpen: !current(state).isDrawerOpen,
      };
    },
  },
});

export const { changeActiveNav, changeDrawerState } = generalSlice.actions;
export default generalSlice.reducer;
