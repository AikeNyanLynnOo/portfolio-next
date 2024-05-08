import { clsx } from "clsx";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Chip } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";
import { putOffsetTop } from "../store/slices/generalSlice";
import { Bubbles } from "./Bubbles";

// framer motion
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 1000,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      delay: 0.05,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const fadeInWelcomeText = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
      delay: 0.05,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export const LandingSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);

  const ownRef = useRef(scrollRef);

  const dots = useMemo(() => {
    const randomArray = [];
    for (let i = 0; i < 7; i++) {
      randomArray.push(Math.floor(Math.random() * 25) + 1);
    }
    return randomArray;
  }, []);

  const landingSectionClasses = useMemo(() => {
    return clsx({
      "[&>*]:z-10": true,
      // "h-screen": true,
      "min-h-[calc(100vh-80px)]": true,
      // "mt-20" : true,
      "py-16": true,
      //   "bg-white": true,
      //   "dark:bg-ownBlack-200": true,
      flex: true,
      "flex-col": true,
      "justify-center": true,
      "items-center": true,
      ...customClasses,
    });
  }, [customClasses]);

  useEffect(() => {
    dispatch(
      putOffsetTop({
        property: "landingSectionOffsetTop",
        value: ownRef.current.offsetTop,
      }),
    );
  }, [dispatch]);

  return (
    <ResponsiveContainer scrollRef={ownRef}>
      <div className={landingSectionClasses}>
        <motion.div
          variants={fadeInWelcomeText}
          initial="initial"
          animate="animate"
          viewport={{
            once: true,
          }}
        >
          <Typography
            text={"Open to work"}
            customClasses={{
              "text-xl": true,
              "text-left": true,
              "w-full": true,
              "h-fit": true,
              "sm:text-center": true,
              "mb-5": true,
              border: true,
              "rounded-full": true,
              "backdrop-blur-sm": true,
              "bg-white/20": true,
              "dark:bg-ownBlack-200/20": true,
              flex: true,
              "items-center": true,
              "flex-row-reverse": true,
              "gap-x-3": true,
              "px-4": true,
              "py-2": true,
            }}
          >
            {/* <span className="inline-block rounded-full bg-green-500 h-3 w-3"></span> */}
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </Typography>
        </motion.div>

        <div className="block w-full items-center justify-between h-5/6 lg:flex">
          <FloatingLandingPanel />
          <LandingText />
          <motion.div
            className="dark:text-ownMint-100 bg-ownMint-100/20 shadow-2xl backdrop-blur-sm text-ownBlack-200 dark:bg-ownBlack-200/50 py-8 px-5 rounded-xl w-fit  hidden xl:flex"
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            viewport={{
              once: true,
            }}
          >
            <div className="flex items-center gap-x-1 mb">
              <Typography
                text={"4+"}
                customClasses={{
                  "text-ownBlack-200": true,
                  "w-3/12": true,
                  "mr-2": true,
                  "dark:text-ownMint-100": true,
                  "text-4xl": true,
                }}
                customStyles={
                  {
                    // fontFamily: '"Varela Round", sans-serif',
                  }
                }
              />
              <Typography
                text={"Years of Dev Exp"}
                customClasses={{
                  "text-ownBlack-100": true,
                  "dark:text-white": true,
                  "text-wrap": true,
                  // "text-right": true,
                  "w-fit": true,
                  "text-sm": true,
                }}
                customStyles={
                  {
                    // fontFamily: '"Varela Round", sans-serif',
                  }
                }
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Bubbles showIndices={dots} />
    </ResponsiveContainer>
  );
};
