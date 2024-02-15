import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Icon,
  Tooltip,
} from "@mui/material";
import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Typography } from "../atoms/Typography";
import { TextWithIcon } from "./TextWithIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Fragment } from "react";
import { CustomChip } from "./CustomChip";
import { CustomTooltip } from "./CustomTooltip";

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
    <div
      className="w-ful rounded-xl"
      style={{
        fontFamily: '"Varela Round", sans-serif',
      }}
    >
      <Card
        sx={{
          // "&.MuiCard-root": {
          //   background: "pink",
          //   border : "2px solid red"
          // },
          width: "100%",
        }}
        className="rounded-xl"
      >
        <CardMedia
          sx={{
            height: 200,
            width: "100%",
            position: "relative",
            objectFit: "contain",
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
        <CardContent className="bg-white dark:bg-ownBlack-100">
          <Typography
            text={title || ""}
            customClasses={{
              "mb-2": true,
              "text-ownBlack-100": true,
              "dark:text-white": true,
              "overflow-hidden": true,
              truncate: true,
            }}
          />

          <CustomTooltip
            title={
              <div>
                <Typography
                  text={introText || ""}
                  customClasses={{
                    "mb-2": true,
                    "text-sm": true,
                    "text-ownBlack-100": true,
                    "dark:text-white": true,
                    "p-3": true,
                    "text-justify": true,
                  }}
                  customStyles={{
                    fontFamily: '"Varela Round", sans-serif',
                  }}
                />
              </div>
            }
            placement="top"
          >
            <div>
              <Typography
                text={introText || ""}
                customClasses={{
                  "mb-2": true,
                  "text-sm": true,
                  "text-ownBlack-100": true,
                  "dark:text-white": true,
                  "overflow-scroll": true,
                  "min-h-10": true,
                  "max-h-16": true,
                  "line-clamp-3": true,
                  "text-justify": true,
                }}
              />
            </div>
          </CustomTooltip>

          <div className="mt-5 flex flex-wrap min-h-12">
            {techs &&
              techs.length > 0 &&
              techs.map((tech, idx) => (
                <span key={idx}>
                  <CustomChip label={tech} />
                </span>
              ))}
          </div>
        </CardContent>
        <CardActions className="px-3 bg-white dark:bg-ownBlack-100 flex justify-between items-center">
          <TextWithIcon href={liveLink || "/"}>
            <Icon
              sx={{
                transform: "rotate(135deg)",
              }}
              style={{
                fontSize: "15px",
              }}
            >
              link
            </Icon>
            <Typography
              text="Live Preview"
              customClasses={{
                "text-ownBlack-200": true,
                "dark:text-white": true,
                "text-sm": true,
                "text-center": true,
                "ml-1": true,
              }}
              customStyles={{
                fontFamily: '"Varela Round", sans-serif',
              }}
            />
          </TextWithIcon>
          <TextWithIcon href={githubLink || "/"}>
            <GitHubIcon
              style={{
                fontSize: "15px",
              }}
            />
            <Typography
              text="View Code"
              customClasses={{
                "text-ownBlack-200": true,
                "dark:text-white": true,
                "text-sm": true,
                "text-center": true,
                "ml-1": true,
              }}
              customStyles={{
                fontFamily: '"Varela Round", sans-serif',
              }}
            />
          </TextWithIcon>
        </CardActions>
      </Card>
      {children}
    </div>
  );
};
