import { Tooltip, styled, tooltipClasses } from "@mui/material";
import { useSelector } from "react-redux";
import { darkTheme } from "../Theme/styles";

export const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => {
  const { isLight } = useSelector((state) => state.theme);

  return {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: isLight ? "#15F6D6" : "#98FAEC",
      // boxShadow: theme.shadows[1],
      padding: 16,
      fontSize: 12,
      borderRadius : "10px"
    },
    "& .MuiTooltip-arrow": {
      color: isLight ? "#15F6D6" : "#98FAEC",
    },
  };
});
