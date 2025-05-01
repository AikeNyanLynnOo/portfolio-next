import { MenuItem, Select } from "@mui/material";
import { LuChevronDown } from "react-icons/lu";
import Image from "next/image";
import { useMemo } from "react";
import { isObjectArray } from "../utils/helperFunctions";
import { useSelector } from "react-redux";

export const MuiSelect = ({
  value,
  label,
  handleChange,
  items,
  customStyles,
  size = "sm",
  startAdornment,
  hideAdornment = false,
}) => {
  const isObjectArr = useMemo(() => isObjectArray(items), [items]);

  const { isLight } = useSelector((state) => state.theme);
  console.log("Is light", isLight);

  return (
    <Select
      displayEmpty
      IconComponent={() => (
        <LuChevronDown
          size={25}
          style={{
            minWidth: "15px",
          }}
          className="text-ownGray-300 dark:text-ownGray-100"
        />
      )}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return (
            <span className={`text-${size} text-secondary-400`}>
              {label || ""}
            </span>
          );
        }
        if (isObjectArr) {
          return (
            <span className={`text-ownGray-300 dark:text-ownGray-100 text-${size}`}>
              {(selected && selected.name) || ""}
            </span>
          );
        }
        return (
          <span className={`text-secondary-600 text-${size}`}>
            {selected || ""}
          </span>
        );
      }}
      startAdornment={
        startAdornment ||
        (!hideAdornment && (
          <Image
            alt="icon"
            className="w-5 h-5 ml-1 -mt-0.5 object-contain absolute top-1/2 -translate-y-1/2 left-2"
            height={16}
            loading="lazy"
            src="/images/icons/clock.png"
            width={16}
          />
        )) || <></>
      }
      sx={{
        width: "100%",
        "&.MuiOutlinedInput-root": {
          borderRadius: 2,
          height: "60px",
          minHeight: 0,
          //   fontFamily: "var(--font-vnf)",
          fontSize: "15px",
        },
        "& .MuiSelect-outlined": {
          height: "60px",
          minHeight: 0,
          //   color: COLORS.secondary[400],
        },
        "&.MuiOutlinedInput-root svg": {
          mr: 1.6,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          height: "60px",
          borderColor: "#e5e7eb",
          pl: 3,
        },

        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#475467 !important",
          borderWidth: "1px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#a1a1aa",
        },

        "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
          {
            paddingTop: hideAdornment ? "37px" : "",
            paddingRight: 0,
            mt: "-3px",
          },
        ...customStyles,
      }}
      value={value}
      onChange={handleChange}
    >
      {items &&
        items.length > 0 &&
        items.map(
          (item, index) =>
            (isObjectArr && (
              <MenuItem
                key={index}
                sx={{
                  //   fontFamily: "var(--font-vnf)",
                  fontSize: "16px",
                }}
                value={item.value}
              >
                {item.name || ""}
              </MenuItem>
            )) || (
              <MenuItem
                key={index}
                sx={{
                  //   fontFamily: "var(--font-vnf)",
                  fontSize: "16px",
                }}
                value={item}
              >
                {item}
              </MenuItem>
            ),
        )}
    </Select>
  );
};
