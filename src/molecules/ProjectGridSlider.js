import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";
// import { orange } from "@/theme/colors";

export const ProjectGridSlider = ({
  customStyles,
  items,
  activeIndex,
  setActiveIndex,
}) => {
  const [settings, setSettings] = useState({
    autoPlay: true,
    animation: "slide",
    indicators: true,
    duration: 1000,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true,
  });

  return (
    <Box
      sx={{
        my: 5,
        color: "#494949",
        height: "100%",
        width: "100%",
        ...customStyles,
      }}
    >
      {activeIndex}

      <Carousel
        {...settings}
        // onChange={(now, previous) => {
        //   console.log("Now>>", now);
        //   setActiveIndex(now);
        //   console.log("Previous>>", previous);
        // }}
        sx={{
          height: "100px",
          border: "1px solid red",
          position: "relative",
        }}
        indicatorIconButtonProps={{
          style: {
            // padding: "10px", // 1
            backgroundColor: "#F0F0F2", // 3
            color: "#F0F0F2", // 3,
            margin: 5,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "red", // 2
            backgroundColor: "red", // 2
          },
        }}
        indicatorContainerProps={{
          style: {
            // marginTop: "50px", // 5
            // textAlign: "right", // 4
            // display: "none",
            position: "absolute",
            zIndex: "1000",
            bottom: 12,
          },
        }}
      >
        {items.map((item, index) => {
          return <ProjectSlide key={index}>{item.renderItem()}</ProjectSlide>; // each slide contains project cards (1, 2, 3, 4)
        })}
      </Carousel>
    </Box>
  );
};

function ProjectSlide({ item, children }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
      //   elevation={10}
    >
      {children}
    </Box>
  );
}

const items = [
  {
    name: "Lear Music Reader",
    description: "A PDF Reader specially designed for musicians.",
    color: "#64ACC8",
    href: "https://github.com/Learus/Lear-Music-Reader",
  },
  {
    name: "Hash Code 2019",
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
    href: "https://github.com/Learus/HashCode2019",
  },
  {
    name: "Terrio",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
    href: "https://play.google.com/store/apps/details?id=com.Brewery.Terrio",
  },
  {
    name: "React Carousel",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
    href: "https://github.com/Learus/react-material-ui-carousel",
  },
];
