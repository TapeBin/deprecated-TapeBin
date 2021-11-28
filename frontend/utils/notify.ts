import { toast, ToastOptions } from "react-toastify";

const NOTIFY_OPTIONS: ToastOptions = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export const notifySuccessfulBinCreation = () => toast.success("Successfully saved and copied to clipboard", NOTIFY_OPTIONS);

export const notifyMoreThanTenBins = () => toast.warn("You can't have more than 10 bins!", NOTIFY_OPTIONS);

export const notifyMoreThanXCharacters = () => toast.error("You can't have more than 100.000 characters in total!", NOTIFY_OPTIONS);

export const notifyFormattingError = () => toast.error("Something went wrong with formatting", NOTIFY_OPTIONS)
