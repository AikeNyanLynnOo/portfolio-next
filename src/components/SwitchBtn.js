import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchThemeRequest } from "../store/slices/themeSlice";
import { clsx } from "clsx";
import { darkIcon, lightIcon } from "../shared/svgs";
import useSound from "use-sound";

export const SwitchBtn = () => {
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);
  const [play] = useSound("/song_effects/glug.wav", 1.5);

  const switchRef = useRef(null);

  const toggleTheme = () => {
    // switchTheme();
    dispatch(
      switchThemeRequest({
        theme: isLight ? "dark" : "light",
      }),
    );
    play();
  };
  useEffect(() => {
    if (!isLight) {
      //   setTimeout(() => {
      switchRef.current.innerHTML = darkIcon;
      //   }, 0);
    } else {
      //   setTimeout(() => {
      switchRef.current.innerHTML = lightIcon;
      //   }, 0);
    }
  }, [isLight]);

  const btnClasses = useMemo(() => {
    return clsx(
      "flex",
      "h-6",
      "w-12",
      "items-center",
      "rounded-full",
      "bg-white",
      "transition",
      "duration-300",
      "focus:outline-none",
    );
  }, []);

  const divInsideBtnClasses = useMemo(() => {
    return clsx(
      "relative",
      "h-8",
      "w-8",
      "transform",
      "rounded-full",
      "p-1",
      "transition",
      "duration-500",
      [
        {
          "bg-ownMint-200": isLight,
        },
        { "bg-ownBlack-100": !isLight },
        {
          "translate-x-4": !isLight,
        },
        // {
        //   border: !isLight,
        // },
        // {
        //   "border-ownMint-100": !isLight,
        // },
        // {
        //   "border-ownBlack-100": isLight,
        // },
      ],
    );
  }, [isLight]);

  return (
    <button
      className={btnClasses}
      onClick={toggleTheme}
      style={{
        boxShadow:
          "inset rgba(0, 0, 0, 0.2) 0px 0px 4px 0px, rgba(0, 0, 0, .3) 0px 3px 1px -2px",
      }}
    >
      <div ref={switchRef} className={divInsideBtnClasses}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg> */}
      </div>
    </button>
  );
};
