import { useSelector } from "react-redux";

export const CustomLogo = ({ primaryText }) => {
  const { isLight } = useSelector((state) => state.theme);

  return (
    <div className={`${isLight ? "main" : "main main-dark"} `}>
      {primaryText}
      <span>.</span>
      <span className={`${isLight ? "role" : "role role-dark"} `}>
        front
        <br />
        end
      </span>
    </div>
  );
};
