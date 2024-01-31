import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Icon, Stack } from "@mui/material";

export const FloatingNav = ({ children, customClasses, customStyles }) => {
  const { isLight } = useSelector((state) => state.theme);
  const floatingNavClasses = useMemo(() => {
    return clsx({
      ...customClasses,
    });
  }, [customClasses]);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
      className={floatingNavClasses}
      sx={{
        ...customStyles,
      }}
    >
      {[
        {
          icon: "home_max",
        },
        {
          icon: "perm_identity",
        },
        {
          icon: "code",
        },
        {
          icon: "dvr",
        },
        {
          icon: "edit_note",
        },
        {
          icon: "home_max",
        },
      ]}
    </Stack>
  );
};
