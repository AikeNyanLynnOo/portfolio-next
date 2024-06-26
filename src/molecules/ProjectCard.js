import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Icon,
} from "@mui/material";
import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Typography } from "../atoms/Typography";
import { TextWithIcon } from "./TextWithIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CustomChip } from "./CustomChip";
import { CustomTooltip } from "./CustomTooltip";
import { Bubbles } from "../components/Bubbles";

// framer motion
import { motion } from "framer-motion";
import CustomIconButtonLink from "./CustomIconButtonLink";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

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
  handleClick,
  index,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const projectCardClasses = useMemo(() => {
    return clsx({
      "cursor-pointer": href || handleClick,
      "select-none": true,
      "text-ownBlack-200": true,
      "dark:text-white": true,
      flex: true,
      //  "flex-wrap" : true,
      "items-center": true,
      "my-2": true,
      "w-full": true,
      "rounded-xl": true,
      "shadow-xl": true,
      ...customClasses,
    });
  }, [customClasses, href, handleClick]);

  return (
    <motion.div
      className={projectCardClasses}
      style={{
        // fontFamily: '"Varela Round", sans-serif',
      }}
      onClick={handleClick}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        ease: "linear",
        delay: 0.1 * index,
        type: "spring",
        stiffness: 400,
      }}
      viewport={{
        once: true,
      }}
    >
      <Card
        sx={{
          width: "100%",
          boxShadow: 0,
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
              "text-ownBlack-200": true,
              "dark:text-white": true,
              "overflow-hidden": true,
              truncate: true,
            }}
          />

          <CustomTooltip
            arrow
            title={
              <div>
                <Typography
                  text={introText || ""}
                  customClasses={{
                    "mb-2": true,
                    "text-sm": true,
                    "text-ownBlack-100": true,
                    "dark:text-ownMint-200": false,
                    "dark:text-ownBlack-100": true,
                    "text-justify": true,
                    "leading-6": true,
                  }}
                  customStyles={{
                    // fontFamily: '"Varela Round", sans-serif',
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
                  "leading-6": true,
                }}
              />
            </div>
          </CustomTooltip>

          <div className="mt-5 flex flex-wrap min-h-12">
            {techs &&
              techs.length > 0 &&
              techs.map((tech, idx) => (
                <span key={idx}>
                  <CustomChip
                    label={tech}
                    customStyles={{
                      fontSize: "12px",
                    }}
                    customClasses={{
                      "py-1": true,
                      "px-2": true,
                      "my-1": true,
                      "inline-block": true,
                      "border-ownMint-100": false,
                      "border-gray-200": true,
                    }}
                  />
                </span>
              ))}
          </div>
        </CardContent>
        <CardActions className="px-3 bg-white dark:bg-ownBlack-100 flex justify-between items-center">
          <TextWithIcon href={liveLink}>
            <Icon
              sx={{
                // transform: (liveLink && "rotate(135deg)") || "",
                transform: "rotate(135deg)",
              }}
              style={{
                fontSize: "15px",
              }}
            >
              {/* {(liveLink && "link") || "lock"} */}
              link
            </Icon>
            <Typography
              text={(liveLink && "Live Preview") || "Private"}
              customClasses={{
                "text-ownBlack-200": true,
                "dark:text-white": true,
                "text-sm": true,
                "font-medium": true,
                "text-center": true,
                "ml-1": true,
              }}
              customStyles={{
                // fontFamily: '"Varela Round", sans-serif',
              }}
            />
          </TextWithIcon>

          <TextWithIcon href={githubLink}>
            <GitHubIcon
              style={{
                fontSize: "15px",
              }}
            />
            <Typography
              text={(githubLink && "View Code") || "Private"}
              customClasses={{
                "text-ownBlack-200": true,
                "dark:text-white": true,
                "text-sm": true,
                "font-medium": true,
                "text-center": true,
                "ml-1": true,
              }}
              customStyles={{
                // fontFamily: '"Varela Round", sans-serif',
              }}
            />
          </TextWithIcon>
        </CardActions>
      </Card>
      {children}
    </motion.div>
  );
};
