import { Box, Tab, Tabs, Typography } from "@mui/material";
import { TabPanel } from "./TabPanel";

export const CommonTab = ({
  active,
  handleChange,
  tabItems,
  customStyles,
  customTabStyles,
  variant,
  isScrollButtons,
  customTabTypoStyles,
  renderCustomLabel,
}) => {
  return (
    <Box
      sx={{
        ...customStyles,
      }}
    >
      <Tabs
        value={active}
        onChange={handleChange}
        variant={variant || "scrollable"}
        scrollButtons={isScrollButtons || false}
        aria-label="visible arrows tabs example"
        TabIndicatorProps={{
          children: <span className="MuiTabs-indicatorSpan" />,
        }}
        sx={{
          //   [`& .${tabsClasses.scrollButtons}`]: {
          //     "&.Mui-disabled": { opacity: 0.5 },
          //   },
          //   // backgroundColor : "blue"
          //   ".MuiTabs-indicator": {
          //     display: "none",
          //   },
          // "& .MuiTab-root": {
          //   textTransform: "capitalize",
          //   color: "#ffffff",
          //   borderRadius: "10px",
          //   backgroundColor: neutral[4],
          //   color: neutral[10],
          //   mr: 6,
          // },
          //   "& .Mui-selected": {
          //     backgroundColor: "#ff9900",
          //     color: "#ffffff",
          //   },
          //   minHeight: "40px",
          ...customTabStyles,
        }}
      >
        {tabItems &&
          tabItems.length > 0 &&
          tabItems.map((tabItem, index) => (
            <Tab
              key={index}
              label={
                (renderCustomLabel && renderCustomLabel(tabItem, index)) || (
                  <Typography
                    variant="yoloText8SemiBold"
                    sx={{
                      color: index === active ? neutral[10] : neutral[7],
                      textTransform: "capitalize",
                      ...customTabTypoStyles,
                    }}
                  >
                    {tabItem.title}
                  </Typography>
                )
              }
            />
          ))}
      </Tabs>
      {tabItems &&
        tabItems.length > 0 &&
        tabItems.map((item, tabIndex) => (
          <TabPanel key={tabIndex} active={active} index={tabIndex}>
            {item && item.renderTabItem && item.renderTabItem()}
          </TabPanel>
        ))}
    </Box>
  );
};
