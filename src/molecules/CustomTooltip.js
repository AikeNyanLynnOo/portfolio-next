import { Tooltip, styled, tooltipClasses } from "@mui/material";
import { useSelector } from "react-redux";
import { darkTheme } from "../Theme/styles";

export const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => {
    const {isLight} = useSelector(state=>state.theme);

  return {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: isLight ? "#FFFFFF" : "#1A1E23",
      color: "#292F35",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  };
});
