import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const CodeText = ({
  children,
  text,
  codeTag,
  handleClick,
  customClasses,
  customStyles,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const textClasses = useMemo(() => {
    return clsx({   
      "select-none": true,
      "text-ownBlack-200": true,
      "dark:text-white": true,
      ...customClasses,
    });
  }, [customClasses]);

  return (
    <div
      className={textClasses}
      onClick={handleClick}
      style={{
        ...customStyles,
      }}
    >
      <code
        style={{
          fontFamily: '"Source Code Pro", monospace',
        }}
      >
        {codeTag.start}
      </code>
      {text}
      {children}
      <code
        style={{
          fontFamily: '"Source Code Pro", monospace',
        }}
      >
        {codeTag.end}
      </code>
    </div>
  );
};
