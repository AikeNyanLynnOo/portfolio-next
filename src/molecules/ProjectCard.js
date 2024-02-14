import { Card, CardActions, CardContent, CardMedia, Chip } from "@mui/material";
import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Typography } from "../atoms/Typography";

export const ProjectCard = ({
  children,
  title,
  introText,
  liveLink,
  githubLink,
  techs,
  isNew,
  projectMedia,
  customClasses,
  customStyles,
  href,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const projectCardClasses = useMemo(() => {
    return clsx({
      "cursor-pointer": href,
      "hover:underline": href,
      "select-none": true,
      "text-ownBlack-200": true,
      "dark:text-white": true,
      flex: true,
      //  "flex-wrap" : true,
      "items-center": true,
      "my-2": true,
      ...customClasses,
    });
  }, [customClasses, href]);
  return (
    <div>
      <Card sx={{ maxWidth: 345, background: "blue", border : "1px solid red" }}>
        <CardMedia
          sx={{
            height: 300,
            width: "100%",
            position: "relative",
            objectFit: "cover",
          }}
          image={projectMedia}
          title="Project Card Media"
        >
          {isNew && (
            <Chip
              label="New"
              sx={{
                position: "absolute",
                top: "20px",
                // top: "20px",
                right: "20px",
              }}
            />
          )}
        </CardMedia>
        <CardContent>
          <Typography>{title || ""}</Typography>
          <Typography>{introText || ""}</Typography>
        </CardContent>
        <CardActions>Actions</CardActions>
      </Card>
      {children}
    </div>
  );
};
