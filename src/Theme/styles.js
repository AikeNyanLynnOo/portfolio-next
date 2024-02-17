export const lightTheme = {
  textColor: {
    100: "#292F35", // mint
    200: "#15F6D6", // dark mint
    300: "#0B73B8", // high dark mint
    400: "#33BBC5", // dark dark mint
  },
  borderColor: {
    100: "#33BBC5",
  },
  backgroundColor: {
    100: "#FFFFFF", // white
    200: "#15F6D6", // dark mint
    300: "#E54F26", // orange
    400: "#0B73B8", // blue
    500: "#E7A021", // karki
    600: "#28A9E0", // pale blue
  },
};
export const darkTheme = {
  textColor: {
    100: "#98FAEC", // mint
    200: "#15F6D6", // dark mint
    300: "#0B73B8", // high dark mint
    400: "#33BBC5", // dark dark mint
    500: "#FFFFFF",
    600: "#C3B5FD", // tw violet 300 
  },
  borderColor: {
    100: "#15F6D6",
  },
  backgroundColor: {
    100: "#292F35", // black
    200: "#1A1E23", // dark black
    300: "#E54F26", // orange
    400: "#0B73B8", // blue
    500: "#E7A021", // karki
    600: "#28A9E0", // pale blue
  },
};

export const getFlPanelIconStyles = (isLight) => ({
  color: isLight ? lightTheme.textColor[100] : darkTheme.textColor[100],
  height: 16,
  width: 16,
  mr: 1,
});
