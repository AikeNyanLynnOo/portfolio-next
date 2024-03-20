import Image from "next/image";

import { DialogContent, DialogTitle } from "@mui/material";
import { useSelector } from "react-redux";
export const ProjectCaroItem = ({ img, customClasses, customStyles }) => {
  const { isLight } = useSelector((state) => state.theme);
  return (
    <div className="w-full h-full">
      <DialogTitle id="alert-dialog-title">{img && img.title}</DialogTitle>
      <DialogContent>
        <Image
          className="h-full"
          height={1000}
          width={1000}
          style={{
            width: "100%",
            height: "100%",
          }}
          src={img.src}
          alt="prj_img"
        />
      </DialogContent>
    </div>
  );
};
