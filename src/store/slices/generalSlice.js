import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNav: 0,
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
  },
});

export const { changeActiveNav } = generalSlice.actions;
export default generalSlice.reducer;
