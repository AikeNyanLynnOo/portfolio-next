import { clsx } from "clsx";
import { useCallback, useState } from "react";
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
  }, [customBubbleDotClasses]);

  const [bubbles, setBubbles] = useState([]);

  const [intervalTime, setIntervalTime] = useState([1000]);

  useEffect(() => {
    let interval = setInterval(() => {
      setBubbles(
        Array.from(
          { length: Math.floor(Math.random() * 10) + 1 },
          () => Math.floor(Math.random() * 24), // bubble index
        ),
      );
      setIntervalTime(Math.floor(Math.random() * (10000 - 5000 + 1) + 5000));
    }, intervalTime);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearInterval(interval);
    };
  }, [intervalTime]);

  return (
    <div className={`wrapper overflow-hidden ${customClasses}`}>
      {[
        bubbles &&
          bubbles.map((index, idx) => (
            <div
              key={idx}
              className={getDotDivClass(index)}
              style={{
                animationDuration: Math.floor(Math.random() * (15 - 1 + 1) + 1),
              }}
            >
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
