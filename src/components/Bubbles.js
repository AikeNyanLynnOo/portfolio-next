import { clsx } from "clsx";
import { useCallback } from "react";
import { useMemo } from "react";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

export const Bubbles = ({
  showIndices,
  customBubbleDotClasses,
  customClasses,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const bubbleDotClasses = useMemo(() => {
    return clsx({
      dot: true, // custom class
      //   "bg-ownMint-200": true,
      //   "dark:bg-ownMint-200": true,
      "from-teal-300": true,
      "dark:from-teal-200": true,
      "to-cyan-500": true,
      "dark:to-cyan-500": true,
    //   "via-purple-500" : true,
      ...customBubbleDotClasses,
    });
  }, [customBubbleDotClasses]);
  const getDotDivClass = useCallback((index) => {
    return clsx({
      [`dotdiv-${index}`]: true,
      "bg-gradient-to-l": true,
      //   "bg-ownMint-200": true,
      //   "dark:bg-ownMint-200": true,
      "from-teal-300": true,
      "dark:from-teal-200": true,
      "to-cyan-500": true,
      "dark:to-cyan-500": true,
    //   "via-pink-200" : true,
      ...customBubbleDotClasses,
    });
  }, []);
  return (
    <div className={`wrapper overflow-hidden ${customClasses}`}>
      {[
        showIndices &&
          showIndices.map((index, idx) => (
            <div key={idx} className={getDotDivClass(index)}>
              <span className={bubbleDotClasses}></span>
            </div>
          )),
      ]}
      {/* <div class="bubble x1"></div> */}
      {/* <div class="bubble x1"></div>
      <div class="bubble x2"></div>
      <div class="bubble x3"></div>
      <div class="bubble x4"></div>
      <div class="bubble x5"></div>
      <div class="bubble x6"></div>
      <div class="bubble x7"></div>
      <div class="bubble x8"></div>
      <div class="bubble x9"></div>
      <div class="bubble x10"></div> */}

      {/* <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div>
      <div>
        <span className={bubbleDotClasses}></span>
      </div> */}
    </div>
  );
};
