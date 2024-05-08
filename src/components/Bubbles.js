import { clsx } from "clsx";
import { useCallback, useState } from "react";
import { useMemo } from "react";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

const shapes = [
  "triangle",
  "octagon",
  "nonagon",
  "rabbet",
  "frame",
  "pentagon",
  "hexagon",
  "star",
  "message",
];

const Bubble = ({ index, customBubbleDotClasses }) => {
  const dotClasses = useMemo(() => {
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
      [`${shapes[Math.floor(Math.random() * 9) + 1]}`]: true,
      ...customBubbleDotClasses,
    });
  }, [customBubbleDotClasses, index]);
  const bubbleDotClasses = useMemo(() => {
    return clsx({
      dot: true, // custom class
      //   "bg-ownMint-200": true,
      //   "dark:bg-ownMint-200": true,
      "from-teal-300": true,
      "dark:from-teal-200": true,
      "to-cyan-500": true,
      "dark:to-cyan-500": true,
      ...customBubbleDotClasses,
    });
  }, [customBubbleDotClasses]);

  return (
    <div
      className={dotClasses}
      style={{
        animationDuration: Math.floor(Math.random() * (15 - 1 + 1) + 1),
      }}
    >
      <span className={bubbleDotClasses}></span>
    </div>
  );
};

export const Bubbles = ({
  showIndices,
  customBubbleDotClasses,
  customClasses,
}) => {
  const { isLight } = useSelector((state) => state.theme);

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
            <Bubble
              idx={idx}
              index={index}
              key={idx}
              customBubbleDotClasses={customBubbleDotClasses}
            />
          )),
      ]}
      {/* <div className="bubble x1"></div> */}
      {/* <div className="bubble x1"></div>
      <div className="bubble x2"></div>
      <div className="bubble x3"></div>
      <div className="bubble x4"></div>
      <div className="bubble x5"></div>
      <div className="bubble x6"></div>
      <div className="bubble x7"></div>
      <div className="bubble x8"></div>
      <div className="bubble x9"></div>
      <div className="bubble x10"></div> */}

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
