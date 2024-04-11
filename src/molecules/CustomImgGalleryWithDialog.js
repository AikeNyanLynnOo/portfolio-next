import { Dialog } from "@mui/material";
import ImageGallery from "react-image-gallery";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const CustomImgGalleryWithDialog = ({
  projectImages,
  isModalOpen,
  handleClose,
}) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
      sx={{
        zIndex: 100,
        height: "auto",
      }}
      TransitionProps={{
        style: {
          transitionDelay: 500,
        },
      }}
    >
      <ImageGallery
        items={
          projectImages &&
          projectImages.length > 0 &&
          projectImages.map((img, idx) => ({
            original: img.src,
            thumbnail: img.src,
            loading: "eager",
            description: img.title,
          }))
        }
        slideInterval={4000}
        showIndex
        // showBullets
        autoPlay
        renderLeftNav={(onClick, disabled) => (
          <KeyboardArrowLeftIcon
            onClick={onClick}
            disabled={disabled}
            sx={{
              position: "absolute",
              zIndex: 10,
              left: 10,
              top: "50%",
              height: "50px",
              width: "50px",
              color: "#ffffff",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: "50%",
              transform: "translateY(-50%)",
            }}
          />
        )}
        renderRightNav={(onClick, disabled) => (
          <KeyboardArrowRightIcon
            onClick={onClick}
            disabled={disabled}
            sx={{
              position: "absolute",
              zIndex: 10,
              right: 10,
              top: "50%",
              height: "50px",
              width: "50px",
              color: "#ffffff",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: "50%",
              transform: "translateY(-50%)",
            }}
          />
        )}
      />
    </Dialog>
  );
};
