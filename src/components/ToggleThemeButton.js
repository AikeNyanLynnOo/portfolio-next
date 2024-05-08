import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import { switchThemeRequest } from "../store/slices/themeSlice";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Example = () => {
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);
  const [play] = useSound("/song_effects/glug.wav", 1.5);
  const toggleTheme = (theme) => {
    dispatch(
      switchThemeRequest({
        // theme: isLight ? "dark" : "light",
        theme,
      }),
    );
    play();
  };

  return (
    <div className={`grid h-full place-content-center px-4 transition-colors `}>
      <SliderToggle isLight={isLight} toggleTheme={toggleTheme} />
    </div>
  );
};

const SliderToggle = ({ isLight, toggleTheme }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          isLight ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          toggleTheme("light");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          !isLight ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          toggleTheme("dark");
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          !isLight ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-ownMint-200 to-ownMint-400"
        />
      </div>
    </div>
  );
};

export default Example;
