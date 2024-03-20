import { useSelector } from "react-redux";

export const CircleIcon = ({ isExpHovered, circleSize }) => {
  const { isLight } = useSelector((state) => state.theme);
  return (
    <span
      //   style={{
      //     animation: isExpHovered
      //       ? "circle-scale 400ms ease-in-out infinite alternate"
      //       : "none",
      //   }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={circleSize || "25"}
        height={circleSize || "25"}
        viewBox="0 0 24 24"
        fill="none"
        stroke={isLight ? "#292F35" : "#98FAEC"}
        strokeWidth="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-circle"
        style={{
          animation: isExpHovered
            ? "circle-scale 400ms ease-in-out infinite alternate"
            : "none",
        }}
      >
        <circle cx="12" cy="12" r="6"></circle>
      </svg>
    </span>
  );
};
