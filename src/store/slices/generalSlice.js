import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  activeNav: 0,
  isDrawerOpen: false,
  isScrolling: true,
  landingSectionOffsetTop: 0,
  aboutSectionOffsetTop: 0,
  skillSectionOffsetTop: 0,
  projectsSectionOffsetTop: 0,
  blogsSectionOffsetTop: 0,
  contactSectionOffsetTop: 0,
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
    putOffsetTop(state, action) {
      console.log("putting offset top request received>>", {
        ...state,
        [action.payload.property]: action.payload.value,
      });
      return {
        ...state,
        [action.payload.property]: action.payload.value,
      };
    },
    changeScrolling(state, action) {
      return {
        ...state,
        isScrolling: action.payload.isScrolling,
      };
    },
  },
});

export const {
  changeActiveNav,
  changeDrawerState,
  putOffsetTop,
  changeScrolling,
} = generalSlice.actions;
export default generalSlice.reducer;
