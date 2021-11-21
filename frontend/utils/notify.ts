import { toast } from "react-toastify";

export const notifySuccessfulBinCreation = () => toast.success("Successfully saved and copied to clipboard", {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
});

export const notifyMoreThanTenBins = () => toast.warn("You can't have more than 10 bins!", {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
});

export const notifyMoreThanXCharacters = () => toast.error("You can't have more than 100.000 characters in total!", {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
});

