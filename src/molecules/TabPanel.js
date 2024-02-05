import { Box } from "@mui/material";

export const TabPanel = (props) => {
  const { children, active, index, customStyles, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={active !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        // background : "blue"
        ...customStyles,
      }}
    >
      {active === index && <Box>{children}</Box>}
    </div>
  );
};
