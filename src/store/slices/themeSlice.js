import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLight: false,
  // textColor: {
  //   10: "#98FAEC", // mint
  //   20: "#15F6D6", // dark mint
  // },
  // borderColor: {
  //   10: "#0B73B8", // high dark mint
  // },
  // backgroundColor: {
  //   10: "#292F35", // black
  //   20: "#1A1E23", // dark black
  //   30: "#E54F26", // orange
  //   40: "#292F35", // blue
  //   50: "#E7A021", // karki
  //   60: "#28A9E0", // pale blue
  // },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchThemeRequest(state, action) {
      console.log("change theme request received");
      return {
        ...state,
        isLight: action.payload.theme === "light" ? true : false,
        // textColor: {
        //   10: action.payload.theme === "light" ? "#98FAEC" : "blue",
        //   20: "#15F6D6",
        // },
        // borderColor: {
        //   10: "#0B73B8",
        // },
        // backgroundColor: {
        //   10: action.payload.theme === "light" ? "red" : "#292F35", // black
        //   20: "#1A1E23", // dark black
        //   30: "#E54F26", // orange
        //   40: "#292F35", // blue
        //   50: "#E7A021", // karki
        //   60: "#28A9E0", // pale blue
        // },
      };
    },
  },
});

export const { switchThemeRequest } = themeSlice.actions;
export default themeSlice.reducer;
